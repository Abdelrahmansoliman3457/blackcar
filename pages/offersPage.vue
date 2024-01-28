<template>
    <div>
      <div class="section-pad pt-spe">
        <div class="container">
          <p class="gray-col text-center mb-5">
            هذا النص هو مثال يمكن ان يستبدل في نفس المساحة
          </p>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mb-4">
                <carCard :hasOffer="true" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script setup>
  // imports
  import { onMounted } from "vue";
  import carCard from "@/components/home/carCard.vue";
  
  
  //reactive states

  
  // lifecycle hooks
  onMounted(() => {});
  </script>
  