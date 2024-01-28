<template>
  <div>
    <div class="page-pad login-page pad-big">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3">كود التحقق</h5>
          <p class="gray-col text-center">ادخل كود التحقق المرسل إليك</p>
          <div class="code-container mb-5">
            <v-otp-input
              ref="otpInput"
              focused
              input-classes="otp-input"
              separator=" "
              :num-inputs="4"
              name="otpInput"
              v-model="OtpValue"
              :is-input-num="true"
            />
          </div>

          <button type="button" @click="sendCode" :disabled="disabled || OtpValue.length < 4" class="main-btn mt-4 up w-100">
            <div v-if="!disabled">تاكيد</div>
            <div class="loading" role="status" v-if="disabled">
              جاري التاكيد
              <div class="spinner-small-white" v-if="disabled"></div>
            </div>
          </button>
          <div class="flex-group-me mt-3 font14">
            <div class="have-you gray-col">
              لم يصلك رمز التفعيل؟
              <button class="resend-btn" @click="resendOtp" :disabled="disabledOtp" type="button">
                <div>رمز جديد</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// imports

import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const router = useRouter();

// rective state
const disabled = ref(false);
const disabledOtp = ref(false);
const OtpValue = ref("");

// functions
function focusInputOtp() {
  document.querySelector(".v-otp-input__field").focus();
}
const axios = useNuxtApp().$axios;

function sendCode() {
  disabled.value = true;
  axios
    .get(
      `https://apptheblackcar.co/api/v1/forget_password_update?api_token=BlackCar@654321&user_phone=${localStorage.getItem(
        "user_phone"
      )}&user_otp=${OtpValue.value}`
    )
    .then((response) => {
      if (response.data.message == "Success.") {
        toast.add({
          severity: "success",
          detail: `${response.data.message}`,
          life: 3000,
        });
        localStorage.setItem("realOtp", OtpValue.value);
        setTimeout(function () {
          router.push("/restorePasswordConfirm");
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

function resendOtp() {
  
    disabledOtp.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/forget_password?api_token=BlackCar@654321&user_phone=${localStorage.getItem("user_phone")}`
      )
      .then((response) => {
        if (response.data.message == "Success.") {
          toast.add({
            severity: "success",
            detail: `${response.data.message}`,
            life: 3000,
          });
          localStorage.setItem("user_otp", response.data.user_otp);

        } else {
          toast.add({
            severity: "error",
            detail: `${response.data.message}`,
            life: 3000,
          });
        }
        disabledOtp.value = false;
      });
  
}

// lifecycle hooks
onMounted(() => {
  focusInputOtp();
});
</script>
