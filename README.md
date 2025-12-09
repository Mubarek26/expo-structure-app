# Expo Structured App

A starter Expo + NativeWind project organized around a `src/` folder that mimics a typical React Native app layout (components, screens, navigation, services, stores, etc.).

## Available scripts

- `npm install` – install dependencies
- `npm run lint` – validate formatting (if configured)
- `npx expo start` – run Expo Metro bundler for ios/android/web
- `npx expo start -c` – same as above but clears Metro cache

## Project layout

```
src/
├── components/
├── screens/
├── navigation/
├── services/
├── hooks/
├── store/
├── utils/
└── styles/
``` 

- Keep the root `App.tsx` as a passthrough that re-exports `src/App.tsx`, making it easier to point Expo at the right entrypoint while still leveraging the structured code inside `src/`.
- Tailwind (NativeWind) scans the `src/**/*.{js,ts,tsx}` files so any component there can use tailwind classes.

## Next steps

1. Update the scaffolds under `src/screens`/`navigation` with your real app views and navigation stacks.
2. Wire up real services/hooks/stores to your backend or state management choices.
3. Commit the `.env` values securely and update `tailwind.config.js` if you add new class names or plugins.
