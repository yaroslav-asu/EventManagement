import {ref} from "vue";

export default {
  state: {
    speakersPersons: ref([])
  },
  mutations: {
    addSpeakers(state, person) {
      state.speakersPersons.push(person)
      // state.personsList.push(person)
    },
    clearSpeakers(state){
      state.speakersPersons = []
    }
  },
  getters: {
    getSpeakers(state) {
      return state.speakersPersons
    }
  }
}
