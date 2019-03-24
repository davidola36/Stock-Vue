<template>
    <div class="container">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 14px;
            line-height: 1.4285;
            color:#333;
            background-color: #fff;
            padding: 30px;
            box-sizing: border-box;
            }
</style>
