<template>
  <h2>Registration</h2>
  <div class="p-fluid mt-4 mb-4">
    <div class="p-float-label mb-4">
      <InputText id="firstName" type="text" v-model="firstName" />
      <label for="firstName">First Name</label>
    </div>
    <div class="p-float-label mb-4">
      <InputText id="lastName" type="text" v-model="lastName" />
      <label for="lastName">Last Name</label>
    </div>
    <div class="p-float-label mb-4">
      <InputText id="username" type="text" v-model="email" />
      <label for="username">Email</label>
    </div>
    <div class="p-float-label">
      <InputText id="password" type="password" v-model="password" />
      <label for="password">Password</label>
    </div>
    <Button label="Already have account?" class="p-button-link p-text-right" @click="$router.push('/auth/login')" />
  </div>

  <Button label="Submit" class="w-100" />
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
