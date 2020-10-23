import GCEngine from "./modules/GCEngine"
import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		name: "GridConstructor"
	}
});

export default app;