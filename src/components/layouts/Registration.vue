<template>
  <h2>Registration</h2>
  <form @submit.prevent="submit">
    <div class="p-fluid mt-4 mb-4">
      <div class="mb-4">
        <span class="p-float-label mb-1">
          <InputText id="firstName" type="text" v-model="firstName" @blur="v$.firstName.$touch" />
          <label for="firstName">First Name</label>
        </span>
        <div v-for="(error, index) of v$.firstName.$errors" :key="index" class="form__error">{{ error.$message }}</div>
      </div>
      <div class="mb-4">
        <span class="p-float-label mb-1">
          <InputText id="lastName" type="text" v-model="lastName" @blur="v$.lastName.$touch" />
          <label for="lastName">Last Name</label>
        </span>
        <div v-for="(error, index) of v$.lastName.$errors" :key="index" class="form__error">{{ error.$message }}</div>
      </div>
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

      <Button label="Already have account?" class="p-button-link p-text-right" @click="$router.push('/auth/login')" />
    </div>

    <Button type="submit" label="Submit" class="w-100" />
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

import ApiService from '../../services/ApiService.js';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) }
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }

      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      this.registration(user);
    },
    registration(user) {
      ApiService.post(`auth/registration`, user)
        .then(() => {
          this.toastSuccess('Registration successful');
          this.$router.push('/auth/login');
        })
        .catch(err => {
          let message = 'Registration failure';
          if (err.response) {
            message = err.response.data.message;
          }

          this.toastError(message);
        });
    }
  }
};
</script>
