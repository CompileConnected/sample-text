<template>
  <CCard>
    <CCardHeader>
      <slot name="header"> <CIcon name="cil-grid" /> {{ caption }} </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :bordered="bordered"
        :small="small"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        pagination
      >
        <template #image="{item}">
          <td>
            <img :src="item.image" alt="CoreuiVue" />
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: "ProductTable",
  props: {
    items: Array,
    fields: {
      type: Array,
      default() {
        return [
          "id",
          "image",
          "name",
          "price",
          "actual_quantity",
          "reserve_quantity",
          "purchased_quantity"
        ];
      },
    },
    caption: {
      type: String,
      default: "Table",
    },
    hover: Boolean,
    striped: Boolean,
    bordered: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean,
  },
};
</script>
