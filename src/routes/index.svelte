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
	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Virtual, Pagination } from 'swiper'

	// Import Swiper styles
	import 'swiper/css';

	export let weather
	export let location
	export let forecast

	const isStickyHeader = writable(false)
	setContext('isStickyHeader', isStickyHeader)

	function handleScroll (event) {
		const innerContainerEl = event.target
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

	const virtualSlides = Array.from({ length: 3 }).map((el, index) => `Slide ${index + 1}`)
</script>
<Swiper
	modules={[Virtual, Pagination]}
    slidesPerView={1}
	autoHeight
	pagination
	class="swiper-container-weather {weather.isDay ? 'day' : 'night'} {$isStickyHeader ? 'solid-bg' : ''}"
	virtual={{ slides: virtualSlides }}
    let:virtualData={{ slides, offset, from }}
  >
  {#each slides as slide, index (from + index)}
  	<SwiperSlide
		style={`left: ${offset}px`}
	  	virtualIndex={from + index}
	  >
		<WeatherBackground {weatherName} isDay={weather.isDay} solidBg={$isStickyHeader}>
			<section 
				class="header-container {weather.isDay ? 'day' : 'night'}"
				class:solid-bg={$isStickyHeader}
			>
				<nav>
					<a href="/new-location">
						<PlusIcon />
					</a>
				</nav>
				<WeatherHeader {weather} {location} {forecast} />
			</section>
			<div 
				class="inner-container {weather.isDay ? 'day' : 'night'}"  
				class:solid-bg={$isStickyHeader}
				on:scroll={handleScroll} 
			>
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
	</SwiperSlide>
  {/each}
</Swiper>

<style>
	:global(.swiper-autoheight, .swiper-autoheight .swiper-slide) {
		height: 100vh;
	}

	:global(.swiper-pagination) {
		top: 19px;
		position: absolute;
		width: 100%;
		height: 20px;
		z-index: 10;
		display: flex;
		gap: 5px;
		justify-content: center;
		align-items: center;
	}

	:global(.swiper-pagination .swiper-pagination-bullet) {
		width: 10px;
		height: 10px;
		border-radius: 10px;
		background: #fff;
		opacity: 0.5;
		margin: 0 5px;
	}

	:global(.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active) {
		opacity: 1;
	}

	:global(.swiper-container-weather.solid-bg.day .swiper-pagination .swiper-pagination-bullet) {
		background: #383838;
	}

	:global(.swiper-container-weather.solid-bg.day .swiper-pagination .swiper-pagination-bullet) {
		background: #383838;
	}
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
		position: absolute;
		top: 0;
		z-index: 5;
		margin: 0;
    	width: 100%;
		padding: 16px;
		transition: max-heght 0.5s ease;
		max-height: 260px;
		background-color: inherit;
	}

	.header-container nav {
		display: flex;
		justify-content: flex-end;
		transition: all ease .5s;
	}

	.header-container nav a {
		color: inherit;
		text-decoration: none;
	}

	.header-container.solid-bg  {
		max-height: 200px;
		left: 0;
		width: 100%;
		padding: 16px;
		transition: max-heght 0.5s ease;
	}

	.header-container.solid-bg.day {
		background-color: #f7f7f7;
	}

	.header-container.solid-bg.night {
		background-color: #242424;
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
