<script>
    import Login from "./login.svelte";
    import Register from "./register.svelte";
    import Keys from './manageKeys.svelte';
    import MainActivity from "./main_activity.svelte";
    import {isAuth,goingRegister} from '../store';
    import { Router, Route } from 'svelte-routing';
</script>

{#if $isAuth==true && $goingRegister==false}
<MainActivity />
{:else if $goingRegister==true}
<Register />
{:else}
<Login />
{/if}
<!-- <Keys /> -->