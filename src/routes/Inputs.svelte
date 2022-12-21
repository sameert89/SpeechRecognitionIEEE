<script>
  import Functionality from './Functionality.svelte';

  import Description from './Description.svelte';

	import NavBar from './Navbar.svelte';

	var org = 'Alhansat';
</script>

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
  <button type="button" class="btn btn-primary"><i class="fa-solid fa-download"></i>Copy Text</button>

<style>

  select{
    width: 300px;
    height: 30px;
    position: relative;
    left: 300px;
    top: 20px;
  }

  .dropcont{
    position: relative;
    left: 330px;
    top: -30.2px;
  }

  button{
    position: relative;
    left: 1071px;
    top: -45px;
    width: 150px;
    color: #fff;
    font-weight: bold;
  }

  button:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 5px black;
  }
  
</style>

