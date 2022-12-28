<script>
	import Inputs from './Inputs.svelte';

	import Functionality from './Functionality.svelte';

	import Description from './Description.svelte';

	import NavBar from './Navbar.svelte';
	
</script>

<svelte:head>
	<!-- bootstrap -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
		crossorigin="anonymous"
	/>
	<!-- JavaScript Bundle with Popper -->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
		crossorigin="anonymous"
	></script>
	<!-- Googel fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" /><link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/><link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<script src = "./sR.js">
	</script>	
</svelte:head>
<div class="d-flex flex-column justify-content-center ">
	<NavBar />
	<Description /> 
	<Functionality /> 
	<Inputs /> 
</div>


<style>
</style>
