type User = {
  id: string;
  name: string;
  email: string;
};

const state = {
  user: null as User | null,
};

export const authStore = {
  getUser: () => state.user,
  setUser: (user: User | null) => {
    state.user = user;
  },
};
