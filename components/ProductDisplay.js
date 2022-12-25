app.component("product-display", {
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- <img :src="image" /> -->
        <img :class="{ 'out-of-stock-img': !inStock }" :src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <a :href="url">Click me!</a>
        <p>{{ quantity }} In stock</p>
        <p v-if="!inStock">Out of stock</p>
        <p v-else-if="lowStock">Almost sold out</p>
        <p v-show="inStock">{{ description }}</p>
        <!-- <p v-show="onSale && inStock">On sale!</p> -->
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor: variant.color}"
        ></div>
        <button
          class="button"
          :class="{disabledButton: !inStock}"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add
        </button>
        <button
          class="button"
          :class="{disabledButton: cart==0}"
          :disabled="cart==0"
          @click="removeFromCart"
        >
          Remove
        </button>
      </div>
    </div>
  </div>`,

  data() {
    return {
        cart: 0,
        product: 'Socks',
        brand: "SuperSocks",
        selectedVariant: 0,
        description: 'Got a lot of sole due to a hole',
        url: 'https://www.google.com',
        details: ["50% cotton", "30% wool", "20% polyester"],
        variants: [
            { id: 2234, color: "green", image: './assets/images/socks_green.jpg', quantity: 4 , onSale: true},
            { id: 2235, color: "blue", image: './assets/images/socks_blue.jpg', quantity: 0 , onSale: false},
        ],
    }
},
methods: {
    addToCart() {
        if (this.inStock) {
        this.cart += 1
    }
    },
    removeFromCart() {
        if (!this.cartEmpty) {
            this.cart -= 1
        }
    },
    updateVariant(index) {
        this.selectedVariant = index
        // console.log(index)
    },
},
computed: {
    title() {
        str = this.brand + " " + this.product
        if (this.onSale) {
            str = str + " is on sale!"
        }
        return str
    },
    variant() {
        return this.variants[this.selectedVariant]
    },
    quantity() {
        return this.variant.quantity - this.cart
    },
    inStock() {
        return this.quantity > 0
    },
    lowStock() {
        return this.quantity > 0 && this.quantity <= 3 
    },
    image() {
        return this.variant.image
    },
    onSale() {
        return this.variant.onSale
    },
    cartEmpty() {
        return this.cart == 0
    },
    
},
})