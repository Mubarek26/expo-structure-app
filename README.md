# Expo Structured App

An opinionated Expo + React Native app with a clean file-based routing structure, tab navigation, and basic screens for onboarding, browsing movies, and managing a profile.

## Features

- **Expo Router structure** using the `app/` directory
- **Onboarding flow** at app start (`app/onboarding.tsx`)
- **Bottom tab navigation** under `app/(tabs)/`:
	- `index.tsx` – main/home feed
	- `search.tsx` – search screen
	- `saved.tsx` – saved/favorites screen
	- `profile.tsx` – profile/settings screen
- **Movie details screen** using dynamic routes (`app/movies/[id].tsx`)
- **Configured tooling**:
	- TypeScript
	- ESLint + Prettier
	- Tailwind via NativeWind (`tailwind.config.js`, `global.css`)

## Project Structure

```bash
.
├── app.json
├── babel.config.js
├── cesconfig.jsonc
├── eslint.config.js
├── expo-env.d.ts
├── global.css
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── prettier.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── app
		├── _layout.tsx          # Root layout / navigation shell
		├── onboarding.tsx       # Onboarding screen
		├── (tabs)
		│   ├── _layout.tsx      # Tabs layout
		│   ├── index.tsx        # Home tab
		│   ├── profile.tsx      # Profile tab
		│   ├── saved.tsx        # Saved items tab
		│   └── search.tsx       # Search tab
		└── movies
				└── [id].tsx         # Movie details screen
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm, yarn, or pnpm
- Expo Go app on your iOS or Android device (for local testing), or an emulator/simulator

### Installation

```bash
# Install dependencies
npm install
# or
yarn
# or
pnpm install
```

### Running the App

```bash
# Start the Expo development server
npx expo start
```

Then:

- Press `a` to open on Android emulator/device
- Press `i` to open on iOS simulator (macOS only)
- Press `w` to open in the browser (web)

Or scan the QR code in your terminal/browser with the Expo Go app.

## Styling & Theming

- Global styles are defined in `global.css`.
- Tailwind/NativeWind configuration is in `tailwind.config.js` and `nativewind-env.d.ts`.
- Use Tailwind-style class names in your components to keep styling consistent.

## Development

- **Type checking**: TypeScript is configured via `tsconfig.json`.
- **Linting/formatting**: ESLint and Prettier are configured via `eslint.config.js` and `prettier.config.js`.

You can extend this structure by adding new routes inside the `app/` directory. Each `.tsx` file becomes a screen, and folders like `(tabs)` and dynamic segments like `[id]` control how routes are nested and parameterized.
