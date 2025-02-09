export interface UnitConversionFormula {
  formula: string;
}

export interface UnitDefinition {
  label: string;
  conversion: UnitConversionFormula;
}

export interface MeasurementTypeConfig {
  label?: string;
  units: Record<string, UnitDefinition>;
  baseUnit?: string;
}

export interface UnitApiResponse {
  measurementType: Record<string, MeasurementTypeConfig>;
}
