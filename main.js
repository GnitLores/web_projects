const app = Vue.createApp({
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