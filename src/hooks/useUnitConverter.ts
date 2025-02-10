"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { convertWithFormula } from "@/utils/dynamicConverter";
import type { UnitCategory } from "@/types/categoryTypes";

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
  category: UnitCategory,
  initialFromUnit?: string,
  initialToUnit?: string,
  units: { value: string; label: string }[] = [],
) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultValue = searchParams.get("value") ?? "1";
  const defaultFromUnit = initialFromUnit ?? "";
  const defaultToUnit = initialToUnit ?? "";

  const [fromValue, setFromValue] = useState(defaultValue);
  const [toValue, setToValue] = useState("");
  const [fromUnit, setFromUnit] = useState(defaultFromUnit);
  const [toUnit, setToUnit] = useState(defaultToUnit);
  const [isUserInteraction, setIsUserInteraction] = useState(false);

  const [result, setResult] = useState("");
  const [conversionHistory, setConversionHistory] = useState<
    ConversionHistoryEntry[]
  >([]);

  useEffect(() => {
    const initializeConversion = async () => {
      try {
        const converted = await convertWithFormula(
          parseFloat(defaultValue),
          defaultFromUnit,
          defaultToUnit,
          category,
        );
        if (!isNaN(converted)) {
          setToValue(converted.toFixed(4));
          const fromUnitLabel =
            units.find((u) => u.value === defaultFromUnit)?.label ??
            defaultFromUnit;
          const toUnitLabel =
            units.find((u) => u.value === defaultToUnit)?.label ??
            defaultToUnit;
          setResult(
            `${defaultValue} ${fromUnitLabel} = ${converted.toFixed(4)} ${toUnitLabel}`,
          );
        }
      } catch (error) {
        console.error("Error in initial conversion:", error);
        setToValue("");
        setResult("");
      }
    };
    void initializeConversion();
  }, [defaultValue, defaultFromUnit, defaultToUnit, category, units]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("conversionHistory");
    if (savedHistory) {
      setConversionHistory(
        JSON.parse(savedHistory) as ConversionHistoryEntry[],
      );
    }
  }, []);

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

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    setIsUserInteraction(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("value", value);
    router.push(`/${category}/${fromUnit}/${toUnit}?${params.toString()}`, {
      scroll: false,
    });
  };

  const handleToValueChange = (value: string) => {
    setToValue(value);
    setIsUserInteraction(true);
  };

  const handleUnitChange = (newFromUnit: string, newToUnit: string) => {
    setFromUnit(newFromUnit);
    setToUnit(newToUnit);
    setIsUserInteraction(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("from", newFromUnit);
    params.set("to", newToUnit);
    router.push(
      `/${category}/${newFromUnit}/${newToUnit}?${params.toString()}`,
      {
        scroll: false,
      },
    );
  };

  useEffect(() => {
    const updateFromSearchParams = async () => {
      const value = searchParams.get("value") ?? defaultValue;
      const from = searchParams.get("from") ?? defaultFromUnit;
      const to = searchParams.get("to") ?? defaultToUnit;

      setFromValue(value);
      setFromUnit(from);
      setToUnit(to);

      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        try {
          const converted = await convertWithFormula(
            numValue,
            from,
            to,
            category,
          );
          if (!isNaN(converted)) {
            setToValue(converted.toFixed(4));
            const fromUnitLabel =
              units.find((u) => u.value === from)?.label ?? from;
            const toUnitLabel = units.find((u) => u.value === to)?.label ?? to;
            const resultText = `${numValue} ${fromUnitLabel} = ${converted.toFixed(4)} ${toUnitLabel}`;
            setResult(resultText);

            if (isUserInteraction) {
              saveToHistory(value, from, to, resultText);
              setIsUserInteraction(false);
            }
          } else {
            setToValue("");
            setResult("");
          }
        } catch (error) {
          console.error("Error during conversion:", error);
          setToValue("");
          setResult("");
        }
      }
    };
    void updateFromSearchParams();
  }, [
    searchParams,
    defaultValue,
    defaultFromUnit,
    defaultToUnit,
    category,
    units,
  ]);

  const saveToHistory = useCallback(
    (value: string, fromUnit: string, toUnit: string, result: string) => {
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
    },
    [category, conversionHistory],
  );

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
    toValue,
    fromUnit,
    toUnit,
    result,
    conversionHistory,
    handleFromValueChange,
    handleToValueChange,
    handleUnitChange,
    removeFromHistory,
    clearHistory,
  };
}
