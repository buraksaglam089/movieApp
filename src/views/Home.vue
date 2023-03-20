<template>
  <div class="card flex flex-wrap justify-content-between gap-1">
    <div class="flex align-item-center">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="value" placeholder="Search" class="h-full" />
      </span>
      <Button class="bg-teal-500 ml-2" @click="searchMovie">Search</Button>
      <Button class="bg-teal-500 ml-2" @click="backMovie">Reset</Button>
    </div>
    <div>
      <Paginator
        v-model:first="currentPage"
        :rows="10"
        :totalRecords="150"
        @page="getMovie"
        :rowsPerPageOptions="false"
      ></Paginator>
    </div>
  </div>
  <div v-if="showResult" class="flex justify-content-center">
    <h1>NO RESULTS FOUND</h1>
  </div>

  <div class="grid mt-2">
    <div class="col-12 md:col-6 lg:col-3" v-for="movie in movies" :key="movie">
      <BaseCard :movie="movie" />
    </div>
  </div>
</template>
<script>
import BaseCard from "../components/BaseCard.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
export default {
  components: {
    BaseCard,
    Button,
    InputText,
    Paginator,
  },

  data() {
    return {
      value: "",
      movieData: [],
      movies: [],
      showResult: false,
      currentPage: null,
    };
  },
  methods: {
    searchMovie() {
      if (this.movieData.results.length > 0) {
        this.movies = this.movieData.results.filter((movie) => {
          return movie.title.toLowerCase().includes(this.value.toLowerCase());
        });
      }
      if (this.movies.length === 0) {
        this.showResult = true;
      } else {
        this.showResult = false;
      }
    },
    backMovie() {
      this.movies = this.movieData.results;
      this.showResult = false;
    },

    async getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_API_KEY
          }&page=${this.currentPage + 1} `
        );

        const data = await response.json();

        this.movieData = data;
        this.movies = data.results;
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.getMovie();
  },
};
</script>
<style></style>
