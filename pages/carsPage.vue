<template>
  <div>
    <div class="section-pad pt-spe">
      <div class="container">
        <p class="gray-col text-center mb-5">
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
        <div class="row">
          <div class="col-md-6 col-12 mb-3" v-for="slide in cars" :key="slide">
            <carCard :slide="slide" />
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

// reactive states
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
