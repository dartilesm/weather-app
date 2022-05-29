<script>

    let searchTerm
    let typingTimeout
    let cities = []

    function handleChange () {
        clearTimeout(typingTimeout)
        typingTimeout = setTimeout(async () => {
            cities = await fetch(`/api/get-city?q=${searchTerm}`).then(res => res.json())
            console.log(cities)
        }, 1000)
    }
</script>


<div class="container">
    <input 
        type="text" 
        on:change={handleChange} 
        bind:value={searchTerm} 
        placeholder="Search for a city..." 
        autocomplete="none"
    />
    
    <ul>
        {#each cities as city}
            <li>
                <a href="/?location={city.lat},{city.lon}">{city.name}, {city.region}, {city.country}</a>
            </li>
        {/each}
    </ul>
</div>

<style scoped>
.container {
    padding: 16px;
    height: 100vh;
    width: 100vw;
}

.container input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: .8rem;
    width: 100%;
}

ul {
    padding: 0;
}

ul li {
    list-style: none;
    background-color: whitesmoke;
    margin: 1rem 0;
    border-radius: 8px;
}

ul li a {
    text-decoration: none;
    color: black;
    padding: 1rem;
    display: block;
    width: 100%;
}
</style>