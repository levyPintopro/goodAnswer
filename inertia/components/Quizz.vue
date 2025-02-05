<script setup lang="ts">
import {computed, ref} from "vue";
import Progress from "~/components/Progress.vue";
import Questions from "~/components/Questions.vue";
import Recap from "~/components/Recap.vue";
const props = defineProps({
  quiz : Object
})
const state = ref("QUESTION")
const answers = ref(props.quiz?.questions.map(()=> null))
const step = ref(0)
const question = computed(()=> props.quiz?.questions[step.value])
const addAnswer = (answer)=> {
  answers.value[step.value] = answer
  if(step.value === props.quiz?.questions.length -1) {
    state.value = 'RECAP'
  }
  else {
    step.value++
  }
}

</script>

<template>
  <div class="container-fluid">
    <h1>{{props.quiz?.title}}</h1>
    <Progress v-if="state === 'QUESTION'" :value="step" :max="props.quiz?.questions.length -1"/>
    <Questions :key="question?.question" :question="question" v-if="state === 'QUESTION'" @answer="addAnswer"/>
    <Recap v-if="state === 'RECAP'" :answers="answers" :quiz="props.quiz"/>
  </div>

</template>
