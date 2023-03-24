
<Button
    on:click
    variant="outlined"
    class="button-rounded primary"
>
<Label>{label}</Label>
</Button>

  
  
<script lang="ts">
    import "./Button.scss";
    import Button, { Label, Icon } from '@smui/button';
    export let label: string;
</script>
