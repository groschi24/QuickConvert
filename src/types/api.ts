export interface UnitConversionFormula {
  formula: string;
}

export interface UnitDefinition {
  label: string;
  conversion: UnitConversionFormula;
}

export interface MeasurementTypeConfig {
  label?: string | { label: string };
  units: Record<string, UnitDefinition>;
  baseUnit?: string;
}

export type UnitApiResponse = Record<
  string,
  MeasurementTypeConfig | Record<string, { label: string }>
>;
