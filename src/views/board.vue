<template>
    <custom-table 
        v-bind:tabledata-prop="tableData" 
        v-bind:columdata-prop="columData" 
        v-bind:forminline-prop="forminLine" 
        addbtnTitle="添加浪板"
        ></custom-table>
</template>

<script>
    import customTable from '@/components/common/customTable'

    export default {
        name: 'board',
        components: {
            customTable
        },
        data() {
            return {
                tableData: [{
                    id: '1768S180623_0101900001',
                    productionDate: '180623',
                    depot: `Jing's Place`,
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001'
                }, {
                    id: '1768S180623_0101900002',
                    productionDate: '180623',
                    depot: `Jing's Place`,
                    series: 'Sunrise',
                    type: 'Short',
                    size: `9'0"`,
                    num: '0002'
                }, {
                    id: '1768S180623_0101900003',
                    productionDate: '180623',
                    depot: `Jing's Place`,
                    series: 'Sunrise',
                    type: 'Fun',
                    size: `9'0"`,
                    num: '0003'
                }, {
                    id: '1768S180623_0101900004',
                    productionDate: '180623',
                    depot: `Jing's Place`,
                    series: 'Sunrise',
                    type: 'Gun',
                    size: `9'0"`,
                    num: '0004'
                }, {
                    id: '1768S180623_0101900005',
                    productionDate: '180623',
                    depot: `Cloud 9`,
                    series: 'Sunrise',
                    type: 'Fish',
                    size: `9'0"`,
                    num: '0005'
                }, {
                    id: '1768S180623_0101900006',
                    productionDate: '180623',
                    depot: `Cloud 9`,
                    series: 'Sunrise',
                    type: 'Sup',
                    size: `9'0"`,
                    num: '0006'
                }],
                columData: [{
                    prop: 'id',
                    label: 'ID',
                    width: '220'
                }, {
                    prop: 'productionDate',
                    label: '出厂日期',
                    width: '100'
                }, {
                    prop: 'depot',
                    label: '仓库',
                    width: '100'
                }, {
                    prop: 'series',
                    label: '名称',
                    width: '90'
                }, {
                    prop: 'type',
                    label: '类型',
                    width: '80'
                }, {
                    prop: 'size',
                    label: '尺寸',
                    width: '80'
                }, {
                    prop: 'num',
                    label: '序号',
                    width: '80'
                }],
                forminLine: {
                    id: '',
                    productionDate: '',
                    depot: '',
                    series: '',
                    type: '',
                    size: '',
                    num: ''
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

<style lang="less" scoped>
</style>

