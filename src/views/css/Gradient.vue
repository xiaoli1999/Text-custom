<template>
    <div class="text">
        <header>文字线性渐变</header>
        <Row class="main">
            <Col :xs="24" :sm="18">
                <div class="main-content" :style="styles">{{ Text }}</div>
            </Col>
            <Col :xs="24" :sm="6">
                <TextBasic />
            </Col>
        </Row>
        <Card class="parameter">
            <p slot="title">文字渐变参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copy" /></p>
            <Form :model="basic" label-position="left" :label-width="80">
                <FormItem label="旋转角度">
                    <Slider v-model="range" :min="0" :max="360" show-input></Slider>
                </FormItem>
                <FormItem v-for="(item, index) in gradientList" :key="index" :label="'渐变色' + (index + 1)">
                    <Tag color="green">颜色</Tag>
                    <ColorPicker class="ml-4 mr-8" v-model="item[0]" size="small" alpha />
                    <Tag color="purple">百分比</Tag>
                    <InputNumber class="ml-4 mr-8" v-model="item[1]" size="small" :step="1" :min="0" :max="100"></InputNumber>
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.渐变颜色组最小为两组，渐变进度为0% ~ 100%；可设置更多组，格式同上。 </p>
            </div>
            <div class="code">
                <Divider orientation="left">样式代码</Divider>
                <p>{{ JSON.stringify(styles) }}</p>
            </div>
        </Card>
    </div>
</template>

<script>
import TextBasic from '@/components/TextBasic'
import { mapState } from 'vuex'

export default {
    name: 'Gradient',
    components: { TextBasic },
    data () {
        return {
            text: 'Want to try? Hurry up',
            basic: {
                color: 'transparent',
                background: 'transparent',
                fontSize: 40,
                letterSpacing: 0,
                fontWeight: '700',
                fontFamily: '楷体'
            },
            range: 45,
            gradientList: [
                ['#b8cbb8', 0],
                ['#b465da', 25],
                ['#cf6cc9', 55],
                ['#ee609c', 75],
                ['#ee609c', 100]
            ]
        }
    },
    computed: {
        ...mapState(['Basic', 'Text']),
        styles () {
            const obj = { ...this.Basic }
            obj.fontSize = `${obj.fontSize}px`
            obj.letterSpacing = `${obj.letterSpacing}px`
            const color = this.gradientList.map(i => `${i[0]} ${i[1]}%`).join(', ')
            obj.backgroundImage = `linear-gradient(${this.range}deg, ${color}) !important`
            return obj
        }
    },
    methods: {
        copy (e) {
            // this.$copyText(JSON.stringify(this.styles)).then(res => alert('复制成功'))
        }
    }
}
</script>

<style lang="less" scoped>
.text {
    max-width: 1080px;
    margin: 0 auto;
    background: #00000010;
    padding-bottom: 8px;
    backdrop-filter: blur(2px);
    color: #6adefb;

    header {
        height: 80px;
        line-height: 80px;
        stroke: azure;
        text-align: center;
        font-size: 28px;
        font-family: 楷体;
        letter-spacing: 1px;
    }

    .main {
        max-width: 1080px;

        .main-content {
            width: calc(100% - 8px);
            height: 392px;
            border: 1px solid #ccc;
            margin-left: 8px;
            border-radius: 2px;
            text-align: center;
            line-height: 392px;
            overflow: hidden;
            -webkit-background-clip: text !important; /* 背景被裁剪到文字 */
            -webkit-text-fill-color: transparent; /* 设置文字的填充颜色 */
        }

        .main-card {
            margin: 0 8px;
        }
    }

    .parameter {
        margin: 8px;

        .card-copy {
            position: relative;
            top: -4px;
            font-size: 20px;
            cursor: pointer;
        }

        .notes {
            color: #515a6e;
        }

        .code {
            font-size: 14px;

            color: #515a6e;
            word-break: break-all;

            >p {
                padding: 8px;
                background: #eee;
                border-radius: 2px;
            }
        }
    }
}
</style>
