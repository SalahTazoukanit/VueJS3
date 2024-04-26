<template>
  <h1>Hello Salaheddine</h1>
  {{ name }}

  <input type="text" v-model="name" @input="handleUpdate" />
  <!-- <p>{{ props.user.name }}</p>
  <p>{{ props.user.age }}</p> -->
</template>

<script setup>
// const props = defineProps(['user'])
import { ref } from 'vue'
const emit = defineEmits(['updateName'])

const handleUpdate = (event) => {
  emit('updateName', event.target.value)
}

const name = ref('')
</script>

<style scoped></style>
