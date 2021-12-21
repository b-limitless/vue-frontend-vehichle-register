<template>
  <AddModel
    v-show="open"
    :brands="models.brands"
    :model="form"
    :updateMode="updateMode"
    :errors="errors"
    @closePopUp="closePopUp"
    @onSubmit="onSubmit"
    @changeItem="changeItem"
  />
  <div className="options">
    <div class="nav" v-on:click="createOpen">Add New Model</div>
  </div>
  <ListModels :models="models.models" @updateOpen="updateOpen" @deleteModel="deleteModel"/>
</template>
<script>
import ListModels from "./model.list";
import AddModel from "./model.add";
const formModel = {
  name: "",
  seat_count: "",
  brand_id: "",
  fuel: "",
};
export default {
  data() {
    return {
      models: [],
      open: false,
      form: {
        ...formModel,
      },
      updateMode: false,
      errors: {}
    };
  },
  components: {
    ListModels,
    AddModel,
  },
  async created() {
    this.models = await this.fetchModels();
  },
  methods: {
    async fetchModels() {
      try {
        const res = await fetch("api/model");
        const data = await res.json();
        return data;
      } catch (err) {
        console.err(err);
      }
    },
    updateOpen(id) {
      this.updateMode = true;
      console.log("need to update", id);
      if (typeof id !== undefined) {
        let { models } = this.models;
        let model = models.find((vehicle) => vehicle.id === id);
        this.form = model;
      }
      this.open = !this.open;
    },
    createOpen() {
      this.updateMode = false;
      this.open = true;
    },
    closePopUp() {
      this.open = false;
      this.form = formModel;
    },
    async onSubmit(id) {
      console.log(id);
      console.log(this.form);
      let url;
      let method;
      let message;
      if (id) {
        url = `api/model/${id}`;
        method = "PUT";
        message = "updated";
      } else {
        url = `api/model`;
        method = "POST";
        message = "added";
      }
      this.errors = {};
      const { form } = this;
      try {
        const res = await fetch(url, {
          method,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (res.status === 201 || res.ok) {
          alert(`Model ${message} sucessfully`);
          window.location.reload();
        } else {
          const { errors } = data;
          this.errors = errors;
        }
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async deleteModel(id) {
      if (confirm("Are you sure")) {
        try {
          const res = await fetch(`api/model/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          if (res.ok) {
            alert("Model sucessfully deleted");
            window.location.reload();
          } else {
            alert("Cound not delete model");
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    changeItem(event) {
      const { name, value } = event.target;
      this.form[name] = value;
    },
  },
};
</script>
