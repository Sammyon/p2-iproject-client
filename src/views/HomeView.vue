<template>
  <div class="flex flex-column">
    <div class="flex">
      <h1>hello</h1>
      <div>
        <div class="relative">
          <a :href="topNews[0].url">
            <img
              :src="topNews[0].image_url"
              class="
                w-full
                h-full
                object-center object-cover
                opacity-90
                group-hover:opacity-100
              "
            />
          </a>
        </div>
      </div>
      <div class="flex flex-column ml-3">
        <div class="relative">
          <a :href="topNews[1].url">
            <img
              :src="topNews[1].image_url"
              class="
                w-full
                h-full
                object-center object-cover
                opacity-90
                group-hover:opacity-100
              "
            />
          </a>
        </div>
        <div class="relative">
          <a :href="topNews[2].url">
            <img
              :src="topNews[2].image_url"
              class="
                w-full
                h-full
                object-center object-cover
                opacity-90
                group-hover:opacity-100
              "
            />
          </a>
        </div>
        <div class="relative">
          <a :href="topNews[3].url">
            <img
              :src="topNews[3].image_url"
              class="
                w-full
                h-full
                object-center object-cover
                opacity-90
                group-hover:opacity-100
              "
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  created() {},
  computed: {
    topNews() {
      return this.$store.state.topNews;
    },
  },
};
</script>
