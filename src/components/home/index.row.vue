<template>
  <div key="{{{vehicle.id}}}" className="row" :id="vehicle.id">
    <div className="col img">
      <img :src="vehicle.image_url" alt="" className="vehicleImg" />
    </div>
    <div className="col details">
      <div className="title">{{ vehicle.title }}</div>
      <div className="btn__container">
        <button>
          <i className="fa fa-user"></i>
          {{ vehicle.persons }}
        </button>
        <button>
          <i className="fa fa-vehicle"></i>
          {{ vehicle.doors }}
        </button>
        <button>
          <i className="fa fa-gas-pump"> {{ vehicle.liters_per_km }}</i>
        </button>
      </div>
      <div className="descriptions">
        <div className="d_title">Description</div>
        <p>{{ vehicle.description }}</p>
        <p>Brand: {{ vehicle.brandName }}</p>
        <p>Model: {{ vehicle.model }}</p>
      </div>
    </div>
    <div className="col actions">
      <div className="price">$ {{ vehicle.price }}</div>
      <button className="btn btn--primary">Book Now</button>
      <span>Delete </span>
      <span>Update </span>
    </div>
  </div>
</template>
<script>
export default {
  row: "Row",
  props: {
    vehicle: Object,
  },
};
</script>
