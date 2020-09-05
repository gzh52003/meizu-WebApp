<template>
	<div id="app" >
		<router-view></router-view>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Col,
		Row,
		Search,
		Image,
		Button,
		Icon,
		Tabbar, 
		TabbarItem,
		Grid, 
		GridItem,
		NavBar,
		Checkbox, 
		CheckboxGroup 
		} from 'vant';
		
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(NavBar);
	Vue.use(Grid);
	Vue.use(GridItem);
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	Vue.use(Icon);
	Vue.use(Button);
	Vue.use(Image);
	Vue.use(Search);
	Vue.use(Grid);
	Vue.use(GridItem);
	Vue.use(Col);
	Vue.use(Row);

	export default {
		name: 'App',
	}
</script>

<style lang="scss">


</style>
