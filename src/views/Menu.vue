<template>
  <div>
    <div class="menu">
      <div><h1>LOGO</h1></div>
      <div class="menu-items">
        <v-btn @click="$router.push({ name: 'Pessoas' })">PESSOAS</v-btn>
        <v-btn @click="$router.push({ name: 'Pessoas' })" color="red"
          >SAIR</v-btn
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>


<style scoped>
.menu-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 20vw;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: blueviolet;
  padding: 2vh;
}

.menu h1 {
  color: white;
}
</style>