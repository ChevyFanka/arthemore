<template>
	<section class="section has-background-black is-fullheight">
		<div class="container">
			<div class="columns">
				<div class="column px-0">
					<img
						v-for="item in storeBandPhotos.galleryPhotos"
						:key="item"
						:src="item.src"
						alt="zdjęcie z koncertu"
						class="img-box" />
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { useBandPhotos } from '../stores/bandPhotos'

const storeBandPhotos = useBandPhotos()
</script>
<style lang="scss" scoped>
.columns{
	grid-auto-flow: row dense;
}
.img-box {
	max-height: 30em;
	width: auto;
	padding: .5em;
}
</style>
