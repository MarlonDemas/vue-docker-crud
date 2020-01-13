<template>
  <div class="container mt-5">
    <div class="row align-items-baseline">
      <div class="col-10">
        <span class="h1">CRUD</span>
        <span class="h3">Table</span>
      </div>
      <div class="col-2 text-right">
        <button @click="addItem()" type="button" class="btn btn-info btn-animated btn-animated-y mb-2 ml-2">
          <span class="btn-inner--visible">Add</span>
          <span class="btn-inner--hidden"><i class="fas fa-plus"></i></span>
        </button>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Number</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" style="cursor: pointer" @click="useItem(item.id)">
          <td>{{item.number}}</td>
          <td>{{item.description}}</td>
          <td class="text-center">
            <button type="button" @click="useItem(item.id)" @mouseover="canDelete = true" @mouseleave="canDelete = false" class="btn btn-danger btn-animated btn-animated-y">
              <span class="btn-inner--visible">Delete</span>
              <span class="btn-inner--hidden"><i class="fas fa-trash"></i></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <sweet-modal :title="modalTitle" ref="modal">
      <div class="form-group row align-items-center">
        <label class="col-2 text-left">Number:</label>
        <input type="text" class="form-control col-10" v-model="newItem.number">
      </div>
      <div class="form-group row align-items-center">
        <label class="col-2 text-left">Description:</label>
        <input type="text" class="form-control col-10" v-model="newItem.description">
      </div>
      <button slot="button" class="btn btn-secondary" @click="$refs.modal.close()">Cancel</button>
      <button slot="button" class="btn btn-info ml-2" @click="editItem()">Save</button>
    </sweet-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      newItem: {},
      modalTitle: 'Add Item',
      canDelete: false
    }
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      this.$http.get("http://localhost:8115/api/v1/products").then(response => {
        this.items = response.data.products;
      },
        error => {
          console.error(error);
          this.$msg.error({
            message: response.data.message,
            duration: 2000
          });
        });
    },
    useItem(itemId) {
      if (this.canDelete) {
        this.$http.delete("http://localhost:8115/api/v1/products/" + itemId).then(response => {
          this.getItems();
          this.$msg.success({
            message: response.data.message,
            duration: 2000
          });
        },
        error => {
          console.error(error);
          this.$msg.error({
            message: response.data.message,
            duration: 2000
          });
        });
      } else {
        this.modalTitle = 'Edit Item';
        this.$http.get("http://localhost:8115/api/v1/products/" + itemId).then(response => {
          this.newItem = response.data;
          this.$refs.modal.open();
        },
        error => {
          console.error(error);
          this.$msg.error({
            message: response.data.message,
            duration: 2000
          });
        });
      }
    },
    addItem() {
      this.modalTitle = 'Add Item';
      this.newItem = {};
      this.$refs.modal.open();
    },
    editItem() {
      if (this.newItem.id) {
        this.$http.put("http://localhost:8115/api/v1/products/" + this.newItem.id, this.newItem).then(response => {
          this.getItems();
          this.$refs.modal.close();
          this.$msg.success({
            message: response.data.message,
            duration: 2000
          });
        },
        error => {
          console.error(error);
          this.$msg.error({
            message: response.data.message,
            duration: 2000
          });
        });
      } else {
        this.$http.post("http://localhost:8115/api/v1/products", this.newItem).then(response => {
          this.getItems();
          this.$refs.modal.close();
          this.$msg.success({
            message: response.data.message,
            duration: 2000
          });
        },
        error => {
          console.error(error);
          this.$msg.error({
            message: response.data.message,
            duration: 2000
          });
        });
      }
    }
  }
}
</script>
