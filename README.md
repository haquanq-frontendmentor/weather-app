## Frontend Mentor - Weather App Solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p>
  <a href="">
    <img
      alt="Solution post"
      src="https://img.shields.io/badge/Frontendmentor-blue?label=Solution%20on"
    /></a>
  <a href="https://haquanq-frontendmentor.github.io/weather-app/">
    <img
      alt="Live demo"
      src="https://img.shields.io/badge/Demo-teal?label=Live"
    /></a>
  <a href="./LICENSE"
    ><img
      allt="MIT License"
      src="https://img.shields.io/badge/MIT-blue?label=license"
  /></a>
</p>

![](./docs/preview.jpg)

## Table of Contents

- [Project Overview](#sunrise-project-overview)
- [Tech Stack and Approach](#stars-tech-stack-and-approach)
- [Local Development](#leaves-local-development)
- [Deployment](#maple_leaf-deployment)

## :sunrise: Project Overview

### Challenge Requirements

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Status

Features

- [x] Search for locations with real-time suggestions
- [x] Change unit systems (imperial, metric)

Accessibility

- [x] Responsive accross different screen sizes
- [x] Added custom indicator when interactive elements focused

## :stars: Tech Stack and Approach

### Built with

- **OpenMeteoAPI** - Public API for weather forecast data
- **HTML5** – Semantic structure
- **Vue** – Fine-grained reactivity
- **PrimeVue** – Matured component UI with accessibility in mind
- **TailwindCSS** – Utility-first CSS for fast development
- **TypeScript** - Interactivity and application logic
- **Vite** - Fast development server, production build and easy configuration.

### Approach

- Mobile-first workflow for better performance on smaller devices
- Accessibility guided by [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/).

## :leaves: Local Development

### Prerequisites

Install the following:

- Git (latest version)
- Node.js (latest LTS recommended)
- pnpm (latest version)

### Setup

```
git clone https://github.com/haquanq-frontendmentor/weather-app.git
cd weather-app
pnpm install
```

### Start Development Server

```
pnpm dev
```

## :maple_leaf: Deployment

Deployed to Github Pages via Github Action.
