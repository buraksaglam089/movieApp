<template>
  <Header class="headerStyle" />
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
  data() {
    return {
      value: "",
      datas: [],
      movies: [],
    };
  },
  mounted() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=23f55821cea8e8f99e2bb901f57e9d1f"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.datas = data;
        this.movies = this.datas.results;
        console.log(this.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style>
.headerStyle {
  position: fixed;
}
</style>
