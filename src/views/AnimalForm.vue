<template>
  <div class="home">
    <form>
      Animal Name:
      <input v-model="animalName" name="name" value="" /> Owner:
      <input v-model="animalOwner" name="owner" value="" />
      
    </form>
    <button v-on:click="submitAnimal">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Animal Form",
  data: function() {
    return {
      animalName: "",
      animalOwner: "",
    };
  },
  components: {},
  methods: {
    submitAnimal: function() {
       this.$store.commit('ADDANIMAL', {name:this.animalName, owner:this.animalOwner})
       this.$router.push("/animals")
    },
  },
};
</script>