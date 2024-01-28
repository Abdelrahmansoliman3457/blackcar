<template>
  <div>

    <div class="section-pad pt-spe">
      <div class="container">
        <p class="gray-col text-center mb-5">
          هذا النص هو مثال يمكن ان يستبدل في نفس المساحة
        </p>
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

  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
import serviceCard from "@/components/home/serviceCard.vue";


//reactive states
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

// lifecycle hooks
onMounted(() => {});
</script>
