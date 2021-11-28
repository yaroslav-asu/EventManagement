import {ref} from "vue";

export default {
  state: {
    moderatorsList: ref([])
  },
  mutations: {
    addModerators(state, person) {
      state.moderatorsList.push(person)
      // state.personsList.push(person)
    }
  },
  getters: {
    getModerators(state) {
      return state.moderatorsList
    }
  }
}