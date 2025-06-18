<template>
  <header class="shadow-md">
    <Navigation />
  </header>
  <router-view></router-view>
</template>
<script setup>
// components import
import Navigation from "@/components/Navgation.vue";


// plugin import



// const users = ref([]);

// onMounted(async () => {
//   try {
//     await axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         users.value = res.data;
//       });
//   } catch (e) {
//     console.log("Axios fetching data error...");
//   }
// });
</script>