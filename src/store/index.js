import { createStore } from "vuex"
import getRandonInt from '../helpers/getRandomInt'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false
    },
    mutations: {
        increment( state ){
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ){
            state.count += val
            state.lastMutation = 'incrementBy'
        },
        setLoading(state, val){
            state.isLoading = val
        }

    },

    actions:{
        async incrementRandomInt( {commit} ){
            commit('setLoading', true)
            const randomInt = await getRandonInt()
            commit('setLoading', false)
            commit('incrementBy', randomInt)
        }    
    },
    getters:{
        squareCount( state ){
            return state.count * state.count

        }
    }
})