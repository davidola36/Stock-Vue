<template>
    <div class="parent" style="display:flex">
        <h1 v-if="!portData" >Please buy some stock</h1>
        <Stock v-for="stock in stocks" :stock="stock" :key="stock.id" />   
    </div>
</template>

<script>
import Stock from './Stock.vue';
import {mapGetters} from 'vuex';

export default {
    components: {
        Stock
    },
    data: function() {
        return {
            portData: false
        }
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    mounted(){
         if(this.stocks.length > 0){
            this.portData = true
        }
        
    }

}
</script>


<style scoped>
    .noDisplay{
        display: none;
    }
    .parent {
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .parent > div {
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
</style>

