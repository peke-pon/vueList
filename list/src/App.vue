<template>
  <ProductList :products="products"></ProductList>
</template>

<script>
import ProductList from './components/product-list'
import products from "./products.js";

export default {
  name: "app",
  data() {
    return {
      products
    }
  },
  components: {
    ProductList
  }
};
</script>

<style>
body {
  padding: 50px 5%;
  background-color: #fff;
  color: #555559;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 48px;
  padding-bottom: 32px;
  background: #f6f6f9;
}
</style>
