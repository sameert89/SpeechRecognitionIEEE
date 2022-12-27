<script>
	import Functionality from './Functionality.svelte';

	import Description from './Description.svelte';

	import NavBar from './Navbar.svelte';

	var org = 'Alhansat';
</script>

<div class="input">
	<div class="droplan">
		<select id="Language">
			<option value="1">English</option>
			<option value="2">हिन्दी</option>
			<option value="3">తెలుగు</option>
			<option value="4">मराठी</option>
			<option value="5">ಕನ್ನಡ</option>
			<option value="6">தமிழ்</option>
			<option value="7">മലയാളം</option>
		</select>
		&nbsp;&nbsp;
	</div>
	<div class="dropcont">
		<select id="Country">
			<option value="IN">India</option>
			<option value="AU">Australia</option>
			<option value="US">United States</option>
			<option value="UK">United kingdom</option>
			<option value="SA">South Africa</option>
			<option value="CA">Canada</option>
			<option value="KE">Kenya</option>
			<option value="TZ">Tanzania</option>
			<option value="GH">Ghana</option>
			<option value="NZ">New Zealand</option>
			<option value="NG">Nigeria</option>
			<option value="PH">Philippines</option>
		</select>
	</div>
	<button type="button" class="btn btn-primary">Copy Text</button>
</div>

<style>
	  .input{
    display: flex;
    position: relative;
    left: 100px;
  }
  select{
    width: 400px;
    height: 30px;
    position: relative;
  }
  button{
    display: inline-flex;
    padding: 5px 60px 5px 60px;
	position: relative;
	top: -2px;
	left: 150px;
  }
  button:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 5px black;
  }
  @media only screen and (max-width: 600px) {
    .input{
    display: inline-block;
    position: relative;
    left: 90px;
  }
  select{
    width: 300px;
    height: 30px;
    position: relative;
  }
  button{
	padding: 5px 40px 5px 40px;
    position: relative;
    left: 75px;
    top: 7px;
  }
  button:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 5px black;
  }

  }
  
</style>
