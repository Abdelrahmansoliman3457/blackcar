<template>
  <div>

    <div class="register-page page-pad login-page pt-spe">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto">
          <h5 class="text-center mb-3" @click="register">إنشاء حساب</h5>
          <p class="gray-col text-center">قم بالانضمام إلينا</p>
          <v-form @submit.prevent="register" v-model="valid">
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14 requiredInputLabel">الاسم ثلاثي</h6>
              <v-text-field
                v-model="user_name"
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال الاسم ثلاثي"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14 requiredInputLabel">البريد الالكتروني</h6>
              <v-text-field
                v-model="user_email"
                type="email"
                :rules="emailRules"
                placeholder="الرجاء ادخال البريد الالكتروني"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1 tel-input-me">
              <h6 class="mb-2 font14">رقم الجوال</h6>
              <v-text-field
                v-model="user_phone"
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
              <h6 class="mb-2 font14 requiredInputLabel">العنوان</h6>
              <v-text-field
                type="text"
                v-model="address"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال العنوان"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1 mb-4">
              <h6 class="mb-2 font14 requiredInputLabel">تاريخ الميلاد</h6>
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
              <h6 class="mb-2 font14 requiredInputLabel">رقم الهوية</h6>
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
              <h6 class="mb-2 font14 requiredInputLabel">نوع الرخصة</h6>
              <v-text-field
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال نوع الرخصة"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14 requiredInputLabel">رقم الرخصة</h6>
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
              <h6 class="mb-2 font14 requiredInputLabel">نوع جهة العمل</h6>
              <v-text-field
                type="text"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال نوع جهة العمل"
              ></v-text-field>
            </div>
            <div class="main-input-cont mt-1">
              <h6 class="mb-2 font14 requiredInputLabel">اسم جهة العمل</h6>
              <v-text-field
                type="text"
                v-model="employer"
                :rules="defaultRoles"
                placeholder="الرجاء ادخال اسم جهة العمل"
              ></v-text-field>
            </div>
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
              <h6 class="mb-2 font14 requiredInputLabel">تاكيد كلمة المرور</h6>
              <v-text-field
                v-model="confirmPassword"
                type="password"
                :rules="confirmRules"
                placeholder="الرجاء ادخال كلمة المرور"
              ></v-text-field>
            </div>
            <button
              type="submit"
              :disabled="disabled"
              class="main-btn up w-100 mt-4"
            >
              <div v-if="!disabled">انشاء حساب</div>
              <div class="loading" role="status" v-if="disabled">
                جاري التسجيل
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
import moment from "moment";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const router = useRouter();

// rective state
const selectedNationality = ref(null);
const nationalities = ref([]);
const user_name = ref("");
const user_email = ref("");
const user_phone = ref("");
const password = ref("");
const national_no = ref("");
const address = ref("");
const sex = ref("");
const employer = ref("");
const license_no = ref("");
const confirmPassword = ref("");
const valid = ref(false);
const disabled = ref(false);
const dateOfBirth = ref(null);
const license_expiry_date = ref(null);
const national_expiry_date = ref(null);
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
const defaultRoles = ref([
  (value) => {
    if (value) return true;

    return "هذا الحقل مطلوب";
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
const axios = useNuxtApp().$axios;
// functions
function register() {
  if (valid.value) {
    disabled.value = true;
    axios
      .get(
        `https://apptheblackcar.co/api/v1/sign_up?api_token=BlackCar@654321&user_name=${
          user_name.value
        }&user_email=${user_email.value}&user_password=${
          password.value
        }&user_phone=${user_phone.value}&passport_no_or_national_no=${
          national_no.value
        }&date_of_birth=${moment(dateOfBirth.value).format(
          "YYYY-MM-DD"
        )}&country_id=68&address=${address.value}&sex=${
          sex.value
        }&work_type_id=1&employer=${
          employer.value
        }&license_type_id=2&license_no=${
          license_no.value
        }&license_expiry_date=${moment(license_expiry_date.value).format(
          "YYYY-MM-DD"
        )}&national_no=${national_no.value}&national_expiry_date=${moment(
          national_expiry_date.value
        ).format("YYYY-MM-DD")}&nationality_id=65&user_source=website`
      )
      .then((response) => {
        if (response.data.message == "Success.") {
          toast.add({
            severity: "success",
            detail: `${response.data.message}`,
            life: 3000,
          });
          localStorage.setItem("user_id", response.data.result.user_id);
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
