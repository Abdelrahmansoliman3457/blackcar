<template>
  <div class="upoloadsingle">
    <label :for="IdOfInput" class="upload-style">
      <div class="main-input-cont relative-parent mt-1">
        <v-text-field
          type="text"
          disabled
          placeholder="ارفق صورة رخصة السيارة"
        ></v-text-field>
        <div class="abs-mark-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cloud-upload"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
            />
          </svg>
        </div>
      </div>
    </label>
    <input
      type="file"
      :id="IdOfInput"
      :name="nameOfInput"
      ref="uploadMain"
      hidden
      accept="application/*"
      @change="uploadSingleFile($event)"
    />
    <div class="upload-area-cv mt-2">
      <div
        class="relative-parent"
        v-for="(image, key) in aploadedFiles"
        :key="key"
      >
        <div class="abs-mark-main" @click="removefile(image, key)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
        <div class="pdf-main">
          <img class="pdf-im" src="@/assets/imgs/pdf.png" />
          {{ image.name }}
        </div>
      </div>
    </div>
    <div class="upload-area-cv mt-2" v-if="uploadedFile && showUploaded">
      <div class="relative-parent">
        <a href="uploadedFile" target="_blank" class="pdf-main d-block">
          <img class="pdf-im" :src="pdfImg" />
          {{ uploadedFile }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref, onMounted, defineProps } from "vue";

//props
const props = defineProps(["name", "id", "uploadedFile"]);

// reactive state
const aploadedFiles = ref([]);
const nameOfInput = ref("");
const IdOfInput = ref("");

const uploadMain = ref(null);
const showUploaded = ref(true);

// functions

function uploadSingleFile(e) {
  showUploaded.value = false;
  let selectedFiles = e.target.files;
  for (let i = 0; i < selectedFiles.length; i++) {
    aploadedFiles.value = [];
    aploadedFiles.value.push(selectedFiles[i]);
  }
}

function removefile(image, index) {
  aploadedFiles.value.splice(index, 1);
  uploadMain.value.value = "";
}

// lifecycle hooks
onMounted(() => {
  nameOfInput.value = props.name;
  IdOfInput.value = props.id;
});
</script>
