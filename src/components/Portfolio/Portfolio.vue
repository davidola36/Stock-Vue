<template>
    <div class="parent" style="display:flex">
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
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
}
</script>


<style scoped>
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

