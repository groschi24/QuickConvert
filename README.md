# QuickConvert

QuickConvert is a free, fast, and reliable online unit converter and calculator. It supports a wide range of conversion categories—from common units (length, mass, time, area) to specialized areas such as Engineering & Mechanics, Heat & Energy, Fluid & Volume, Light Conversions, Electromagnetism, Radiation, and Miscellaneous conversions. The app is highly configurable via JSON files, making it easy to extend or modify conversion data.

## Features

- **Real-Time Conversions:** Get instant conversion results as you type.
- **Wide Range of Units:** Covers everyday measurements (e.g., meters, kilograms, seconds) as well as specialized units (e.g., dynes, torr, microfarads).
- **Configurable via JSON:** All conversion data is stored in human-readable JSON files.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Open Source:** Contributions are welcome; help us expand the unit library or improve the UI!

## Live Demo

Try QuickConvert live at [https://quickconvert.app](https://quickconvert.app)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/groschi24/QuickConvert.git
cd QuickConvert
```

### Install Dependencies

If using npm:

```bash
npm install
```

Or with Yarn:

```bash
yarn install
```

### Run the App Locally

```bash
npm dev
```

Then open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Configuration

All conversion categories and units are defined in JSON files located in the `config/` folder. You can customize or add new units by editing these files. For example:

- **Common Conversions:** `config/common.json`
- **Engineering & Mechanics:** `config/engineering.json`
- **Heat & Energy:** `config/heat_energy.json`
- **Fluid & Volume:** `config/fluid_volume.json`
- **Light Conversions:** `config/light.json`
- **Electromagnetism:** `config/electromagnetism.json`
- **Radiation:** `config/radiation.json`
- **Miscellaneous:** `config/misc.json`

Each JSON file follows a consistent structure where the base unit and conversion formulas are defined.

## Contributing

Contributions are very welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure everything works as expected.
4. Submit a pull request.

Please follow our coding standards and include tests if applicable. For any major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

---

QuickConvert is developed and maintained by [groschi24](https://github.com/groschi24). Enjoy converting units with ease!
