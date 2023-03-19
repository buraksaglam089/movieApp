<template>
  <Header />

  <router-view />
</template>
<script>
import BaseCard from "./components/BaseCard.vue";
import Header from "./components/Header.vue";
import InputText from "primevue/inputtext";
export default {
  components: {
    BaseCard,
    Header,
    InputText,
  },
};
</script>
