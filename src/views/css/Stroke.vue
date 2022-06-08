<template>
    <div class="text">
        <header>文字描边效果</header>
        <Row class="main">
            <Col :xs="24" :sm="16" :md="18">
                <div class="main-content">
                    <div class="main-content-panel" :style="styles">{{ Text }}</div>
                </div>
            </Col>
            <Col :xs="24" :sm="8" :md="6">
                <TextBasic :disable-arr="['color']" />
            </Col>
        </Row>
        <Card class="parameter">
            <p slot="title">文字描边参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="80">
                <FormItem label="描边大小">
                    <InputNumber v-model="stroke.size" size="small" :step="1" :min="0"></InputNumber>
                </FormItem>
                <FormItem label="描边颜色">
                    <ColorPicker v-model="stroke.color" size="small" alpha />
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.文字描边可调整的参数：大小（描边大小默认为0）、颜色。（文字描边不受文字自身颜色等影响） </p>
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
    name: 'Stroke',
    mixins: [parameter],
    data () {
        return {
            stroke: {
                size: 1,
                color: '#fbc2eb'
            }

        }
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            obj['-webkit-text-stroke'] = `${this.stroke.size}px ${this.stroke.color}`
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
                -webkit-text-stroke: 1px #fbc2eb;        /*文字描边*/
                -webkit-text-fill-color: transparent;    /*设置文字的填充颜色*/
            }
        }

        .main-card {

        }
    }

    .parameter {

    }
}
</style>
