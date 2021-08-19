export const state = () => ({

    movies: [],
    user:[]
  })

  export const mutations = {
    addMovie(state, movie) {
        state.movies.push(movie)
        localStorage.setItem('listOfMovies', JSON.stringify(state.movies))
    },
    removeMovie(state, movie) {
        state.movies.splice(state.movies.map(x => x.id).indexOf(movie.id), 1)
        localStorage.setItem('listOfMovies', JSON.stringify(state.movies))
        
    },
    setListOfMovies(state, listOfMovies){
        if (listOfMovies!==null){
        state.movies = listOfMovies
        }
    },
    user (state, user) {
        state.user.push(user)
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

    },
    nuxtServerInit ( {commit}, {app} ) {
        if (app.$cookies.get("username")) {
          commit('user', app.$cookies.get("username"))
          console.log(app.$cookies.get("username"))
        }
      }
}

export const getters = {


}