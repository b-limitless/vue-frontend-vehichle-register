<template>
  <div>
      <AddVehicle v-show="open"/>
    
    <div class="options">
      <div class="nav" v-on:click="updateOpen">Add New Car</div>
    </div>
    <div :key="vehicle.id" v-for="vehicle in vehicles">
      <div class="list__cars">
        <Row :vehicle="vehicle" />
      </div>
    </div>
  </div>
</template>
<script>
import Row from "./index.row";
import AddVehicle from "./vehicle.add";

export default {
  name: "ListVehicels",
  data() {
    return { open: false };
  },
  props: {
    vehicles: Array,
  },
  components: {
    Row,
    AddVehicle
  },
  methods: {
    updateOpen() {
      this.open = !this.open;
    },
  },
};

</script>
