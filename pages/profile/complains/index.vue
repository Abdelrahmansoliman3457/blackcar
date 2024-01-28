<template>
    <div>

      <div class="section-pad pt-spe">
        <div class="container">
          <tabs />
          <!--profile info-->
          <div class="tap-content">
            <div class="complains">
              <div class="row">
                <div class="col-md-6 col-12 mb-4">
                  <div class="car-card">
                    <div class="card-top-car w-100">
                      <div class="car-img black-bg">
                        <img
                          src="@/assets/imgs/Group 181475.png"
                          alt=""
                        />
                      </div>
                      <div class="left-for-flex w-100">
                        <div class="flex-bet-main mb-2 font18">
                          <div>رقم الشكوى : 3332</div>
                        </div>
                        <div class="gray-col mb-3">
                          تاريخ الشكوى : 12/12/2020
                        </div>
                        <div class="gray-col book-value">
                          حالة الشكوى :
                          <span class="color-main font16">تمت معالجتها</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-12 mb-4">
                  <div class="car-card">
                    <div class="card-top-car w-100">
                      <div class="car-img black-bg">
                        <img
                          src="@/assets/imgs/Group 181475.png"
                          alt=""
                        />
                      </div>
                      <div class="left-for-flex w-100">
                        <div class="flex-bet-main mb-2 font18">
                          <div>رقم الشكوى : 3332</div>
                        </div>
                        <div class="gray-col mb-3">
                          تاريخ الشكوى : 12/12/2020
                        </div>
                        <div class="gray-col book-value">
                          حالة الشكوى :
                          <span class="color-main font16">تمت معالجتها</span>
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
  
    </div>
  </template>
  
  <script setup>
  // imports
  import { onMounted } from "vue";
  import tabs from "@/components/profile/tabs.vue";
  
  // lifecycle hooks
  onMounted(() => {});
  </script>
  