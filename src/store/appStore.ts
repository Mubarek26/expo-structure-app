type AppState = {
  theme: 'light' | 'dark';
};

const state: AppState = {
  theme: 'light',
};

export const appStore = {
  getTheme: () => state.theme,
  toggleTheme: () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
  },
};
