<template>
  <div class="container">
    <h1 class="title mt-2 mb-4 text-left">Users</h1>
    <transition-group tag="div" class="row" name="user-list">
      <UserItem v-for="user in users" :key="user._id" :user="user" @remove-user="removeUserHandler($event)" />
    </transition-group>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import UserItem from '../layouts/UserItem.vue';
import ConfirmationMixin from '../../mixins/ConfirmationMixin';

const { mapGetters, mapActions } = createNamespacedHelpers('userStore');

export default {
  components: { UserItem },
  mixins: [ConfirmationMixin],
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'removeUser']),

    removeUserHandler({ event, id }) {
      this.deleteConfirm(event, () =>
        this.removeUser(id)
          .then(() => this.toastSuccess('User successfully deleted'))
          .catch(() => this.toastSuccess('Error deleting user'))
      );
    }
  },
  created() {
    this.fetchUsers().catch(err => this.toastError(err.message));
  }
};
</script>

<style lang="scss" scoped>
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.user-list-move {
  transition: transform 0.5s ease;
}
</style>
