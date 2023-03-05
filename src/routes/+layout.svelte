<script>
  import { page } from "$app/stores";


    import { auth } from "$lib/firebase/firebase.client";
    import { onMount } from "svelte";
    import { authStore } from "$stores/authStore";
    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            authStore.update((curr) => {
                return {...curr, isLoading: false, currentUser: user};
            })
        })
    })

</script>


<main class="mainContainer">
    
    <slot/>
</main>

<style>
    .mainContainer {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>