<template>
  <div class="home">
    <form>
      Animal Name:
      <input v-model="animalName" name="name" value="" /> Owner:
      <input v-model="animalOwner" name="owner" value="" />
      Location:
      <select v-model="animalLocation">
        <option value="" selected disabled>Choose</option>
        <option
          v-for="location in allLocations"
          :value="location.id"
          :key="location.id"
          >{{ location.name }}</option
        >
      </select>
    </form>
    <button v-on:click="submitAnimal">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Animal Form",
  computed: {
    allLocations() {
      return this.$store.state.locations;
    },
  },
  data: function() {
    return {
      animalName: "",
      animalOwner: "",
      animalLocation: 0,
    };
  },
  components: {},
  methods: {
    submitAnimal: function() {
      const newAnimal = {
        name: this.animalName,
        owner: this.animalOwner,
        locationId: this.animalLocation,
      };
      // eslint-disable-next-line no-debugger
     debugger;
      this.$store.commit("ADDANIMAL", newAnimal);
      this.$router.push("/animals");
    },
  },
};
</script>
