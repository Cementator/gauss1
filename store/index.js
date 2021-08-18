export const state = () => ({

    movies: []
  })

  export const mutations = {
    addMovie(state, movie) {
        state.movies.push(movie)
        localStorage.setItem('listOfMovies', JSON.stringify(state.movies))
    },
    removeMovie(state, movie) {
        state.movies.splice(state.movies.indexOf(movie), 1)
        localStorage.setItem('listOfMovies', JSON.stringify(state.movies))
        
    },
    setListOfMovies(state, listOfMovies){
        if (listOfMovies!==null){
        state.movies = listOfMovies
        }
    }
}

export const actions = {
    addMovie: ({commit}, movie) => {
        commit('addMovie', movie)
    },
    removeMovie:({commit}, movie) =>{
        commit('removeMovie', movie)
    },
    setListOfMovies:({commit}, setListOfMovies)=>{
        commit('setListOfMovies', setListOfMovies)

    }
}

export const getters = {


}