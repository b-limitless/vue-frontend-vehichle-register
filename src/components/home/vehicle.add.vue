<template>
  <section class="add__new__car">
    <div class="model">
      <div class="title">Add New Car</div>
      <div class="content">
        <form onSubmit="{submitHandler}">
          <div class="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="title"
              v-model="title"
              name="title"
              required
            />
          </div>
          <div class="f-col">
            <div class="col">
              <label htmlFor="persons">Brand</label>
              <select
                id="brand"
                placeholder="brand"
                v-model="brand"
                name="brand"
                onChange="{onChangeHanlder}"
                required
              >
                <option value="">Please select</option>
                <option value="bd">test</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="actions-btn">
              <button class="btn btn--secoundary" onClick="{cancelHanlder}">
                Cancel
              </button>
              <button type="submit" class="btn btn--primary">Submit</button>
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
  props: {
    open: Boolean,
  },
};
</script>
