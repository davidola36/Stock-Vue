import vuex from 'vuex';
import vue from 'vue';

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

vue.use(vuex)

export default new vuex.Store({
    modules: {
        stocks,
        portfolio
    }
})