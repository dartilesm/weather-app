<script>
    import Card from '@components/ui/card.svelte';
    import SunriseIcon from '@assets/weather-icons/sunrise.svg'
    import SunsetIcon from '@assets/weather-icons/sunset.svg'
    import MoonriseIcon from '@assets/weather-icons/moonrise.svg'
    import MoonsetIcon from '@assets/weather-icons/moonset.svg'
    import HumidityIcon from '@assets/weather-icons/raindrops.svg';
    import UVIcon from '@assets/weather-icons/uv-index.svg';
    import WindIcon from '@assets/weather-icons/wind.svg';
    import BarometerIcon from '@assets/weather-icons/barometer.svg';
    import { getContext } from 'svelte';

    export let forecast
    export let weather

    const stickyHeader = getContext('isStickyHeader')

    const [todayForecastWeather] = forecast

</script>

<Card title="Details" class="card {weather.isDay ? 'day' : 'night'} {$stickyHeader ? 'bg' : ''}">
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
			<span> {Math.floor(weather.windKph)} km/h </span>
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
:global(.card) {
    transition: all ease .5s;
}

:global(.card.day.bg) {
    background: #ffffff;
}

:global(.card.night.bg) {
    background: #303030;
}
.weather-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 3rem;
    column-gap: 1rem;
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