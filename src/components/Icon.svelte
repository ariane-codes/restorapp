<script lang="ts">
    import {
        Mail,
        Meh,
        Key,
        User,
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
    };

    let icon = icons[name as string];

  </script>
  
  <svelte:component this="{icon}" {...$$restProps} />
  