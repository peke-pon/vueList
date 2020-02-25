Vue.filter("numberFormat", function(val) {
  return val.toLocaleString();
});

const app = new Vue({
  el: "#app",
  data: {
    // 商品リスト
    count: 0,
    // 標準=1,安い順=2
    sortOrder: 1,
    // SALEチェックボックス
    showSaleItem: false,
    // 送料無料チェックボックス
    showDelvFree: false,
    // 商品リスト
    products: [
      {
        id: 1,
        name: "Spoon / <br>スマホケース",
        price: 1380,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: true
      },
      {
        id: 2,
        name: "Spoon / <br>スマホケース",
        price: 2480,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: false
      },
      {
        id: 3,
        name: "Spoon / <br>スマホケース",
        price: 1440,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 360,
        isSale: true
      },
      {
        id: 4,
        name: "Spoon / <br>スマホケース",
        price: 1450,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: false
      },
      {
        id: 5,
        name: "Spoon / <br>スマホケース",
        price: 1280,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 360,
        isSale: true
      },
      {
        id: 6,
        name: "Spoon / <br>スマホケース",
        price: 1320,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: true
      },
      {
        id: 7,
        name: "Spoon / <br>スマホケース",
        price: 1380,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: true
      },
      {
        id: 8,
        name: "Spoon / <br>スマホケース",
        price: 2480,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: false
      },
      {
        id: 9,
        name: "Spoon / <br>スマホケース",
        price: 1440,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 360,
        isSale: true
      },
      {
        id: 10,
        name: "Spoon / <br>スマホケース",
        price: 1450,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: false
      },
      {
        id: 11,
        name: "Spoon / <br>スマホケース",
        price: 1280,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: true
      },
      {
        id: 12,
        name: "Spoon / <br>スマホケース",
        price: 1320,
        image:
          "http://placehold.jp/ffffff/afc3d6/220x300.png?text=%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F",
        delv: 0,
        isSale: true
      }
    ]
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
