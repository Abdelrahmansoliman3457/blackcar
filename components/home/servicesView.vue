<template>
  <div class="our-services section-pad pt-0">
    <div class="container">
      <h6 class="font-bold mb-4">خدماتنا</h6>
      <div class="flex-bet-main mb-5">
        <p class="gray-col mb-0">
          هذا النص هو مثال يمكن ان يستبدل في نفس المساحة
        </p>
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
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12 mb-3"
          v-for="service in Services"
          :key="service.id"
        >
          <serviceCard :service="service" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports

import { ref, onMounted } from "vue";
import serviceCard from "../home/serviceCard.vue";


// rective state
const Services = ref([
  {
    id: 1,
    img: "https://backend.maak-lancer.com/public/storage/images/products/1702139661_9421.jpg",
    desc: "هذا النص هو مثال يمكن ان يستبدل في نفس المساحة هذا النص هو مثال يمكن ان",
  },
  {
    id: 2,
    img: "https://backend.maak-lancer.com/public/storage/images/products/1702153103_1653.jpg",
    desc: "هذا النص هو مثال يمكن ان يستبدل في نفس المساحة هذا النص هو مثال يمكن ان يستبدل في نفس المساحة هذا النص",
  },
]);

// functions

// lifecycle hooks
onMounted(() => {});
</script>
