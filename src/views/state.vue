<template>
    <div>
        <div>
            <div>
                <span>状态</span>
                <!-- <el-checkbox v-model="checked1" label="Idle" border></el-checkbox>
                <el-checkbox v-model="checked2" label="Out" border></el-checkbox>
                <el-checkbox v-model="checked3" label="Fix" border></el-checkbox> -->
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'state',
        data(){
            return {
                '状态': [
                    {checked1: true},
                    {checked2: false},
                    {checked1: false}
                ]
            }
        }
    }
</script>
