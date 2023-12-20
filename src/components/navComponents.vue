<template>
	<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand my-2 ml-4 px-4">
			<router-link to="/home" class="is-hidden-desktop"
				><img class="image is-64x64" src="../assets/graphics/logo/logo.png" alt="logo brand" />
			</router-link>
			<router-link to="/home" class="is-hidden-touch pl-5"
				><img class="arthemoreSign my-1" src="../assets/graphics/logo/ArthemoreSignWhite.png" alt="sign brand" />
			</router-link>
			<a
				role="button"
				@click="toggleMenu()"
				class="navbar-burger my-auto mr-4"
				:class="{ showMobileNav: 'is-active' }"
				aria-label="menu"
				aria-expanded="false">
				<span class="tag is-black is-size-6 is-rounded has-background-primary"></span>
				<span class="tag is-black is-size-6 is-rounde has-background-primary"></span>
				<span class="tag is-black is-size-6 is-rounded has-background-primary"></span>
			</a>
		</div>
		<div
			@click="toggleMenu()"
			class="navbar-menu navbar-end is-size-5 has-text-right mr-4 is-uppercase"
			:class="showMobileNav ? 'is-active' : ''">
			<router-link
				to="/home"
				@click="showMeLink($event)"
				class="navbar-item has-text-info-dark"
				:class="linkIsActive === 'Strona główna' ? 'active' : ''"
				>Strona główna</router-link
			>
			<router-link
				to="/aboutPage"
				@click="showMeLink($event)"
				class="navbar-item has-text-info-dark"
				:class="linkIsActive === 'zespół' ? 'active' : ''"
				>Zespół</router-link
			>
			<router-link to="/discography" class="navbar-item has-text-info-dark">Dyskografia</router-link>
			<router-link to="/gallery" class="navbar-item has-text-info-dark">Galeria</router-link>
			<router-link to="/shop" class="navbar-item has-text-info-dark">Gadżety</router-link>
		</div>
	</nav>
</template>
<script setup>
import { ref } from 'vue'
const showMobileNav = ref(false)

const linkIsActive = ref('')

const toggleMenu = () => {
	showMobileNav.value = !showMobileNav.value
}

const showMeLink = e => {
	linkIsActive.value = e.target.textContent

	console.log(linkIsActive.value)
}
</script>
<style lang="scss" scoped>
.navbar {
	background-image: url('@/assets/graphics/navigation/czlowiek-nav-small.jpg');
	background-position: top;
	background-size: cover;
	font-family: 'Raleway', 'Sawarabi Gothic', sans-serif;
	font-weight: bold;
	text-shadow: 1px 1px 2px black, 0 0 1em black;

	&.is-fixed-top {
		height: 5em;
	}
	.navbar-burger {
		span {
			width: 2em;
			height: 0.2em;
		}
	}
}
.arthemoreSign {
	max-height: 3.5em;
	width: auto;
}
a.has-text-info-dark {
	transition: color 0.3s;
	&:hover,
	&:focus {
		color: rgb(0, 164, 164) !important;
	}
}

#app
	> nav
	> div.navbar-menu.navbar-end.is-size-5.has-text-right.mr-4.is-uppercase.is-active
	> a.router-link-active.router-link-exact-active.navbar-item.has-text-info-dark.active {
	color: rgb(0, 164, 164) !important;
}

@media (max-width: 1023px) {
	.navbar-menu {
		display: block;
		transform: translateX(110%);
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.9);
		transition: transform 0.4s, opacity 0.6s;
		&.is-active {
			transform: translateX(0);
			opacity: 1;
			margin-right: 0 !important;
		}
	}
}
@media (min-width: 992px) {
	.navbar {
		background-image: url('@/assets/graphics/navigation/czlowiek-nav-big.jpg');
	}
}
</style>
