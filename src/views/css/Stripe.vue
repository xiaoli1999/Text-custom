<template>
    <div class="text">
        <header>文字条纹效果</header>
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
            <p slot="title">文字条纹参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="80">
                <FormItem label="条纹旋转角度">
                    <Slider v-model="range" :min="0" :max="360" show-input></Slider>
                </FormItem>
                <FormItem v-for="(item, index) in gradientList" :key="index" :label="'条纹' + (index + 1)">
                    <Tag color="green">颜色</Tag>
                    <ColorPicker class="ml-4 mr-8" v-model="item[0]" size="small" alpha />
                    <Tag color="purple">渐变大小</Tag>
                    <InputNumber class="ml-4 mr-8" v-model="item[1]" size="small" :step="1" :min="0"></InputNumber>
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.条纹文字两种方式，一种是条纹背景+文字（也就是说文字背景），一种是利用渐变色制作条纹背景，再实现条纹文字；此案例为第二种。 </p>
                <p>2.建议使用背景图实现条纹文字 </p>
                <p>3.默认渐变尺寸为0，即每个渐变尺寸差值应该相等（4-0 = 8-4），差值不等时条纹不相等 </p>
                <p>4.默认两色条纹，有多色条纹需求私聊 </p>
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
            range: -45,
            gradientList: [
                ['#000', 4],
                ['#fff', 8]
            ],
            bgSize: {
                x: 20,
                y: 20
            }
        }
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            delete obj.background
            obj.backgroundImage = `repeating-linear-gradient(${this.range}deg, ${this.gradientList[0][0]} 0, ${this.gradientList[0][0]} ${this.gradientList[0][1]}px, ${this.gradientList[1][0]}, ${this.gradientList[1][0]} ${this.gradientList[1][1]}px)`
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
