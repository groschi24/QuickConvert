import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { CategoryConfig } from "@/types/units";

interface ConversionHistoryEntry {
  id: string;
  from: string;
  to: string;
  value: string;
  result: string;
  category: string;
  timestamp: number;
}

export function useUnitConverter(
  config: CategoryConfig,
  category: string,
  initialFromUnit?: string,
  initialToUnit?: string,
) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultValue = searchParams.get("value") ?? "1";
  const defaultFromUnit = initialFromUnit ?? config.defaultFrom;
  const defaultToUnit = initialToUnit ?? config.defaultTo;

  const [fromValue, setFromValue] = useState(defaultValue);
  const [fromUnit, setFromUnit] = useState(defaultFromUnit);
  const [toUnit, setToUnit] = useState(defaultToUnit);
  const [isUserInteraction, setIsUserInteraction] = useState(false);
  const [result, setResult] = useState(
    `${defaultValue} ${config.units.find((u) => u.value === defaultFromUnit)?.label ?? defaultFromUnit} = ${config.convertFn(parseFloat(defaultValue), defaultFromUnit, defaultToUnit).toFixed(4)} ${config.units.find((u) => u.value === defaultToUnit)?.label ?? defaultToUnit}`,
  );
  const [convertedValue, setConvertedValue] = useState<number | null>(
    config.convertFn(parseFloat(defaultValue), defaultFromUnit, defaultToUnit),
  );
  const [conversionHistory, setConversionHistory] = useState<
    ConversionHistoryEntry[]
  >([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("conversionHistory");
    if (savedHistory) {
      setConversionHistory(
        JSON.parse(savedHistory) as ConversionHistoryEntry[],
      );
    }
  }, []);

  // Removed the automatic history update effect that was triggered by URL changes

  useEffect(() => {
    if (
      !searchParams.has("value") &&
      !searchParams.has("from") &&
      !searchParams.has("to")
    ) {
      const params = new URLSearchParams();
      params.set("value", defaultValue);
      params.set("from", defaultFromUnit);
      params.set("to", defaultToUnit);
      router.push(
        `/${category}/${defaultFromUnit}/${defaultToUnit}?${params.toString()}`,
        { scroll: false },
      );
    }
  }, [
    category,
    defaultValue,
    defaultFromUnit,
    defaultToUnit,
    router,
    searchParams,
  ]);

  useEffect(() => {
    const value = searchParams.get("value") ?? defaultValue;
    const from = searchParams.get("from") ?? defaultFromUnit;
    const to = searchParams.get("to") ?? defaultToUnit;

    setFromValue(value);
    setFromUnit(from);
    setToUnit(to);

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = config.convertFn(numValue, from, to);
      setConvertedValue(converted);
      const fromUnitLabel =
        config.units.find((u) => u.value === from)?.label ?? from;
      const toUnitLabel = config.units.find((u) => u.value === to)?.label ?? to;
      const resultText = `${numValue} ${fromUnitLabel} = ${converted.toFixed(4)} ${toUnitLabel}`;
      setResult(resultText);
    }
  }, [searchParams, defaultValue, defaultFromUnit, defaultToUnit, config]);

  useEffect(() => {
    if (
      !result ||
      !fromValue ||
      !isUserInteraction ||
      isNaN(parseFloat(fromValue))
    )
      return;

    const timer = setTimeout(() => {
      // Check if this exact conversion is already at the top of history
      const isDuplicate =
        conversionHistory.length > 0 &&
        conversionHistory[0] !== undefined &&
        conversionHistory[0].value === fromValue &&
        conversionHistory[0].from === fromUnit &&
        conversionHistory[0].to === toUnit;

      if (!isDuplicate) {
        saveToHistory(fromValue, fromUnit, toUnit, result);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    result,
    fromValue,
    fromUnit,
    toUnit,
    conversionHistory,
    isUserInteraction,
  ]);

  const handleValueChange = (value: string) => {
    setIsUserInteraction(true);
    setFromValue(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const converted = config.convertFn(numValue, fromUnit, toUnit);
      setConvertedValue(converted);
      const fromUnitLabel =
        config.units.find((u) => u.value === fromUnit)?.label ?? fromUnit;
      const toUnitLabel =
        config.units.find((u) => u.value === toUnit)?.label ?? toUnit;
      const resultText = `${numValue} ${fromUnitLabel} = ${converted.toFixed(4)} ${toUnitLabel}`;
      setResult(resultText);

      const params = new URLSearchParams();
      params.set("value", value);
      router.push(`/${category}/${fromUnit}/${toUnit}?${params.toString()}`, {
        scroll: false,
      });
    } else {
      setConvertedValue(null);
      setResult("");
    }
  };

  const handleUnitChange = (newFromUnit: string, newToUnit: string) => {
    setIsUserInteraction(true);
    setFromUnit(newFromUnit);
    setToUnit(newToUnit);
    if (fromValue) {
      const numValue = parseFloat(fromValue);
      if (!isNaN(numValue)) {
        const converted = config.convertFn(numValue, newFromUnit, newToUnit);
        setConvertedValue(converted);
        const fromUnitLabel =
          config.units.find((u) => u.value === newFromUnit)?.label ??
          newFromUnit;
        const toUnitLabel =
          config.units.find((u) => u.value === newToUnit)?.label ?? newToUnit;
        setResult(
          `${numValue} ${fromUnitLabel} = ${converted.toFixed(4)} ${toUnitLabel}`,
        );

        const params = new URLSearchParams();
        params.set("value", fromValue);
        router.push(
          `/${category}/${newFromUnit}/${newToUnit}?${params.toString()}`,
          { scroll: false },
        );
      }
    }
  };

  const saveToHistory = (
    value: string,
    fromUnit: string,
    toUnit: string,
    result: string,
  ) => {
    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      from: fromUnit,
      to: toUnit,
      value,
      result,
      category,
      timestamp: Date.now(),
    };

    const updatedHistory = [newEntry, ...conversionHistory].slice(0, 10);
    setConversionHistory(updatedHistory);
    localStorage.setItem("conversionHistory", JSON.stringify(updatedHistory));
  };

  const removeFromHistory = (id: string) => {
    const updatedHistory = conversionHistory.filter((entry) => entry.id !== id);
    setConversionHistory(updatedHistory);
    localStorage.setItem("conversionHistory", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setConversionHistory([]);
    localStorage.removeItem("conversionHistory");
  };

  return {
    fromValue,
    fromUnit,
    toUnit,
    result,
    convertedValue,
    conversionHistory,
    handleValueChange,
    handleUnitChange,
    removeFromHistory,
    clearHistory,
    config,
  };
}
