<template>
  <div>

    <div class="section-pad pt-spe">
      <div class="container">
        <!--tabs-->
        <tabs />
        <!--profile info-->
        <div class="tap-content">
          <div class="info-row mb-4">
            <div class="info-box-profile">
              <h6 class="mb-4">الاسم ثلاثي</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ user_name }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">البريد الالكتروني</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ user_email }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">رقم الجوال</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ user_phone }}</div>
              </div>
            </div>
          </div>
          <div class="info-row mb-4">
            <div class="info-box-profile">
              <h6 class="mb-4">العنوان</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ address }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">تاريخ الميلاد</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ dateOfBirth }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">الجنس</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ sex }}</div>
              </div>
            </div>
          </div>
          <div class="info-row mb-4">
            <div class="info-box-profile">
              <h6 class="mb-4">الجنسية</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ nationality }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">رقم الهوية</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ national_no }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">تاريخ انتهاء الهوية</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ national_expiry_date }}</div>
              </div>
            </div>
          </div>
          <div class="info-row mb-4">
            <div class="info-box-profile">
              <h6 class="mb-4">نوع الرخصة</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ license_type_id }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">رقم الرخصة</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ license_no }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">تاريخ انتهاء الرخصة</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ license_expiry_date }}</div>
              </div>
            </div>
          </div>
          <div class="info-row twoOnly mb-4">
            <div class="info-box-profile">
              <h6 class="mb-4">نوع جهة العمل</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ work_type_id }}</div>
              </div>
            </div>
            <div class="info-box-profile">
              <h6 class="mb-4">اسم جهة العمل</h6>
              <div class="flex-sm-gap">
                <img src="@/assets/imgs/Frame (5).png" alt="" />
                <div class="font14">{{ employer }}</div>
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
import tabs from "@/components/profile/tabs.vue";


// reactive states
const loader = ref(false);
const user_name = ref("");
const user_phone = ref("");
const user_email = ref("");
const address = ref("");
const dateOfBirth = ref("");
const sex = ref("");
const nationality = ref("");
const national_no = ref("");
const national_expiry_date = ref("");
const license_type_id = ref("");
const license_no = ref("");
const license_expiry_date = ref("");
const work_type_id = ref("");
const employer = ref("");

// functions
const axios = useNuxtApp().$axios;

function getProfileData() {
  loader.value = true;
  axios
    .get(
      `https://apptheblackcar.co/api/v1/get_user_info?api_token=BlackCar@654321&user_id=${localStorage.getItem(
        "user_id"
      )}&lang=${localStorage.getItem("locale")}_001`
    )
    .then((response) => {
      user_name.value = response.data.result.user_name;
      user_email.value = response.data.result.user_email;
      user_phone.value = response.data.result.user_phone;
      address.value = response.data.result.country_name;
      dateOfBirth.value = response.data.result.date_of_birth;
      sex.value = response.data.result.sex;
      nationality.value = response.data.result.country_name;
      national_no.value = response.data.result.national_no;
      national_expiry_date.value = response.data.result.national_expiry_date;
      license_type_id.value = response.data.result.license_type_id;
      license_no.value = response.data.result.license_no;
      license_expiry_date.value = response.data.result.license_expiry_date;
      work_type_id.value = response.data.result.work_type_id;
      employer.value = response.data.result.employer;

      loader.value = false;
    });
}

// lifecycle hooks
onMounted(() => {
  getProfileData();
});
</script>
