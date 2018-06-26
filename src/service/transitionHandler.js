/**
 * Created by lewiiszhang on 2017/9/29.
 *
 * 只校验末尾之前一位的路径
 *
 * 例子：
 * history：['HEAD','/A', '/B', '/C']
 * top: 3
 *
 * 跳转'/D'页面 算跳转新页面 入栈
 * 跳转'/A'页面 算跳转新页面 入栈
 * 跳转'/B'页面 算跳转新页面 出栈
 *
 */

import store from '@/vuex/store'

export default {
    getTransitionType (to, from) {
        let toTransitionType = to.matched[0] ? to.matched[0].meta.transitionType : '';
        let fromTransitionType = from.matched[0] ? from.matched[0].meta.transitionType : '';
        let toTransitionMode = to.matched[0] ? to.matched[0].meta.transitionMode : '';
        let fromTransitionMode = from.matched[0] ? from.matched[0].meta.transitionMode : '';
        let className = '';
        let mode = '';
        if (store.getters.getHistorySize === 0) {
            store.commit('push', from.path);
            store.commit('push', to.path);
            className = toTransitionType + '-ahead';
            mode = toTransitionMode;
        } else {
            if (store.getters.getRecentPath === to.path) {
                store.commit('pop');
                className = fromTransitionType + '-back';
                mode = fromTransitionMode;
            } else {
                store.commit('push', to.path);
                className = toTransitionType + '-ahead';
                mode = toTransitionMode;
            }
        }
        return {
            name: className,
            mode: mode
        };
    }
}
