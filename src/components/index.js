'use strict'

import Vue from 'vue'
import {component} from '@/utils'

const _components = component(require.context('./common/', true, /Base[A-Z]\w+\.(vue|js)$/));

export default Vue.component({
    componentList: _components
});
