<template>
  <div class="card flex flex-wrap justify-content-center gap-3">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText v-model="value" placeholder="Search" />
      <Button class="bg-teal-500 ml-2" @click="searchMovie">Search</Button>
      <Button class="bg-teal-500 ml-2" @click="backMovie">Reset</Button>
    </span>
  </div>

  <div class="grid mt-2">
    <div class="col-4" v-for="movie in movies" :key="movie">
      <BaseCard :movie="movie" />
    </div>
  </div>
</template>
<script>
import BaseCard from "../components/BaseCard.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
  components: {
    BaseCard,
    Button,
    InputText,
  },

  data() {
    return {
      value: "",
      datas: [],
      movies: [],
      genres: [],
    };
  },
  methods: {
    searchMovie() {
      if (this.datas.results.length > 0) {
        this.movies = this.datas.results.filter((movie) => {
          return movie.title.toLowerCase().includes(this.value.toLowerCase());
        });
      }
    },
    backMovie() {
      this.movies = this.datas.results;
    },
  },

  async mounted() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=23f55821cea8e8f99e2bb901f57e9d1f`
      );
      const data = await response.json();
      this.datas = data;
      this.movies = data.results;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
<style></style>
