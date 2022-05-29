export async function get() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
			'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
		}
	};
	
	
	// const location = await fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8', options)
	// 	.then(res => res.json())

	const location = {
		ip: '190.195.10.159',
		city: 'Auckland',
		country: 'New Zeland'
	}

	return {
		status: 200,
		body: location
	}
}