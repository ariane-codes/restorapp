<script lang="ts">
    import type { PageData } from './$types';
    import Textfield from '../../components/textfield/Textfield.svelte';
    export let data;

    console.log("HERE", data);
</script>

<div class="login-container">
    <h1>Login</h1>
    <form>
        <Textfield label="Email"/>

    </form>
    <!-- Login -->
</div> 

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        height: 100vh;
    }
</style>