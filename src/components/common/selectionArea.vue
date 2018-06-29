<template>
    <div>
        <div class="group" v-for="(groupData, gindex) in propsData" :key="gindex">
            <div class="title">{{groupData.title}}</div>
            <el-checkbox-group v-if="groupData.type === 'checkbox'" class="checkGroup" v-model="allChecked" size="mini" text-color="#194D5B">
                <el-checkbox v-for="labelData in groupData.list" :key="labelData.label" :label="labelData.label" border></el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'selection-area',
        props: ['selectionarea-data'],
        data(){
            return {
                propsData: JSON.parse(JSON.stringify(this.selectionareaData)),
                allChecked: []
            }
        },
        watch: {
            allChecked: function(val, oldVal){
                this.$emit('checkedstate', val)
            }
        }
    }
</script>

<style scoped lang="less">
    .group{
        width: 100%;
        height: 28px;
        margin-bottom: 6px;
    }
    .checkGroup{
        height: 28px;
        float: left;
    }
    .title{
        width: 120px;
        height: 28px;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 3px;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
        font-family: "微软雅黑";
        font-weight: 700;
        font-style: normal;
        color: #000;
        float: left;
        margin-right: 15px;
    }

</style>