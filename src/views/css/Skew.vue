<template>
    <div class="text">
        <header>文字倾斜效果</header>
        <Row class="main">
            <Col :xs="24" :sm="16" :md="18">
                <div class="main-content">
                    <div class="main-content-panel" :style="styles">{{ Text }}</div>
                </div>
            </Col>
            <Col :xs="24" :sm="8" :md="6">
                <TextBasic :disable-arr="['bg']" />
            </Col>
        </Row>
        <Card class="parameter">
            <p slot="title">文字倾斜参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="100">
                <FormItem label="x轴倾斜角度">
                    <Slider v-model="skew.x" :min="0" :max="360" show-input></Slider>
                </FormItem>
                <FormItem label="y轴倾斜角度">
                    <Slider v-model="skew.y" :min="0" :max="360" show-input></Slider>
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.文字倾斜本身并非文字倾斜，而是文字容器倾斜。 </p>
                <p>1.skew倾斜第一个参数为x轴方向上的倾斜， 第二个参数y轴方向上的倾斜</p>
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
            skew: {
                x: 8,
                y: 12
            }
        }
    },
    created () {
        this.$store.commit('setState', ['Basic', { ...this.Basic, background: 'transparent' }])
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            obj.transform = `skew(${this.skew.x}deg, ${this.skew.y}deg)`
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

            }
        }

        .main-card {

        }
    }

    .parameter {

    }
}
</style>
