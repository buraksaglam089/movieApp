<template>
  <Menubar :model="menuItems" />
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: "Actors",
          icon: "pi pi-fw pi-home",
          to: "/tv",
        },
        {
          label: "Movie",
          icon: "pi pi-fw pi-info-circle",
        },
        {
          label: "Tv",
          icon: "pi pi-fw pi-phone",
        },
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
      ],
    };
  },
};
</script>
