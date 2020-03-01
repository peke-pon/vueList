<template>
  <div class="container">
      <h1 class="titile">商品一覧</h1>
        <div class="search">
    <div class="result">
      検索結果
      <span class="count">{{ filterdList.length }}件</span>
    </div>
    <div class="condition">
      <div class="target">
        <label>
          <input type="checkbox" v-model="showSaleItem" />セール対象
        </label>
        <label>
          <input type="checkbox" v-model="showDelvFree" />送料無料
        </label>
      </div>
    </div>
    <div class="sort">
      <label for="sort">並び替え</label>
      <select id="sort" class="sorting" v-model.number="sortOrder">
        <option value="1">標準</option>
        <option value="2">価格が安い順</option>
      </select>
    </div>
  </div>
      <div class="list">
        <div class="item" v-for="product of filterdList" :key="product.id">
          <figure class="image">
            <template v-if="product.isSale">
              <div class="status">SALE</div>
            </template>
            <img :src="product.image" alt="">
            <figcaption v-html="product.name"></figcaption>
          </figure>
          <div class="detail">
            <div class="price"><span>{{ product.price | filterdList }}</span>円(税込)</div>
            <template v-if="product.delv == 0">
              <div class="shipping-fee none">送料無料</div>
            </template>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import products from './products.js'

export default {
  name: 'app',
  data() {
    return {
      // 商品数
    count: 0,
    // 標準=1,安い順=2
    sortOrder: 1,
    // SALEチェックボックス
    showSaleItem: false,
    // 送料無料チェックボックス
    showDelvFree: false,
    // 商品リスト
    products
    }
  },
  computed: {
    filterdList: function() {
      let newList = [];
      console.log(this.sortOrders)
      for(let i =0; i < this.products.length; i++) {
        let isShow = true;
        if(this.showSaleItem && !this.products[i].isSale) {
          isShow = false
        }
        if(this.showDelvFree && this.products[i].delv > 0) {
          isShow = false
        }
        if(isShow) {
          newList.push(this.products[i])
        }
        // sorting
        if (this.sortOrder == 1) {
          console.log(newList)
        } else if(this.sortOrder == 2) {
          newList.sort(function(x,y) {
            return x.price - y.price
          })
        }
      }
      return newList;
    }
  }
}
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

img {
  border: 1px solid rgb(219, 222, 226);
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
