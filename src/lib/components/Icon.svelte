<script lang="ts">
    import {
        Mail,
        Meh,
        Key,
        User,
        Loader2,
        Search
    } from 'lucide-svelte';
    
    export let name: string | undefined;

    interface IIcons {
        [key: string]: any;
    }

    let icons: IIcons = {
        "Mail": Mail,
        "Meh": Meh,
        "Key": Key,
        "User": User,
        "Loader": Loader2,
        "Search": Search
    };

    let icon = icons[name as string];

  </script>
  
  <svelte:component this="{icon}" {...$$restProps}/>
  