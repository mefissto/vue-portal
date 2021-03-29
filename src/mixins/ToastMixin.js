export default {
  methods: {
    toastSuccess(message) {
      const summary = message || 'Success action';
      this.$toast.add({ severity: 'success', summary, life: 3000 });
    },
    toastInfo(message) {
      const summary = message || 'Info action';
      this.$toast.add({ severity: 'info', summary, life: 3000 });
    },
    toastWarn(message) {
      const summary = message || 'Warn action';
      this.$toast.add({ severity: 'warn', summary, life: 3000 });
    },
    toastError(message) {
      const summary = message || 'Error action';
      this.$toast.add({ severity: 'error', summary, life: 3000 });
    }
  }
};
