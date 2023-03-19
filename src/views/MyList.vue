<template>
  <h1>BOOKMARK</h1>
  <div class="grid overflow-example">
    <div class="col-4" v-for="movie in myMovies" :key="movie">
      <Card style="width: 25em">
        <template #header>
          <img
            alt="user header"
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          />
        </template>
        <template #title>
          <div class="h-3rem">{{ movie.original_title }}</div>
        </template>
        <template #subtitle>
          {{ movie.vote_average }} <i class="pi pi-star-fill"> </i>
        </template>
        <template #content>
          <div class="h-5rem">
            <p>
              {{ movie.overview }}
            </p>
          </div>
        </template>
        <template #footer> </template>
      </Card>
    </div>
  </div>
</template>
<script>
import { movieStore } from "../store/store";
import Card from "primevue/card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      myMovies: movieStore().myMovies,
    };
  },
};
</script>
<style>
.saga-kaydir {
  float: left;
  padding: 0 0 10px 10px;
}
.limiter {
  height: 400px;
  max-height: 400px;
  min-height: 400px;
}
.overflow-example {
  overflow: auto; /* Metnin taşması durumunda kaydırma çubuklarını göster */
}
</style>
