<template>
  <div>
    <div :key="vehicle.id" v-for="vehicle in vehicles">
      <div class="list__cars">
        <Row
          :vehicle="vehicle"
          @updateOpen="$emit('updateOpen', vehicle.id)"
          @deleteVehicle="$emit('deleteVehicle', vehicle.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Row from "./index.row";

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
  },
  methods: {
    updateOpen() {
      this.$emit("updateOpen");
    },
  },
};
</script>
