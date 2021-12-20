<template>
  <div>
    <section>
      <table v-bind:style="{ width: '100%' }">
        <thead v-bind:style="{ textAlign: 'left' }">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SEAT COUNT</th>
            <th>FUEL</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="model.id" v-for="model in models">
            <td>{{ model.id }}</td>
            <td>{{ model.name }}</td>
            <td>{{ model.seat_count }}</td>
            <td>{{ model.fuel }}</td>
            <td>{{ model.brandName }}</td>
            <td>
              <button class="btn btn--primary">Delete</button> &nbsp;
              <button class="btn btn--danger" @click="$emit('updateOpen', model.id)">
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    models: Array,
  },
};
</script>
