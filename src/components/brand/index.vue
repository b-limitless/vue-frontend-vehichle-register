<template>
  <AddBrand
    v-show="open"
    :brand="form"
    :updateMode="updateMode"
    @closePopUp="closePopUp"
    @onSubmit="onSubmit"
    @changeItem="changeItem"
  />
  <div className="options">
    <div class="nav" v-on:click="createOpen">Add New Brand</div>
  </div>
  <ListBrands :brands="brands" @updateOpen="updateOpen" @deleteBrand="deleteBrand" />
</template>

<script>
import ListBrands from "./brand.list";
import AddBrand from "./brand.add";

const formModel = {
  name: "",
};

export default {
  name: "Brand",
  data() {
    return {
      brands: [],
      open: false,
      form: {
        ...formModel,
      },
      updateMode: false,
    };
  },
  components: {
    ListBrands,
    AddBrand,
  },
  async created() {
    this.brands = await this.fetchBrands();
  },
  methods: {
    async fetchBrands() {
      try {
        const res = await fetch("api/brand");
        const data = await res.json();
        return data;
      } catch (err) {
        console.err(err);
      }
    },
    updateOpen(id) {
      this.updateMode = true;
      if (typeof id !== undefined) {
        let { brands } = this;
        let brand = brands.find((brand) => brand.id === id);
        this.form = brand;
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
        url = `api/brand/${id}`;
        method = "PUT";
        message = "updated";
      } else {
        url = `api/brand`;
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
          //this.form = formModel;
          alert(`Brand ${message} sucessfully`);
          window.location.reload();
        } else {
          const { errors } = data;
          this.errors = errors;
        }
      } catch (err) {
        // const errors = await err.json();
        return Promise.reject(err);
      }
    },
    async deleteBrand(id) {
      if (confirm("Are you sure")) {
        try {
          const res = await fetch(`api/brand/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          if (res.ok) {
            alert("Brand sucessfully deleted");
            window.location.reload();
          } else {
            alert("Cound not delete brand");
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
