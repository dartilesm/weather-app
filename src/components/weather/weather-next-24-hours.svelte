<script>
    import Card from "../ui/card.svelte";
import WeatherIcon from "./weather-icon.svelte";

    export let forecast
    export let weather

    const [todayWeather, tomorrowWeather] = forecast

    const next48Hours = [...todayWeather.hours, ...tomorrowWeather.hours]
    next48Hours.forEach(currentHour => {
        currentHour.time = new Date(`${currentHour.time}`).toLocaleTimeString('en-US', { hour: 'numeric' })
    })

    const currentTime = new Date(`${weather.lastUpdated}`).toLocaleTimeString('en-US', { hour: 'numeric' })
    const currentTimeIndex = next48Hours.findIndex(hour => hour.time === currentTime) + 1
    const next24Hours = next48Hours.slice(currentTimeIndex, currentTimeIndex + 24)
</script>

<Card title="Next 24 hours">
    <div class="weather-container">
        {#each next24Hours as hour}
            <div class="weather-hour" class:day={hour.isDay}>
                <span class="time">{hour.time}</span>
                <span class="temperature">{Math.floor(hour.tempC)}°C</span>
                <WeatherIcon name={hour.condition.text} isDay={hour.isDay} width={50} />
            </div>
        {/each}
    </div>
</Card>

<style scoped>
.weather-container {
    display: flex;
    overflow-x: auto;
}

.weather-hour {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
}

.time {
    margin: 1rem 0;
}

.temperature {
    font-size: 1.2rem;
}
</style>