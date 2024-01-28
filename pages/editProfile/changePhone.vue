<template>
  <div>
  
    <div class="section-pad pt-spe">
      <div class="container">
        <div class="editProfile">
          <div class="row">
            <div class="col-md-3">
              <editTabs />
            </div>
            <div class="col-md-9 col-12">
              <div class="tap-content">
                <div class="row">
                  <div class="col-lg-10 mx-auto login-page editpro">
                    <v-form @submit.prevent="changePhone" v-model="valid">
             
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">كلمة المرور الحالية</h6>
                        <v-text-field
                          v-model="password"
                          type="password"
                          :rules="passwordRules"
                          placeholder="الرجاء ادخال كلمة المرور"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1 tel-input-me">
                        <h6 class="mb-2 font14 requiredInputLabel">رقم الجوال الجديد</h6>
                        <v-text-field
                          v-model="phone"
                          type="number"
                          min="0"
                          :rules="phoneRules"
                          placeholder="الرجاء ادخال رقم الجوال"
                        ></v-text-field>
                        <div class="drop-countries top-def">
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
                        class="main-btn up w-100 mt-4"
                      >
                        <div v-if="!disabled">تاكيد</div>
                        <div class="loading" role="status" v-if="disabled">
                          جاري التاكيد
                          <div
                            class="spinner-small-white"
                            v-if="disabled"
                          ></div>
                        </div>
                      </button>
                    </v-form>
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
import editTabs from "@/components/profile/editTabs.vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

// rective state
const phone = ref("");
const password = ref("");
const valid = ref(false);
const disabled  = ref(false);
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
    if (value.length >= 9) return true;

    return "يجب ان يحتوي الهاتف على 9 ارقام على الاقل";
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
function changePhone() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/save_user_info?api_token=BlackCar@654321&user_id=${localStorage.getItem('user_id')}&user_phone=${phone.value}`
      )
      .then((response) => {
        if (response.data.message == "Success.") {
          toast.add({
            severity: "success",
            detail: `${response.data.message}`,
            life: 3000,
          });
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
