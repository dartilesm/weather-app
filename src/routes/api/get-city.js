const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
	}
};

export async function get(event) {
	const { searchParams } = event.url;
	const query = searchParams.get('q');
    
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`,
		FETCH_OPTIONS
	);

	const data = await response.json();

	return {
		status: 200,
		body: data
	};
}
