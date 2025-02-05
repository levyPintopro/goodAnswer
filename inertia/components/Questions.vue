<script setup>
import {computed, ref, watch} from "vue";

const props = defineProps({
  question: Object
})
const answer = ref(null)
const hasAnswer = computed(()=> answer.value !== null)

const choicesSorted = computed(()=> [...props.question.choices].sort(()=> Math.random() - 0.5))


</script>
<template>
  <div class="question">
    <h3>{{props.question.question}}</h3>

    <ul class="listWithoutDot">
      <li v-for="(item, index) in choicesSorted" :key="item">
        <label :for="`answer${index}`">
          <input :id="`answer${index}`" type="radio" name="amswer" v-model="answer" :value="item"/>
          {{item}}
        </label>
      </li>
    </ul>
    <button @click="$emit('answer', answer)" :disabled="!hasAnswer">Question suivante</button>
  </div>

</template>

<style>
.question {padding-top: 2rem;}
.question button {
  margin-left: auto;
  display: block;
}
</style>
