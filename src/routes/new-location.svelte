<script>
    import citiesList from 'cities.json'

    let searchTerm
    let cities = []

    function handleInput () {
        cities = citiesList
        .filter(city => {
            return city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        })
        .slice(0, 20)
    }
</script>


<div class="container">
    <input 
        type="text" 
        on:input={handleInput} 
        bind:value={searchTerm} 
        placeholder="Search for a city..." 
        autocomplete="none"
    />
    
    <ul>
        {#each cities as city}
            <li>
                <a href="/?location={city.lat},{city.lng}">{city.name}, {city.country}</a>
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
    padding: 1rem;
    width: 100%;
    font-size: 1rem;
}

ul {
    padding: 0;
}

ul li {
    list-style: none;
    background-color: whitesmoke;
    margin: .5rem 0;
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