<template>
  <router-view></router-view>
  <Toast />
  <ConfirmPopup></ConfirmPopup>
</template>

<script>
import Toast from 'primevue/toast';
import ConfirmPopup from 'primevue/confirmpopup';

export default {
  components: {
    Toast,
    ConfirmPopup
  }
};
</script>

<style lang="scss">
@import './assets/styles/styles.css';
@import './assets/styles/global.scss';

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

body {
  background-color: #f5f5f5;
}

.p-button.p-button-link {
  &:focus,
  &:enabled:focus {
    box-shadow: 0 0 0 0;
  }

  padding: 0;
  padding-top: 5px;
}

.form__error {
  color: #f44336;
  font-size: 12px;
  text-align: left;
  margin-left: 8px;
}

.title {
  color: #b7e0b8;
}
</style>
