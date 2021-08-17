export const state = () => ({

    movies: []
  })

  export const mutations = {
    addMovie(state, movie) {
        state.movies.push(movie)
    },
    removeMovie(state, movieId) {
        state.movies = state.movies.filter((movie) => movie.id !== movieId)
    },
}

export const actions = {
    addMovie: ({commit}, movie) => {
        commit('addMovie', movie)
    },
    removeMovie:({commit}, movie) =>{
        commit('removeMovie', movie)
    }
}

export const getters = {


}