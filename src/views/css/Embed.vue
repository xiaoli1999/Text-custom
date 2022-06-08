<template>
    <div class="text">
        <header>文字内嵌效果</header>
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
            <p slot="title">文字内嵌参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="100">
                <FormItem v-for="(item, index) in shadowList" :key="index" :label="'文字阴影' + (index + 1)">
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
                <p>1.文字内嵌效果实质还是文字阴影，背景颜色应浅于字体颜色。 </p>
                <p>2.内置5组效果，未使用请关闭它。 </p>
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
    name: 'ThreeD',
    mixins: [parameter],
    data () {
        return {
            shadowList: [
                { x: -1, y: -0, size: 1, color: '#111', use: true },
                { x: 2, y: 2, size: 1, color: '#363636', use: true },
                { x: 0, y: 0, size: 0, color: '#000', use: false },
                { x: 0, y: 0, size: 0, color: '#000', use: false },
                { x: 0, y: 0, size: 0, color: '#000', use: false }
            ]
        }
    },
    created () {
        this.$store.commit('setState', ['Basic', { ...this.Basic, color: '#000', background: '#2d2d2d' }])
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            obj.textShadow = this.shadowList.filter(i => i.use).map(i => (`${i.x}px ${i.y}px ${i.size}px ${i.color}`)).join(', ')
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
