<template>
  <div>
    <CRow>
      <CCol lg="12" class="px-4 py-4 d-none d-sm-block">
        <CButton color="primary" @click="gotoCreate">
          <CIcon name="cilPlus" />&nbsp;Create
        </CButton>
      </CCol>

      <CCol sm="3" class="px-4 py-4 d-block  d-sm-none">
        <CButton color="primary" @click="gotoCreate">
          <CIcon name="cilPlus" />
        </CButton>
      </CCol>

      <CCol sm="12">
        <ProductTable :items="getShuffledUsersData()">
          <template #header> <CIcon name="cil-grid" /> Product Table </template>
        </ProductTable>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import ProductTable from "./ProductTable";
import productMockData from "./ProductMockData";

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
    gotoCreate() {
      this.$router.push("/app/product/create");
    },
    getShuffledUsersData() {
      return this.shuffleArray(productMockData.slice(0));
    },
  },
};
</script>
