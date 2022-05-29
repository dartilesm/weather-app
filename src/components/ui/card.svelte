<script>
    export let title
</script>

<div>
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
        background-color: rgba(0, 0, 0, .2);
        border-radius: 10px;
    }
</style>