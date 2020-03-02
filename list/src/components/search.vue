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