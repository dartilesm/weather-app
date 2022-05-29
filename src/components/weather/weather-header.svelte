<script>
    import WeatherIcon from "@components/weather/weather-icon.svelte";
    export let weather
    export let location
    export let forecast

    const [todayWeather, tomorrowWeather, dayAfterTomorrowWeather] = forecast;
    // console.log({ todayWeather, tomorrowWeather, dayAfterTomorrowWeather });
</script>

<div class="weather-header">
    <h1 class="location-name">{location.name}</h1>
    <h3 class="condition">{weather.condition.text}</h3>
    <div class="temperature">
        <h2 class="temperature-degree">{Math.floor(weather.tempC)}°</h2>
        <span class="weather-icon">
            <WeatherIcon name={weather.condition.text} isDay={weather.isDay} />
        </span>
    </div>
    <span>
        {Math.floor(todayWeather.day.maxtempC)} C° / {Math.floor(todayWeather.day.mintempC)} C°
        Feels like {Math.floor(weather.feelslikeC)} C°
    </span>
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
	}

    .temperature {
        display: flex;
        justify-content: space-between;
    }

    .temperature h2.temperature-degree {
        font-weight: 600;
        font-size: 120px;
        text-transform: uppercase;
        padding: 0;
        line-height: 100px;
        margin-top: 1.5rem;
    }
</style>