<template>
  <div>
    <carPhoto />
    <ourCarsView />
    <servicesView />
    <currentOffers />
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
import carPhoto from "@/components/home/carPhoto.vue";
import ourCarsView from "@/components/home/ourCarsView.vue";
import servicesView from "@/components/home/servicesView.vue";
import currentOffers from "@/components/home/currentOffers.vue";

// lifecycle hooks
onMounted(() => {});
</script>
