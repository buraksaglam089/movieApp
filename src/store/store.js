import { defineStore } from "pinia";

export const movieStore = defineStore("movieStore", {
  state: () => {
    return { myMovies: [] };
  },
  actions: {
    addMovie(movie) {
      const isUniqMovie = this.myMovies.some((m) => m.id === movie.id);

      if (!isUniqMovie) {
        this.myMovies.push(movie);
      }
    },
  },
});
