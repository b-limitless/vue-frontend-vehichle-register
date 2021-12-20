<template>
  <section class="add__new__car">
    <div class="model">
      <div class="title">Add New Brand</div>
      <div class="content">
        <form @submit="onSubmit(brand.id, $event)">
          <div class="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="name"
              placeholder="name"
              name="name"
              @change="$emit('changeItem', $event)"
              :v-model="brand.name"
              :value="brand.name"
              required
            />
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
    brand:Object,
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
