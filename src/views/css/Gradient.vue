<template>
    <div class="text">
        <header>文字线性渐变</header>
        <Row class="main">
            <Col :xs="24" :sm="16" :md="18">
                <div class="main-content">
                    <div class="main-content-panel" :style="styles">{{ Text }}</div>
                </div>
            </Col>
            <Col :xs="24" :sm="8" :md="6">
                <TextBasic :disableArr="['bg', 'color']" />
            </Col>
        </Row>
        <Card class="parameter">
            <p slot="title">文字渐变参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="80">
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
                <p>2.渐变文字颜色受渐变背景色影响，与字体本身颜色无关 </p>
            </div>
            <div class="code">
                <Divider orientation="left">样式代码</Divider>
                <p>{{ JSON.stringify(styles) }}</p>
            </div>
        </Card>
    </div>
</template>

<script>

import parameter from '@/views/mixins/parameter'

export default {
    name: 'Gradient',
    mixins: [parameter],
    data () {
        return {
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
        styles () {
            const obj = { ...this.commonStyles }
            const color = this.gradientList.map(i => `${i[0]} ${i[1]}%`).join(', ')
            obj.backgroundImage = `linear-gradient(${this.range}deg, ${color}) !important`
            return obj
        }
    }
}
</script>

<style lang="less" scoped>
.text {

    .main {
        .main-content {
            .main-content-panel {
                -webkit-background-clip: text !important; /* 背景被裁剪到文字 */
                -webkit-text-fill-color: transparent; /* 设置文字的填充颜色 */
            }
        }

        .main-card {

        }
    }

    .parameter {

    }
}
</style>
