<script lang="ts">
    import {
        Mail,
        Meh
    } from 'lucide-svelte';
    
    export let name: string | undefined;

    interface IIcons {
        [key: string]: any;
    }

    let icons: IIcons = {
        "Mail": Mail,
        "Meh": Meh
    };

    let icon = icons[name as string];

  </script>
  
  <svelte:component this="{icon}" {...$$restProps} />
  