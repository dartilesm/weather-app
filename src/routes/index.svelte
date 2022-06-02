<script context="module">
	import { weatherCities } from '@store/weather-store';

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
		weatherCities.update(_weatherCities => [
			{
				location,
				current,
				forecast
			},
			..._weatherCities
		])
		return {
			status: weatherResponse.status
		}
	}
</script>

<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store';
	import Weather from '@components/weather/weather.svelte';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Virtual, Pagination } from 'swiper'

	import 'swiper/css';

	const isStickyHeader = writable({ })
	setContext('isStickyHeader', isStickyHeader)

</script>

<svelte:head>
	<title>Weather App</title>
</svelte:head>
<Swiper
	modules={[Virtual, Pagination]}
    slidesPerView={1}
	autoHeight
	pagination
	class="swiper-container-weather"
	virtual={{ slides: $weatherCities }}
    let:virtualData={{ slides, offset, from }}
  >
  {#each slides as weatherCity, index (from + index)}
  	<SwiperSlide
		style={`left: ${offset}px`}
	  	virtualIndex={from + index}
		let:data="{{ isActive }}"
	  >
		<Weather {weatherCity} {isActive} activeWeatherIndex={index} />
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
		width: auto;
		height: 20px;
		z-index: 10;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
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

</style>
