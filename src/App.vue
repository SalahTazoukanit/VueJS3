<template>
  <!-- <HelloSalah @update-name="(name) => display(name)" /> -->
  <!-- <span> {{ sentence }} </span> -->

  <!-- <div>
    <input type="text" name="" id="" v-model="name" />
    <input type="text" name="" id="" v-model="age" />
  </div> -->

  <p><router-link to="/about"><a href="">about</a></router-link></p>  
  <p><router-link to="/"><a href="">home</a></router-link></p>

  <RouterView />
  
</template>

<script setup>
import HelloSalah from './components/HelloSalah.vue'

// import Home from './components/views/Home.vue';
// import about from './components/views/about.vue';





// const display = (name) => {
//   console.log('App.vue :' + name)
// }
// import { watch, ref } from 'vue'

// const sentence = computed(() => {
//   return `Bonjour je m'appelle ${name.value} et j'ai ${age.value} ans`
// })

// const name = ref('Salaheddine')
// const age = ref(27)

// watch(name, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })

// function display() {
//   console.log(name, age)
// }
// display()
</script>

<style scoped>
/* .text-red {
  color: indianred;
}
.text-green {
  color: green;
} */
</style>
