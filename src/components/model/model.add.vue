<template>
  <section class="add__new__car">
    <div class="model">
      <div class="title">Add New Model</div>
      <div class="content">
        <form @submit="onSubmit(model.id, $event)">
          <div class="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="name"
              placeholder="name"
              name="name"
              @change="$emit('changeItem', $event)"
              :v-model="model.name"
              :value="model.name"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="seat_count">Seat Count</label>
            <input
              type="number"
              id="seat_count"
              placeholder="seat count"
              name="seat_count"
              @change="$emit('changeItem', $event)"
              :v-model="model.seat_count"
              :value="model.seat_count"
              required
            />
          </div>
          <div class="f-col">
            <div class="col">
              <label htmlFor="brand_id">Brand</label>
              <select
                id="brand_id"
                placeholder="brand"
                name="brand_id"
                @change="$emit('changeItem', $event)"
                :v-model="model.brand_id"
                :value="model.brand_id"
                required
              >
                <option value="">Select Brand</option>
                <option :key="brand.id" v-for="brand in brands" :value="brand.id">
                  {{ brand.name }}
                </option>
              </select>
            </div>
            <div class="col">
              <label htmlFor="fuel">Fuel</label>
              <select
                id="fuel"
                name="fuel"
                @change="$emit('changeItem', $event)"
                :v-model="model.fuel"
                :value="model.fuel"
                required
              >
                <option value="">Select Fuel Type</option>
                <option value="El">El</option>
                <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="actions-btn">
              <button class="btn btn--secoundary" v-on:click="onClick">Cancel</button>
              <button type="submit" class="btn btn--primary">
                <span v-if="updateMode">Update</span>
                <span v-else>Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddModel",
  data() {
    return {
      errors: {},
    };
  },
  props: {
    open: Boolean,
    brands: Array,
    models: Array,
    updateMode: Boolean,
    model:Object
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      this.$emit("closePopUp");
    },
    async onSubmit(id, event) {
      event.preventDefault();
      this.$emit("onSubmit", id);
    },
  },
};
</script>
