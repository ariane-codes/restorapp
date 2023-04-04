<script lang="ts">
    import Menu from "@smui/menu";
    import { Anchor, Corner } from '@smui/menu-surface';
    import List, {
    Item,
    Text,
    } from '@smui/list';

    import Brand from "./brand/Brand.svelte";
    import Button from "./button/Button.svelte";
	import { logout } from "$lib/utils/authUtils";
    export let shouldShowButton: boolean;
    export let currentUser: {uid: string; email: string; name: string} | null;

    $: userFirstName = currentUser?.name.split(" ")[0] ?? "";

    let menu: Menu;
    let anchor: HTMLDivElement;
    let anchorClasses: { [key: string]: boolean } = {};

    const openMenu = () => { menu.setOpen(true); };
    
</script>

<header class="header-wrapper">
    <Brand height={50} variant="BrandWithCircle" redirectsToHome={true}/>
    {#if shouldShowButton}
        {#if currentUser}
            <div
                class={Object.keys(anchorClasses).join(" ")}
                use:Anchor={{
                    addClass: (className) => {
                        anchorClasses[className] = true;
                    },
                    removeClass: (className) => {
                        delete anchorClasses[className];
                        anchorClasses = anchorClasses;
                    },
                }}
                bind:this={anchor}
            >
                <Button label={userFirstName} on:click={openMenu} />
                <Menu
                    bind:this={menu}
                    anchor={false}
                    bind:anchorElement={anchor}
                    anchorCorner={Corner.BOTTOM_LEFT}
                >
                    <List>
                        <Item on:SMUI:action={logout}>
                            <Text>Logout</Text>
                        </Item>
                    </List>
                </Menu>
            </div>
            
        {:else}
            <Button href={"/login"} label={"Login"}/>
        {/if}
        
    {/if}
    
</header>

<style lang="scss">
    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }
</style>
