<template>
  <div class="col-12 p-shadow-5 user d-flex align-items-center justify-content-between">
    <span> {{ username }}</span>
    <Button
      v-if="user._id !== activeUser._id"
      icon="pi pi-trash"
      class="p-button-rounded p-button-text"
      @click="$emit('remove-user', { event: $event, id: user._id })"
    />
  </div>
</template>

<script>
import UserService from '../../services/UserService.js';

export default {
  emits: ['remove-user'],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeUser: UserService.getUser()
    };
  },
  computed: {
    username() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  height: 60px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: left;
}
</style>
