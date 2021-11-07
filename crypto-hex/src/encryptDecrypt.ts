import * as crypto from 'crypto-js';
import { userPic,passwords } from './store';
import { get } from "svelte/store";
export let passwords1 = []


export function passAES(username,password){
    var encrypted = crypto.AES.encrypt(password,get(userPic))
    passwords1.push({name:username,password:encrypted})
    console.log("here")
    passwords.set(passwords1)
}
