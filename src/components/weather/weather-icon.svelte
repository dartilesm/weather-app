<script>
	import getWeatherIconName from '@utils/weather-icons';
	export let name;
	export let isDay;
	export let width = 150

	const iconName = getWeatherIconName({ name, isDay })
	const iconPromise = import(`../../assets/weather-icons/${iconName}.svg`)
								.then(({ default: icon }) => icon)
</script>

{#await iconPromise then icon}
	<img src={icon} alt="iconName" {width} />
{/await}