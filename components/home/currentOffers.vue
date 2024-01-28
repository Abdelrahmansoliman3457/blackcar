<template>
  <div class="our-cars section-pad">
    <div class="container">
      <h6 class="text-center font-bold mb-4">العروض الحالية</h6>
      <p class="gray-col text-center mb-5">
        هذا النص هو مثال يمكن ان يستبدل في نفس المساحة
      </p>
      <div class="cars-Carousel mb-spe">
        <Carousel :items-to-show="3" dir="rtl" transition="500">
          <Slide v-for="slide in 4" :key="slide">
            <carCard :hasOffer="true" />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="flex-group-me">
        <NuxtLink to="/" class="show-more-link">
          <div>عرض المزيد</div>
          <div class="de-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";
import carCard from "../home/carCard.vue";
import "vue3-carousel/dist/carousel.css";




// rective state

// functions

// lifecycle hooks
onMounted(() => {});
</script>
