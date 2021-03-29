export default {
  methods: {
    confirm(event, accept, reject) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept,
        reject
      });
    },
    deleteConfirm(event, accept, reject) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept,
        reject
      });
    }
  }
};
