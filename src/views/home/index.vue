<template>
    <el-container>
        <el-header height="48px">
            <img src="../../images/logo.png"/>
            <h1>Surf Board Manager</h1>
        </el-header>
        <el-aside width="160px" v-for="(item, index) in asideName" :key="index">
            <router-link to="/home/{{item.path}}">{{item.name}}r</router-link>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        name: 'home',
        data(){
            return {
                asideName:[
                    {name: '浪板状态', path:'state'},
                    {name: '浪板管理', path:'board'},
                    {name: '仓库管理', path:'depot'},
                    {name: '员工管理', path:'worker'},
                    {name: '权限管理', path:'group'},
                    {name: '数据管理', path:'data'}
                ]
            }
        }
    }
</script>

<style scoped lang="less">
</style>
