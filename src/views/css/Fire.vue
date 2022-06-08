<template>
    <div class="text">
        <header>火焰文字效果</header>
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
            <p slot="title">火焰文字参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="80">
                <FormItem v-for="(item, index) in fireList" :key="index" :label="'火焰阴影' + (index + 1)">
                    <Tag color="magenta">水平距离</Tag>
                    <InputNumber v-model="item.x" size="small" :step="1"></InputNumber>
                    <Tag color="magenta">水平距离</Tag>
                    <InputNumber v-model="item.y" size="small" :step="1"></InputNumber>
                    <Tag color="magenta">阴影大小</Tag>
                    <InputNumber v-model="item.size" size="small" :step="1"></InputNumber>
                    <Tag color="magenta">阴影颜色</Tag>
                    <ColorPicker v-model="item.color" size="small" alpha />
                    <Tag color="blue">启用</Tag>
                    <i-switch v-model="item.use" />
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.火焰文字本质还是由文字阴影实现的。 </p>
                <p>2.火焰文字对字体颜色、阴影颜色要求更高 </p>
                <p>2.内置10组火焰阴影（PS：调的眼睛疼，还是UI来吧） </p>
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
            fireList: [
                { x: 0, y: 0, size: 10, color: '#fefcc9', use: true },
                { x: 5, y: -5, size: 15, color: '#ffae34', use: true },
                { x: -10, y: -20, size: 20, color: '#ffae34', use: true },
                { x: 10, y: -20, size: 25, color: '#ec760c', use: true },
                { x: 0, y: -40, size: 35, color: '#f38e1c', use: true },
                { x: 0, y: 0, size: 0, color: '#f38e1c', use: false },
                { x: 0, y: 0, size: 0, color: '#f38e1c', use: false },
                { x: 0, y: 0, size: 0, color: '#f38e1c', use: false },
                { x: 0, y: 0, size: 0, color: '#f38e1c', use: false },
                { x: 0, y: 0, size: 0, color: '#f38e1c', use: false }
            ]
        }
    },
    created () {
        this.$store.commit('setState', ['Basic', { ...this.Basic, background: '#222' }])
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            obj.textShadow = this.fireList.filter(i => i.use).map(i => (`${i.x}px ${i.y}px ${i.size}px ${i.color}`)).join(', ')
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
        /deep/ .ivu-tag {
            margin-inline: 6px;
        }

    }
}
</style>
