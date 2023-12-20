import { defineStore } from 'pinia'

export const useNews = defineStore('news', {
	state: () => {
		return {
		latestNews: [
				{
					src: '/images/news/gwarek2023.jpg',
					title: 'Zakończenie trasy Women Metal Show 2023',
                    description: 'w krakowskim klubie Gwarek odbył się ostatni koncert z serii Women Metal Show Tour 2023. Dziękujemy, że byliście z nami i do zobaczenia na kolejnych trasach!'
				},
				{
					src: '/images/news/calendar.jpg',
					title: 'Nadchodzące koncerty',
                    description: 'Wbijajcie na nasze najbliższe koncerty'
				},
				{
					src: '/images/news/shop.jpg',
					title: 'Mijający rok',
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat blanditiis, veniam laborum hic maxime, deleniti aliquam distinctio in suscipit omnis eligendi ipsa temporibus fugit. Maiores officiis labore hic laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat blanditiis, veniam laborum hic maxime, deleniti aliquam distinctio in suscipit omnis eligendi ipsa temporibus fugit. Maiores officiis labore hic laudantium.',
				},
			],
		newsPhotos: [
				{
					src: '/images/news/calendar.jpg',
                    description: 'Trasa koncertowa'
				},
				{
					src: '/images/news/shop.jpg',
                    description: 'Nowości w sklepie'
				},
				{
					src: '/images/news/gwarek2023.jpg',
                    description: 'Zakończenie trasy Women Metal Show 2023'
				},
				{
					src: '/images/news/gwarek2023-2.jpg',
                    description: 'Coś innego'
				},
			],
		}
	},
})
