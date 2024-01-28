<template>
  <div>
    
    <div class="register-page page-pad login-page pt-spe">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3">التوظيف</h5>
          <p class="gray-col text-center">قم بالانضمام إلينا</p>
          <v-form @submit.prevent="register" v-model="valid">
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14">الاسم الاول</h6>
              <v-text-field
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال الاسم الاول"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14">الاسم التاني</h6>
              <v-text-field
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال الاسم التاني"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14">اسم العائلة</h6>
              <v-text-field
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال اسم العائلة"
              ></v-text-field>
            </div>
            <div class="main-input-cont mb-4 calender-main">
              <h6 class="mb-2 font14">تاريخ الميلاد</h6>
              <Calendar
                v-model="dateBegin"
                placeholder="الرجاء تحديد تاريخ الميلاد"
                dateFormat="dd/mm/yy"
              />
              <div class="abs-lef-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar-event-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"
                  />
                </svg>
              </div>
            </div>

            <div class="mb-4">
              <div class="flex-big-gap">
                <div class="all-container-type">
                  <h6 class="mb-3">نوع الحساب</h6>
                  <div class="flex-sm-gap">
                    <input
                      type="radio"
                      checked
                      name="accountType"
                      id="company"
                      class="mainRadio"
                    />
                    <label for="company">حساب شركة</label>
                  </div>
                </div>
                <div class="all-container-type">
                  <h6 class="styleOnly mb-3">styleOnly</h6>
                  <div class="flex-sm-gap">
                    <input
                      type="radio"
                      id="user"
                      name="accountType"
                      class="mainRadio"
                    />
                    <label for="user">حساب فرد</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="main-input-cont mb-4">
              <h6 class="mb-2 font14">الجنسية</h6>
              <Dropdown
                v-model="selectedCity"
                :options="cities"
                filter
                optionLabel="name"
                placeholder="الرجاء ادخال الجنسية"
                class="main-select"
              />
            </div>

            <div class="main-input-cont mb-4">
              <h6 class="mb-2 font14">المؤهل</h6>
              <Dropdown
                v-model="selectedCity"
                :options="cities"
                filter
                optionLabel="name"
                placeholder="الرجاء ادخال المؤهل"
                class="main-select"
              />
            </div>

            <div class="main-input-cont mb-4">
              <h6 class="mb-2 font14">اللغة</h6>
              <Dropdown
                v-model="selectedCity"
                :options="cities"
                filter
                optionLabel="name"
                placeholder="الرجاء ادخال اللغة"
                class="main-select"
              />
            </div>
            <div class="main-input-cont mb-4">
              <h6 class="mb-2 font14">الوظيفة المتقدم لها</h6>
              <Dropdown
                v-model="selectedCity"
                :options="cities"
                filter
                optionLabel="name"
                placeholder="الرجاء ادخال الوظيفة المتقدم لها"
                class="main-select"
              />
            </div>
            <div class="mb-4">
              <div class="flex-big-gap">
                <div class="all-container-type">
                  <h6 class="mb-3">نوع الحساب</h6>
                  <div class="flex-sm-gap">
                    <input
                      type="radio"
                      checked
                      name="accountType"
                      id="company"
                      class="mainRadio"
                    />
                    <label for="company">حساب شركة</label>
                  </div>
                </div>
                <div class="all-container-type">
                  <h6 class="styleOnly mb-3">styleOnly</h6>
                  <div class="flex-sm-gap">
                    <input
                      type="radio"
                      id="user"
                      name="accountType"
                      class="mainRadio"
                    />
                    <label for="user">حساب فرد</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-input-cont mt-1">
              <div class="label-title mb-2">صورة رخصة السير</div>
              <uploadFileSingle name="contract" id="uploadbuildingpaper" />
            </div>
    

      
            <button type="submit" class="main-btn up w-100 mt-4">ارسال</button>
         
          </v-form>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";
import uploadFileSingle from '../components/home/uploadSingleFile.vue'

// rective state

const dateBegin = ref(null);
const valid = ref(false);


const defaultRoles = ref([
  (value) => {
    if (value) return true;

    return "هذا الحقل مطلوب";
  },
]);

// functions
function register() {
  if (valid.value) {
    alert("kll");
  }
}

// lifecycle hooks
onMounted(() => {});
</script>
