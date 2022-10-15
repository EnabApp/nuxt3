import { useState } from "#imports";
// export const useUser = () => useState("user", () => null);
// export const useCounter = () => useState<number>("counter", () => 0);

export const useCookieState = (key: string) => {
  const sidebarCookie = useCookie(key, {
    default: () => true,
  });

  const state = useState(key, () => sidebarCookie.value);

  const toggle = () => {
    state.value = !state.value;
    sidebarCookie.value = state.value;
  };

  return { state, toggle };
};
