<template>
    <div class="home">
        <header>
            <div class="wave">定制文字效果</div>
        </header>
        <main>
            <div v-for="(item, index) in list" :key="index" class="text" @click="$router.push(item[1])">{{ item[0] }}</div>
        </main>
        <Spin v-if="loding" size="large" fix></Spin>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data () {
        return {
            list: [
                ['文字线性渐变', '/css/gradient'],
                ['文字图片背景', '/css/background'],
                ['文字阴影效果', '/css/shade'],
                ['文字3D立体效果', '/css/3d'],
                ['文字描边效果', '/css/stroke'],
                ['文字倾斜效果', '/css/skew'],
                ['火焰文字效果', '/css/fire'],
                ['文字条纹效果', '/css/stripe'],
                ['文字内嵌效果', '/css/embed'],
                ['文字背景反色效果', '/gradient']
            ],
            loding: false
        }
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
@import "../less/scrollbar.less";

.min-h {
    min-height: 190px;
}

.home {
    width: 100%;
    font-family: 楷体;

    header {
        font-size: 68px;
        font-weight: 900;
        text-align: center;
        letter-spacing: 4px;
        margin: 0 auto;
        padding: 12px;

        .wave {
            /*设置元素背景图像*/
            background: url("../assets/img/wave2.gif") repeat-x;
            background-size: 200px 180px;
            background-position: 0 -10px;
            -webkit-background-clip: text; /*背景被裁剪到文字*/
            -webkit-text-fill-color: transparent; /*设置文字的填充颜色*/
            -webkit-text-stroke: 1px #ffffff40;        /*文字描边*/
            -webkit-animation: loading-animation 4200ms infinite linear alternate, wave-animation 4800ms infinite alternate; /*设置动画*/
        }
    }

    @-webkit-keyframes wave-animation {/*创建动画*/
        0% {
            background-position: 0 -10px;
        }
        60% {
            background-position: 30% -54px;
        }
        100% {
            background-position: 40% -80px;
        }
    }
    @-webkit-keyframes loading-animation {/*创建动画*/
        0% {
            background-position: 40% -80px;
        }
        100% {
            background-position: 0 -10px;
        }
    }

    main {
        max-width: 1200px;
        padding: 20px 40px;
        height: calc(100vh - 178px);
        margin: 40px auto 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        .text {
            width: 48%;
            padding: 4% 2%;
            font-size: 24px;
            color: #f4f4f4;
            text-align: center;
            background: #f4f4f410;
            backdrop-filter: blur(1px);
            margin-bottom: 24px;
            letter-spacing: 1px;
            border-radius: 4px;
            cursor: pointer;
            transition: all .3s;

            &:hover {
                background: #f4f4f440;
                box-shadow: 0 0 8px #00000040;
                color: #fff;
                transform: scale(1.05);
            }
        }
    }

}
</style>
