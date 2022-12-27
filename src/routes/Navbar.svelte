<script>
	var org = 'Alhansat';
	
</script>

<nav class="navbar FFFFFF sticky-top">
	<div class="container-fluid">
		<span class="d-flex justify-content-start">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasNavbar"
				aria-controls="offcanvasNavbar"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<a class="navbar-brand" href="/" style="color:#1D63E9; font-size: 38.88;font-family:inter">DEVELOPERSTAR</a>
		
		</span>
		
		

		<span class="d-flex justify-content-end" style="font-size:24.55; font-family:inter" >
			<a href="/" class="nav-link px-1" >Help</a>
			<a href="/" class="nav-link px-1">Download</a>
            <a href="/" class="nav-link px-1">
            <img src="icon.jpg" alt="userImage" height="30px" width="30px"></a>
		</span>
		
		<div
			class="offcanvas offcanvas-start"
			tabindex="-1"
			id="offcanvasNavbar"
			aria-labelledby="offcanvasNavbarLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasNavbarLabel">DEVELOPERSTAR</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/">Link</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="/"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Dropdown
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="/">Action</a></li>
							<li><a class="dropdown-item" href="/">Another action</a></li>
							<li>
								<hr class="dropdown-divider" />
							</li>
							<li><a class="dropdown-item" href="/">Something else here</a></li>
						</ul>
					</li>
				</ul>
				<form class="d-flex mt-3" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</div>
</nav>

<style>
	.navbar{
		position: relative;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

	}
	.navbar::before,
	.navbar::after{
		content: '';
		position: absolute;
		z-index: -1;
		box-shadow: 0 0 20px rgba(0, 0,0, 0.8);
		bottom: 0;
		left: 10px;
		right: 10px;
		border-radius: 100px / 10px;
	}
</style>

