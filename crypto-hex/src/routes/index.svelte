<script>
    import Login from "./login.svelte";
    import Register from "./register.svelte";
    import {isAuth} from '../store';
</script>

{#if $isAuth==true}
<Login />
{:else}
<Register />
{/if}