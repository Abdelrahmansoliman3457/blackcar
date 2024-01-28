<template>
  <div class="editTabs">
    <NuxtLink to="/editProfile" class="flex-nuxt-link mb-2">
      <div>تعديل بيانات الحساب</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </div>
    </NuxtLink>
    <NuxtLink to="/editProfile/changePhone" class="flex-nuxt-link mb-2">
      <div>تغيير رقم الجوال</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </div>
    </NuxtLink>
    <NuxtLink to="/editProfile/changeEmail" class="flex-nuxt-link mb-2">
      <div>تغيير البريد الإلكتروني</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </div>
    </NuxtLink>
    <NuxtLink to="/editProfile/editPassword" class="flex-nuxt-link mb-1">
      <div>تغيير كلمة المرور</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
// imports

import { onMounted } from "vue";

//props

// rective state

// functions

// lifecycle hooks
onMounted(() => {});
</script>
