<template>
  <div>

    <div class="section-pad pt-spe">
      <div class="container">
        <p class="gray-col text-center mb-5">
          هذا النص هو مثال يمكن ان يستبدل في نفس المساحة
        </p>
        <div class="flex-group-me mb-spe">
          <div class="country-btn no-hover">
            <img
              class="country-img"
              src="@/assets/imgs/Rectangle 145304.png"
              alt=""
            />
            <div>المملكة العربية السعودية</div>
          </div>

          <div class="country-btn no-hover">
            <img
              class="country-img no-hover"
              src="@/assets/imgs/Rectangle 145303 (1).png"
              alt=""
            />
            <div>الإمارات العربية المتحدة</div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4">
            <div class="location-box">
              <div class="first-map">
                <GoogleMap
                  api-key="AIzaSyBNLoYGrbnQI_GMqHt6m0PSN9yA7Zvq7gA"
                  style="width: 100%; height: 500px"
                  :center="center"
                  :zoom="12"
                >
                  <Marker :options="markerOptions" />
                </GoogleMap>
              </div>
              <div class="text-center  under-map">المملكة العربية السعودية , جدة , حي الملك عبدالعزيز</div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 mb-4">
            <div class="location-box">
              <div class="second-map">
                <GoogleMap
                  api-key="AIzaSyBNLoYGrbnQI_GMqHt6m0PSN9yA7Zvq7gA"
                  style="width: 100%; height: 500px"
                  :center="center2"
                  :zoom="12"
                >
                  <Marker :options="markerOptions2" />
                </GoogleMap>
              </div>
              <div class="text-center  under-map">الامارات العربية المتحدة , دبي , حي الملك فهد</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 24.7135517, lng: 46.6752957 };
const center2 = { lat: 25.2048493, lng: 55.2707828 };
const markerOptions = { position: center, title: "المملكة العربية السعودية" };
const markerOptions2 = { position: center2, title: "الامارات العربية المتحدة" };

// lifecycle hooks
onMounted(() => {});
</script>
