
<template>
  <div>  
    <div class="home">
     <div class="block1"><p2block1/></div>
     <div class="block2"><p2block2/></div>

    </div>
  </div>
</template>

<script>


import p2block1 from "../components/p2block1"
import p2block2 from "../components/p2block2"
export default {
  name: "Home",
  components: {
	  p2block1,p2block2,
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>