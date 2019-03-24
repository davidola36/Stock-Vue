<template>
    <ul>
        <li><router-link to="/" style="font-weight:bold">Stock Trader</router-link></li>
        <li><router-link to="/Portfolio" activeClass="active" >Portfolio</router-link></li>
        <li><router-link to="/Stocks" activeClass="active">Stocks</router-link></li>
        <li style="float:right"><a @click="endDay">End Day</a></li>
        <li style="float:right"><a>Funds: {{funds | currency }}</a></li>
    </ul>
</template>


<script>
import {mapActions} from 'vuex';

export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions([
            'randomizeStocks'
        ]),
        endDay() {
            // console.log('end')
            this.randomizeStocks()
        }
    }
}
</script>

<style scoped>
      
            ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #e7e7e7;
            margin-bottom: 30px;
            }

            li {
            float: left;
            }

            li a {
            display: block;
            color: #333;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            }

            li a:hover:not(.active) {
            background-color: #111;
            color: white;
            }

            .active {
            background-color: #4CAF50;
            }
</style>
