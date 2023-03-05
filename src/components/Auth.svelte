<script lang="ts">
  import { authHandlers } from "$stores/authStore";


    let register = false;
    let email = "";
    let password = "";
    let confirmPassword = "";
    const passwordsMatch: boolean = password === confirmPassword;


    const handleSubmit = async () => {
        if (register && passwordsMatch) {
            try {
                await authHandlers.signup(email, password);
            } catch (error) {
                console.log(error);
            }
        } else if (!register && passwordsMatch) {
            try {
                await authHandlers.login(email, password);
            } catch (error) {
                console.log(error);
            }
        }
    }

    
</script>

<div class="container">
    <h1>{register ? "Register" : "Login"}</h1>
    <form>
        <label>
            <input bind:value={email} type="text" placeholder="Email">
        </label>
        <label>
            <input bind:value={password} type="password" placeholder="Password">
        </label>
    
        {#if register}
        <label>
            <input bind:value={confirmPassword} type="password" placeholder="Confirm Password">
        </label>
        {/if}
        
        <button on:click={handleSubmit}>Submit</button>
    </form>
    {#if register}
        <span>Already have an account?</span>
        <button on:click={() => {register = false;}}>Login</button>
    {:else}
        <span>Don't have an account?</span>
        <button on:click={() => {register = true;}}>Sign up</button>
    {/if}
    
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .container form {
        display: flex;
        flex-direction: column;
    }
</style>