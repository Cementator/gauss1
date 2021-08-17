export const state = () => ({

    movies: []
  })

  export const mutations = {
    addMovie(state, movie) {
        state.movies.push(movie)
        localStorage.setItem('listOfMovies', JSON.stringify(state.movies))
        console.log(localStorage.getItem('listOfMovies'))
    },
    removeMovie(state, movieId) {
        state.movies.splice(state.movies.indexOf(movieId), 1)
        localStorage.setItem('listOfMovies', JSON.stringify(state.movies))
        console.log(localStorage.getItem('listOfMovies'))
        
    },
    setListOfMovies:(state, listOfMovies)=>{
        if (listOfMovies!==undefined){
        state.movies.push(listOfMovies)
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
    setListOfMovies:({commit, setListOfMovies})=>{
        commit('setListOfMovies', setListOfMovies)

    }
}

export const getters = {


}