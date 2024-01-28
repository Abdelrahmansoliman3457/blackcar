<template>
  <div class="profileTaps">
    <NuxtLink to="/profile" class="tab-btn">الملف الشخصي</NuxtLink>
    <NuxtLink to="/profile/membership" class="tab-btn">العضوية الحالية</NuxtLink>
    <NuxtLink to="/profile/currentPoints" class="tab-btn">النقاط الحالية</NuxtLink>
    <NuxtLink to="/profile/previousBooking" class="tab-btn">الحجوزات السابقة</NuxtLink>
    <NuxtLink to="/profile/carReviews" class="tab-btn">تقييمات السيارات</NuxtLink>
    <NuxtLink to="/profile/complains" class="tab-btn">الشكاوي والاقتراحات</NuxtLink>
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";

//props

// rective state

// functions

// lifecycle hooks
onMounted(() => {});
</script>
