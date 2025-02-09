export interface UnitConversionFormula {
  formula: string;
}

export interface UnitDefinition {
  label: string;
  conversion: UnitConversionFormula;
}

export interface MeasurementTypeConfig {
  label?: string;
  units: {
    [key: string]: UnitDefinition;
  };
  baseUnit?: string;
}

export interface UnitApiResponse {
  [measurementType: string]: MeasurementTypeConfig;
}
