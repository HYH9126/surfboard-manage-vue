<template>
    <div style="position:relative" v-bind:style="{width: width+'px'}">
        <div class="bg" v-show="bgShow"></div>
        <el-table :data="tableDatas" size="mini" border stripe>
            <el-table-column
                v-for="item in columDatas" 
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
        <div class="inputColumn" v-bind:style="{top: inputcolumnPosition+'px', width: width+'px'}">
            <el-form
                v-show="inputcolumShow" 
                :inline="true" 
                :model="formInlines" 
                class="demo-form-inline" 
            >
                <el-input
                    v-for="(item, index) in columDatas"
                    :key="item.label"
                    v-model="formInlines[item.prop]"
                    v-bind:style="{width: item.width+'px'}"
                    :autofocus="isfocus[index]"
                ></el-input>
                <el-form-item style="width:100px;margin:0;padding:0px 20px;background-color:#fff;">
                    <el-button
                        type="success"
                        @click="onSubmit"
                        icon="el-icon-check"
                        circle
                    ></el-button>
                    <el-button
                        type="danger"
                        icon="el-icon-delete"
                        circle
                        @click="unSubmit"
                    ></el-button>
                </el-form-item>
            </el-form>
            <div class="addButton" v-show="!inputcolumShow">
                <el-button
                    type="primary"
                    plain style="float:right;width:150px;"
                    @click="handleAdd"
                >
                    添加浪板
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'custom-table',
        props: ['tabledata-prop', 'columdata-prop', 'forminline-prop'],
        data() {
            return {
                tableDatas: this.tabledataProp,
                columDatas: this.columdataProp,
                formInlines: this.forminlineProp,
                width: 1000,
                isfocus: [true],
                inputcolumShow: false,
                bgShow: false,
                inputcolumnPosition: 0,
                rowIndex: 0
            }
        },
        methods: {
            // 编辑
            handleEdit(index, row) {
                this.rowIndex = index;
                this.changeinputcolumshow();
                this.setInputcolumnPosition(index);
                this.formInlines = row;
            },
            // 删除
            handleDelete(index, row) {
                this.tableDatas.splice(index, 1);
                this.setInputcolumnPosition(this.tableDatas.length);
            },
            // 确定
            onSubmit() {
                this.changeinputcolumshow();
                this.resetInputcolumnPosition()
                let obj = {...this.formInlines};
                console.log(obj);
                if (this.rowIndex === this.tableDatas.length){
                    this.tableDatas.push(obj);
                    this.setInputcolumnPosition(this.tableDatas.length)
                } else {
                    this.tableDatas.splice(this.rowIndex, 1, obj);
                }
            },
            // 取消
            unSubmit() {
                this.changeinputcolumshow();
                this.resetInputcolumnPosition()
            },
            // 添加
            handleAdd() {
                this.rowIndex = this.tableDatas.length;
                this.changeinputcolumshow();
                let obj = {...this.tableDatas[this.tableDatas.length-1]};
                this.formInlines = obj;
            },
            // 显示/隐藏输入栏
            changeinputcolumshow() {
                this.inputcolumShow = !this.inputcolumShow;
                this.bgShow = !this.bgShow;
            },
            // 设置输入栏top
            setInputcolumnPosition(n) {
                let top = 36+n*41
                this.inputcolumnPosition = top;
            },
            // 重置输入栏top为默认
            resetInputcolumnPosition() {
                this.inputcolumnPosition = 36+this.tableDatas.length*41;
            }
        },
        beforeMount: function() {
            this.width = this.columDatas.reduce((total, ele) => {
                return total+Number(ele.width)
            }, 151)
            this.rowIndex = this.tableDatas.length;
            this.inputcolumnPosition = 36+this.tableDatas.length*41;
        }
    }
</script>

<style lang="less" scoped>
    .bg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.1;
        z-index: 1000;
    }
    .inputColumn{
        position: absolute;
        z-index: 10000;
    }
    .addButton{
        width: 100%;
    }
</style>