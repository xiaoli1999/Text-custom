<template>
    <div class="text">
        <header>文字图片背景</header>
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
            <p slot="title">背景图参数</p>
            <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" @click="copyStyle" /></p>
            <Form label-position="left" :label-width="80">
                <FormItem label="背景图片">
                    <div class="parameter-list">
                        <img v-for="(item, index) in imgList" :class="img === item[1] ? 'active' : ''" :key="index" :src="item[1]" @click="img = item[1]" alt="">
                    </div>
                </FormItem>
            </Form>
            <div class="notes">
                <Divider orientation="left">注解</Divider>
                <p>1.文字背景图只需要更换背景图，其次更改字体基本参数。 </p>
                <p>2.文字背景受渐变背景图影响，与字体本身颜色无关 </p>
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
    name: 'Background',
    mixins: [parameter],
    data () {
        return {
            imgList: [
                ['quiet', require('../../assets/img/quiet.jpg')],
                ['rise', require('../../assets/img/rise.jpg')]
            ],
            img: require('../../assets/img/quiet.jpg')
        }
    },
    computed: {
        styles () {
            const obj = { ...this.commonStyles }
            obj.backgroundImage = `url(${this.img}) !important`
            obj.backgroundSize = '100% 100% !important'
            return obj
        }
    }
}
</script>

<style lang="less" scoped>
.text {

    .main {

        .main-content {
            background: #fff;

            .main-content-panel {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                -webkit-background-clip: text !important; /* 背景被裁剪到文字 */
                -webkit-text-fill-color: transparent; /* 设置文字的填充颜色 */
            }
        }

        .main-card {

        }
    }

    .parameter {
        .parameter-list {
            display: flex;

            > img {
                display: block;
                width: 120px;
                padding: 4px;
                border: 1px solid #dedede;
                margin: 0 8px 8px 0;
                object-fit: contain;
                cursor: pointer;
                border-radius: 2px;
                overflow: hidden;

                &.active,
                &:hover {
                    border: 1px solid #2d8cf0;
                    box-shadow: 0 0 8px 1px #00000010;
                }
            }
        }

    }
}
</style>
