<template>
  <div>
    <div class="page-pad login-page p-top-main">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3">تسجيل دخول</h5>
          <p class="gray-col text-center">أهلاً بك وبعودتك</p>
          <v-form @submit.prevent="login" v-model="valid">
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
                        :class="`mr-2 flag flag-${slotProps.value.key.toLowerCase()}`"
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
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14">كلمة المرور</h6>
              <v-text-field
                v-model="password"
                type="password"
                :rules="passwordRules"
                placeholder="الرجاء ادخال كلمة المرور"
              ></v-text-field>
            </div>

            <div class="link font14 mb-3 color-main">
              <NuxtLink to="/restorePassword" class="color-main"
                >هل نسيت كلمة المرور ؟</NuxtLink
              >
            </div>
            <button
              type="submit"
              :disabled="disabled"
              class="main-btn up w-100"
            >
              <div v-if="!disabled">تسجيل الدخول</div>
              <div class="loading" role="status" v-if="disabled">
                جاري التسجيل
                <div class="spinner-small-white" v-if="disabled"></div>
              </div>
            </button>
            <div class="flex-group-me mt-3">
              <div class="dont-have font14 gray-col">
                ليس لديك حساب؟
                <NuxtLink to="/register">اضغط هنا</NuxtLink>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const router = useRouter();

// rective state
const phone = ref("");
const password = ref("");
const valid = ref(false);
const disabled = ref(false);
const passwordRules = ref([
  (value) => {
    if (value) return true;

    return "كلمة المرور مطلوبة";
  },
]);
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

const axios = useNuxtApp().$axios;

function login() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/login?api_token=BlackCar@654321&user_password=${
          password.value
        }&user_phone=${phone.value}&lang=${localStorage.getItem("locale")}_001`
      )
      .then((response) => {
        if (response.data.message == "Success.") {
          toast.add({
            severity: "success",
            detail: `${response.data.message}`,
            life: 3000,
          });
          localStorage.setItem("user_id", response.data.result.user_id);
          localStorage.setItem("user_name", response.data.result.user_name);
          setTimeout(function () {
            router.push("/");
          }, 100);
        } else {
          toast.add({
            severity: "error",
            detail: `${response.data.message}`,
            life: 3000,
          });
        }
        disabled.value = false;
      });
  }
}

// lifecycle hooks
onMounted(() => {});
</script>
