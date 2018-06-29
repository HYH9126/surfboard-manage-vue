<template>
    <custom-table 
        v-bind:tabledata-prop="tableData" 
        v-bind:columdata-prop="columData" 
        v-bind:forminline-prop="forminLine" 
        addbtnTitle="添加仓库"
        ></custom-table>
</template>

<script>
    import customTable from '@/components/common/customTable'

    export default {
        name: 'depot',
        components: {
            customTable
        },
        data() {
            return {
                tableData: [{
                    depot: `Jing's Place`
                }, {
                    depot: `Cloud 9`
                }],
                columData: [{
                    prop: 'depot',
                    label: '仓库',
                    width: '220'
                }],
                forminLine: {
                    depot: ''
                }
            }
        },
        methods: {
            // 请求数据
            getData(){

            }
        },
        creat: function() {
            // getData();
        }
    }
</script>
