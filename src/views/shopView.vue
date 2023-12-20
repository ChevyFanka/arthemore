<template>
	<modalShopComponent v-if="storeShop.modal" class="showBag"/>
	<section class="section pt-0" :class="{ stop : storeShop.modal }">
		<div class="btn-bag is-flex is-justify-content-end">
			<button @click="storeShop.modal = true" class="button is-info">
				<i class="fa-solid fa-basket-shopping"></i>
				<p v-show="storeShoppingBag.itemsInBag.length > 0" class="is-size-5 ml-2">{{ storeShoppingBag.totalItems }}</p>
			</button>
		</div>
		<div class="shop-header is-flex is-justify-content-center is-align-items-center">
			<p class="title is-uppercase has-text-center has-text-light pt-4 mt-4 mb-5">Gadżetownia</p>
		</div>
		<div class="shop is-flex is-justify-content-space-evenly is-flex-wrap-wrap">
			<ProductCartComponent />
		</div>
	</section>
</template>
<script setup>
import modalShopComponent from '../components/modalShopComponent.vue'
import ProductCartComponent from '../components/productCartComponent.vue'
import { useShop } from '../stores/shop'
import { useShoppingBag } from '../stores/shoppingBag'

const storeShop = useShop()
const storeShoppingBag = useShoppingBag()
</script>

<style lang="scss" scoped>
.stop {
	position: fixed;
}
.section {
	height: 100%;
	width: 100%;
	background-image: url('../assets/graphics/tunnel.jpg');
	background-size: cover;
	.btn-bag {
		position: fixed;
		right: 0.1em;
	}
}
.showBag{
animation: fade 0.5s forwards;
}
@keyframes fade{
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
}
</style>
