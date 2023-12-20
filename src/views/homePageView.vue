<template>
	<div class="mediaBar is-flex is-justify-content-center is-align-items-center">
		<mediaComponent />
	</div>
	<section class="hero-img"></section>
	<section class="section newsBox py-5 has-background-black">
		<p class="title has-text-centered has-text-info">NEWS</p>
		<div v-for="news in storeNews.latestNews" :key="news" class="news-wrapper is-flex-dircetion-column">
			<h2 class="px-2 is-size-4 has-text-primary">{{ news.title }}</h2>
			<div class="singleNews my-3 py-3 px-3 is-flex">
				<div class="news_img"><img :src="news.src" alt="photo news" /></div>
				<div class="news_txt">
					<p class="py-1 px-2 is-size-5 has-text-light">{{ news.description }}</p>
				</div>
			</div>
			<div class="line my-3"></div>
		</div>
	</section>
</template>

<script setup>
import mediaComponent from '../components/mediaComponent.vue'
import { useNews } from '../stores/news'
const storeNews = useNews()
</script>

<style lang="scss" scoped>
.hero-img {
	height: 14em;
	width: 100%;
	background-image: url('../assets/graphics/main-img-small.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.newsBox {
	height: 100%;
	width: 100%;
	.singleNews {
		flex-direction: column;
		align-items: center;
		.news_img {
			height: auto;
			width: auto;
			max-height: 20em;
			max-height: 25em;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.line {
		height: 0.1em;
		width: 100%;
		box-shadow: 0 0 3px cyan;
	}
}
.mediaBar {
	margin-top: 1em;
	height: 5em;
	background-color: black;
}

@media (min-width: 992px) {
	.newsBox {
		.singleNews {
			flex-direction: row;
			.news_img {
				height: 30em;
				width: auto;
				max-width: 50vw;
			}
			.news_txt {
				margin: auto 2em;
				width: 50vw;
			}
		}
	}
}
@media (min-width: 768px) {
	.hero-img {
		height: 30em;
		background-image: url('../assets/graphics/main-img-desktop.jpg');
	}
}
</style>
