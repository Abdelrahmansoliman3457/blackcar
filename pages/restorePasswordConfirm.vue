<template>
  <div>

    <div class="page-pad login-page p-top-main">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3">استعادة كلمة المرور</h5>
          <p class="gray-col text-center">ادخل كلمة المرور الجديدة</p>
          <v-form @submit.prevent="confirmPass" v-model="valid">
            <div class="main-input-cont mb-3 mt-1">
              <h6 class="mb-2 font14">كلمة المرور</h6>
              <v-text-field
                v-model="password"
                type="password"
                :rules="passwordRules"
                placeholder="الرجاء ادخال كلمة المرور"
              ></v-text-field>
            </div>
            <div class="main-input-cont mb-3 mt-1">
              <h6 class="mb-2 font14">تأكيد كلمة المرور</h6>
              <v-text-field
                v-model="confirmPassword"
                type="password"
                :rules="confirmRules"
                placeholder="الرجاء ادخال كلمة المرور"
              ></v-text-field>
            </div>

            <button type="submit" :disabled="disabled" class="main-btn up w-100">
            <div v-if="!disabled">تاكيد</div>
            <div class="loading" role="status" v-if="disabled">
              جاري التاكيد
              <div class="spinner-small-white" v-if="disabled"></div>
            </div>
          </button>
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
const password = ref("");
const confirmPassword = ref("");
const valid = ref(false);
const disabled = ref(false);
const passwordRules = ref([
  (value) => {
    if (value) return true;

    return "كلمة المرور مطلوبة";
  },
]);
const confirmRules = ref([
  (value) => {
    if (value) return true;

    return "كلمة المرور مطلوبة";
  },
  (value) => {
    if (value === password.value) return true;

    return "كلمة المرور غير متطابقة";
  },
]);

// functions

const axios = useNuxtApp().$axios;

function confirmPass() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/forget_password_update?api_token=BlackCar@654321&user_phone=${localStorage.getItem(
          "user_phone"
        )}&user_password=${password.value}&user_otp=${localStorage.getItem("realOtp")}`
      )
      .then((response) => {
        if (response.data.message == "Success.") {
          toast.add({
            severity: "success",
            detail: `${response.data.message}`,
            life: 3000,
          });
          setTimeout(function () {
            router.push("/login");
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
