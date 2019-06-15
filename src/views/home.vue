<template>
    <el-container style="height: 1000px; border: 1px solid #eee">
        <div class="left-silder">
            <my-slider></my-slider>
        </div>
        <div class="right-main">
            <my-header></my-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </div>
    </el-container>
</template>


<style>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
import myHeader from "@/components/layout/header.vue";
import mySlider from "@/components/layout/slider.vue";

export default {
    data() {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
        };
        return {
            tableData: Array(20).fill(item)
        };
    },
    components: {
        myHeader,
        mySlider
    }
};
</script>
<style scoped lang='less'>
.el-container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    .left-slider {
        width: auto;
    }
    .right-main {
        flex: 1;
        position: relative;
        .el-main {
            position: relative;
            top: 40px;
            height: 100%;
            overflow-y: auto;
        }
    }
}
</style>
