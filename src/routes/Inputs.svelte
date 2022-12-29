<script>
	import {CopyRegular} from 'svelte-awesome-icons';
	import {lang, country, results} from './stores';
	let language = 'en';
	let cont = 'IN';
	function handleChange(){
		lang.set(language);
		country.set(cont);
	}
	function handleClick(){
		navigator.clipboard.writeText($results)
		.then(()=>{
			alert("Text Copied Successfully!");
		})
		.catch(()=>{
			alert("Something went Wrong");
		});
		
	}
</script>

<div class="input">
	<div class="selects">
		<div class="droplan">
			<select id="Language" bind:value={language} on:change={handleChange}>
				<option value="en">English</option>
				<option value="hi">हिन्दी</option>
				<option value="te">తెలుగు</option>
				<option value="mr">मराठी</option>
				<option value="kn">ಕನ್ನಡ</option>
				<option value="ta">தமிழ்</option>
				<option value="ml">മലയാളം</option>
			</select>
		</div>
		<div class="dropcont">
			<select id="Country" bind:value={cont} on:change={handleChange}>
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
	</div>
	<div>
		<button on:click={handleClick} type="button" class="btn btn-primary"
			><CopyRegular size="20"/>Click to Copy</button
		>
	</div>
</div>

<style>
	.input {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
    margin: 0% 6%;
	}
  .selects{
    display: flex;
    flex-direction: row;
  }
	select {
		width: 14em;
		height: 2.5em;
		font-family: 'inter';
		margin: 0.3em;
	}
	button {
		width: 10em;
		height: 2.5em;
		margin: 0.3em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'Inter';
		font-weight: 600;
	}
	button:active {
		transform: scale(0.95);
		box-shadow: 2px 2px 5px black;
	}
	@media only screen and (max-width: 600px) {
		.input {
			flex-direction: column;
		}
		.selects{
			flex-direction: column;
		}
	}
</style>
