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
                    <v-form @submit.prevent="updateProfile" v-model="valid">
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          الاسم ثلاثي
                        </h6>
                        <v-text-field
                          v-model="user_name"
                          type="text"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال الاسم ثلاثي"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">العنوان</h6>
                        <v-text-field
                          type="text"
                          v-model="address"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال العنوان"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1 mb-4">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          تاريخ الميلاد
                        </h6>
                        <Calendar
                          v-model="dateOfBirth"
                          dateFormat="dd/mm/yy"
                          placeholder="الرجاء ادخل تاريخ الميلاد"
                        />
                      </div>

                      <div class="mb-4">
                        <div class="flex-big-gap">
                          <div class="all-container-type">
                            <h6 class="mb-3 requiredInputLabel">الجنس</h6>
                            <div class="flex-sm-gap">
                              <input
                                type="radio"
                                v-model="sex"
                                value="male"
                                name="accountType"
                                id="company"
                                class="mainRadio"
                              />
                              <label for="company">ذكر</label>
                            </div>
                          </div>
                          <div class="all-container-type">
                            <h6 class="styleOnly mb-3">styleOnly</h6>
                            <div class="flex-sm-gap">
                              <input
                                type="radio"
                                v-model="sex"
                                id="user"
                                value="female"
                                name="accountType"
                                class="mainRadio"
                              />
                              <label for="user">انثى</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="main-input-cont drop-main mb-4">
                        <h6 class="mb-2 font14 requiredInputLabel">الجنسية</h6>
                        <Dropdown
                          v-model="selectedNationality"
                          :options="nationalities"
                          filter
                          optionLabel="name"
                          placeholder="الرجاء ادخال الجنسية"
                          class="main-select"
                        />
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          رقم الهوية
                        </h6>
                        <v-text-field
                          type="number"
                          v-model="national_no"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال رقم الهوية"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1 mb-4">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          تاريخ انتهاء الهوية
                        </h6>
                        <Calendar
                          v-model="national_expiry_date"
                          dateFormat="dd/mm/yy"
                          placeholder="الرجاء ادخل تاريخ الميلاد"
                        />
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          نوع الرخصة
                        </h6>
                        <v-text-field
                          type="text"
                          v-model="license_type_id"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال نوع الرخصة"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          رقم الرخصة
                        </h6>
                        <v-text-field
                          type="number"
                          v-model="license_no"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال رقم الرخصة"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1 mb-4">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          تاريخ انتهاء الرخصة
                        </h6>
                        <Calendar
                          v-model="license_expiry_date"
                          dateFormat="dd/mm/yy"
                          placeholder="الرجاء ادخل تاريخ انتهاء الرخصة"
                        />
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          نوع جهة العمل
                        </h6>
                        <v-text-field
                          type="text"
                          v-model="work_type_id"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال نوع جهة العمل"
                        ></v-text-field>
                      </div>
                      <div class="main-input-cont mt-1">
                        <h6 class="mb-2 font14 requiredInputLabel">
                          اسم جهة العمل
                        </h6>
                        <v-text-field
                          type="text"
                          v-model="employer"
                          :rules="defaultRoles"
                          placeholder="الرجاء ادخال اسم جهة العمل"
                        ></v-text-field>
                      </div>

                      <button
                        type="submit"
                        :disabled="disabled"
                        class="main-btn up w-100 mt-4"
                      >
                        <div v-if="!disabled">حفظ</div>
                        <div class="loading" role="status" v-if="disabled">
                          جاري الحفظ
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
import Calendar from "primevue/calendar";
import editTabs from "@/components/profile/editTabs.vue";

import { useToast } from "primevue/usetoast";
const toast = useToast();
import moment from "moment";

// rective state
const selectedNationality = ref(null);
const nationalities = ref([]);
const user_name = ref("");
const national_no = ref("");
const address = ref("");
const sex = ref("");
const employer = ref("");
const license_no = ref("");
const valid = ref(false);
const license_type_id = ref("");
const work_type_id = ref("");
const disabled = ref(false);
const dateOfBirth = ref(null);
const license_expiry_date = ref(null);
const national_expiry_date = ref(null);

const defaultRoles = ref([
  (value) => {
    if (value) return true;

    return "هذا الحقل مطلوب";
  },
]);

const axios = useNuxtApp().$axios;
// functions
function getProfileData() {
  axios
    .get(
      `https://apptheblackcar.co/api/v1/get_user_info?api_token=BlackCar@654321&user_id=${localStorage.getItem(
        "user_id"
      )}&lang=${localStorage.getItem("locale")}_001`
    )
    .then((response) => {
      user_name.value = response.data.result.user_name;
      address.value = response.data.result.country_name;
      dateOfBirth.value = response.data.result.date_of_birth;
      sex.value = response.data.result.sex;
      // nationality.value = response.data.result.country_name;
      national_no.value = response.data.result.national_no;
      national_expiry_date.value = response.data.result.national_expiry_date;
      license_type_id.value = response.data.result.license_type_id;
      license_no.value = response.data.result.license_no;
      license_expiry_date.value = response.data.result.license_expiry_date;
      work_type_id.value = response.data.result.work_type_id;
      employer.value = response.data.result.employer;
    });
}
function updateProfile() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/save_user_info?api_token=BlackCar@654321&user_id=${localStorage.getItem('user_id')}&user_name=${
          user_name.value
        }&user_passport_no=${
          national_no.value
        }&user_date_of_birth=${moment(dateOfBirth.value).format(
          "YYYY-MM-DD"
        )}&country_id=68&user_address=${address.value}&user_sex=${
          sex.value
        }&work_type_id=1&employer=${
          employer.value
        }&license_type_id=2&user_license_no=${
          license_no.value
        }&user_license_expiry_date=${moment(license_expiry_date.value).format(
          "YYYY-MM-DD"
        )}&user_national_no=${national_no.value}&user_national_expiry_date=${moment(
          national_expiry_date.value
        ).format("YYYY-MM-DD")}&user_country_id=65&user_source=website`
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
onMounted(() => {
  getProfileData();
});
</script>
