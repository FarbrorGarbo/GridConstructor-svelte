<script lang="ts">
	export let name: string;
</script>

<canvas
	class={"canvas"}
	ref={canvasElm}
	onClick={(e) => {props.onClick(e)}}
/>