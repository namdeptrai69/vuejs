<template>
  <div class="formWrap">
    <div class="title">Sản phẩm</div>
    <div class="inputWrap">
      <div class="inputLabel">Tên sản phẩm <span>(*)</span></div>
      <input
        type="text"
        placeholder="Nhập tên sản phẩm"
        :class="{ hasError: nameErrorMsg.length > 0 }"
        v-model="name"
      />
      <div class="errorMsg">
        {{ nameErrorMsg }}
      </div>
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Đơn giá <span>(*)</span></div>
      <input
        type="number"
        placeholder="Nhập đơn giá sản phẩm"
        :class="{ hasError: priceErrorMsg.length > 0 }"
        v-model="price"
      />
      <div class="errorMsg">
        {{ priceErrorMsg }}
      </div>
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Số lượng <span>(*)</span></div>
      <input
        type="number"
        placeholder="Nhập số lượng sản phẩm"
        :class="{ hasError: quantityErrorMsg.length > 0 }"
        v-model="quantity"
      />
      <div class="errorMsg">
        {{ quantityErrorMsg }}
      </div>
    </div>
    <div class="formActions">
      <button class="saveButton" @click="saveProduct">
        {{ Object.keys(this.product).length === 0 ? "Tạo mới" : "Cập nhật" }}
      </button>
      <button class="defaultButton" @click="clearData">Hủy</button>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
  name: "ProductForm",
  data() {
    return {
      name: "",
      price: "",
      quantity: "",
      nameErrorMsg: "",
      priceErrorMsg: "",
      quantityErrorMsg: "",
    };
  },
  watch: {
    name() {
      this.nameErrorMsg = "";
    },
    price() {
      this.priceErrorMsg = "";
    },
    quantity() {
      this.quantityErrorMsg = "";
    },
    product() {
      this.name = this.product.name;
      this.price = this.product.price;
      this.quantity = this.product.quantity;
    },
  },
  computed: {
        ...mapState([
        'product',
        ])
    },
  methods: {
    ...mapMutations([
          'cartProductsBai2',
          'onUpdateProductBai2',
          'clearDataBai2'
        ]),
    saveProduct() {
      if (this.isDataValidated()) {
        if (Object.keys(this.product).length === 0) {
          this.cartProductsBai2({
            id: `SP${new Date().getTime()}`,
            name: this.name,
            price: parseInt(this.price),
            quantity: parseInt(this.quantity),
          });
        } else {
          this.onUpdateProductBai2({
            id: this.product.id,
            name: this.name,
            price: parseInt(this.price),
            quantity: parseInt(this.quantity),
          });
        }
        this.clearData();
      }
    },
    clearData() {
      this.name = "";
      this.price = "";
      this.quantity = "";
      this.clearDataBai2();
    },
    isDataValidated() {
      let result = true;

      if (!this.name) {
        result = false;
        this.nameErrorMsg = "Tên sản phẩm không được để trống";
      }

      if (!this.price) {
        result = false;
        this.priceErrorMsg = "Giá sản phẩm không được để trống";
      }

      if (!this.quantity) {
        result = false;
        this.quantityErrorMsg = "Số lượng sản phẩm không được để trống";
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorMain: #0080dd;
$colorDefault: #253036;
$colorGreen: #39cd74;
$colorRed: #f54b5e;
$colorTableHeader: #f2f6fe;
$colorWhite: #fff;
$colorOrange: #f2994a;

.formWrap {
  border: 1px solid $colorStroke;
  width: 500px;
  min-height: 400px;
  margin-right: 20px;
  padding: 24px;
  position: relative;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: $colorMain;
  }

  .inputWrap {
    margin-bottom: 12px;
    text-align: left;
    .inputLabel {
      font-weight: bold;
      margin-bottom: 8px;

      span {
        color: $colorRed;
      }
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid $colorStroke;
      border-radius: 5px;
      outline: unset;
      font-size: 14px;

      &:hover,
      &:active,
      &:focus {
        border: 1px solid $colorMain;
      }
    }
  }

  .formActions {
    padding: 24px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .saveButton {
      background: $colorMain;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: $colorWhite;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
    }

    .defaultButton {
      background: $colorStroke;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: $colorDefault;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 8px;
    }
  }

  .errorMsg {
    color: $colorRed;
    margin-top: 4px;
    font-size: 12px;
  }

  .hasError {
    border: 1px solid $colorRed !important;
  }
}
</style>