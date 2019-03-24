<template>
    <div class="child">
        <div class="panel-title">{{stock.name}}<small>(Price: {{stock.price}})</small></div>
        <div class="panel-body">
            <input type="number" palceholder="quantity" v-model="quantity" class="panel-input"/> 
            <button class="btn" @click="buyStock" :disabled="insufficientFunds|| quantity <= 0">
                {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            // console.log(order)
            this.$store.dispatch('buyStock', order)
            this.quantity = 0
        }
    },
    props: ['stock'],
    computed:  {
        funds() {
            return this.$store.getters.funds;    
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    }
}
</script>


<style scoped>
    .child {
        display: inline-block;
        flex-grow: 1;
        flex-basis: calc(100% / 3);
        padding-right: 10px;
        padding-left: 10px;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 20px;
        max-width: 325px;
        }
        
        .panel-title {
            font-size: 16px;
            padding:10px 15px;
            background-color: #dff0d8;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-color: #c2eca0;
            color: #3c763d;

        }
        .panel-body {
            padding:15px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            border: 1px solid #d6e9c6;

        }

        .panel-input {
            padding: 7px;
            border-radius: 3px;
            border: 1px solid #899c79;
        }

        /* .panel-body > input[t] */
        .btn {
            padding: 7px 10px;
            float: right;
            border-radius: 3px;
            border: 1px solid transparent;
            color: white;
            background-color: #9fd8a1;

        }
</style>

