<template>
  <Menubar class="col mb-2" :model="menuItems" />
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "My List",
          icon: "pi pi-fw pi-list",
          to: "/mylist",
        },
      ],
    };
  },
};
</script>
<style>
.col {
  background-color: #afabb3;
}
</style>
