Vue.filter("numberFormat", function(val) {
  return val.toLocaleString();
});

const app = new Vue({
  el: "#app",
  data: {
    // 商品数
    count: 0,
    // 標準=1,安い順=2
    sortOrder: 1,
    // SALEチェックボックス
    showSaleItem: false,
    // 送料無料チェックボックス
    showDelvFree: false,
    // 商品リスト
    products: [],
    // jsonpエラー
    jsonError: false
  },
  created: function() {
    $.ajax({
      url: "https://peke-pon.github.io/vueList/products.json",
      type: "GET",
      dataType: "json",
      jsonp: "callback",
      jsonpCallback: "products"
    })
      .done((data, status, XHR) => {
        this.products = data;
      })
      .fail((XHR, Status, error) => {
        this.jsonError = true
      })
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
        if (this.sortOrder == 1) {
        } else if (this.sortOrder == 2) {
          newList.sort(function(x, y) {
            return x.price - y.price;
          });
        }
      }
      return newList;
    }
  }
});
