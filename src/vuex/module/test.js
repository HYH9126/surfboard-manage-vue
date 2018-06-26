'use strict'

const state = {
    history: ['HEAD'],
    top: 0
}

const actions = {

}

const getters = {
    // 获取上一个页面的path
    getRecentPath: state => {
        return state.history[state.top - 1];
    },
    // 获取当前历史长度
    getHistorySize: state => {
        return state.top;
    }
}

const mutations = {
    push (state, path) {
        state.history[++state.top] = path;
    },
    pop (state) {
        state.top--;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}