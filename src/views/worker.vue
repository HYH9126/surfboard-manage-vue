<template>
    <custom-table 
        v-bind:tabledata-prop="tableData" 
        v-bind:columdata-prop="columData" 
        v-bind:forminline-prop="forminLine" 
        addbtnTitle="添加员工"
        ></custom-table>
</template>

<script>
    import customTable from '@/components/common/customTable'

    export default {
        name: 'worker',
        components: {
            customTable
        },
        data() {
            return {
                tableData: [{
                    id: '1768S180623_0001',
                    dateEntry: '180623',
                    depot: `Jing's Place`,
                    name: 'Lace',
                    group: 'Admin',
                    telephone: '09270737992'
                }, {
                    id: '1768S180623_0002',
                    dateEntry: '180623',
                    depot: `Jing's Place`,
                    name: 'Tom',
                    group: 'Leader',
                    telephone: '09498632314'
                }, {
                    id: '1768S180623_0003',
                    dateEntry: '180623',
                    depot: `Cloud 9`,
                    name: 'Mico',
                    group: 'Worker',
                    telephone: '09285632582'
                }],
                columData: [{
                    prop: 'id',
                    label: 'ID',
                    width: '220'
                }, {
                    prop: 'dateEntry',
                    label: '入职日期',
                    width: '100'
                }, {
                    prop: 'depot',
                    label: '仓库',
                    width: '100'
                }, {
                    prop: 'name',
                    label: '姓名',
                    width: '120'
                }, {
                    prop: 'group',
                    label: '群组',
                    width: '120'
                }, {
                    prop: 'telephone',
                    label: '手机号码',
                    width: '120'
                }],
                forminLine: {
                    id: '',
                    dateEntry: '',
                    depot: '',
                    name: '',
                    group: '',
                    telephone: ''
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
