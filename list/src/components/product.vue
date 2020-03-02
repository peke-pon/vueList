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