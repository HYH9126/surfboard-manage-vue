import config from '@/configs'
import { fetch } from './fetch';

export default {

    getRootMenu() {
        return fetch(config.api.menu);
    },
    getMenuByKey(params) {
        return fetch(config.api.menuByKey, params);
    }
}
