<template>
  <div>
    <div class="all-header">
      <div class="header-top">
        <div class="container">
          <!--show if isn't login-->
          <nuxt-link v-if="!isLogged" to="/login" class="login-router">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"
                />
              </svg>
            </div>
            <div>دخول / انشاء حساب</div>
          </nuxt-link>
          <!--show if login-->
          <div
            v-if="isLogged"
            class="login-router profile-btn"
            @click="toggleDrop"
            v-click-outside="closeDropDown"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"
                />
              </svg>
            </div>
            <div>{{ user_name }}</div>
            <!-- <select
              id="locale-select"
              ref="langVal"
              @change="changeLang"
              v-model="$i18n.locale"
            >
              <option value="en">en</option>
              <option value="ar">ar</option>
            </select> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
            <ul class="my-drop-now" :class="{ showDrop: showDropDown }">
              <li>
                <NuxtLink to="/profile" class="flex-in-drop text-center w-100">
                  <div class="in-f-text">حسابي</div>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/editProfile" class="flex-in-drop text-center">
                  <div class="in-f-text">اعدادات الحساب</div>
                </NuxtLink>
              </li>
              <li>
                <button
                  type="button"
                  @click="logOut($event)"
                  :disabled="disabled"
                  class="flex-in-drop logOut text-center up"
                >
                  <div v-if="!disabled">تسجيل الخروج</div>
                  <div class="loading" role="status" v-if="disabled">
                    جاري الخروج
                    <div class="spinner-small-white" v-if="disabled"></div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div class="line-after"></div>
          <nuxt-link to="/notifications" class="login-router">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"
                />
              </svg>
            </div>
            <div>الاشعارات</div>
          </nuxt-link>
          <div class="line-after"></div>
          <div class="flex-money">
            <Dropdown
              v-model="selectedMoney"
              :options="money"
              optionLabel="name"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex-group-me">
                  <img
                    :alt="slotProps.value.label"
                    :src="slotProps.value.image"
                    :class="`mr-2 flag img-money`"
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
                    :class="`mr-2 flag`"
                    style="width: 20px; height: 20px; border-radius: 50%"
                  />
                  <div>{{ slotProps.option.key }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
          <div class="line-after"></div>
          <div class="flex-lang relative-parent" v-if="$i18n.locale == 'ar'">
            <div class="lang-text">
              <img src="../assets/imgs/saudi.png" alt="" />
            </div>
            <div class="lang-text">العربية</div>
            <div class="lang-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
            <div class="drop-down-content">
              <button class="web-lang active" @click="setArabic">
                العربية
              </button>
              <button class="web-lang" @click="setEnglish">الانجليزية</button>
            </div>
          </div>
          <div class="flex-lang relative-parent" v-if="$i18n.locale == 'en'">
            <div class="lang-text">
              <img src="../assets/imgs/saudi.png" alt="" />
            </div>
            <div class="lang-text">English</div>
            <div class="lang-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
            <div class="drop-down-content">
              <button class="web-lang active" @click="setEnglish">
                English
              </button>
              <button class="web-lang" @click="setArabic">Arabic</button>
            </div>
          </div>
        </div>
      </div>
      <div class="header-middle">
        <img src="../assets/imgs/Rectangle 3.png" class="abs-header" alt="" />
        <div class="container">
          <div class="flex-middle-header">
            <div class="right-header">
              <div class="sm-card">
                <div class="svg-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="bi bi-calendar"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                    />
                  </svg>
                </div>
                <div class="date-text gray-col">التاريخ: {{ dateNow }}</div>
              </div>
              <div class="sm-card">
                <div class="svg-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="bi bi-calendar-event"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                    />
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                    />
                  </svg>
                </div>
                <div class="date-text gray-col">اليوم: {{ dayNow }}</div>
              </div>
            </div>
            <div class="med-header">
              <img src="../assets/imgs/Group181403.png" alt="" />
            </div>
            <div class="left-header">
              <div class="sm-card">
                <img src="../assets/imgs/saudi.png" class="circle-sm" alt="" />
                <div class="date-text gray-col">
                  توقيت السعودية : {{ timeNow }}
                </div>
              </div>
              <div class="sm-card">
                <img
                  src="../assets/imgs/Rectangle 145303 (1).png"
                  class="circle-sm"
                  alt=""
                />
                <div class="date-text gray-col">
                  توقيت الامارات : {{ timeNowUae }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="header-bottom-info">
            <li>
              <NuxtLink to="/" class="header-link">{{ $t("home") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/carsPage" class="header-link">{{
                $t("allCars")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicesPage" class="header-link"
                >خدماتنا</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/offersPage" class="header-link"
                >العروض الحالية</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/locations" class="header-link">فروعنا</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/members" class="header-link">العضويات</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/Leasing" class="header-link"
                >سياسة التأجير</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/whous" class="header-link">من نحن</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactUs" class="header-link">اتصل بنا</NuxtLink>
            </li>
            <li>
              <button class="search-btn" @click="visible = true" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#fff"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="visible" modal :style="{ width: '600px' }">
      <div class="modal-body-main modal-pad">
        <div class="relative-parent">
          <input
            type="text"
            class="search-input"
            placeholder="ابحث ب اسم ,  ماركة , لون , موديل السيارة"
          />
          <button type="button" class="search-btn-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </Dialog>
    <Toast />
  </div>
</template>

<script setup>
// imports
import { ref, onMounted } from "vue";
const route = useRoute();
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const router = useRouter();

// reactive states
const disabled = ref(false);
const isLogged = ref(false);
const visible = ref(false);
const showDropDown = ref(false);
const user_name = ref("");
const dateNow = ref("");
const timeNow = ref("");
const timeNowUae = ref("");
const dayNow = ref("");
const selectedMoney = ref({
  key: "الجنيه المصري",
  code: "SA",
  image:
    "https://backend.maak-lancer.com/public/storage/images/countries/1701706482_5320.jpg",
});
const money = ref([
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701706482_5320.jpg",
    iso: "SAU",
    key: "الجنيه المصري",
  },
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701785725_8987.png",
    iso: "SAU",
    key: "الريال السعودي",
  },
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701706548_3857.jpg",
    iso: "SAU",
    key: "الدينار الكويتي",
  },
]);

const axios = useNuxtApp().$axios;

// functions
function logOut(e) {
  e.stopPropagation();
  disabled.value = true;
  axios
    .get(
      `https://apptheblackcar.co/api/v1/logout?api_token=BlackCar@654321&user_id=${localStorage.getItem(
        "user_id"
      )}`
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
      localStorage.removeItem("user_id");
      setTimeout(function () {
        router.push("/login");
      }, 100);
    });
}
function setEnglish() {
  if (!process.server) {
    localStorage.setItem("locale", "en");
  }
  location.reload();
}
function setArabic() {
  if (!process.server) {
    localStorage.setItem("locale", "ar");
  }

  location.reload();
}
function toggleDrop() {
  showDropDown.value = !showDropDown.value;
}
function closeDropDown() {
  showDropDown.value = false;
}
//get current date and time in uae and SA
function getCurrentDate() {
  const weekday = [
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const date = new Date();
  var local = date.getTime();
  var offset = date.getTimezoneOffset() * (60 * 1000);
  var utc = new Date(local + offset);
  var riyadh = new Date(utc.getTime() + 3 * 60 * 60 * 1000);
  timeNow.value = riyadh.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  dateNow.value = riyadh.toLocaleDateString();
  dayNow.value = weekday[riyadh.getDay()];

  var utcem = date.getTime() + date.getTimezoneOffset() * 60000;
  var uaeDate = new Date(utcem + 3600000 * 4);
  timeNowUae.value = uaeDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

watch(
  route,
  (value) => {
    showDropDown.value = false;
    if (!process.server) {
      user_name.value = localStorage.getItem("user_name");
      if (localStorage.getItem("user_id")) {
        isLogged.value = true;
      } else {
        isLogged.value = false;
      }
    }
  },
  { deep: true, immediate: true }
);

// lifecycle hooks
onMounted(() => {
  if (localStorage.getItem("locale") == "en") {
    document.querySelector("body").classList.add("ltr");
  } else {
    document.querySelector("body").classList.remove("ltr");
  }
  getCurrentDate();
  user_name.value = localStorage.getItem("user_name");
});
</script>
