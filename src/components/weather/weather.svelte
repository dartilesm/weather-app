<script>
    import { getContext } from "svelte";

    import { PlusIcon } from "svelte-feather-icons";
    import WeatherBackground from "./weather-background.svelte";
    import WeatherDetails from "./weather-details.svelte";
    import WeatherHeader from "./weather-header.svelte";
    import WeatherNext_24Hours from "./weather-next-24-hours.svelte";


    export let weatherCity
    export let isActive
    export let activeWeatherIndex

    const sticky = getContext('isStickyHeader')

    function handleScroll (event) {
		const innerContainerEl = event.target
		$sticky[`header-${innerContainerEl.id}`] = innerContainerEl.scrollTop > 400
	}

    const weatherBgList = {
		'Sunny': 'sunny',
		'cloudy': 'cloudy',
		'day': 'cloudy',
		'rain': 'stormy',
		'night': 'night',
		'snow': 'frost',
		'light': 'cloudy',
		'clear': 'night',
		'overcast': 'stormy',
        'mist': 'frost'
	}

	const weatherBgNames = Object.keys(weatherBgList)

	const weatherBgName = (weather) => {
		const name = weatherBgNames.find(weatherName => 
            weather.condition.text.toLowerCase().includes(weatherName.toLowerCase()))
		return weatherBgList[name] || ''
	}
</script>


<WeatherBackground weatherName={weatherBgName(weatherCity.current)} isDay={weatherCity.current.isDay} solidBg={isActive && $sticky[`header-${activeWeatherIndex}`]}>
    <section 
        class="header-container {weatherCity.current.isDay ? 'day' : 'night'}"
        class:solid-bg={isActive && $sticky[`header-${activeWeatherIndex}`]}	
    >
        <nav>
            <a href="/new-location">
                <PlusIcon />
            </a>
        </nav>
        <WeatherHeader weather={weatherCity.current} location={weatherCity.location} forecast={weatherCity.forecast} {activeWeatherIndex}/>
    </section>
    <div 
        class="inner-container {weatherCity.current.isDay ? 'day' : 'night'}"  
        class:solid-bg={isActive && $sticky[`header-${activeWeatherIndex}`]}
        id={activeWeatherIndex}
        on:scroll={handleScroll} 
    >
        <div class="content">
            <section>
                <WeatherDetails forecast={weatherCity.forecast} weather={weatherCity.current} {activeWeatherIndex}/>
            </section>
            <section>
                <WeatherNext_24Hours forecast={weatherCity.forecast} weather={weatherCity.current} {activeWeatherIndex}/>
            </section>
        </div>
    </div>
</WeatherBackground>

<style>
    	.inner-container {
		height: 100%;
		width: 100%;
		z-index: 3;
		position: absolute;
		padding: 16px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.inner-container.solid-bg.day {
		background-color: #f7f7f7;
	}
	
	.inner-container.solid-bg.night {
		background-color: #242424;
	}

	.header-container {
		position: absolute;
		top: 0;
		z-index: 5;
		margin: 0;
    	width: 100%;
		padding: 48px 16px 16px 16px;
		transition: max-heght 0.5s ease;
		max-height: 330px;
		background-color: inherit;
	}

	.header-container nav {
		position: absolute;
		right: 20px;
		top: 19px;
		z-index: 15;
		display: flex;
		justify-content: flex-end;
		transition: all ease .5s;
	}

	.header-container nav a {
		color: inherit;
		text-decoration: none;
	}

	.header-container.solid-bg  {
		max-height: 190px;
		left: 0;
		width: 100%;
		padding: 16px;
		transition: max-heght 0.5s ease;
	}

	.header-container.solid-bg.day {
		background-color: #f7f7f7;
	}

	.header-container.solid-bg.night {
		background-color: #242424;
	}

	.content {
		position: absolute;
		width: 100%;
		left: 0;
		padding: 1rem;
		border-radius: 15px 15px 0 0;
		top: 80%;
	}

	.inner-container.day .content {
		color: #383838;
		background: #f7f7f7;
	}

	.inner-container.night .content {
		color: #d5d5d5;
		background: #242424;
	}

	.inner-container.solid-bg .content {
		border-radius: 0;
		background: transparent
	}
	section {
		margin: 1rem 0;
		z-index: 3;
	}
</style>