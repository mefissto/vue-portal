<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="logo d-flex p-justify-between p-align-center">
            <h1><img src="../../assets/logo.png" alt="vue" class="mr-2" /><span>Portal</span></h1>
            <Sidebar :visible="sidebarVisible" position="right" class="p-sidebar-sm">
              <Navigation @route-change="sidebarVisible = false" />
            </Sidebar>

            <Button icon="pi pi-bars" @click="sidebarVisible = true" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from '../UI/Navigation';

export default {
  components: { Navigation },
  data() {
    return { sidebarVisible: false };
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 5px 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease-in-out;
  text-shadow: rgb(0 0 0 / 40%) 0 1px 1px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

img {
  width: 35px;
  margin-bottom: 6px;
}

.p-button {
  height: 35px;

  &:focus,
  &:enabled:focus {
    box-shadow: 0 0 0 0;
  }
}
</style>
