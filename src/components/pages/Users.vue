<template>
  <div class="container">
    <h1 class="title mt-2 mb-4 text-left">Users</h1>
    <transition-group tag="div" class="row" name="user-list">
      <UserItem v-for="user in users" :key="user._id" :user="user" @remove-user="removeUserHandler($event)" />
    </transition-group>
  </div>
</template>

<script>
import ApiService from '../../services/ApiService.js';
import UserItem from '../layouts/UserItem.vue';
import ConfirmationMixin from '../../mixins/ConfirmationMixin';

export default {
  components: { UserItem },
  mixins: [ConfirmationMixin],
  data() {
    return {
      users: []
    };
  },
  methods: {
    removeUserHandler({ event, id }) {
      this.deleteConfirm(event, () => this.removeUser(id));
    },
    removeUser(id) {
      ApiService.delete('users', id)
        .then(() => {
          this.users = this.users.filter(user => user._id !== id);
          this.toastSuccess('User successfully deleted');
        })
        .catch(() => this.toastSuccess('Error deleting user'));
    },
    fetchUsers() {
      ApiService.get('users')
        .then(res => (this.users = [...res?.data]))
        .catch(err => this.toastError(err.message));
    }
  },
  created() {
    this.fetchUsers();
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
