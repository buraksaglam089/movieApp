<template>
  <div>
    <h1 class="flex justify-content-center header">
      {{ currentMovie.original_title
      }}<Button @click="addMovie" class="ml-2"
        ><i class="pi pi-bookmark-fill"></i
      ></Button>
    </h1>

    <img
      alt="user header"
      :src="`https://image.tmdb.org/t/p/w500/${this.currentMovie.poster_path}`"
      class="saga-kaydir mr-2"
    />

    <div>
      <div class="card">
        <Fieldset :toggleable="true">
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-info-circle mr-2"></span>
              <span class="font-bold text-lg">Overview</span>
            </div>
          </template>
          <p class="m-0">
            <span>{{ currentMovie.overview }}</span>
          </p>
        </Fieldset>
        <Fieldset class="mt-3" :toggleable="true">
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-chart-line mr-2"></span>
              <span class="font-bold text-lg">Popularity</span>
            </div>
          </template>
          <p class="m-0">
            <span
              >{{ this.currentMovie.popularity }} people watched this movie
            </span>
          </p>
        </Fieldset>
        <Fieldset class="mt-3" :toggleable="true">
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-calendar mr-2"></span>
              <span class="font-bold text-lg"> Release Date</span>
            </div>
          </template>
          <p class="m-0">
            <span>{{ currentMovie.release_date }} </span>
          </p>
        </Fieldset>
        <Fieldset class="mt-3" :toggleable="true">
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-chart-bar mr-2"></span>
              <span class="font-bold text-lg"> Vote Avarege and Count </span>
            </div>
          </template>
          <p class="m-0">
            <span
              >{{ currentMovie.vote_average }} is the average of this movie
            </span>
          </p>
          <p class="mt-1">
            <span>{{ currentMovie.vote_count }} people voted this movie</span>
          </p>
          <p><Rating v-model="star" readonly :cancel="false" /></p
        ></Fieldset>
        <Fieldset class="mt-3" :toggleable="true">
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-calendar mr-2"></span>
              <span class="font-bold text-lg"> Genres</span>
            </div>
          </template>
          <p class="m-0">
            <span
              ><div v-for="genre in currentMovie.genres" :key="genre">
                <span>{{ genre.name }}</span>
              </div>
            </span>
          </p>
        </Fieldset>
      </div>
    </div>
  </div>
</template>
<script>
import Fieldset from "primevue/fieldset";
import Rating from "primevue/rating";
import { movieStore } from "../store/store";
import Button from "primevue/button";
import { mapActions } from "pinia";

export default {
  components: {
    Fieldset,
    Rating,
    Button,
  },
  data() {
    return {
      currentId: this.$route.params.id,
      currentMovie: {},
      stars: movieStore(),
      star: 0,
      roundenNumber: 0,
      movieGenre: [],
    };
  },
  methods: {
    ...mapActions(movieStore, ["addMovie"]),
    getStar() {
      this.star = this.currentMovie.vote_average;
      this.star = this.star / 2;
    },
    addMovie() {
      this.stars.addMovie(this.currentMovie);
    },
    addGenre() {
      this.movieGenre.push(this.currentMovie.genres);
    },
  },
  async mounted() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=23f55821cea8e8f99e2bb901f57e9d1f`
      );
      const data = await response.json();
      this.currentMovie = data;
    } catch (error) {
      console.error(error);
    }
    this.getStar();
    this.addGenre();
  },
};
</script>
<style>
.saga-kaydir {
  float: left;
  padding: 0 0 10px 10px;
}
.header {
  background-color: #adb1b9;
  padding: 10px;
  border-radius: 5px;
  font: 30px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #1480c4;
}
</style>
