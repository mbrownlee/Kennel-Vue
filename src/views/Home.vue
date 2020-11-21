<template>
  <div class="home">
    <div v-bind:key="location.name" v-for="location in allLocations"> 
      {{location.name}} {{location.address}}
    </div>
    <button v-on:click="showLocationForm">Add Location </button>
  </div>
</template>

<script>



export default {
  name: 'Home',
   computed: {
    allLocations() {
      return this.$store.state.locations;
    }
   },
  components: {
    
  },
  methods: {
    showLocationForm: function(){
      console.log("hello")
      this.$router.push("locations/new")
    }
  }
}
</script>
