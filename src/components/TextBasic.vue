<template>
    <Card class="basic-card">
        <p slot="title">字体基础参数</p>
        <p slot="extra"><Icon class="card-copy" type="ios-copy-outline" size="20" color="#2d8cf0" /></p>
        <Form :model="Basic" label-position="left" :label-width="60">
            <FormItem label="颜色">
                <ColorPicker v-model="Basic.color" alpha />
            </FormItem>
            <FormItem label="背景">
                <ColorPicker v-model="Basic.background" alpha />
            </FormItem>
            <FormItem label="大小">
                <InputNumber v-model="Basic.fontSize" :step="2"></InputNumber>
            </FormItem>
            <FormItem label="间距">
                <InputNumber v-model="Basic.letterSpacing" :step="1" :max="10" :min="0"></InputNumber>
            </FormItem>
            <FormItem label="字体">
                <Select v-model="Basic.fontFamily">
                    <Option v-for="item in fontFamilyList" :value="item" :key="item">{{ item }}</Option>
                </Select>
            </FormItem>
            <FormItem label="粗细">
                <Select v-model="Basic.fontWeight">
                    <Option v-for="item in fontWeightList" :value="item" :key="item">{{ item }}</Option>
                </Select>
            </FormItem>
            <FormItem label="文本">
                <Input v-model="Text" type="textarea" :autosize="{ minRows: 2,maxRows: 5 }" placeholder="Enter something..."></Input>
            </FormItem>
        </Form>
    </Card>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'TextBasic',
    data () {
        return {
            fontFamilyList: ['楷体', '新宋体', '黑体', 'Arial', 'Corbel', 'Bahnschrift', 'Consolas'],
            fontWeightList: ['500', '600', '700', '800', '900']
        }
    },
    computed: {
        ...mapState(['Basic', 'Text'])
    }
}
</script>

<style lang="less" scoped>
.basic-card {
    margin: 0 8px;
}
</style>
