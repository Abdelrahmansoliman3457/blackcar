<template>
  <div class="card-box-sevice">
    <div class="for-style">
      <img :src="service.img" class="service-img" alt="" />
      <div class="service-body mt-3">
        <p class="gray-col mb-0">
          {{ service.desc }}
        </p>
      </div>
    </div>
    <div class="flex-group-me mb-1">
      <NuxtLink to="/" class="main-btn up">عرض المزيد</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";

//props
const props = defineProps(["service"]);

// rective state

// functions

// lifecycle hooks
onMounted(() => {});
</script>
