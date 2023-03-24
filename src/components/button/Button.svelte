
<Button
    on:click
    variant="outlined"
    class="button-rounded primary"
    {href}
>
<Label>{label}</Label>
</Button>

  
  
<script lang="ts">
    import "./Button.scss";
    import Button, { Label, Icon } from '@smui/button';
    export let label: string;
    export let href: string | undefined = undefined;
</script>
