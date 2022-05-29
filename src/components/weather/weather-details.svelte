<script>
    import Card from '@components/ui/card.svelte';
    import SunriseIcon from '@assets/weather-icons/sunrise.svg?url'
    import SunsetIcon from '@assets/weather-icons/sunset.svg?url'
    import MoonriseIcon from '@assets/weather-icons/moonrise.svg?url'
    import MoonsetIcon from '@assets/weather-icons/moonset.svg?url'
    import HumidityIcon from '@assets/weather-icons/raindrops.svg?url';
    import UVIcon from '@assets/weather-icons/uv-index.svg?url';
    import WindIcon from '@assets/weather-icons/wind.svg?url';
    import BarometerIcon from '@assets/weather-icons/barometer.svg?url';

    export let forecast
    export let weather

    const [todayForecastWeather] = forecast

</script>

<Card title="Details">
    <div class="weather-container">
        <div class="weather-astro-icon">
            <img src={UVIcon} alt="uv" />
			<span class="text"> UV Index </span>
			<span>{weather.uv}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={HumidityIcon} alt="humidity" />
			<span class="text"> Humidity </span>
			<span>{weather.humidity} %</span>
        </div>
        <div class="weather-astro-icon">
            <img src={WindIcon} alt="wind" />
			<span class="text"> Windspeed </span>
			<span> {weather.windKph} km/h </span>
        </div>
        <div class="weather-astro-icon">
            <img src={BarometerIcon} alt="barometer" />
			<span class="text"> Pressure </span>
			<span> {weather.pressureMb} Millibar </span>
        </div>
        <div class="weather-astro-icon">
            <img src={SunriseIcon} alt="sunrise" />
            <span class="text">Sunrise</span>
            <span>{todayForecastWeather.astro.sunrise}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={SunsetIcon} alt="sunset" />
            <span class="text">Sunset</span>
            <span>{todayForecastWeather.astro.sunset}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={MoonriseIcon} alt="moonrise" />
            <span class="text">Moonrise</span>
            <span>{todayForecastWeather.astro.moonrise}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={MoonsetIcon} alt="moonset" />
            <span class="text">Moonset</span>
            <span>{todayForecastWeather.astro.moonset}</span>
        </div>
    </div>
</Card>

<style scoped>

.weather-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 3rem;
}

.weather-container .weather-astro-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 21%;
}

.weather-container .weather-astro-icon .text {
    font-weight: bold;
}

.weather-container .weather-astro-icon img {
    width: 70px;
}
</style>