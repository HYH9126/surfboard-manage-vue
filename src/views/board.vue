<template>
    <div>
        <el-table :data="tableData" size="mini" border stripe style="width:901px;">
            <el-table-column
                v-for="item in columData" 
                :key="item.prop" 
                :prop="item.prop" 
                :label="item.label" 
                :width="item.width"
            >
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="add">
            <el-form v-show="addShow" :inline="true" :model="formInline" class="demo-form-inline" style="width:900px;">
                <el-input v-for="item in columData" :key="item.label" v-model="formInline[item.prop]" v-bind:style="{width: item.width+'px'}"></el-input>
                <el-form-item style="width:100px;margin:0;padding:0px 20px;">
                    <el-button type="success" @click="onSubmit" icon="el-icon-check" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="changeAddshow"></el-button>
                </el-form-item>
            </el-form>
            <div class="addButton" v-show="!addShow">
                <el-button type="primary" plain style="float:right;width:150px;" @click="changeAddshow">添加浪板</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
                formInline: {
                    id: '',
                    productionDate: '',
                    depot: '',
                    series: '',
                    type: '',
                    size: '',
                    num: ''
                },
                addShow: false
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            onSubmit() {
                this.addShow = !this.addShow;
                let obj = {...this.formInline};
                this.tableData.push(formInline);
                this.formInline = {...obj};
                console.log('submit!');
            },
            changeAddshow() {
                this.addShow = !this.addShow
            }
        }
    }
</script>

<style lang="less" scoped>
    .add{
        width: 901px;
    }
    .addButton{
        width: 100%;
    }
</style>

