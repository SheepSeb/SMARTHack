import { writable } from "svelte/store";

export const isAuth = writable(false);
export const goingRegister = writable(false);
export const userName = writable();
