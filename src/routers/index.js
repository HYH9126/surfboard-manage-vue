'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from '@/utils'

const _route = router(require.context('./map/', true, /\.js$/));

Vue.use(VueRouter);

export default new VueRouter({
    routes: _route
});
