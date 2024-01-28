<template>
  <div>
 
    <div class="section-pad pt-spe">
      <div class="container">
        <tabs />
        <!--profile info-->
        <div class="tap-content">
          <div class="membershipCard">
            <img src="@/assets/imgs/Rectangle 145291 (2).png" alt="" />
            <div>
              <h6 class="mb-3">عضوية ذهبية</h6>
              <p class="gray-col">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق
              </p>
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
import tabs from "@/components/profile/tabs.vue";

// lifecycle hooks
onMounted(() => {});
</script>
