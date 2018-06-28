<template>
    <div id="app">
        <el-container>
            <el-header height="48px">
                <img class="logo" src="./sssets/images/logo.png"/>
                <div class="name">Surf Board Manager</div>
            </el-header>
            <el-container>
                <el-aside width="160px">
                    <el-menu
                        :default-active="this.$route.path"
                        class="el-menu-vertical-demo"
                        background-color="#194D5B"
                        text-color="#fff"
                        active-text-color="#ec9600"
                        router
                        @select="handleSelect"
                        >
                        <el-menu-item 
                            :index="item.path" 
                            v-for="item in menuList" 
                            :key="item.path"
                            >
                                <img :src="item.img[0]" />
                                <span>{{item.title}}</span>
                        </el-menu-item>
                    </el-menu>
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
            menuList: [
                {title: '浪板状态', path: '/state', img: [require('./sssets/images/state.png'), require('./sssets/images/state-active.png')]},
                {title: '浪板管理', path: '/board', img: [require('./sssets/images/board.png'), require('./sssets/images/board-active.png')]},
                {title: '仓库管理', path: '/depot', img: [require('./sssets/images/depot.png'), require('./sssets/images/depot-active.png')]},
                {title: '员工管理', path: '/worker', img: [require('./sssets/images/worker.png'), require('./sssets/images/worker-active.png')]},
                {title: '权限管理', path: '/group', img: [require('./sssets/images/group.png'), require('./sssets/images/group-active.png')]},
                {title: '数据管理', path: '/data', img: [require('./sssets/images/data.png'), require('./sssets/images/data.png')]}
            ],
            selectIndex: Number,
            transition: {}
        }
    },
    methods: {
        handleSelect(index){
            console.log(index)
        }
    },
    watch: {
        '$route' (to, from) {
            // let fromIndex = Number;
            // let toIndex = Number;
            // this.menuList.forEach((item, key) => {
            //     if (item.path === from.path){
            //         fromIndex = key
            //     }
            //     if (item.path === to.path){
            //         toIndex === key
            //     }
            // })
            // console.log(fromIndex, toIndex)
            // let fromObj = { ...this.menuList[fromIndex]};
            // let toObj = { ...this.menuList[toIndex]};
            // fromObj.img.reverse();
            // toObj.img.reverse();
            // Vue.set(this.menuList, fromIndex, fromObj);
            // Vue.set(this.menuList, toIndex, toObj);
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
}
.el-main{
    background-color: #c3e0ee;
    padding: 20px;
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