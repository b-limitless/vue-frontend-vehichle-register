<template>
  <div>
    <div class="options">
      <div class="nav" v-on:click="createOpen">Add New Car +</div>
    </div>
    <AddVehicle
      v-show="open"
      :models="vehicles.models"
      :brands="vehicles.brands"
      :vehicle="form"
      :updateMode="updateMode"
      :errors="errors"
      @updateOpen="updateOpen"
      @changeItem="changeItem($event)"
      @onSubmit="onSubmit"
      @closePopUp="closePopUp"
    />
    <ListVehicles
      :vehicles="vehicles.vehicles"
      :models="vehicles.models"
      :brands="vehicles.brands"
      @deleteVehicle="deleteVehicle"
      @updateOpen="updateOpen"
    />
  </div>
</template>
<script>
import ListVehicles from "./index.list";
import AddVehicle from "./vehicle.add";
import { getError } from "../utils/errors";
const formModel = {
  title: "",
  price: "",
  image_url: "",
  persons: "",
  doors: "",
  liters_per_km: "",
  licence_number: "",
  model_id: "",
  production_year: "",
  mileage: "",
  date_of_registration: "",
  veteran: "",
  brand: "",
  description: "",
  created_at: "",
  updated_at: "",
  name: "",
  brandName: "",
};
export default {
  name: "Home",
  components: {
    ListVehicles,
    AddVehicle,
  },
  data() {
    return {
      vehicles: [],
      open: false,
      updateMode: false,
      form: {
        ...formModel,
      },
      errors: {}
    };
  },
  async created() {
    this.vehicles = await this.fetchVehicles();
  },
  methods: {
    async fetchVehicles() {
      try {
        const res = await fetch("api/vehicle");
        const data = await res.json();
        return data;
      } catch (err) {
        const getEr = getError(err);
        console.log("http request", getEr);
      }
    },
    updateOpen(id) {
      this.updateMode = true;
      if (typeof id !== undefined) {
        let { vehicles } = this.vehicles;
        let vehicle = vehicles.find((vehicle) => vehicle.id === id);
        this.form = vehicle;
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
      let url;
      let method;
      let message;
      if (id) {
        url = `api/vehicle/${id}`;
        method = "PUT";
        message = "updated";
      } else {
        url = `api/vehicle`;
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
          this.form = formModel;
          alert(`Vehicle ${message} sucessfully`);
          window.location.reload();
        } else {
          const { errors } = data;
          this.errors = errors;
          console.log(errors)
        }
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async deleteVehicle(id) {
      if (confirm("Are you sure")) {
        try {
          const res = await fetch(`api/vehicle/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          if (res.ok) {
            alert("Vehicel sucessfully deleted");
            window.location.reload();
          } else {
            alert("Cound not delete vehicle");
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
