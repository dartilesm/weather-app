<script>
	import getWeatherIconName from '@utils/weather-icons';
	export let name;
	export let isDay;
	export let width = 150

	const iconName = getWeatherIconName({ name, isDay })
	const componentPromise = import(`../../assets/weather-icons/${iconName}.svg?url`)
</script>

{#await componentPromise then component}
	<img src={component.default} alt="iconName" {width} />
{/await}

<style>
	img {
		height: auto;
	}
</style>
