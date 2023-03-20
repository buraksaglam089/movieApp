import { defineStore } from "pinia";

export const movieStore = defineStore("movieStore", {
  state: () => {
    return { myMovies: [] };
  },
  actions: {
    addMovie(movie) {
      if (!this.myMovies.some((m) => m.id === movie.id)) {
        this.myMovies.push(movie);
      }
    },
  },
});
