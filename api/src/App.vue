<template>
	<router-view/>
</template>

<script>
	export default {
		name: "App",
		methods: {
			goto(path, idx) {
				console.log(this.$router);
				this.$router.push(path);
				this.currentIndex = idx;
			},
		},
		components: {},
	};
</script>
<style lang="scss">
	
</style>
