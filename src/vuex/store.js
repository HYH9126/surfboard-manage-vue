'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import { js } from '@/utils'

Vue.use(Vuex);

let _module = js(require.context('./module/', true, /\.js$/));

export default new Vuex.Store({
    modules: _module
});