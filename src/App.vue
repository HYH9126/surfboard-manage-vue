<template>
    <div id="app">
        <el-container>
            <el-header height="48px">
                <img class="logo" src="./images/logo.png"/>
                <div class="name">Surf Board Manager</div>
            </el-header>
            <el-container>
                <el-aside width="160px">
                    <router-link :to="item.path" tag="li" active-class="linkActive" v-for="item in asideName" :key="item.path">
                        <img  />
                        <span>{{item.name}}</span>
                    </router-link>
                </el-aside>
                <el-main>
                    <transition :name="transition.name" :mode="transition.mode">
                        <router-view class="child-view"></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import TransitionHandler from '@/service/transitionHandler.js'

export default {
    name: 'app',
    data(){
        return {
            asideName: [
                {name: '浪板状态', path: 'state', img: [require('./images/state.png'), require('./images/state-active.png')]},
                {name: '浪板管理', path: 'board', img: [require('./images/board.png'), require('./images/board-active.png')]},
                {name: '仓库管理', path: 'depot', img: [require('./images/depot.png'), require('./images/depot-active.png')]},
                {name: '员工管理', path: 'worker', img: [require('./images/worker.png'), require('./images/worker-active.png')]},
                {name: '权限管理', path: 'group', img: [require('./images/group.png'), require('./images/group-active.png')]},
                {name: '数据管理', path: 'data', img: [require('./images/data.png'), require('./images/data.png')]}
            ],
            isChoose: [
                {b: true}, {b: false}, {b: false}, {b: false}, {b: false}, {b: false}
            ],
            transition: {}
        }
    },
    watch: {
        '$route' (to, from) {
            // let toIndex = 0;
            // let fromIndex = 0;
            // this.asideName.forEach((item, i) => {
            //     if(to.name === item.path){
            //         toIndex = i
            //     }
            //     if(from.name === item.path){
            //         fromIndex = i
            //     }
            // })
            // Vue.set(this.isChoose, fromIndex, {b: false});
            // Vue.set(this.isChoose, toIndex, {b: true});
            this.transition = TransitionHandler.getTransitionType(to, from);
        }
    }
}
</script>

<style scoped lang="less">
#app{
    height: 100%;
}
.el-container{
    height: 100%;
}
.el-header{
    background-color: #194D5B;
    padding: 0 10px;
}
.el-aside{
    background-color: #194D5B;
    li{
        position: relative;
        height: 48px;
        width: 160px;
    }
    li:hover{
        background-color: #E560CD;
    }
    img{
        position: absolute;
        left: 20px;
        top: 12px;
        width: 24px;
        height: 24px;
        color: #FFFFFF;
    }
    span{
        font-family: 'Arial Normal', 'Arial';
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 16px;
        position: absolute;
        left:60px;
        top:16px;
    }
}
.el-main{
    background-color: #c3e0ee;
    padding: 20px;
}
.linkActive{
    background-color: #FAAE4E;
}
.logo{
    display: block;
    float: left;
    margin-right: 5px;
    width: 48px;
    height: 48px;
}
.name{
    float: left;
    height: 48px;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    color:#fff;
}

</style>