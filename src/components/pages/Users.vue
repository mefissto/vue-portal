<template>
  <div class="container">
    <div class="row">
      <h1 class="title mt-2 mb-4 text-left">Users</h1>
      <UserItem v-for="user in users" :key="user._id" :user="user" @remove-user="removeUserHandler($event)" />
    </div>
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
.title {
  color: #b7e0b8;
}
</style>
