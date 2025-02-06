"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { UnitCategory } from "@/types/units";
import { convertWithFormula } from "@/utils/dynamicConverter";

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
) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultValue = searchParams.get("value") ?? "1";
  const defaultFromUnit = initialFromUnit ?? "";
  const defaultToUnit = initialToUnit ?? "";

  const [fromValue, setFromValue] = useState(defaultValue);
  const [toValue, setToValue] = useState(() => {
    try {
      const converted = convertWithFormula(
        parseFloat(defaultValue),
        defaultFromUnit,
        defaultToUnit,
        category,
      );
      return isNaN(converted) ? "" : converted.toFixed(4);
    } catch (error) {
      console.error("Error in initial conversion:", error);
      return "";
    }
  });
  const [fromUnit, setFromUnit] = useState(defaultFromUnit);
  const [toUnit, setToUnit] = useState(defaultToUnit);
  const [isUserInteraction, setIsUserInteraction] = useState(false);
  const [result, setResult] = useState(() => {
    try {
      const converted = convertWithFormula(
        parseFloat(defaultValue),
        defaultFromUnit,
        defaultToUnit,
        category,
      );
      return isNaN(converted)
        ? ""
        : `${defaultValue} ${defaultFromUnit} = ${converted.toFixed(4)} ${defaultToUnit}`;
    } catch (error) {
      console.error("Error in initial result calculation:", error);
      return "";
    }
  });
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
      try {
        const converted = convertWithFormula(numValue, from, to, category);
        if (isNaN(converted)) {
          console.error("Invalid conversion result");
          setToValue("");
          setResult("");
          return;
        }
        setToValue(converted.toFixed(4));
        const resultText = `${numValue} ${from} = ${converted.toFixed(4)} ${to}`;
        setResult(resultText);
      } catch (error) {
        console.error("Error during conversion:", error);
        setToValue("");
        setResult("");
      }
    }
  }, [searchParams, defaultValue, defaultFromUnit, defaultToUnit, category]);

  useEffect(() => {
    if (
      !result ||
      !fromValue ||
      !isUserInteraction ||
      isNaN(parseFloat(fromValue))
    )
      return;

    const timer = setTimeout(() => {
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

  const handleFromValueChange = (value: string) => {
    setIsUserInteraction(true);
    setFromValue(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      try {
        const converted = convertWithFormula(
          numValue,
          fromUnit,
          toUnit,
          category,
        );
        if (isNaN(converted)) {
          console.error("Invalid conversion result");
          setToValue("");
          return;
        }
        setToValue(converted.toFixed(4));
        const resultText = `${numValue} ${fromUnit} = ${converted.toFixed(4)} ${toUnit}`;
        setResult(resultText);

        const params = new URLSearchParams();
        params.set("value", value);
        params.set("from", fromUnit);
        params.set("to", toUnit);
        router.push(`/${category}/${fromUnit}/${toUnit}?${params.toString()}`, {
          scroll: false,
        });
      } catch (error) {
        console.error("Error during conversion:", error);
        setToValue("");
        setResult("");
      }
    } else {
      setToValue("");
      setResult("");
    }
  };

  const handleToValueChange = (value: string) => {
    setIsUserInteraction(true);
    setToValue(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      try {
        const converted = convertWithFormula(
          numValue,
          toUnit,
          fromUnit,
          category,
        );
        if (isNaN(converted)) {
          console.error("Invalid conversion result");
          setFromValue("");
          setResult("");
          return;
        }
        setFromValue(converted.toFixed(4));
        const resultText = `${converted.toFixed(4)} ${fromUnit} = ${numValue} ${toUnit}`;
        setResult(resultText);

        const params = new URLSearchParams();
        params.set("value", converted.toFixed(4));
        params.set("from", fromUnit);
        params.set("to", toUnit);
        router.push(`/${category}/${fromUnit}/${toUnit}?${params.toString()}`, {
          scroll: false,
        });
      } catch (error) {
        console.error("Error during conversion:", error);
        setFromValue("");
        setResult("");
      }
    } else {
      setFromValue("");
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
        try {
          const converted = convertWithFormula(
            numValue,
            newFromUnit,
            newToUnit,
            category,
          );
          if (isNaN(converted)) {
            console.error("Invalid conversion result");
            setToValue("");
            setResult("");
            return;
          }
          setToValue(converted.toFixed(4));
          const resultText = `${numValue} ${newFromUnit} = ${converted.toFixed(4)} ${newToUnit}`;
          setResult(resultText);

          const params = new URLSearchParams();
          params.set("value", fromValue);
          params.set("from", newFromUnit);
          params.set("to", newToUnit);
          router.push(
            `/${category}/${newFromUnit}/${newToUnit}?${params.toString()}`,
            {
              scroll: false,
            },
          );
        } catch (error) {
          console.error("Error during conversion:", error);
          setToValue("");
          setResult("");
        }
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
