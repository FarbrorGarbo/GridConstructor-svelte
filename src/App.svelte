
<script lang="ts">
	import {SettingsDialog} from "./modules/SettingsDialog";
	// export let name: string;
	let scale = 1;
	let settingsInstance: SettingsDialog | null;

	const toggleSettings = (event: any) => {
		event.preventDefault();
		if (settingsInstance) {
			settingsInstance = null;
		} else {
			settingsInstance = new SettingsDialog();
		}
		// showAddPoint(null);
		// if (selectedPointInstance) {
		// 	selectedPointInstance.cleanUp();
		// 	selectPoint(null);
		// }
	}

	const handleMouseMove = (e: MouseEvent) => {
		// console.log(e.clientX);
	};
	const handleZoom = (event: WheelEvent) => {
		let newScale = scale - event.deltaY * 0.0005;
		if (newScale < 0.2) newScale = 0.2;
		scale = newScale;
		console.log(scale);
	}
</script>





<div
	class="App"
	on:mousemove={handleMouseMove}
	on:wheel={handleZoom}>
	<div class="menu">
		<button on:click={toggleSettings}>{settingsInstance ? "Back" : "Settings"}</button>
		<button on:click={() => {}}>Add point</button>
	</div>
</div>





<style>
	.App {
		position: absolute;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		touch-action: none;
	}

	.menu {
		position: absolute;
		top: 0;
		width: 100%;
		height: 30px;
		color: white;
		background-color: black;
		opacity: 0.7;
		touch-action: none;
	}

	button {
		margin: 5px 5px;
		width: 80px;
		opacity: 1;
	}
</style>