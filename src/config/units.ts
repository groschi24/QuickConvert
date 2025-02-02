import type { Category, UnitMap } from "@/types/units";

export const categoryGroups = [
  {
    name: "Common Converters",
    categories: [
      { value: "length", label: "Length" },
      { value: "weight", label: "Weight and Mass" },
      { value: "volume", label: "Volume" },
      { value: "temperature", label: "Temperature" },
      { value: "area", label: "Area" },
      { value: "pressure", label: "Pressure" },
      { value: "energy", label: "Energy" },
      { value: "volume_dry", label: "Volume - Dry" },
      { value: "currency", label: "Currency" },
      { value: "case", label: "Case" },
      { value: "power", label: "Power" },
      { value: "force", label: "Force" },
      { value: "time", label: "Time" },
      { value: "speed", label: "Speed" },
      { value: "angle", label: "Angle" },
      { value: "fuel_consumption", label: "Fuel Consumption" },
      { value: "numbers", label: "Numbers" },
      { value: "digital", label: "Data Storage" },
    ],
  },
  {
    name: "Engineering Converters",
    categories: [
      { value: "velocity_angular", label: "Velocity - Angular" },
      { value: "acceleration", label: "Acceleration" },
      { value: "acceleration_angular", label: "Acceleration - Angular" },
      { value: "density", label: "Density" },
      { value: "specific_volume", label: "Specific Volume" },
      { value: "moment_of_inertia", label: "Moment of Inertia" },
      { value: "moment_of_force", label: "Moment of Force" },
      { value: "torque", label: "Torque" },
      { value: "data_rate", label: "Data Transfer Rate" },
    ],
  },
  {
    name: "Heat Converters",
    categories: [
      { value: "fuel_efficiency_mass", label: "Fuel Efficiency - Mass" },
      { value: "fuel_efficiency_volume", label: "Fuel Efficiency - Volume" },
      { value: "temperature_interval", label: "Temperature Interval" },
      { value: "thermal_expansion", label: "Thermal Expansion" },
      { value: "thermal_resistance", label: "Thermal Resistance" },
      { value: "thermal_conductivity", label: "Thermal Conductivity" },
      { value: "specific_heat_capacity", label: "Specific Heat Capacity" },
      { value: "heat_density", label: "Heat Density" },
      { value: "heat_flux_density", label: "Heat Flux Density" },
      {
        value: "heat_transfer_coefficient",
        label: "Heat Transfer Coefficient",
      },
    ],
  },
  {
    name: "Fluid Converters",
    categories: [
      { value: "flow", label: "Flow" },
      { value: "flow_mass", label: "Flow - Mass" },
      { value: "flow_molar", label: "Flow - Molar" },
      { value: "mass_flux_density", label: "Mass Flux Density" },
      { value: "concentration_molar", label: "Concentration - Molar" },
      { value: "concentration_solution", label: "Concentration - Solution" },
      { value: "viscosity_dynamic", label: "Viscosity - Dynamic" },
      { value: "viscosity_kinematic", label: "Viscosity - Kinematic" },
      { value: "surface_tension", label: "Surface Tension" },
      { value: "permeability", label: "Permeability" },
    ],
  },
  {
    name: "Light Converters",
    categories: [
      { value: "luminance", label: "Luminance" },
      { value: "luminous_intensity", label: "Luminous Intensity" },
      { value: "illumination", label: "Illumination" },
      { value: "digital_image_resolution", label: "Digital Image Resolution" },
      { value: "frequency_wavelength", label: "Frequency & Wavelength" },
    ],
  },
  {
    name: "Electricity Converters",
    categories: [
      { value: "charge", label: "Charge" },
      { value: "linear_charge_density", label: "Linear Charge Density" },
      { value: "surface_charge_density", label: "Surface Charge Density" },
      { value: "volume_charge_density", label: "Volume Charge Density" },
      { value: "current", label: "Current" },
      { value: "linear_current_density", label: "Linear Current Density" },
      { value: "surface_current_density", label: "Surface Current Density" },
      { value: "electric_field_strength", label: "Electric Field Strength" },
      { value: "electric_potential", label: "Electric Potential" },
      { value: "electric_resistance", label: "Electric Resistance" },
      { value: "electric_resistivity", label: "Electric Resistivity" },
      { value: "electric_conductance", label: "Electric Conductance" },
      { value: "electric_conductivity", label: "Electric Conductivity" },
      {
        value: "electrostatic_capacitance",
        label: "Electrostatic Capacitance",
      },
      { value: "inductance", label: "Inductance" },
    ],
  },
  {
    name: "Magnetism Converters",
    categories: [
      { value: "magnetomotive_force", label: "Magnetomotive Force" },
      { value: "magnetic_field_strength", label: "Magnetic Field Strength" },
      { value: "magnetic_flux", label: "Magnetic Flux" },
      { value: "magnetic_flux_density", label: "Magnetic Flux Density" },
    ],
  },
  {
    name: "Radiology Converters",
    categories: [
      { value: "radiation", label: "Radiation" },
      { value: "radiation_activity", label: "Radiation Activity" },
      { value: "radiation_exposure", label: "Radiation Exposure" },
      { value: "radiation_absorbed_dose", label: "Radiation Absorbed Dose" },
    ],
  },
];

export const categories: Category[] = categoryGroups.flatMap(
  (group) => group.categories,
);

export const units: UnitMap = {
  radiation: [
    { value: "sievert", label: "Sievert (Sv)" },
    { value: "millisievert", label: "Millisievert (mSv)" },
    { value: "microsievert", label: "Microsievert (µSv)" },
    { value: "rem", label: "Rem" },
    { value: "millirem", label: "Millirem (mrem)" },
  ],
  radiation_activity: [
    { value: "becquerel", label: "Becquerel (Bq)" },
    { value: "kilobecquerel", label: "Kilobecquerel (kBq)" },
    { value: "megabecquerel", label: "Megabecquerel (MBq)" },
    { value: "gigabecquerel", label: "Gigabecquerel (GBq)" },
    { value: "curie", label: "Curie (Ci)" },
    { value: "millicurie", label: "Millicurie (mCi)" },
    { value: "microcurie", label: "Microcurie (µCi)" },
  ],
  radiation_exposure: [
    { value: "coulomb_per_kilogram", label: "Coulomb per Kilogram (C/kg)" },
    {
      value: "millicoulomb_per_kilogram",
      label: "Millicoulomb per Kilogram (mC/kg)",
    },
    {
      value: "microcoulomb_per_kilogram",
      label: "Microcoulomb per Kilogram (µC/kg)",
    },
    { value: "roentgen", label: "Roentgen (R)" },
  ],
  radiation_absorbed_dose: [
    { value: "gray", label: "Gray (Gy)" },
    { value: "milligray", label: "Milligray (mGy)" },
    { value: "microgray", label: "Microgray (µGy)" },
    { value: "rad", label: "Rad" },
    { value: "millirad", label: "Millirad (mrad)" },
  ],
  charge: [
    { value: "coulomb", label: "Coulomb (C)" },
    { value: "millicoulomb", label: "Millicoulomb (mC)" },
    { value: "microcoulomb", label: "Microcoulomb (µC)" },
    { value: "nanocoulomb", label: "Nanocoulomb (nC)" },
    { value: "ampere_hour", label: "Ampere Hour (Ah)" },
    { value: "milliampere_hour", label: "Milliampere Hour (mAh)" },
  ],
  linear_charge_density: [
    { value: "coulomb_per_meter", label: "Coulomb per Meter (C/m)" },
    { value: "coulomb_per_centimeter", label: "Coulomb per Centimeter (C/cm)" },
    { value: "coulomb_per_kilometer", label: "Coulomb per Kilometer (C/km)" },
  ],
  surface_charge_density: [
    {
      value: "coulomb_per_square_meter",
      label: "Coulomb per Square Meter (C/m²)",
    },
    {
      value: "coulomb_per_square_centimeter",
      label: "Coulomb per Square Centimeter (C/cm²)",
    },
    {
      value: "microcoulomb_per_square_meter",
      label: "Microcoulomb per Square Meter (µC/m²)",
    },
  ],
  volume_charge_density: [
    {
      value: "coulomb_per_cubic_meter",
      label: "Coulomb per Cubic Meter (C/m³)",
    },
    {
      value: "coulomb_per_cubic_centimeter",
      label: "Coulomb per Cubic Centimeter (C/cm³)",
    },
    {
      value: "microcoulomb_per_cubic_meter",
      label: "Microcoulomb per Cubic Meter (µC/m³)",
    },
  ],
  current: [
    { value: "ampere", label: "Ampere (A)" },
    { value: "milliampere", label: "Milliampere (mA)" },
    { value: "microampere", label: "Microampere (µA)" },
    { value: "kiloampere", label: "Kiloampere (kA)" },
  ],
  linear_current_density: [
    { value: "ampere_per_meter", label: "Ampere per Meter (A/m)" },
    { value: "ampere_per_centimeter", label: "Ampere per Centimeter (A/cm)" },
    { value: "milliampere_per_meter", label: "Milliampere per Meter (mA/m)" },
  ],
  surface_current_density: [
    {
      value: "ampere_per_square_meter",
      label: "Ampere per Square Meter (A/m²)",
    },
    {
      value: "ampere_per_square_centimeter",
      label: "Ampere per Square Centimeter (A/cm²)",
    },
    {
      value: "milliampere_per_square_meter",
      label: "Milliampere per Square Meter (mA/m²)",
    },
  ],
  electric_field_strength: [
    { value: "volt_per_meter", label: "Volt per Meter (V/m)" },
    { value: "volt_per_centimeter", label: "Volt per Centimeter (V/cm)" },
    { value: "kilovolt_per_meter", label: "Kilovolt per Meter (kV/m)" },
    { value: "newton_per_coulomb", label: "Newton per Coulomb (N/C)" },
  ],
  electric_potential: [
    { value: "volt", label: "Volt (V)" },
    { value: "millivolt", label: "Millivolt (mV)" },
    { value: "microvolt", label: "Microvolt (µV)" },
    { value: "kilovolt", label: "Kilovolt (kV)" },
    { value: "megavolt", label: "Megavolt (MV)" },
  ],
  electric_resistance: [
    { value: "ohm", label: "Ohm (Ω)" },
    { value: "milliohm", label: "Milliohm (mΩ)" },
    { value: "microohm", label: "Microohm (µΩ)" },
    { value: "kiloohm", label: "Kiloohm (kΩ)" },
    { value: "megaohm", label: "Megaohm (MΩ)" },
  ],
  electric_resistivity: [
    { value: "ohm_meter", label: "Ohm Meter (Ω⋅m)" },
    { value: "ohm_centimeter", label: "Ohm Centimeter (Ω⋅cm)" },
    { value: "microohm_meter", label: "Microohm Meter (µΩ⋅m)" },
  ],
  electric_conductance: [
    { value: "siemens", label: "Siemens (S)" },
    { value: "millisiemens", label: "Millisiemens (mS)" },
    { value: "microsiemens", label: "Microsiemens (µS)" },
    { value: "mho", label: "Mho" },
  ],
  electric_conductivity: [
    { value: "siemens_per_meter", label: "Siemens per Meter (S/m)" },
    { value: "siemens_per_centimeter", label: "Siemens per Centimeter (S/cm)" },
    { value: "millisiemens_per_meter", label: "Millisiemens per Meter (mS/m)" },
  ],
  electrostatic_capacitance: [
    { value: "farad", label: "Farad (F)" },
    { value: "millifarad", label: "Millifarad (mF)" },
    { value: "microfarad", label: "Microfarad (µF)" },
    { value: "nanofarad", label: "Nanofarad (nF)" },
    { value: "picofarad", label: "Picofarad (pF)" },
  ],
  inductance: [
    { value: "henry", label: "Henry (H)" },
    { value: "millihenry", label: "Millihenry (mH)" },
    { value: "microhenry", label: "Microhenry (µH)" },
    { value: "nanohenry", label: "Nanohenry (nH)" },
  ],
  flow: [
    {
      value: "cubic_meters_per_second",
      label: "Cubic Meters per Second (m³/s)",
    },
    { value: "liters_per_minute", label: "Liters per Minute (L/min)" },
    { value: "gallons_per_minute", label: "Gallons per Minute (gpm)" },
    { value: "cubic_feet_per_minute", label: "Cubic Feet per Minute (cfm)" },
  ],
  flow_mass: [
    { value: "kilograms_per_second", label: "Kilograms per Second (kg/s)" },
    { value: "pounds_per_hour", label: "Pounds per Hour (lb/h)" },
    { value: "grams_per_minute", label: "Grams per Minute (g/min)" },
  ],
  flow_molar: [
    { value: "moles_per_second", label: "Moles per Second (mol/s)" },
    { value: "kilomoles_per_hour", label: "Kilomoles per Hour (kmol/h)" },
    {
      value: "millimoles_per_minute",
      label: "Millimoles per Minute (mmol/min)",
    },
  ],
  mass_flux_density: [
    {
      value: "kilograms_per_second_square_meter",
      label: "Kilograms per Second Square Meter (kg/(s⋅m²))",
    },
    {
      value: "pounds_per_hour_square_foot",
      label: "Pounds per Hour Square Foot (lb/(h⋅ft²))",
    },
    {
      value: "grams_per_minute_square_centimeter",
      label: "Grams per Minute Square Centimeter (g/(min⋅cm²))",
    },
  ],
  concentration_molar: [
    { value: "moles_per_cubic_meter", label: "Moles per Cubic Meter (mol/m³)" },
    { value: "millimoles_per_liter", label: "Millimoles per Liter (mmol/L)" },
    { value: "moles_per_liter", label: "Moles per Liter (mol/L)" },
  ],
  concentration_solution: [
    { value: "percent_by_mass", label: "Percent by Mass (% w/w)" },
    { value: "percent_by_volume", label: "Percent by Volume (% v/v)" },
    { value: "parts_per_million", label: "Parts per Million (ppm)" },
  ],
  viscosity_dynamic: [
    { value: "pascal_second", label: "Pascal Second (Pa⋅s)" },
    { value: "poise", label: "Poise (P)" },
    { value: "centipoise", label: "Centipoise (cP)" },
  ],
  viscosity_kinematic: [
    {
      value: "square_meters_per_second",
      label: "Square Meters per Second (m²/s)",
    },
    { value: "stokes", label: "Stokes (St)" },
    { value: "centistokes", label: "Centistokes (cSt)" },
  ],
  surface_tension: [
    { value: "newtons_per_meter", label: "Newtons per Meter (N/m)" },
    { value: "dynes_per_centimeter", label: "Dynes per Centimeter (dyn/cm)" },
    { value: "millinewtons_per_meter", label: "Millinewtons per Meter (mN/m)" },
  ],
  permeability: [
    { value: "darcy", label: "Darcy (D)" },
    { value: "millidarcy", label: "Millidarcy (mD)" },
    { value: "square_meters", label: "Square Meters (m²)" },
  ],
  fuel_efficiency_mass: [
    {
      value: "grams_per_kilowatt_hour",
      label: "Grams per Kilowatt Hour (g/kWh)",
    },
    {
      value: "pounds_per_horsepower_hour",
      label: "Pounds per Horsepower Hour (lb/hp⋅h)",
    },
    { value: "kilograms_per_joule", label: "Kilograms per Joule (kg/J)" },
  ],
  fuel_efficiency_volume: [
    {
      value: "liters_per_kilowatt_hour",
      label: "Liters per Kilowatt Hour (L/kWh)",
    },
    {
      value: "gallons_per_horsepower_hour",
      label: "Gallons per Horsepower Hour (gal/hp⋅h)",
    },
    { value: "cubic_meters_per_joule", label: "Cubic Meters per Joule (m³/J)" },
  ],
  temperature_interval: [
    { value: "kelvin", label: "Kelvin (K)" },
    { value: "celsius_degree", label: "Celsius Degree (°C)" },
    { value: "fahrenheit_degree", label: "Fahrenheit Degree (°F)" },
  ],
  thermal_expansion: [
    { value: "per_kelvin", label: "Per Kelvin (K⁻¹)" },
    { value: "per_celsius", label: "Per Celsius (°C⁻¹)" },
    { value: "per_fahrenheit", label: "Per Fahrenheit (°F⁻¹)" },
  ],
  thermal_resistance: [
    { value: "kelvin_per_watt", label: "Kelvin per Watt (K/W)" },
    { value: "celsius_per_watt", label: "Celsius per Watt (°C/W)" },
    {
      value: "fahrenheit_per_btu_per_hour",
      label: "Fahrenheit per BTU per Hour (°F/(BTU/h))",
    },
  ],
  thermal_conductivity: [
    {
      value: "watts_per_meter_kelvin",
      label: "Watts per Meter Kelvin (W/(m⋅K))",
    },
    {
      value: "btu_per_hour_foot_fahrenheit",
      label: "BTU per Hour Foot Fahrenheit (BTU/(h⋅ft⋅°F))",
    },
    {
      value: "kilocalories_per_hour_meter_celsius",
      label: "Kilocalories per Hour Meter Celsius (kcal/(h⋅m⋅°C))",
    },
  ],
  specific_heat_capacity: [
    {
      value: "joules_per_kilogram_kelvin",
      label: "Joules per Kilogram Kelvin (J/(kg⋅K))",
    },
    {
      value: "btu_per_pound_fahrenheit",
      label: "BTU per Pound Fahrenheit (BTU/(lb⋅°F))",
    },
    {
      value: "calories_per_gram_celsius",
      label: "Calories per Gram Celsius (cal/(g⋅°C))",
    },
  ],
  heat_density: [
    { value: "joules_per_cubic_meter", label: "Joules per Cubic Meter (J/m³)" },
    { value: "btu_per_cubic_foot", label: "BTU per Cubic Foot (BTU/ft³)" },
    {
      value: "calories_per_cubic_centimeter",
      label: "Calories per Cubic Centimeter (cal/cm³)",
    },
  ],
  heat_flux_density: [
    { value: "watts_per_square_meter", label: "Watts per Square Meter (W/m²)" },
    {
      value: "btu_per_hour_square_foot",
      label: "BTU per Hour Square Foot (BTU/(h⋅ft²))",
    },
    {
      value: "calories_per_second_square_centimeter",
      label: "Calories per Second Square Centimeter (cal/(s⋅cm²))",
    },
  ],
  heat_transfer_coefficient: [
    {
      value: "watts_per_square_meter_kelvin",
      label: "Watts per Square Meter Kelvin (W/(m²⋅K))",
    },
    {
      value: "btu_per_hour_square_foot_fahrenheit",
      label: "BTU per Hour Square Foot Fahrenheit (BTU/(h⋅ft²⋅°F))",
    },
    {
      value: "calories_per_second_square_centimeter_celsius",
      label: "Calories per Second Square Centimeter Celsius (cal/(s⋅cm²⋅°C))",
    },
  ],
  volume_dry: [
    { value: "dry_quarts", label: "Dry Quarts (dry qt)" },
    { value: "dry_pints", label: "Dry Pints (dry pt)" },
    { value: "dry_gallons", label: "Dry Gallons (dry gal)" },
    { value: "bushels", label: "Bushels (bu)" },
    { value: "pecks", label: "Pecks (pk)" },
  ],
  currency: [
    { value: "usd", label: "US Dollar ($)" },
    { value: "eur", label: "Euro (€)" },
    { value: "gbp", label: "British Pound (£)" },
    { value: "jpy", label: "Japanese Yen (¥)" },
    { value: "cny", label: "Chinese Yuan (¥)" },
  ],
  case: [
    { value: "lowercase", label: "Lowercase" },
    { value: "uppercase", label: "Uppercase" },
    { value: "titlecase", label: "Title Case" },
    { value: "camelcase", label: "Camel Case" },
    { value: "snakecase", label: "Snake Case" },
  ],
  power: [
    { value: "watt", label: "Watt (W)" },
    { value: "kilowatt", label: "Kilowatt (kW)" },
    { value: "megawatt", label: "Megawatt (MW)" },
    { value: "horsepower", label: "Horsepower (hp)" },
    { value: "btu_per_hour", label: "BTU per Hour (BTU/h)" },
  ],
  force: [
    { value: "newton", label: "Newton (N)" },
    { value: "kilonewton", label: "Kilonewton (kN)" },
    { value: "pound_force", label: "Pound-force (lbf)" },
    { value: "dyne", label: "Dyne (dyn)" },
  ],
  fuel_consumption: [
    { value: "miles_per_gallon", label: "Miles per Gallon (mpg)" },
    { value: "kilometers_per_liter", label: "Kilometers per Liter (km/L)" },
    { value: "liters_per_100km", label: "Liters per 100 km (L/100km)" },
  ],
  numbers: [
    { value: "decimal", label: "Decimal" },
    { value: "binary", label: "Binary" },
    { value: "hexadecimal", label: "Hexadecimal" },
    { value: "octal", label: "Octal" },
  ],
  velocity_angular: [
    { value: "radians_per_second", label: "Radians per Second (rad/s)" },
    { value: "degrees_per_second", label: "Degrees per Second (°/s)" },
    { value: "revolutions_per_minute", label: "Revolutions per Minute (rpm)" },
  ],
  acceleration: [
    { value: "meters_per_second_squared", label: "Meters per Second² (m/s²)" },
    { value: "feet_per_second_squared", label: "Feet per Second² (ft/s²)" },
    { value: "gravity", label: "Standard Gravity (g)" },
  ],
  acceleration_angular: [
    {
      value: "radians_per_second_squared",
      label: "Radians per Second² (rad/s²)",
    },
    {
      value: "degrees_per_second_squared",
      label: "Degrees per Second² (°/s²)",
    },
    {
      value: "revolutions_per_minute_squared",
      label: "Revolutions per Minute² (rpm²)",
    },
  ],
  density: [
    {
      value: "kilograms_per_cubic_meter",
      label: "Kilograms per Cubic Meter (kg/m³)",
    },
    {
      value: "grams_per_cubic_centimeter",
      label: "Grams per Cubic Centimeter (g/cm³)",
    },
    { value: "pounds_per_cubic_foot", label: "Pounds per Cubic Foot (lb/ft³)" },
  ],
  specific_volume: [
    {
      value: "cubic_meters_per_kilogram",
      label: "Cubic Meters per Kilogram (m³/kg)",
    },
    { value: "cubic_feet_per_pound", label: "Cubic Feet per Pound (ft³/lb)" },
    { value: "liters_per_kilogram", label: "Liters per Kilogram (L/kg)" },
  ],
  moment_of_inertia: [
    { value: "kilogram_square_meter", label: "Kilogram Square Meter (kg⋅m²)" },
    { value: "pound_square_foot", label: "Pound Square Foot (lb⋅ft²)" },
    {
      value: "gram_square_centimeter",
      label: "Gram Square Centimeter (g⋅cm²)",
    },
  ],
  moment_of_force: [
    { value: "newton_meter", label: "Newton Meter (N⋅m)" },
    { value: "pound_foot", label: "Pound Foot (lb⋅ft)" },
    { value: "kilogram_force_meter", label: "Kilogram Force Meter (kgf⋅m)" },
  ],
  torque: [
    { value: "newton_meter", label: "Newton Meter (N⋅m)" },
    { value: "pound_foot", label: "Pound Foot (lb⋅ft)" },
    { value: "kilogram_force_meter", label: "Kilogram Force Meter (kgf⋅m)" },
  ],
  pressure: [
    { value: "pascal", label: "Pascal (Pa)" },
    { value: "kilopascal", label: "Kilopascal (kPa)" },
    { value: "bar", label: "Bar" },
    { value: "psi", label: "Pounds per Square Inch (PSI)" },
    { value: "atmosphere", label: "Atmosphere (atm)" },
    { value: "mmhg", label: "Millimeters of Mercury (mmHg)" },
  ],
  energy: [
    { value: "joule", label: "Joule (J)" },
    { value: "calorie", label: "Calorie (cal)" },
    { value: "kilocalorie", label: "Kilocalorie (kcal)" },
    { value: "kilowatt_hour", label: "Kilowatt Hour (kWh)" },
    { value: "electron_volt", label: "Electron Volt (eV)" },
    { value: "btu", label: "British Thermal Unit (BTU)" },
  ],
  angle: [
    { value: "degree", label: "Degree (°)" },
    { value: "radian", label: "Radian (rad)" },
    { value: "gradian", label: "Gradian (grad)" },
    { value: "arcminute", label: "Arcminute (′)" },
    { value: "arcsecond", label: "Arcsecond (″)" },
  ],
  data_rate: [
    { value: "bits_per_second", label: "Bits per Second (bps)" },
    { value: "kilobits_per_second", label: "Kilobits per Second (kbps)" },
    { value: "megabits_per_second", label: "Megabits per Second (Mbps)" },
    { value: "gigabits_per_second", label: "Gigabits per Second (Gbps)" },
    { value: "bytes_per_second", label: "Bytes per Second (B/s)" },
    { value: "kilobytes_per_second", label: "Kilobytes per Second (KB/s)" },
    { value: "megabytes_per_second", label: "Megabytes per Second (MB/s)" },
    { value: "gigabytes_per_second", label: "Gigabytes per Second (GB/s)" },
  ],
  length: [
    { value: "meters", label: "Meters (m)" },
    { value: "feet", label: "Feet (ft)" },
    { value: "inches", label: "Inches (in)" },
    { value: "centimeters", label: "Centimeters (cm)" },
    { value: "kilometers", label: "Kilometers (km)" },
    { value: "miles", label: "Miles (mi)" },
    { value: "yards", label: "Yards (yd)" },
    { value: "millimeters", label: "Millimeters (mm)" },
  ],
  weight: [
    { value: "kilograms", label: "Kilograms (kg)" },
    { value: "pounds", label: "Pounds (lbs)" },
    { value: "ounces", label: "Ounces (oz)" },
    { value: "grams", label: "Grams (g)" },
    { value: "milligrams", label: "Milligrams (mg)" },
    { value: "metric_tons", label: "Metric Tons (t)" },
    { value: "stone", label: "Stone (st)" },
  ],
  temperature: [
    { value: "celsius", label: "Celsius (°C)" },
    { value: "fahrenheit", label: "Fahrenheit (°F)" },
    { value: "kelvin", label: "Kelvin (K)" },
  ],
  area: [
    { value: "square_meters", label: "Square Meters (m²)" },
    { value: "square_feet", label: "Square Feet (ft²)" },
    { value: "acres", label: "Acres" },
    { value: "hectares", label: "Hectares (ha)" },
    { value: "square_kilometers", label: "Square Kilometers (km²)" },
    { value: "square_miles", label: "Square Miles (mi²)" },
    { value: "square_yards", label: "Square Yards (yd²)" },
  ],
  volume: [
    { value: "liters", label: "Liters (L)" },
    { value: "gallons", label: "Gallons (gal)" },
    { value: "milliliters", label: "Milliliters (mL)" },
    { value: "cubic_meters", label: "Cubic Meters (m³)" },
    { value: "cubic_feet", label: "Cubic Feet (ft³)" },
    { value: "cups", label: "Cups" },
    { value: "pints", label: "Pints (pt)" },
    { value: "quarts", label: "Quarts (qt)" },
  ],
  speed: [
    { value: "meters_per_second", label: "Meters per Second (m/s)" },
    { value: "kilometers_per_hour", label: "Kilometers per Hour (km/h)" },
    { value: "miles_per_hour", label: "Miles per Hour (mph)" },
    { value: "knots", label: "Knots (kts)" },
    { value: "feet_per_second", label: "Feet per Second (ft/s)" },
  ],
  time: [
    { value: "seconds", label: "Seconds (s)" },
    { value: "minutes", label: "Minutes (min)" },
    { value: "hours", label: "Hours (h)" },
    { value: "days", label: "Days" },
    { value: "weeks", label: "Weeks" },
    { value: "months", label: "Months" },
    { value: "years", label: "Years" },
  ],
  digital: [
    { value: "bytes", label: "Bytes (B)" },
    { value: "kilobytes", label: "Kilobytes (KB)" },
    { value: "megabytes", label: "Megabytes (MB)" },
    { value: "gigabytes", label: "Gigabytes (GB)" },
    { value: "terabytes", label: "Terabytes (TB)" },
    { value: "petabytes", label: "Petabytes (PB)" },
  ],
  luminance: [
    {
      value: "candela_per_square_meter",
      label: "Candela per Square Meter (cd/m²)",
    },
    { value: "foot_lambert", label: "Foot-Lambert (fL)" },
    { value: "nit", label: "Nit (nt)" },
    { value: "stilb", label: "Stilb (sb)" },
  ],
  luminous_intensity: [
    { value: "candela", label: "Candela (cd)" },
    { value: "candlepower", label: "Candlepower (cp)" },
    { value: "hefner_unit", label: "Hefner Unit (HK)" },
  ],
  illumination: [
    { value: "lux", label: "Lux (lx)" },
    { value: "foot_candle", label: "Foot-Candle (fc)" },
    { value: "phot", label: "Phot (ph)" },
  ],
  digital_image_resolution: [
    { value: "pixels_per_inch", label: "Pixels per Inch (PPI)" },
    { value: "pixels_per_centimeter", label: "Pixels per Centimeter (PPCM)" },
    { value: "dots_per_inch", label: "Dots per Inch (DPI)" },
  ],
  frequency_wavelength: [
    { value: "hertz", label: "Hertz (Hz)" },
    { value: "nanometers", label: "Nanometers (nm)" },
    { value: "angstroms", label: "Angstroms (Å)" },
    { value: "electron_volts", label: "Electron Volts (eV)" },
  ],
  magnetomotive_force: [
    { value: "ampere_turns", label: "Ampere Turns (At)" },
    { value: "gilbert", label: "Gilbert (Gb)" },
    { value: "kiloampere_turns", label: "Kiloampere Turns (kAt)" },
  ],
  magnetic_field_strength: [
    { value: "ampere_per_meter", label: "Ampere per Meter (A/m)" },
    { value: "oersted", label: "Oersted (Oe)" },
    { value: "kiloampere_per_meter", label: "Kiloampere per Meter (kA/m)" },
  ],
  magnetic_flux: [
    { value: "weber", label: "Weber (Wb)" },
    { value: "maxwell", label: "Maxwell (Mx)" },
    { value: "kiloweber", label: "Kiloweber (kWb)" },
  ],
  magnetic_flux_density: [
    { value: "tesla", label: "Tesla (T)" },
    { value: "gauss", label: "Gauss (G)" },
    { value: "millitesla", label: "Millitesla (mT)" },
  ],
};
