import type { UnitCategory } from "./categoryTypes";

/**
 * Represents a unit of measurement with its value and display label
 */
export interface Unit {
  /** Unique identifier for the unit */
  value: string;
  /** Human-readable label for the unit */
  label: string;
}

/**
 * Represents a category of measurement units
 */
export interface Category {
  /** Unique identifier for the category */
  value: string;
  /** Human-readable label for the category */
  label: string;
}

/**
 * Configuration for a unit conversion category
 */
export interface CategoryConfig {
  /** Title displayed for the category */
  title: string;
  /** Available units for conversion */
  units: Unit[];
  /** Default 'from' unit */
  defaultFrom: string;
  /** Default 'to' unit */
  defaultTo: string;
  /** Formula template for displaying the conversion formula */
  formula?: string;
  /** Base unit for the category (if applicable) */
  baseUnit?: string;
  /** Conversion factors and formulas */
  conversions: Record<
    string,
    {
      to: Record<string, number | string>;
      formula?: string;
    }
  >;
}

/**
 * Represents a popular conversion option displayed on the homepage
 */
export interface PopularConversion {
  /** Source unit to convert from */
  from: string;
  /** Target unit to convert to */
  to: string;
  /** Category of the conversion */
  category: UnitCategory;
  /** Display label for the conversion */
  label: string;
  /** Description of the conversion */
  description: string;
  /** Emoji icon representing the conversion */
  icon: string;
}

export type ConversionFunction = (
  value: number,
  from: string,
  to: string,
) => number;

export interface ConversionHistoryEntry {
  id: string;
  category: UnitCategory;
  from: string;
  to: string;
  value: string;
  result: string;
  timestamp: number;
}

export type UnitMap = Record<UnitCategory, Unit[]>;
