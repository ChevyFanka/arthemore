<script setup>
import { RouterView } from 'vue-router'
import navComponents from './components/navComponents.vue'
import footerComponent from './components/footerComponent.vue'
</script>
<template>
	<navComponents />
	<div class="pageContent">
		<router-view />
	</div>
	<footerComponent />
</template>
<style>
@import 'bulma/css/bulma.css';
@import 'bulma/css/mystyle.css';

.pageContent {
	margin-top: 5em;
	width: 100%;
	scroll-behavior: smooth;
}
html {
	scrollbar-color: #00d1b2 black;
	overflow-y: scroll;
}
</style>
