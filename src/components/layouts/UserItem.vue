<template>
  <div class="col-12 p-shadow-5 user d-flex align-items-center justify-content-between">
    <span> {{ username }}</span>
    <Button
      v-if="showDeleteButton"
      icon="pi pi-trash"
      class="p-button-rounded p-button-text"
      @click="$emit('remove-user', { event: $event, id: user._id })"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  emits: ['remove-user'],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    username() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    showDeleteButton() {
      return this.activeUser?._id !== this.user._id;
    },
    ...mapGetters('userStore/', ['activeUser'])
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
