<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const { count } = storeToRefs(useCounterStore());
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <p class="font-mono text-5xl text-green-700 font-bold pb-3">{{ count }}</p>
    <button class="p-4 bg-green-700 text-white rounded-md" @click="count += 1">Increase Counter</button>
  </div>
</template>
