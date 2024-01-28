<template>
  <div class="carousel__item">
    <div class="car-card" :class="{hasOffer : hasOffer}">
      <div class="card-top-car">
        <div class="car-img" v-if="slide">
          <img :src="slide.images[0].image" alt="" />
          <div class="abs-num" v-if="slide">{{ slide.license_no }}</div>
          <div class="abs-num-loc">جدة </div>
        </div>
        <div class="left-for-flex w-100">
          <div class="flex-bet-main mb-3">
            <div>سيارة حديثة</div>
            <NuxtLink to="/" class="main-link">عرض التقييمات</NuxtLink>
          </div>
          <div class="flex-attrs mb-3">
            <div class="flex-sm-gap attr-single" v-if="slide">
              <img class="attr-img" src="@/assets/imgs/Frame (3).png" alt="" />
              <div>{{ slide.name.split('/')[0] }}</div>
            </div>
            <div class="flex-sm-gap attr-single" v-if="slide">
              <img class="attr-img" src="@/assets/imgs/Frame (3).png" alt="" />
              <div>{{ slide.model_year }}</div>
            </div>
            <div class="flex-sm-gap attr-single" v-if="slide">
              <img class="attr-img" src="@/assets/imgs/Frame (3).png" alt="" />
              <div>{{ slide.name.split('/')[1] }}</div>
            </div>
            <div class="flex-sm-gap attr-single" v-if="slide">
              <img class="attr-img" src="@/assets/imgs/Frame (3).png" alt="" />
              <div>{{ slide.color }}</div>
            </div>
            <div class="flex-sm-gap attr-single" v-if="slide">
              <img class="attr-img" src="@/assets/imgs/Frame (3).png" alt="" />
              <div>{{ slide.seats }}</div>
            </div>
            <div class="flex-sm-gap attr-single" v-if="slide">
              <img class="attr-img" src="@/assets/imgs/Frame (3).png" alt="" />
              <div>{{ slide.avg_rate }}</div>
            </div>
          </div>
          <div class="gray-col book-value">
            المبلغ اليومي للتاجير :
            <span class="color-main font16" v-if="slide">{{ slide.rent_per_day }} رس</span> 
            <span class="color-main offer-price" v-if="hasOffer">200 رس</span>
          </div>
          <div class="date-from-to mt-3" v-if="hasOffer">
            <img src="@/assets/imgs/Frame (4).png" class="calender-img" alt="">
            <div class="gray-col">15/12/2023 - 5/11/2023</div>
          </div>
        </div>
      </div>
      <button class="main-btn up w-100 bg-black">حجز السيارة</button>
    </div>
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";


//props
const props = defineProps(["hasOffer"  , "slide"]);

// rective state

// functions

// lifecycle hooks
onMounted(() => {

});
</script>
