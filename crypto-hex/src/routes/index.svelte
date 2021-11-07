<script>
    import Login from "./login.svelte";
    import Register from "./register.svelte";
    import MainActivity from "./main_activity.svelte";
    import {isAuth,goingRegister} from '../store';
    import {app} from '../firebase'
</script>

{#if $isAuth==true}
<MainActivity />
{:else}
<Login />
{/if}
<!-- <Keys /> -->