<template>
  <div class="hello-world">
    <div class="form-group">
      <h2>Select com Pesquisa</h2>
      <vue-search-select
        :options="items"
        v-model="selectedFromSelect"
        @search="handleWithSearchFromApi"
        :clearable="false"
        :filterable="false"
      >
        <template #option="{ label, value }">
          <p><b>ID: </b>{{ value }}</p>
          <p>{{ label }}</p>
        </template>

        <template #open-indicator>
          {{ '<' }}
        </template>
      </vue-search-select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const items = ref([])
const selectedFromSelect = ref('')

watch(selectedFromSelect, (value) => {
  console.log(value)
})

const options = [
  'Azul',
  'Amarelo',
  'Marrom',
]

const handleWithSearchFromApi = (text, loading) => {
  loading(true)
  const filtrado = options.filter((value) => {
    value.
      toLocaleLowerCase()
      .includes(text.toLocaleLowerCase())
  })
  console.log(filtrado)
  items.value = filtrado
  loading(false)
}
</script>

<style lang="scss" scoped>
.hello-world {
  display: grid;
  height: 100vh;
  align-content: center;
  justify-content: center;

  .form-group {
    display: grid;
    align-items: center;
    justify-content: center;
  }
}
</style>