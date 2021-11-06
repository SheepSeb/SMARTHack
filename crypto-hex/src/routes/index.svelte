<script>
    import Login from "./login.svelte";
    import Register from "./register.svelte";
    import {isAuth,goingRegister} from '../store';
</script>

{#if $isAuth==true}
<Main />
{:else}
<Login />
{/if}