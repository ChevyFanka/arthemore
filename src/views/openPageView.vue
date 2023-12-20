<template>
	<div class="container-bg">
		<!-- <router-link class="active" to="/home">
			<img class="logo" src="images/arthemore-logo.png" alt="logo"/>
		</router-link> -->
	</div>
</template>
<script setup></script>
<style lang="scss" scoped>
.container-bg {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-image: url('images/tunnel.jpg');

	background-size: cover;
	object-fit: cover;
	// .logo {
	// 	height: 20em;
	//     width: 20em;
	// 	cursor: pointer;
	// 	transition: transform 1s;
	// 	&:hover{
	// 		transform: rotate(360deg) scale(1.5);
	// 	}
	// }
}
</style>
