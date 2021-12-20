<template>
  <section class="add__new__car">
    <div class="model">
      <div class="title">Add New Car</div>
      <div class="content">
        <form @submit="onSubmit(vehicle.id, $event)">
          <div class="form-group">
            <label htmlFor="title">Title</label>
            <input
              @change="$emit('changeItem', $event)"
              type="text"
              id="title"
              placeholder="title"
              :v-model="vehicle.title"
              :value="vehicle.title"
              name="title"
              required
            />
          </div>
          <div class="f-col">
            <div class="col">
              <label htmlFor="persons">Brand</label>
              <select
                @change="$emit('changeItem', $event)"
                id="brand"
                placeholder="brand"
                :v-model="vehicle.brand"
                :value="vehicle.brand"
                name="brand"
                required
              >
                <option value="">Please select</option>
                <option :key="brand.id" v-for="brand in brands" :value="brand.id">
                  {{ brand.name }}
                </option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="model_id">Models</label>
              <select
                @change="$emit('changeItem', $event)"
                id="model_id"
                placeholder="model"
                name="model_id"
                :v-model="vehicle.model_id"
                :value="vehicle.model_id"
                required
              >
                <option value="">Please select</option>
                <option :key="model.id" v-for="model in models" :value="model.id">
                  {{ model.name }}
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              @change="$emit('changeItem', $event)"
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              :v-model="vehicle.price"
              :value="vehicle.price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              @change="$emit('changeItem', $event)"
              type="text"
              id="image_url"
              placeholder="Image URL"
              name="image_url"
              :v-model="vehicle.image_url"
              :value="vehicle.image_url"
              required
            />
          </div>
          <div className="f-col">
            <div className="col">
              <label htmlFor="persons">Persons</label>
              <input
                @change="$emit('changeItem', $event)"
                type="number"
                id="persons"
                placeholder="persons"
                name="persons"
                :v-model="vehicle.persons"
                :value="vehicle.persons"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="doors">Doors</label>
              <input
                @change="$emit('changeItem', $event)"
                type="number"
                id="doors"
                placeholder="doors"
                name="doors"
                :v-model="vehicle.doors"
                :value="vehicle.doors"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="liters_per_km">Liters per 100 km</label>
              <input
                @change="$emit('changeItem', $event)"
                type="number"
                id="liters_per_km"
                placeholder="Liters per 100 km"
                name="liters_per_km"
                :v-model="vehicle.liters_per_km"
                :value="vehicle.liters_per_km"
                required
              />
            </div>
          </div>
          <div className="f-col">
            <div className="col">
              <label htmlFor="date_of_registration">Date Of Reg.</label>
              <input
                @change="$emit('changeItem', $event)"
                type="date"
                id="date_of_registration"
                placeholder="date of registration"
                name="date_of_registration"
                :v-model="vehicle.date_of_registration"
                :value="vehicle.date_of_registration"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="licence_number">Licence number</label>
              <input
                @change="$emit('changeItem', $event)"
                type="text"
                id="licence_number"
                placeholder="licence number"
                name="licence_number"
                :v-model="vehicle.licence_number"
                :value="vehicle.licence_number"
                required
              />
            </div>
          </div>

          <div className="f-col">
            <div className="col">
              <label htmlFor="mileage">Mileage</label>
              <input
                @change="$emit('changeItem', $event)"
                type="number"
                id="mileage"
                placeholder="mileage"
                name="mileage"
                :v-model="vehicle.mileage"
                :value="vehicle.mileage"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="licence_number">Production Year</label>
              <input
                @change="$emit('changeItem', $event)"
                type="date"
                id="production_year"
                placeholder="production_year"
                name="production_year"
                :v-model="vehicle.production_year"
                :value="vehicle.production_year"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="veteran">Veteran</label>
              <select
                @change="$emit('changeItem', $event)"
                id="veteran"
                placeholder="veteran"
                name="veteran"
                :v-model="vehicle.veteran"
                :value="vehicle.veteran"
                required
              >
                <option value="">Please Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              @change="$emit('changeItem', $event)"
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Description"
              :v-model="vehicle.description"
              :value="vehicle.description"
              required
            ></textarea>
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
  name: "AddVehicle",
  data() {
    return {
      errors: {},  
    };
  },
  props: {
    open: Boolean,
    brands: Array,
    models: Array,
    vehicle: Object,
    updateMode: Boolean
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
