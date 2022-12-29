<script>
	import { MicrophoneSolid } from 'svelte-awesome-icons';
	import { onMount } from 'svelte';
	import { lang, country, anim, results } from './stores';
	/**
	 * @type {SpeechRecognition} Ignoring type of recognition #typeScript Sucks
	 */
	let recognition;
	// let results = '';
	onMount(() => {
		const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
		recognition = new SpeechRecognition();
		console.log('foo');
		recognition.lang = $lang + '-' + $country;
		recognition.continuous = true;
		recognition.interimResults = true;
		// let final_transcript = '';
		// recognition.onstart = () => {
		// 	final_transcript = '';
		// };
		// recognition.onresult = (event) => {
		// 	let interim_transcript = '';
		// 	for (let i = event.resultIndex; i < event.results.length; ++i) {
		// 		if (event.results[i].isFinal) {
		// 			final_transcript += event.results[i][0].transcript;
		// 		} else {
		// 			interim_transcript += event.results[i][0].transcript;
		// 		}
		// 	}

		// 	results.set(interim_transcript);
		// };
		recognition.onresult = (event) => {
			let interim_transcript = '';
			const curr = event.resultIndex;
			const { transcript } = event.results[curr][0];
			interim_transcript+=transcript;
			results.set(interim_transcript);
		}
		// recognition.onend = () => {
		// 	results.set(final_transcript);
		// };
	});

	

	function handleClick() {
		if ($anim == '') {
			anim.set('animate-flicker');
			recognition.lang = $lang + '-' + $country;
			recognition.start();
		} else {
			anim.set('');
			recognition.stop();
		}
	}
</script>

<button id="speech" class="mic-circle" on:click={handleClick}>
	<div class={$anim}><MicrophoneSolid size="40" color="white" /></div>
</button>
<textarea name="" id="output" cols="30" rows="10" value = {$results}/>

<style>
	textarea {
		width: 88%;
		height: 10em;
		margin: 2% 6% 2% 6%;
		border-radius: 1%;
		border-color: black;
		box-shadow: 0.2em 0.2em 5px rgb(169, 169, 169);
		resize: none;
		font-family: 'Inter';
		font-size: 1em;
		padding: 1em;
	}
	.mic-circle {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		width: 4em;
		height: 4em;
		background-color: #0066ff;
		margin: auto;
		border: none;
	}
	@keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.animate-flicker {
		animation: flickerAnimation 1s infinite;
	}
</style>
