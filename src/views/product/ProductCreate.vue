<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Create Product </strong> <small>Form</small>
          </CCardHeader>
          <CCardBody>
            <CCRow>
              
              <CCol>
                <label for="imageFile">Add Image</label>
               <input type="file" id="imageFile"  accept="image/*" capture="environment" />
                <CInput :label="$t('product.create.company.title.label')" placeholder="" />
                <CInput :label="$t('product.create.itemname.title.label')" placeholder="" />
                <CInput :label="$t('product.create.quantity.title.label')" placeholder="" />
                <CInput :label="$t('product.create.sellingprice.title.label')" placeholder="" />
              </CCol>
            </CCRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: "ProductCreate",
};
</script>
