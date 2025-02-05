<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  answers:Array,
  quiz:Object
})
const score = computed(()=>{
  return props.quiz.questions.reduce((acc, question, i)=>{
    if(question.correct_answer === props.answers[i]){
      acc++
    }
    return acc
  }, 0)
})
const hasWon = computed(()=> score.value >= props.quiz.minimum_score)

</script>
<template>

  <H1>RECAP</H1>
  <h3>Vous avez repondu a {{score}} bonne reponses sur {{props.quiz.questions.length}}</h3>
  <p></p>
  <div>
    {{hasWon ? props.quiz.success_message : props.quiz.failure_message}}
  </div>

</template>
