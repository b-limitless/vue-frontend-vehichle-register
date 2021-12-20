<template>
  <div>
    <section>
      <table v-bind:style="{ width: '100%' }">
        <thead v-bind:style="{ textAlign: 'left' }">
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="brand.id" v-for="brand in brands">
            <td>{{ brand.id }}</td>
            <td>{{ brand.name }}</td>
            <td>
              <button class="btn btn--primary" @click="$emit('deleteBrand', brand.id)">
                Delete
              </button>
              &nbsp;
              <button class="btn btn--danger" @click="$emit('updateOpen', brand.id)">
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
    brands: Array,
  },
};
</script>
