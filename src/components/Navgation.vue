<template>
  <nav class="h-16 flex w-10/12 m-auto  items-center justify-between">
    <div id="nav-item" class="flex items-center gap-12 hover:text-red-500">
      <navgation-item 
      v-for="item in navItems" 
      :key="item.label" 
      :item="item"
      :to="item.path">
    </navgation-item>
    
    </div>
    
  </nav>
</template>

<script setup>
import NavgationItem from "./NavgationItem.vue";
import { ref } from "vue";

const navItems = ref([
  { label: "Home", path: "/"},
  { label: "Aboutpage", path: "/about"},
  { label: "Contactpage", path: "/contact" }
  
]);
</script>

<style lang="scss" scoped>
</style>