<script>
    import WeatherIcon from "@components/weather/weather-icon.svelte";
    import { getContext } from "svelte";

    export let weather
    export let location
    export let forecast

    const sticky = getContext('isStickyHeader')
    const [todayWeather, tomorrowWeather, dayAfterTomorrowWeather] = forecast;

    const localTime = new Date(`${location.localtime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
</script>

<div class="weather-header" class:sticky={$sticky}>
    <h1 class="location-name">{location.name}</h1>
    <h3 class="condition">{weather.condition.text}</h3>
    <div class="temperature">
        <div class="temperature-degree-container">
            <h2 class="temperature-degree">{Math.floor(weather.tempC)}°</h2>
            <div>
                <h4 class="feels-like">
                    {Math.floor(todayWeather.day.maxtempC)} C° / {Math.floor(todayWeather.day.mintempC)} C°
                </h4>
                <h4>
                    {localTime}
                </h4>
            </div>
        </div>
        <span class="weather-icon">
            <WeatherIcon name={weather.condition.text} isDay={weather.isDay} width={$sticky ? 75 : 150} />
        </span>
    </div>
    <!-- {#if !$sticky} -->
    <!-- {/if} -->
</div>

<style scoped>
    .weather-header {
        position: relative;
    }

    h1.location-name {
		font-weight: 500;
		color: inherit;
		text-transform: uppercase;
		padding: 16px 0 0 0;
        margin: auto;
        text-align: center;
        transition: all ease .5s;
	}

    
	h3.condition {
        font-weight: 600;
        letter-spacing: 5px;
        text-transform: uppercase;
        opacity: .3;
        font-size: 1rem;
        margin: .5rem 0;
        width: 100%;
        text-align: center;
        transition: all ease .5s;
	}

    .temperature {
        display: flex;
        justify-content: space-between;
    }

    .temperature-degree-container {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        transition: all ease .5s;
    }

    .temperature h2.temperature-degree {
        font-weight: 600;
        font-size: 120px;
        text-transform: uppercase;
        padding: 0;
        line-height: 100px;
        margin-top: 1.5rem;
    }
    .weather-header.sticky h1 {
        font-size: 1rem
    }

    .weather-header.sticky h3.condition {
        font-size: .7rem;
        margin: .3rem 0;
    }

    .weather-header.sticky h1 {
        font-size: 1rem
    }

    .weather-header.sticky .temperature-degree-container {
        flex-direction: row;
        column-gap: 1rem;
        align-items: center;
    }

    .weather-header.sticky .temperature-degree {
        font-size: 4rem;
        line-height: 4rem;
        margin: 0;
    }
</style>