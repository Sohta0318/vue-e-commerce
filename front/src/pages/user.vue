<template>
  <layout-all
    ><div class="body">
      <img :src="src" alt="edit-icon" @click="editHandler" />
      <transition name="modal">
        <div id="overlay" v-show="isClicked" @click="editHandler">
          <edit-modal @isClicked="editHandler" />
        </div>
      </transition>
      <p>{{ userInfo.name }}</p>
      <order-history :allItem="orderHistory" />
    </div>
  </layout-all>
</template>

<script>
import OrderHistory from "../components/User/orderHistory.vue";
import EditModal from "../components/Modal/edit.vue";
export default {
  components: {
    OrderHistory,
    EditModal,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  computed: {
    user() {
      return this.$route.params.id;
    },
    userInfo() {
      const userInfo = this.$store.getters.getUser;
      return JSON.parse(JSON.stringify(userInfo));
    },
    src() {
      return require("@/assets/images/pencil-square.svg");
    },
    orderHistory() {
      return this.$store.getters["items/orderHistory"];
    },
  },
  methods: {
    editHandler() {
      this.isClicked = !this.isClicked;
    },
  },
  created() {
    this.$store.dispatch("items/fetchOrders");
  },
};
</script>

<style scoped>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active {
  transition: all 1s ease-in;
}
.modal-leave-active {
  transition: all 1s ease-out;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
</style>
