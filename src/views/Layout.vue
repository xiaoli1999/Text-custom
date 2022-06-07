<template>
    <div class="layout-content">
        <router-view class="content"></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {}
    }
}
</script>
<style scoped lang="less">

@import "../less/allin.less";

.layout-content {
    width: 100%;
    height: 100vh;
    background: url("../assets/img/quiet.jpg") center no-repeat;
    background-size: 100vw 100vh;
    position: relative;

    > div {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
}

@media only screen and (max-width: 576px) {
    .layout-content {
        background-size: auto 100vh;
    }
}
</style>
