<template>
  <div>

    <div class="section-pad pt-spe">
      <div class="container">
        <tabs />
        <!--profile info-->
        <div class="tap-content">
          <div class="carReviews">
            <div class="row">
              <div class="col-md-6 col-12 mb-4">
                <div class="car-card">
                  <div class="card-top-car w-100">
                    <div class="car-img">
                      <img
                        src="@/assets/imgs/Rectangle 145291 (1).png"
                        alt=""
                      />
                    </div>
                    <div class="left-for-flex w-100">
                      <div class="flex-bet-main mb-2">
                        <div>سيارات حديثة</div>
                      </div>
                      <div class="rating-main mb-2">
                        <Rating
                          v-model="value"
                          :cancel="false"
                          readonly
                        />
                      </div>
                      <p class="gray-col clamp3">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة
                        عدد الحروف التى يولدها التطبيق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-4">
                <div class="car-card">
                  <div class="card-top-car w-100">
                    <div class="car-img">
                      <img
                        src="@/assets/imgs/Rectangle 145291 (1).png"
                        alt=""
                      />
                    </div>
                    <div class="left-for-flex w-100">
                      <div class="flex-bet-main mb-2">
                        <div>سيارات حديثة</div>
                      </div>
                      <div class="rating-main mb-2">
                        <Rating
                          v-model="value"
                          :cancel="false"
                          readonly
                        />
                      </div>
                      <p class="gray-col clamp3">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة
                        عدد الحروف التى يولدها التطبيق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// imports
import { onMounted, ref } from "vue";
import tabs from "@/components/profile/tabs.vue";

// reactive state
const value = ref(2);

// lifecycle hooks
onMounted(() => {});
</script>
