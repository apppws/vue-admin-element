<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
    </el-container>
</template>
<style lang="less" scoped>
.el-header{
    background-color: #b3b0d1;
    color: #333;
    position: fixed;
    width: 90%;
    line-height: 60px;
    z-index: 99999;

}
</style>
