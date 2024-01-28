<template>
  <div>

    <div class="register-page page-pad login-page pt-spe">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-4 col-6 mb-4 ">
            <a href="#" class="contact-box">
              <div class="flex-group-me">
                <img src="@/assets/imgs/Rectangle 145303 (2).png" class="img-contact" alt="" />
              </div>
              <div class="text">اتصال</div>
            </a>
          </div>
          <div class="col-md-4 col-6 mb-4 ">
            <a href="#" class="contact-box">
              <div class="flex-group-me">
                <img src="@/assets/imgs/Rectangle 145303 (2).png" class="img-contact" alt="" />
              </div>
              <div class="text">اتصال</div>
            </a>
          </div>
          <div class="col-md-4 col-6 mb-4 ">
            <a href="#" class="contact-box">
              <div class="flex-group-me">
                <img src="@/assets/imgs/Rectangle 145303 (2).png" class="img-contact" alt="" />
              </div>
              <div class="text">اتصال</div>
            </a>
          </div>
          <div class="col-md-4 col-6 mb-4 ">
            <a href="#" class="contact-box">
              <div class="flex-group-me">
                <img src="@/assets/imgs/Rectangle 145303 (2).png" class="img-contact" alt="" />
              </div>
              <div class="text">اتصال</div>
            </a>
          </div>
          <div class="col-md-4 col-6 mb-4 ">
            <a href="#" class="contact-box">
              <div class="flex-group-me">
                <img src="@/assets/imgs/Rectangle 145303 (2).png" class="img-contact" alt="" />
              </div>
              <div class="text">اتصال</div>
            </a>
          </div>
        </div>
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3">او ارسل رسالتك</h5>
          <v-form @submit.prevent="register" v-model="valid">
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14">اسم المستخدم بالعربية</h6>
              <v-text-field
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال اسم المستخدم"
              ></v-text-field>
            </div>

            <div class="main-input-cont mt-1 tel-input-me">
              <h6 class="mb-2 font14">رقم الجوال</h6>
              <v-text-field
                v-model="phone"
                type="number"
                min="0"
                :rules="phoneRules"
                placeholder="الرجاء ادخال رقم الجوال"
              ></v-text-field>
              <div class="drop-countries">
                <Dropdown
                  v-model="selectedCountry"
                  :options="countries"
                  optionLabel="name"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex-group-me">
                      <img
                        :alt="slotProps.value.label"
                        :src="slotProps.value.image"
                        :class="`mr-2 flag `"
                        style="width: 24px"
                      />
                      <div>{{ slotProps.value.key }}</div>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex-group-me">
                      <img
                        :alt="slotProps.option.label"
                        :src="slotProps.option.image"
                        :class="`mr-2 flag `"
                        style="width: 24px"
                      />
                      <div>{{ slotProps.option.key }}</div>
                    </div>
                  </template>
                </Dropdown>
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
              <h6 class="mb-2 font14">المدينة</h6>
              <Dropdown
                v-model="selectedCity"
                :options="cities"
                filter
                optionLabel="name"
                placeholder="الرجاء ادخال المدينة"
                class="main-select"
              />
            </div>

            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14">نبذة عنك بالعربية</h6>
              <v-textarea
                :rules="defaultRoles"
                rows="7"
                placeholder="الرجاء ادخال نبذة عنك بالعربية"
              ></v-textarea>
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

import { onMounted ,  ref } from "vue";

// rective state
const phone = ref("");

const valid = ref(false);

const phoneRules = ref([
  (value) => {
    if (value) return true;

    return "الهاتف مطلوب";
  },
  (value) => {
    if (value.length >= 10) return true;

    return "يجب ان يحتوي الهاتف على 10 ارقام على الاقل";
  },
]);
const defaultRoles = ref([
  (value) => {
    if (value) return true;

    return "هذا الحقل مطلوب";
  },
]);
const selectedCountry = ref({
  key: "+966",
  code: "SA",
  image:
    "https://backend.maak-lancer.com/public/storage/images/countries/1701785725_8987.png",
});
const countries = ref([
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701785725_8987.png",
    iso: "SAU",
    key: "+966",
  },
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701706482_5320.jpg",
    iso: "SAU",
    key: "+20",
  },
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701706548_3857.jpg",
    iso: "SAU",
    key: "+977",
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
