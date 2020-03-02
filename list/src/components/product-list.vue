<template>
  <div class="container">
    <h1 class="titile">商品一覧</h1>
    <search
      :count="filterdList.length"
      :showSaleItem="showSaleItem"
      :showDelvFree="showDelvFree"
      :sortOrder="sortOrder"
      @sort-change="order"
      @sale-click="check1"
      @delv-click="check2"
    ></search>
    <div class="list">
      <product v-for="product of filterdList" :product="product" :key="product.id"></product>
    </div>
  </div>
</template>

<script>
import search from "./search";
import product from "./product";

export default {
  props: ["products"],
  components: {
    search,
    product
  },
  data() {
    return {
      showSaleItem: false,
      showDelvFree: false,
      sortOrder: 1
    };
  },
  methods: {
    check1: function() {
      this.showSaleItem = !this.showSaleItem
    },
    check2: function() {
      this.showDelvFree = !this.showDelvFree
    },
    order: function($event) {
      this.sortOrder = $event
    }
  },
  computed: {
    filterdList: function() {
      let newList = [];
      for (let i = 0; i < this.products.length; i++) {
        let isShow = true;
        if (this.showSaleItem && !this.products[i].isSale) {
          isShow = false;
        }
        if (this.showDelvFree && this.products[i].delv > 0) {
          isShow = false;
        }
        if (isShow) {
          newList.push(this.products[i]);
        }
        // sorting
        if (this.sortOrder == 1) {
          console.log(this.sortOrder);
        } else if (this.sortOrder == 2) {
          newList.sort(function(x, y) {
            return x.price - y.price;
          });
        }
      }
      return newList;
    }
  }
};
</script>

<style>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list::after {
  content: "";
  display: block;
  width: 280px;
}
</style>