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
              v-bind:class="[errors.title ? 'invalid' : '']"
              required
            />

            <span v-if="errors.title" class="invalid-feedback">{{
              errors.title.join("")
            }}</span>
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
                v-bind:class="[errors.brand ? 'invalid' : '']"
                required
              >
                <option value="">Please select</option>
                <option :key="brand.id" v-for="brand in brands" :value="brand.id">
                  {{ brand.name }}
                </option>
              </select>
              <span v-if="errors.name" class="invalid-feedback">{{
                errors.name.join("")
              }}</span>
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
                v-bind:class="[errors.model_id ? 'invalid' : '']"
                required
              >
                <option value="">Please select</option>
                <option :key="model.id" v-for="model in models" :value="model.id">
                  {{ model.name }}
                </option>
              </select>
              <span v-if="errors.model_id" class="invalid-feedback">{{
                errors.model_id.join("")
              }}</span>
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
              v-bind:class="[errors.price ? 'invalid' : '']"
              required
            />
            <span v-if="errors.price" class="invalid-feedback">{{
                errors.price.join("")
              }}</span>
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
              v-bind:class="[errors.image_url ? 'invalid' : '']"
              required
            />
            <span v-if="errors.image_url" class="invalid-feedback">{{
                errors.image_url.join("")
              }}</span>
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
                v-bind:class="[errors.persons ? 'invalid' : '']"
                required
              />

              <span v-if="errors.persons" class="invalid-feedback">{{
                errors.persons.join("")
              }}</span>
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
                v-bind:class="[errors.doors ? 'invalid' : '']"
                required
              />
              <span v-if="errors.doors" class="invalid-feedback">{{
                errors.doors.join("")
              }}</span>
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
                v-bind:class="[errors.liters_per_km ? 'invalid' : '']"
                required
              />
              <span v-if="errors.liters_per_km" class="invalid-feedback">{{
                errors.liters_per_km.join("")
              }}</span>
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
                v-bind:class="[errors.date_of_registration ? 'invalid' : '']"
                required
              />
              <span v-if="errors.date_of_registration" class="invalid-feedback">{{
                errors.date_of_registration.join("")
              }}</span>
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
                v-bind:class="[errors.licence_number ? 'invalid' : '']"
                required
              />
              <span v-if="errors.licence_number" class="invalid-feedback">{{
                errors.licence_number.join("")
              }}</span>
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
                v-bind:class="[errors.mileage ? 'invalid' : '']"
                required
              />
              <span v-if="errors.mileage" class="invalid-feedback">{{
                errors.mileage.join("")
              }}</span>
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
                v-bind:class="[errors.production_year ? 'invalid' : '']"
                required
              />
               <span v-if="errors.production_year" class="invalid-feedback">{{
                errors.production_year.join("")
              }}</span>
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
                v-bind:class="[errors.veteran ? 'invalid' : '']"
                required
              >
                <option value="">Please Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <span v-if="errors.veteran" class="invalid-feedback">{{
                errors.veteran.join("")
              }}</span>
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
              v-bind:class="[errors.description ? 'invalid' : '']"
              required
            ></textarea>
            <span v-if="errors.description" class="invalid-feedback">{{
                errors.description.join("")
              }}</span>
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
    return {};
  },
  props: {
    open: Boolean,
    brands: Array,
    models: Array,
    vehicle: Object,
    updateMode: Boolean,
    errors: Object,
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
