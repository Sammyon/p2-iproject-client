<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <gmap-map
        ref="mapRef"
        :zoom="5"
        :center="center"
        map-type-id="roadmap"
        style="width: 100%; height: 500px"
      >
        <gmap-marker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.location"
          :clickable="true"
          :draggable="false"
          @click="center = m.location"
        />
        <gmap-heatmap-layer
          :data="markers"
          :options="{ maxIntensity: 120, dissipating: false }"
        />
      </gmap-map>
      <!-- <img src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-87.0186,32.4055,14/500x300?access_token=pk.eyJ1Ijoic2FtbXktbWFuZHJlIiwiYSI6ImNreno3cjFwcTA3bWIzY254cXF2czQyY2IifQ.G1lJujSWnA2hlxsAfurXcA"> -->
    </div>
    <!-- <iframe
      width="450"
      height="250"
      frameborder="0"
      style="border: 0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXTHyFfkwHNaBdNqlvW9J7QqK0XiaQh6M&q=indonesia&zoom=2"
      allowfullscreen
    >
    </iframe> -->
  </div>
</template>

<script>
// import {GmapMap} from "gmap-vue";
// import GmapHeatmapLayer from "gmap-vue";
import { getGoogleMapsAPI, gmapApi } from "gmap-vue";

export default {
  name: "Map",
  data() {
    return {
      center: { lat: -6.204698991169558, lng: 106.83611829006928 },
      covidMarkerData: [],
    };
  },
  computed: {
    covidDatas() {
      return this.$store.state.covidDatas;
    },
    google: getGoogleMapsAPI,
    markers() {
      if (this.google) {
        if (this.covidDatas.length !== 0) {
          // console.log(this.covidDatas, `COVID DATAS`);
          let arr = [] 
          this.covidDatas.forEach((e) => {
            if (e.lokasi) {
              if (e.lokasi.lon) {
                if (e.penambahan.positif >= 5000) {
                  // console.log(`masuk ${e.key}`, e.lokasi.lat, e.lokasi.lon);
                  let location = {
                    location: new google.maps.LatLng({
                      lat: e.lokasi.lat,
                      lng: e.lokasi.lon,
                    }),
                    weight: 20,
                  };
                  // console.log(location, `LOCATION`);
                  arr.push(location);
                } else if (e.penambahan.positif >= 3000) {
                  let location = {
                    location: new google.maps.LatLng({
                      lat: e.lokasi.lat,
                      lng: e.lokasi.lon,
                    }),
                    weight: 12,
                  };
                  arr.push(location);
                } else if (e.penambahan.positif >= 1000) {
                  let location = {
                    location: new google.maps.LatLng({
                      lat: e.lokasi.lat,
                      lng: e.lokasi.lon,
                    }),
                    weight: 8,
                  };
                  arr.push(location);
                } else if (e.penambahan.positif >= 500) {
                  let location = {
                    location: new google.maps.LatLng({
                      lat: e.lokasi.lat,
                      lng: e.lokasi.lon,
                    }),
                    weight: 4,
                  };
                  arr.push(location);
                } else if (e.penambahan.positif >= 100) {
                  let location = {
                    location: new google.maps.LatLng({
                      lat: e.lokasi.lat,
                      lng: e.lokasi.lon,
                    }),
                    weight: 3,
                  };
                  arr.push(location);
                }
              }
              // console.log(e, `SEBELUM ERROR`);
            }
          });
          // console.log(arr, `ARR`);
          return arr;
        }
      }
      return [];
    },
  },
  async created() {
    await this.$store.dispatch("getCovidData");
    // console.log(this.$store.state.covidDatas, `COVID DATAS`);
    // console.log(this.google);
  },
  methods: {
    // async
  },
};
</script>

<style>
</style>
