<template>
    <ListVehicles :vehicles="vehicles.vehicles"/>
</template>

<script>
import ListVehicles from './index.list';

export default {
    name: "Home", 
    components: {
        ListVehicles
    },
    data() {
        return {
            vehicles: [],
            test: [{name: 'bharat'}, {name: 'ron'}]
        }
    },
    async created() {
        this.vehicles = await this.fetchVehicles();
    },
    methods: {
        async fetchVehicles() {
            const res = await fetch("api/vehicle");
            const data = await res.json();
            return data;
        }
    }
}
</script>