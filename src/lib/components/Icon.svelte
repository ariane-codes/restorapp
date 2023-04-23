<script lang="ts">
    import {
        Mail,
        Meh,
        Key,
        User,
        Loader2,
        Search,
        Plus,
		Star
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
        "Search": Search,
        "Plus": Plus,
        "Star": Star
    };

    let icon = icons[name as string];

  </script>
  
  <svelte:component this="{icon}" {...$$restProps}/>
  