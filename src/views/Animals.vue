<template>
  <div class="animals">
    <div v-bind:key="animal.name" v-for="animal in allAnimals"> 
      Name: {{animal.name}} 
      Owner: {{animal.owner}}
      Location: {{animal.location}}
    </div>
    <button v-on:click="showAnimalForm">Add Animal </button>
    
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'Animals',
   computed: {
    allAnimals() {
      return this.$store.getters.animalsWithLocations;
    }
   },
  components: {
    
  },
  methods: {
    showAnimalForm: function(){
      
      this.$router.push("animals/new")
    }
  }
}
</script>
