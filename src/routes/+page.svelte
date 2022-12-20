<script>
  import Description from './Description.svelte';

	import NavBar from './Navbar.svelte';

	var org = 'Alhansat';
</script>

<svelte:head>
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
    <!-- font-awesome -->
    <script src="https://kit.fontawesome.com/529ac0b381.js" crossorigin="anonymous"></script>
</svelte:head>

<NavBar />
<Description/>


<div><i class="fa-solid fa-microphone"></i></div>
<textarea name="" id="" cols="30" rows="10"></textarea>
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Language
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/">Action</a></li>
      <li><a class="dropdown-item" href="/">Another action</a></li>
      <li><a class="dropdown-item" href="/">Something else here</a></li>
    </ul>
  </div>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Country
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/">Action</a></li>
      <li><a class="dropdown-item" href="/">Another action</a></li>
      <li><a class="dropdown-item" href="/">Something else here</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-primary"><i class="fa-solid fa-download"></i>download text</button>
<style>
    
</style>
