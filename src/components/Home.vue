<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may save and load your Data</h6>
        <h6>Click on 'End Day' to begin a new day</h6>
        <hr />
        <p>Your funds: {{funds | currency}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>


<style scoped>
    h6{
        font-size:14px;
        font-weight:400;
        margin-top:10px;
        margin-bottom: 10px;
    }
    h3 {
        margin-top:0;
    }
</style>
