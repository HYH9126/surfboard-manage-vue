<template>
    <div id="app">
        <transition :name="transition.name" :mode="transition.mode">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
import TransitionHandler from '@/service/transitionHandler.js'

export default {
    name: 'app',
    data () {
        return {
            msg: 'Vue app builder',
            transition: {}
        }
    },
    watch: {
        '$route' (to, from) {
            this.transition = TransitionHandler.getTransitionType(to, from)
        }
    }
}
</script>

<style scoped lang="less">


</style>