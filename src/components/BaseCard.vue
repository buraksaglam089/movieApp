<template>
  <div class="grid" @click="goDetails">
    <Card class="m-2 bg-white-alpha-10" style="width: 25em">
      <template #header>
        <div>
          <img
            alt="user header"
            :src="`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`"
          />
        </div>
      </template>

      <template #title>
        <div class="h-5rem">
          {{ this.movie.title }}
        </div>
      </template>

      <template #subtitle
        >{{ this.movie.vote_average }}<i class="pi pi-star-fill ml-1"></i>
      </template>

      <template #content>
        <div class="h-3rem">
          <p class="text-overflow-example">
            {{ movie.overview }}
          </p>
        </div>
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
  methods: {
    goDetails() {
      this.$router.push({ name: "Details", params: { id: this.id } });
    },
  },
};
</script>
<style>
.text-overflow-example {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px; /* Metnin sığdırılacağı genişlik */
}
.overflow-example {
  overflow: auto; /* Metnin taşması durumunda kaydırma çubuklarını göster */
}
</style>
