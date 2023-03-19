import { defineStore } from 'pinia';

export const movieStore = defineStore('movieStore', {
    state: () => {
        return { myMovies: [
            
        ], };
    },
    actions: {
      addMovie(movie) {
        this.myMovies.push(movie);
      }
       
    }
});