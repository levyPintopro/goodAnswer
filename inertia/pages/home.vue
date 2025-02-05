<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'
  import {onMounted, ref} from "vue";
  import Quizz from "~/components/Quizz.vue";

  const state = ref('LOADING')
  const quiz = ref(null )

  onMounted(()=>{
    fetch('/quiz.json').then(r => {
      if (r.ok){
        return r.json()
      }
      throw new Error('impossible de recuperer le json')
    }).then(data => {
      setInterval(()=>{
        quiz.value = data
        state.value = 'IDLE'
      },1000)
    }).catch( e => {
      state.value = 'ERROR'
    })
  })
</script>


<template>
  <Head  title="HOME"/>

  <div class="container">
    <div v-if="state === 'ERROR'">
      <p>impossible de charger le fichier</p>
    </div>
    <div :aria-busy="state === 'LOADING'">
      <Quizz :quiz="quiz" v-if="quiz"/>
    </div>
  </div>

</template>

<style scoped>
.container {margin-top: 2rem}
</style>
