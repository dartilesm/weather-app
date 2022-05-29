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
	import WeatherAstro from '@components/weather/weather-astro.svelte';
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
		<section>
			<WeatherNext_24Hours {forecast} {weather} />
		</section>
		<section>
			<WeatherAstro {forecast} />
		</section>
		<section>
			<WeatherFooter {weather} />
		</section>
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

	.header-container {
		height: 80%;
	}


	section {
		margin: 1rem 0;
		z-index: 3;
	}

</style>
