<script context="module">

	export async function load({ fetch }) {
		const locationResponse = await fetch('/api/get-location')
								.then(res => res.json())

		const weatherResponse = await fetch(`/api/get-weather?q=${locationResponse.city} ${locationResponse.country}`)

		const { location, current, forecast } = await weatherResponse.json()

		return {
			status: weatherResponse.status,
			props: {
				location,
				weather: current, 
				forecast
			}
		}
	}
</script>

<script>
	import WeatherHeader from '@components/weather/weather-header.svelte';
	import WeatherFooter from '@components/weather/weather-footer.svelte';
	import WeatherDetails from '@components/weather/weather-details.svelte';
	import WeatherBackground from '@components/ui/weather-background.svelte';
	import WeatherNext_24Hours from '@components/weather/weather-next-24-hours.svelte';

	export let weather
	export let location
	export let forecast

	console.log({ weather, location, forecast })
	const weatherBgList = {
		'Sunny': 'sunny',
		'cloudy': 'cloudy',
		'day': 'cloudy',
		'rain': 'stormy',
		'night': 'night',
		'snow': 'frost',
		'Light': 'cloudy',
		'Clear': 'night',
		'Overcast': 'stormy',
	}

	const weatherBgNames = Object.keys(weatherBgList)

	const weatherBgName = weatherBgNames.find(weatherName => weather.condition.text.includes(weatherName))

	const weatherName = weatherBgList[weatherBgName] || ''
</script>

<WeatherBackground {weatherName}>
	<div class="inner-container">
		<section class="header-container">
			<WeatherHeader {weather} {location} {forecast} />
		</section>
		<div class="content" class:day={weather.isDay}>
			<section>
				<WeatherDetails {forecast} {weather} />
			</section>
			<section>
				<WeatherNext_24Hours {forecast} {weather} />
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

	.content {
		position: absolute;
		width: 100%;
		left: 0;
		padding: 1rem;
		color: #d5d5d5;
		background-color: #303030;
		border-radius: 15px 15px 0 0;
	}

	.content.day {
		color: #383838;
		background-color: #ffffff;
	}

	.header-container {
		height: 80%;
	}


	section {
		margin: 1rem 0;
		z-index: 3;
	}

</style>
