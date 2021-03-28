<template>
  <h2>Login</h2>
  <div class="p-fluid mt-4 mb-4">
    <div class="p-float-label mb-4">
      <InputText id="username" type="text" v-model="email" />
      <label for="username">Email</label>
    </div>
    <div class="p-float-label">
      <InputText id="password" type="password" v-model="password" />
      <label for="password">Password</label>
    </div>
    <Button label="Don't have account?" class="p-button-link p-text-right" @click="$router.push('/auth/registration')" />
  </div>

  <Button label="Submit" class="w-100" />
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>
