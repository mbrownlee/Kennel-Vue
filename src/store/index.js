import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [
      {
        id: 1,
        name: "Puppy Palace",
        address: "123 Main St",
      },
    ],
    animals: [
      {
        name: "Angus",
        breed: "Mutt",
        owner: "Bob",
        locationId: 1,
      },
    ],
  },
  mutations: {
    ADDLOCATION(state, payload) {
      state.locations.push(payload);
    },
    ADDANIMAL(state, payload) {
      state.animals.push(payload);
    },
  },
  actions: {},
  modules: {},
  getters: {
    animalsWithLocations: function(state) {
      return state.animals.map(animal => {
        const matchingLocation = state.locations.find(location => {
          return location.id === animal.locationId
        })
        animal.location = matchingLocation.name
        return animal
      })
    }
  },
});
