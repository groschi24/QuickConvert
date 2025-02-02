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
];

export const categories: Category[] = categoryGroups.flatMap(
  (group) => group.categories,
);

export const units: UnitMap = {
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
};
