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
                    <v-form @submit.prevent="changeEmail" v-model="valid">
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          كلمة المرور الحالية
                        </h6>
                        <v-text-field
                          v-model="password"
                          type="password"
                          :rules="passwordRules"
                          placeholder="الرجاء ادخال كلمة المرور"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          البريد الالكتروني الجديد
                        </h6>
                        <v-text-field
                          v-model="email"
                          type="email"
                          :rules="emailRules"
                          placeholder="الرجاء ادخال البريد الالكتروني الجديد"
                        ></v-text-field>
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
const password = ref("");
const email = ref("");
const valid = ref(false);
const disabled = ref(false);
const passwordRules = ref([
  (value) => {
    if (value) return true;

    return "كلمة المرور مطلوبة";
  },
]);
const emailRules = ref([
  (value) => {
    if (value) return true;

    return "البريد الالكتروني مطلوب";
  },
  (value) => {
    if (
      value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    )
      return true;

    return "يجب ان يكون بريد الكتروني صحيح";
  },
]);

// functions

const axios = useNuxtApp().$axios;
// functions
function changeEmail() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/save_user_info?api_token=BlackCar@654321&user_id=${localStorage.getItem(
          "user_id"
        )}&user_email=${email.value}`
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
