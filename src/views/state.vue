<template>
    <div>
        <selection-area 
            class="selectionArea" 
            v-bind:selectionarea-data="selectionareaData" 
            v-on:checkedstate="watchCheckedState"
            >
        </selection-area>
        <div>
            <el-table :data="tableData" height="420" border stripe style="width: 100%" size="mini">
                <el-table-column 
                    v-for="item in columData" 
                    :key="item.prop" 
                    :prop="item.prop" 
                    :label="item.label" 
                    :width="item.width"
                    :sortable="item.sortable"
                >
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="total"
                :pager-count="pagerCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import selectionArea from '@/components/common/selectionArea'

    export default {
        name: 'state',
        components: {
            selectionArea
        },
        data: function(){
            return {
                selectionareaData: [{
                    title: '状态',
                    type: 'checkbox',
                    list: [
                        {label: 'Idle'}, {label: 'Out'}, {label: 'Fix'}
                    ]
                }, {
                    title: '类型',
                    type: 'checkbox',
                    list: [
                        {label: 'Long'}, {label: 'Short'}, {label: 'Fun'}, {label: 'Fish'}, {label: 'Gun'}, {label: 'Sup'}
                    ]
                }, {
                    title: '尺寸',
                    type: 'checkbox',
                    list: [
                        {label: `9'0"`}, {label: `7'0"`}, {label: `5'6"`}, {label: `5'8"`}, {label: `11'0"`}
                    ]
                }, {
                    title: '仓库',
                    type: 'checkbox',
                    list: [
                        {label: `Jing's Place`}, {label: 'Cloud 9'}
                    ]
                }],
                allCheckedState: [],
                columData: [{
                    prop: 'id',
                    label: 'ID',
                    width: '220',
                    sortable: true
                }, {
                    prop: 'series',
                    label: '系列',
                    width: '100'
                }, {
                    prop: 'type',
                    label: '类型',
                    width: '100'
                }, {
                    prop: 'size',
                    label: '尺寸',
                    width: '90',
                    sortable: true
                }, {
                    prop: 'num',
                    label: '序号',
                    width: '80',
                    sortable: true
                }, {
                    prop: 'depot',
                    label: '仓库',
                    width: '100'
                }, {
                    prop: 'state',
                    label: '状态',
                    width: '80'
                }, {
                    prop: 'rentType',
                    label: '租赁类型',
                    width: '80'
                }, {
                    prop: 'length',
                    label: '时长',
                    width: '60'
                }, {
                    prop: 'price',
                    label: '单价',
                    width: '60'
                }, {
                    prop: 'outTime',
                    label: '实际出库时间',
                    width: '150',
                    sortable: true
                },  {
                    prop: 'returnTime',
                    label: '预估归还时间',
                    width: '150',
                    sortable: true
                }, {
                    prop: 'name',
                    label: '客人名称',
                    width: '140'
                }, {
                    prop: 'nationality',
                    label: '国籍',
                    width: '120'
                }, {
                    prop: 'passport',
                    label: '护照号',
                    width: '120'
                }, {
                    prop: 'telephone',
                    label: '电话',
                    width: '120'
                }, {
                    prop: 'email',
                    label: '邮箱',
                    width: '180'
                }],
                tableData: [{
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }, {
                    id: '1768S180623_0101900001',
                    series: 'Sunrise',
                    type: 'Long',
                    size: `9'0"`,
                    num: '0001',
                    depot: `Jing's Place`,
                    state: 'Idle',
                    rentType: 'N/A',
                    length: '0',
                    price: '0',
                    outTime: 'N/A',
                    returnTime: 'N/A',
                    name: 'Homer',
                    nationality: 'Chinese',
                    passport: '1234567890',
                    telephone: '09270737992',
                    email: '1768surf@hotmail.com'
                }],
                total: 1000,
                totalPage: 50,
                currentPage: 10,
                pageSize: 20,
                pagerCount: 19
            }
        },
        methods: {
            watchCheckedState(data){
                console.log(data)
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        watch: {
            allCheckedState: function(val, oldVal){
                console.log(val)
            }
        }
    }
</script>

<style scoped lang="less">

</style>
