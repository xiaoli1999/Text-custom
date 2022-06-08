<template>
    <div class="text">
        <header>文字阴影效果</header>
        <Row class="main">
            <Col :xs="24" :sm="16" :md="18">
                <div class="main-content">
                    <div class="main-content-panel" :style="styles">{{ Text }}</div>
                </div>
            </Col>
            <Col :xs="24" :sm="8" :md="6">
                <TextBasic />
            </Col>
        </Row>
        <Card class="parameter">
            <p slot="title">文字阴影参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="120">
                <FormItem label="水平阴影位置">
                    <InputNumber v-model="shadow.x" size="small" :step="1"></InputNumber>
                </FormItem>
                <FormItem label="垂直阴影位置">
                    <InputNumber v-model="shadow.y" size="small" :step="1"></InputNumber>
                </FormItem>
                <FormItem label="阴影大小">
                    <InputNumber v-model="shadow.size" size="small" :step="1"></InputNumber>
                </FormItem>
                <FormItem label="阴影颜色">
                    <ColorPicker v-model="shadow.color" size="small" alpha />
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.文字阴影水平、垂直默认为0，即阴影文字中心扩散； </p>
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
    name: 'Shadow',
    mixins: [parameter],
    data () {
        return {
            shadow: {
                x: 2,
                y: 2,
                size: 12,
                color: '#00000080'
            }
        }
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            obj.textShadow = `${this.shadow.x}px ${this.shadow.y}px ${this.shadow.size}px ${this.shadow.color}`
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
