<template>
  <div class="home">
    <form>
      Location Name:
      <input v-model="locationName" name="name" value="" /> Address:
      <input v-model="locationAddress" name="address" value="" />
    </form>
    <button v-on:click="submitLocation">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Location Form",
  data: function() {
    return {
      locationName: "",
      locationAddress: "",
    };
  },
  components: {},
  methods: {
    submitLocation: function() {
       this.$store.commit('ADDLOCATION', {name:this.locationName, address:this.locationAddress})
       this.$router.push("/")
    },
  },
};
</script>
