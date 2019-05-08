<template>
  <div style="display: none">
    <ul class="carList">
      hello 
      <li v-for="car in carsData">
        {{ car.label }}
        <img :src="`/cars/${car.label}.jpg`">
        <img :src="`/cars/${car.label}-profil.jpg`">
        <img :src="`/cars/${car.label}-rear.jpg`">
      </li>
    </ul>

    <!-- <img src="~/assets/cars/peugeot-305-gtx-rear.jpg">
    <img src="/_nuxt/assets/cars/peugeot-305-gtx-rear.jpg"> -->
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data() {
    return {
      carsData: [
        {'label': 'peugeot-305-gtx'},
        {'label': 'peugeot-505-v6'},
        {'label': 'alpine-a110-premiere-edition'},
        {'label': 'renault-megane-rs-trophy'},
        {'label': 'bmw-e36-m3-4-doors'},
        {'label': 'bmw-e34-m5-phase-i'},
        {'label': 'renault-megane-rs-trophy-n'},
        {'label': 'alfa-romeo-giulia-quadrifoglio'},
        {'label': 'audi-rs4-b7'},
        {'label': 'bmw-e46-m3-csl'},
        {'label': 'concept-car-clio-rs-16'},
        {'label': 'renault-clio-4-rs'},
        {'label': 'renault-clio-2-rs-ph-3'},
        {'label': 'nissan-patrol-gr'},
        {'label': 'bmw-m235i-01-3'},
        {'label': 'peugeot-306-maxi-mk1'}
      ]
    }
  }
}
</script>
