<template>
  <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
  <v-data-table v-else :headers="headers" :items="items" :sort-by="sortBy">
    <template v-slot:top>
      <v-toolbar class="button" flat>
        <v-toolbar-title>USERS Table</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <!-- NEW/EDIT USER DIALOG -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark class="mb-2" v-bind="props">
              New User
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.userName"
                      label="userName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.userEmail"
                      label="userEmail"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel</v-btn
              >
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- DELETE DIALOG -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">
              Are you sure you want to delete this item?
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
              >
                OK
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteI(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Api from "../api/index";

export default {
  name: "HomePage",
  components: {},
  data: () => {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: "Username",
          align: "start",
          sortable: false,
          key: "userName",
        },
        { title: "Email", key: "userEmail" },
        { title: "Is admin", key: "isAdmin" },
        { title: "User Cart", key: "userCart" },
        { title: "User History", key: "userHistory" },
        { title: "Actions", key: "actions", sortable: false },
      ],
      items: [],
      sortBy: [{ key: "calories", order: "asc" }],
      loading: false,
      editedIndex: -1,
      editedItem: {
        userName: "",
        userEmail: "",
        isAdmin: false,
        userCart: [],
        userHistory: [],
      },
      defaultItem: {
        userName: "",
        userEmail: "",
        isAdmin: false,
        userCart: [],
        userHistory: [],
      },
      deleteItem: null,
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Edit Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  async mounted() {
    this.loading = true;
    await this.initialize();
    this.loading = false;
  },
  methods: {
    async initialize() {
      const response = await Api.admin.getAllUsers();
      console.log(response);
      this.items = response;
      return response;
    },
    async editItem(item) {
      console.log(item);
      this.editedItem.userName = item.userName;
      this.editedItem.userEmail = item.userEmail;
      this.editedItem.userId = item.userId;
      this.dialog = true;
    },
    deleteI(item) {
      this.dialogDelete = true;
      this.deleteItem = item;
    },
    async deleteItemConfirm() {
      await Api.admin.deleteUserById({ userId: this.deleteItem.userId });
      this.closeDelete();
      await this.initialize();
    },
    close() {
      this.dialog = false;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      console.log(this.editedItem.userId, "save");
      await Api.admin.updateUser({
        userName: this.editedItem.userName,
        email: this.editedItem.userEmail,
        userId: this.editedItem.userId,
      });
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped></style>
