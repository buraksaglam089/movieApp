<template>
  <div class="grid">
    <Card style="width: 25em">
      <template #header>
        <img
          alt="user header"
          :src="`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`"
        />
      </template>
      <template #title> {{ this.movie.title }} </template>
      <template #subtitle
        >{{ this.movie.vote_average }}<i class="pi pi-star-fill ml-1"></i>
      </template>
      <template #content>
        <p>
          {{ movie.overview }}
        </p>
      </template>
      <template #footer>
        <button class="bg-primary">
          <router-link :to="{ name: 'BaseCard', params: { id: id } }"
            >Details</router-link
          >
        </button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
export default {
  components: {
    Card,
    Button,
  },
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Card,
  },
  data() {
    return {
      id: this.movie.id,
    };
  },
};
</script>
