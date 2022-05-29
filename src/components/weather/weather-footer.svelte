<script>
import HumidityIcon from '@assets/weather-icons/raindrops.svg?url';
import UVIcon from '@assets/weather-icons/uv-index.svg?url';
import WindIcon from '@assets/weather-icons/wind.svg?url';
import Card from "@components/ui/card.svelte";

export let weather
</script>

<Card>
	<div class="weather-container">
		<div class="weather-icon">
			<img src={UVIcon} alt="uv" />
			<span class="text"> UV Index </span>
			<span>{weather.uv}</span>
		</div>

		<div class="weather-icon">
			<img src={HumidityIcon} alt="humidity" />
			<span class="text"> Humidity </span>
			<span>{weather.humidity} %</span>
		</div>
	
		<div class="weather-icon">
			<img src={WindIcon} alt="wind" />
			<span class="text"> Windspeed </span>
			<span> {weather.windKph} km/h </span>
		</div>
	</div>
</Card>

<style scoped>
	* {
		color: inherit
	}

	.weather-container {
		display: flex;
		justify-content: space-evenly;
	}

	.weather-container .weather-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.weather-container .weather-icon .text {
		font-weight: bold;
	}

	.weather-container .weather-icon img {
		width: 50px;
	}
</style>
