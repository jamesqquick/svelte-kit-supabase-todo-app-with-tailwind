<script>
    import "../app.css";
    import {supabase} from "../supabase.js";
    import {user} from "../stores/authStore.js";
    import Auth from "../components/Auth.svelte";
    import Navbar from "../components/Navbar.svelte";
    import { loadTodos } from "../stores/todoStore.js";

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange(( _, session) => {
        user.set(session?.user);
        if(session?.user){
            loadTodos();
        }
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