import getRandonInt from '../../helpers/getRandomInt'

export const incrementRandomInt = async ( {commit} ) => {
    commit('setLoading', true)
    const randomInt = await getRandonInt()
    commit('setLoading', false)
    commit('incrementBy', randomInt)
}