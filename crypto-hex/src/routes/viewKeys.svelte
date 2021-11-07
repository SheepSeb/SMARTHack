<script lang="ts">
    import {passwords} from '../store';
    import * as crypto from 'crypto-js';
    import { get } from "svelte/store";
    import { userPic } from '../store';
    let array = []
    // console.log(array);
</script>

{#each Object.keys(array) as key}
<p>{array[key].name}</p>
<p>{array[key].password}</p>
{/each}