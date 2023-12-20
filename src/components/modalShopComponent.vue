<template>
	<div class="modal-wrapper" aria-modal="true">
		<div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
			<div class="orders is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-5 mx-3">
				<p class="title has-text-centered">Twoje zamówienie</p>

				<div class="table is-narrow py-1 px-1">
					<thead>
						<tr>
							<th class="py-2 is-size-7 is-size-6-desktop">NR</th>
							<th class="py-2 is-size-7 is-size-6-desktop">PRODUKT</th>
							<th class="py-2 is-size-7 is-size-6-desktop">ROZMIAR</th>
							<th class="py-2 is-size-7 is-size-6-desktop">SZT</th>
							<th class="py-2 is-size-7 is-size-6-desktop">CENA</th>
							<th></th>
						</tr>
					</thead>
					<tbody v-for="(item, index) in storeShoppingBag.itemsInBag" :key="index">
						<tr class="has-text-centered">
							<th>{{ index + 1 }}</th>
							<td>{{ item.description }}</td>
							<td>{{ item.option }}</td>
							<td>{{ item.amount }}</td>
							<td>{{ item.price * item.amount }} zł</td>
							<td>
								<div class="buttons">
									<button @click="storeShoppingBag.outOfBag(index)" class="button is-danger is-light is-small">
										<span class="icon is-small">
											<i class="fa-solid fa-xmark" style="color: #d20000;"></i>
										</span>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3"><p class="mt-2 is-size-6">Podsumowanie:</p></td>
							<td>
								<p class="is-size-5 py-1">{{ storeShoppingBag.totalItems }}</p>
							</td>
							<td colspan="2">
								<p class="is-size-5 py-1 has-text-weight-bold">{{ storeShoppingBag.total }} zł</p>
							</td>
						</tr>
						<tr>
							<td colspan="6" class="has-text-success-dark">koszt wysyłki: paczkomat InPost +15zł</td>
						</tr>
					</tfoot>
				</div>
			</div>
			<div class="form mt-4">
				<div class="field">
					<label class="label">Imię i nazwisko</label>
					<div class="control">
						<input class="input" type="text" placeholder="imię i nazwisko" />
					</div>
				</div>
				<div class="field">
					<label class="label">Numer telefonu</label>
					<div class="control">
						<input class="input" type="text" placeholder="+48123456789" />
					</div>
				</div>
				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input class="input is-danger" type="email" placeholder="Email@pp.com" value="@" />
					</div>
					<p class="help is-danger">This email is invalid</p>
				</div>
			</div>
			<div class="mx-6 my-5 is-flex">
				<button @click="storeShop.modal = false" class="button is-small is-info is-light mx-1">Wróć</button>
				<button class="button is-small is-success is-light mx-1">Wyślij</button>
				<button class="button is-small is-danger is-light mx-1">Wyczyść</button>
			</div>
			<div class="info-box mx-6 mb-5">
				<p class="my-1 py-1 is-size-5">
					Wysyłając zamówienie na wybrane produkty otrzymasz wiadomość zwrotną z danymi do wykonania płatności
					przelewem. Do 3 dni roboczych od zaksięgowania wpłaty wysyłamy towar. W przypadku opóźnień powiadomimy Cię
					niezwłocznie!
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useShop } from '../stores/shop'
import { useShoppingBag } from '../stores/shoppingBag'

const storeShop = useShop()
const storeShoppingBag = useShoppingBag()


</script>
<style lang="scss" scoped>
p,
td,
th,
label {
	color: black;
	font-family: 'Sawarabi Gothic', sans-serif;
}
.modal-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: #100f0fbd;
	background-image: linear-gradient(90deg, #00000058 3%, #ffffffb3 60%);
	z-index: 500;
	overflow: auto;
	overscroll-behavior: auto contain;

	.orders {
		height: 100%;
		width: 60%;
	}
	.table {
		background-color: rgba(222, 222, 222, 0.7);
		border-radius: 1em;
		border: 0.3em double black;
	}
}
</style>
