<script>
    import Login from "./login.svelte";
    import {isAuth} from '../store';
</script>

{#if $isAuth==true}
<Main />
{:else}
<Login />
{/if}