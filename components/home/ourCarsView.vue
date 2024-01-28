<template>
  <div class="our-cars section-pad">
    <div class="container">
      <h6 class="text-center font-bold mb-4">اسطول السيارات</h6>
      <p class="gray-col text-center mb-4">
        هذا النص هو مثال يمكن ان يستبدل في نفس المساحة
      </p>
      <div class="flex-group-me mb-spe">
        <div
          class="country-btn"
          :class="{ active: companyActiveId == null }"
          @click="getCarsDefault"
        >
          <!-- <img
            class="country-img"
            src="@/assets/imgs/Rectangle 145304.png"
            alt=""
          /> -->
          <div>جميع الفروع</div>
        </div>
        <div
          class="country-btn"
          @click="getCars(company.company_id)"
          :class="{
            active:
              company.company_id == companyActiveId &&
              company.company_id != null,
          }"
          v-for="company in companies"
          :key="company.company_id"
        >
          <!-- <img
            class="country-img"
            src="@/assets/imgs/Rectangle 145304.png"
            alt=""
          /> -->
          <div>{{ company.company_name }}</div>
        </div>
      </div>
      <div class="cars-Carousel mb-spe">
        <Carousel :items-to-show="2" dir="rtl" transition="500">
          <Slide v-for="slide in cars" :key="slide">
            <carCard :slide="slide" />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="flex-group-me">
        <NuxtLink to="/carsPage" class="show-more-link">
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
const companies = ref([]);
const loader = ref(false);
const axios = useNuxtApp().$axios;
const companyActiveId = ref(null);
const cars = ref([]);
// functions
function getCompanies() {
  loader.value = true;
  axios
    .get(
      `https://apptheblackcar.co/api/v1/get_companies?api_token=BlackCar@654321&lang=${localStorage.getItem(
        "locale"
      )}_001`
    )
    .then((response) => {
      console.log(response.data);
      companies.value = response.data.result.companies;
      loader.value = false;
    });
}
function getCars(id) {
  loader.value = true;
  axios
    .get(
      `https://apptheblackcar.co/api/v1/get_car?api_token=BlackCar@654321&lang=${localStorage.getItem(
        "locale"
      )}_001&company_id=${id}`
    )
    .then((response) => {
      cars.value = response.data.result;
      loader.value = false;
      companyActiveId.value = id;
    });
}

// get defdault cars
function getCarsDefault() {
  loader.value = true;
  axios
    .get(
      `https://apptheblackcar.co/api/v1/get_car?api_token=BlackCar@654321&lang=${localStorage.getItem(
        "locale"
      )}_001`
    )
    .then((response) => {
      cars.value = response.data.result;
      loader.value = false;
      companyActiveId.value = null;
    });
}

// lifecycle hooks
onMounted(() => {
  getCompanies();
  getCarsDefault();
});
</script>
