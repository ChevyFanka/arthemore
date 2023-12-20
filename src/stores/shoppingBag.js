import { defineStore } from 'pinia'

export const useShoppingBag = defineStore('shoppingBag', {
	state: () => {
		return {
			itemsInBag: [],
		}
	},
	getters: {
		total: state => {
			let sum = 0
			state.itemsInBag.forEach(item => {
				sum += item.price * item.amount
			})
			return sum
		},
		totalItems: state => {
			let quantity = 0
			state.itemsInBag.forEach(item => {
				quantity += item.amount
			})
			return quantity
		},
	},
	actions: {
		pushToBag(product) {
			this.itemsInBag.push(product)
		},
		outOfBag(indexToDelete) {
			this.itemsInBag = this.itemsInBag.filter(item => this.itemsInBag.indexOf(item) !== indexToDelete)
		},
	},
})
