<div>
	<slot />
</div>

<style>
	:global(body) {
		background: #fdfdfd;
		display: grid;
		font-family: 'Open Sans', sans-serif;;
		place-content: center;
		margin: 0;
		min-height: 100vh;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5) {
		margin: 0;
	}

	div {
		width: 800px;
		height: 100vh;
		max-width: 100vw;
		display: block;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		position: relative;
	}
</style>
