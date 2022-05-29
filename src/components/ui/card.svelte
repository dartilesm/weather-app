<script>
    export let title
</script>

<div class={$$props.class}>
    {#if title}
        <span class="title">{title}</span>
    {/if}
    <slot />
</div>

<style scoped>  
    .title {
        font-size: 1.2rem;
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    div {
        width: 100%;
        height: auto;
        padding: 1rem;
        border-radius: 10px;
    }
</style>