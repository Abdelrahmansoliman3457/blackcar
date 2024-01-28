<template>
    <div>
      
      <div class="section-pad pt-spe">
        <div class="container">
          <tabs />
          <!--profile info-->
          <div class="tap-content">
            <div class="currentPoints">
                <div class="flex-group-me mb-4">
                    <img src="@/assets/imgs/Coins-pana 1.png" alt="">
                </div>
                <div class="flex-group-me text-center">
                    <div class="points-info">

                        <h6 class="mb-3">عدد النقاط</h6>
                        <div class="color-main">6768</div>
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
  import { onMounted } from "vue";
  import tabs from "@/components/profile/tabs.vue";
  
  // lifecycle hooks
  onMounted(() => {});
  </script>
  