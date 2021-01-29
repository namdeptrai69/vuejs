<template>
        <div class="productList">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
                <tr v-if="products.length === 0">
                    <td colspan="6" class="textCenter">Không có dữ liệu</td>
                </tr>
                <tr v-for="(product, index) in products" :key="index">
                    <td class="textCenter">{{index + 1}}</td>
                    <td>
                        <div class="productNameWrap">
                            <img v-if="product.image" :src="product.image" alt="">
                            <img v-else src="https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png" alt="">
                            <div class="textMain">{{product.name}}</div>
                        </div>
                    </td>
                    <td>{{formatPrice(product.price)}}</td>
                    <td class="textCenter">{{product.quantity}}</td>
                    <td class="textCenter">
                        <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
                        <span v-else class="textRed">Hết hàng</span>
                    </td>
                    <td>
                        <button class="addToCartButton" @click="addToCart(product)">Thêm vào giỏ</button>
                    </td>
                </tr>
            </table>
        </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

  export default {
    computed: {
        ...mapState([
        'products',
        'cartProducts'
        ])
    },
    methods: {
        ...mapMutations([
            'cartProductsHi',
            'cartProductsInCart'
        ]),
        formatPrice (price) {
            return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
        },
        addToCart (product) {
            if (product.quantity === 0) {
            alert('Sản phẩm hết hàng')
            return false
            }
            let inCartProducts = this.cartProducts.filter((cartProduct) => {return cartProduct.id === product.id})
            if (inCartProducts.length > 0) {
                let indexInCart = this.cartProducts.findIndex((cartProduct) => {return cartProduct.id === product.id})
                if (indexInCart !== -1) {
                    this.cartProductsInCart(indexInCart)
                // this.cartProducts[indexInCart].quantity = parseInt(this.cartProducts[indexInCart].quantity) + 1
                }
            } else {
                this.cartProductsHi({...product, quantity: 1})
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
    $colorStroke: #d8e0ea;
    $colorMain: #0080dd;
    $colorDefault: #253036;
    $colorGreen: #39cd74;
    $colorRed: #f54b5e;
    $colorTableHeader: #f2f6fe;
    $colorWhite: #fff;
    .productList {
            .textCenter {
                text-align: center;
            }

            .textGreen {
                color: $colorGreen;
            }

            .textRed {
                color: $colorRed;
            }

            .textMain {
                color: $colorMain;
            }

            table {
                border: 1px solid $colorStroke;
                border-spacing: 0;
                width: 900px;

                th {
                    background: $colorTableHeader;
                    padding: 14px;
                    border-right: 1px solid $colorStroke;
                    border-bottom: 1px solid $colorStroke;
                }

                td {
                    text-align: left;
                    padding: 12px;
                    font-size: 14px;
                    border-right: 1px solid $colorStroke;
                }

                .productNameWrap {
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 8px;
                        width: 40px;
                        height: 40px;
                    }
                }

                .addToCartButton {
                    background: $colorMain;
                    border: unset;
                    font-size: 14px;
                    font-weight: bold;
                    color: $colorWhite;
                    width: 120px;
                    height: 40px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
</style>