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
                <template slot-scope="scope">
                    <div v-for="(item2, index) in scope.row" :key="index">
                        <div v-if="textOrcheck[index]">{{item2}}</div>
                        <el-checkbox-button v-else v-model="scope.row[item2]">
                            <i v-if="item2" class="el-icon-check"></i>
                            <i v-else class="el-icon-close"></i>
                        </el-checkbox-button>
                    </div>
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
                <div v-for="(item, index) in columDatas" :key="item.label">
                    <el-input
                        v-if="textOrcheck[index]"
                        v-model="formInlines[item.prop]"
                        v-bind:style="{width: item.width+'px'}"
                        :autofocus="isfocus[index]"
                    ></el-input>
                    <el-checkbox-button v-else v-model="scope.row[item2]">
                        <i v-if="item2" class="el-icon-check"></i>
                        <i v-else class="el-icon-close"></i>
                    </el-checkbox-button>
                </div>
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
                <el-button
                    type="primary"
                    plain style="float:right;width:150px;"
                    @click="submit"
                >
                    保存设置
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import customTable from '@/components/common/customTable'

    export default {
        name: 'group',
        components: {
            customTable
        },
        data() {
            return {
                tableDatas: [{
                    name: 'Admin',
                    board: true,
                    depot: true,
                    work: true,
                    group: true,
                    data: true
                }, {
                    name: 'Leader',
                    board: true,
                    depot: true,
                    work: true,
                    group: false,
                    data: false
                }, {
                    name: 'Worker',
                    board: true,
                    depot: false,
                    work: false,
                    group: false,
                    data: false
                }],
                columDatas: [{
                    prop: 'name',
                    label: 'Name',
                    width: '180'
                }, {
                    prop: 'board',
                    label: '浪板管理',
                    width: '60'
                }, {
                    prop: 'depot',
                    label: '仓库管理',
                    width: '60'
                }, {
                    prop: 'work',
                    label: '员工管理',
                    width: '60'
                }, {
                    prop: 'group',
                    label: '权限管理',
                    width: '60'
                }, {
                    prop: 'data',
                    label: '数据管理',
                    width: '60'
                }],
                forminLines: {
                    name: '',
                    board: '',
                    depot: '',
                    work: '',
                    group: '',
                    data: ''
                },
                textOrcheck: [],
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
            submit() {
                console.log(this.tableDatas)
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
            let arr = [];
            for (let key in this.tableDatas[0]){
                if (typeof(this.tableDatas[0][key]) === String){
                    arr.push(true);
                } else {
                    arr.push(false);
                }
            }
            this.textOrcheck = [...arr];
        }
    }
</script>
