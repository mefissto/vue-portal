<template>
  <h2>Login</h2>
  <form @submit.prevent="submit">
    <div class="p-fluid mt-4 mb-4">
      <div class="mb-4">
        <span class="p-float-label mb-1">
          <InputText id="email" type="email" v-model="email" @blur="v$.email.$touch" />
          <label for="email">Email</label>
        </span>
        <div v-for="(error, index) of v$.email.$errors" :key="index" class="form__error">{{ error.$message }}</div>
      </div>
      <div>
        <span class="p-float-label mb-1">
          <Password id="password" :feedback="false" :toggleMask="true" v-model="password" @blur="v$.password.$touch" />
          <label for="password">Password</label>
        </span>
        <div v-for="(error, index) of v$.password.$errors" :key="index" class="form__error">{{ error.$message }}</div>
      </div>
      <Button label="Don't have account?" class="p-button-link p-text-right" @click="$router.push('/auth/registration')" />
    </div>

    <Button type="submit" label="Submit" class="w-100" />
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

import ApiService from '../../services/ApiService.js';
import AuthService from '../../services/AuthService.js';
import UserService from '../../services/UserService.js';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required }
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }
      const user = {
        email: this.email,
        password: this.password
      };
      this.login(user);
    },
    login(user) {
      ApiService.post(`auth/login`, user)
        .then(res => {
          AuthService.login(res.data.access_token);
          UserService.setUser(res.data.user);
          this.$router.push('/');
        })
        .catch(err => {
          let message = 'Login failure';

          if (err.response) {
            message = err.response.data?.message;
          }

          this.toastError(message);
        });
    }
  }
};
</script>
