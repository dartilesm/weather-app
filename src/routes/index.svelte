<script context="module">

	export async function load({ fetch, url }) {
		const locationUrl = url.searchParams.get('location')
		let locationData = {}
		if (locationUrl) {
			const [latitude, longitude] = locationUrl.split(',')
			locationData = { latitude, longitude }
		} else {
			locationData = await fetch('/api/get-location')
								.then(res => res.json())
		}

		const weatherResponse = await fetch(`/api/get-weather?q=${locationData.latitude} ${locationData.longitude}`)

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
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store';
	import { PlusIcon } from 'svelte-feather-icons'
	import WeatherHeader from '@components/weather/weather-header.svelte';
	import WeatherDetails from '@components/weather/weather-details.svelte';
	import WeatherBackground from '@components/weather/weather-background.svelte';
	import WeatherNext_24Hours from '@components/weather/weather-next-24-hours.svelte';

	export let weather
	export let location
	export let forecast

	let innerContainerEl

	const isStickyHeader = writable(false)
	setContext('isStickyHeader', isStickyHeader)

	function handleScroll () {
		$isStickyHeader = innerContainerEl.scrollTop > 400
	}

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

<WeatherBackground {weatherName} isDay={weather.isDay} solidBg={$isStickyHeader}>
	<div 
		class="inner-container {weather.isDay ? 'day' : 'night'} {$isStickyHeader ? 'solid-bg' : ''}" 
		bind:this={innerContainerEl} 
		on:scroll={handleScroll} 
	>
		<section class="header-container">
			<nav>
				<a href="/new-location">
					<PlusIcon />
				</a>
			</nav>
			<WeatherHeader {weather} {location} {forecast} />
		</section>
		<div class="content">
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

	.inner-container.solid-bg.day {
		background-color: #f7f7f7;
	}
	
	.inner-container.solid-bg.night {
		background-color: #242424;
	}

	.header-container {
		position: fixed;
		top: 0;
		z-index: 2;
		margin: 0;
    	width: 100%;
		transition: max-heght 0.5s ease;
		width: calc(100% - 32px);
		max-height: 260px;
		background-color: inherit;
	}

	.header-container nav {
		display: flex;
		justify-content: flex-end;
		padding-top: 1rem;
		transition: all ease .5s;
	}

	.header-container nav a {
		color: inherit;
		text-decoration: none;
	}

	.inner-container.solid-bg nav {
		padding-top: .5rem;
	}

	.inner-container.solid-bg .header-container {
		max-height: 200px;
		left: 0;
		width: 100%;
		padding: 16px 32px;
		transition: max-heght 0.5s ease;
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
