const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '60fce0329amsh8663cda1ec59c3ap1db73fjsn5f1042d0db75'
	}
};

export async function get(event) {
	const { searchParams } = event.url;
	const query = searchParams.get('q');

	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=7`,
		FETCH_OPTIONS
	);

	const data = await response.json();
	
	const { location, current, forecast } = data;


	const transformToCamelCase = string => string.replace(/_([a-z])/g, (m, p1) => p1.toUpperCase())

	const transformAllKeysToCamelCase = (obj) => {
		const keyValues = Object.entries(obj);

		return keyValues.reduce((Obj, keyValue) => {
			const [key, value] = keyValue;
			Obj = {
				...Obj,
				[transformToCamelCase(key)]: value
			}
			return Obj;
		}, { })
	}

	const body = {
		location: {
			...transformAllKeysToCamelCase(location)
		},
		current: {
			...transformAllKeysToCamelCase(current)
		},
		forecast: forecast.forecastday.map(weather => {
			const { hour: hours, day, ...restWeather } = weather;
			return {
				...restWeather,
				day: {
					...transformAllKeysToCamelCase(day)
				},
				hours: hours.map(currentHour => ({
					...transformAllKeysToCamelCase(currentHour)
				}))
			}
		})
	};

	console.log(body)

	return {
		status: 200,
		body
	};
}
