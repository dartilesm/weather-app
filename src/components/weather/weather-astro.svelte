<script>
    import Card from '@components/ui/card.svelte';
    import SunriseIcon from '@assets/weather-icons/sunrise.svg?url'
    import SunsetIcon from '@assets/weather-icons/sunset.svg?url'
    import MoonriseIcon from '@assets/weather-icons/moonrise.svg?url'
    import MoonsetIcon from '@assets/weather-icons/moonset.svg?url'
    export let forecast

    const [weather] = forecast
</script>

<Card title="Astronomical">
    <div class="weather-container">
        <div class="weather-astro-icon">
            <img src={SunriseIcon} alt="sunrise" />
            <span class="text">Sunrise</span>
            <span>{weather.astro.sunrise}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={SunsetIcon} alt="sunset" />
            <span class="text">Sunset</span>
            <span>{weather.astro.sunset}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={MoonriseIcon} alt="moonrise" />
            <span class="text">Moonrise</span>
            <span>{weather.astro.moonrise}</span>
        </div>
        <div class="weather-astro-icon">
            <img src={MoonsetIcon} alt="moonset" />
            <span class="text">Moonset</span>
            <span>{weather.astro.moonset}</span>
        </div>
    </div>
</Card>

<style scoped>

.weather-container {
    display: flex;
    justify-content: space-between;
}

.weather-container .weather-astro-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.weather-container .weather-astro-icon .text {
    font-weight: bold;
}

.weather-container .weather-astro-icon img {
    width: 70px;
}
</style>