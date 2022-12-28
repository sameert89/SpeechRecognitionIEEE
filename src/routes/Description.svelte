<script>
	import status from './Functionality.svelte';
	import { anim } from './stores';
	let Description = '';
	if ($anim == '') {
		Description = 'Click on the microphone icon and start speaking!';
	} else {
		Description = 'Listening, tap the microphone to cancel!';
	}
</script>

<div class="d-flex flex-column ">
	<div class="heading d-flex justify-content-center">Speech <br /> Recognition</div>
	<div class="description d-flex justify-content-center">
		{#if $anim == ''}
			Click on the microphone icon and start speaking!
		{:else}
			Listening, tap the microphone to cancel!
		{/if}
	</div>
</div>

<style>
	.heading {
		font-family: 'Inter';
		font-size: 4.5em;
		font-weight: 800;
		text-align: center;
		line-height: 1em;
		margin: 3% 0%;
	}
	.description {
		font-family: 'Inter';
		font-size: 1.5em;
		color: gray;
		font-weight: 600;
		margin-bottom: 1em;
	}
</style>
