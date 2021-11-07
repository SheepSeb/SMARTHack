import { writable } from "svelte/store";
import { passwords1 } from "./encryptDecrypt";
export const isAuth = writable(false);
export const goingRegister = writable(false);
export const userName = writable();
export const userEmail = writable();
export const userPic = writable();

export let passwords = writable([])

passwords.set(passwords1)