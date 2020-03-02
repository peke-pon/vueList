# VueList

[demo](https://peke-pon.github.io/vueList/list/dist/)

## View

![](https://i.imgur.com/wpzPz3z.png)

## App.vue

```html
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
```

## components/product-list.vue

```html
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
```

## components/product.vue

```html
<template>
    <div class="item">
      <figure class="image">
        <template v-if="product.isSale">
          <div class="status">SALE</div>
        </template>
        <img :src="product.image" alt />
        <figcaption v-html="product.name"></figcaption>
      </figure>
      <div class="detail">
        <div class="price">
          <span>{{ product.price }}</span>円(税込)
        </div>
        <template v-if="product.delv == 0">
          <div class="shipping-fee none">送料無料</div>
        </template>
      </div>
    </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.item {
  flex: 0 1 250px;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 40px;
}
.item .detail {
  text-align: center;
}
.item .price {
  display: inline-block;
}
.item .price span {
  font-size: 180%;
}
.item figcaption {
  padding-top: 0.5em;
  font-size: 100%;
  font-weight: bold;
  opacity: 0.9;
}
.item .image {
  position: relative;
  text-align: center;
}
.item .image img {
  width: 100%;
  height: auto;
  border: 1px solid rgb(219, 222, 226);
}
.item .status {
  position: absolute;
  width: 4.8em;
  height: 3em;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fc4d50;
  color: #fff;
}
.item .shipping-fee {
  display: inline-block;
}
.item .shipping-fee.none {
  background: #fc4d50ee;
  font-size: 10px;
  color: #fff;
  padding: 0.5em 0.7em;
  margin-left: 1em;
  position: relative;
  top: -5px;
}
</style>
```

## components/search.vue

```html
<template>
  <div class="search">
    <div class="result">
      検索結果
      <span class="count">{{ count }}件</span>
    </div>
    <div class="condition">
      <div class="target">
        <label>
          <input type="checkbox" @click="$emit('sale-click')"/>セール対象
        </label>
        <label>
          <input type="checkbox" @click="$emit('delv-click')"/>送料無料
        </label>
      </div>
    </div>
    <div class="sort">
      <label for="sort">並び替え</label>
      <select id="sort" class="sorting" @change="$emit('sort-change', parseInt($event.target.value))">
        <option value="1">標準</option>
        <option value="2">価格が安い順</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count', 'showSaleItem', 'showDelvFree', 'sortOrder']
};
</script>

<style scoped>
.pageTitle {
  font-weight: normal;
  border-bottom: 2px solid;
}
.search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.search .sort {
  display: inline-block;
}
.search .target {
  display: inline-block;
}
.search .target label {
  margin-right: 15px;
}
</style>
```
