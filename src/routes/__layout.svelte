<script>
    import "../app.css";
    import {supabase} from "../supabase.js";
    import {user} from "../stores/authStore.js";
    import Auth from "../components/Auth.svelte";
    import Navbar from "../components/Navbar.svelte";

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange(( _, session) => {
        user.set(session?.user);
    });
</script>

<div class="container mx-auto my-6 max-w-lg">        
    {#if $user}
        <Navbar/>
        <slot></slot>
    {:else }
        <Auth/>
    {/if}
</div>