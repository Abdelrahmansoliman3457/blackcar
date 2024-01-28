<template>
  <div>

    <div class="page-pad login-page p-top-main">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3">استعادة كلمة المرور</h5>
          <p class="gray-col text-center">ادخل رقم جوالك</p>
          <v-form @submit.prevent="restorePassword" v-model="valid">
            <div class="main-input-cont mb-4 mt-1 tel-input-me">
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
            <button
              type="submit"
              :disabled="disabled"
              class="main-btn up w-100"
            >
              <div v-if="!disabled">ارسال</div>
              <div class="loading" role="status" v-if="disabled">
                جاري الارسال
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
const phone = ref("");

const valid = ref(false);
const disabled = ref(false);

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

const axios = useNuxtApp().$axios;

// functions
function restorePassword() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/forget_password?api_token=BlackCar@654321&user_phone=${phone.value}`
      )
      .then((response) => {
        if (response.data.message == "Success.") {
          toast.add({
            severity: "success",
            detail: `${response.data.message}`,
            life: 3000,
          });
          localStorage.setItem("user_phone", phone.value);
          localStorage.setItem("user_otp", response.data.user_otp);
          setTimeout(function () {
            router.push("/keyCode");
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
