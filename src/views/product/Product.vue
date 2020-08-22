<template>
  <div>
    <CRow>
      <CCol lg="6">
        <ProductTable :items="getShuffledUsersData()">
          <template #header>
            <CIcon name="cil-grid" /> Product Table
          </template>
        </ProductTable>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import ProductTable from "./ProductTable";
import productMockData from './ProductMockData';

export default {
  name: "Product",
  components: { ProductTable },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(productMockData.slice(0));
    },
  },
};
</script>
