import { mapState } from 'vuex'

const Mixin = {
    data () {
        return {}
    },
    computed: {
        ...mapState(['Basic', 'Text']),
        commonStyles () {
            const obj = { ...this.Basic }
            obj.fontSize = `${obj.fontSize}px`
            obj.letterSpacing = `${obj.letterSpacing}px`
            return obj
        }
    },
    methods: {
        copyStyle () {
            this.$copyText(JSON.stringify(this.styles)).then(() => this.$Message.success('复制成功')).catch(e => this.$Message.error(e.message || e))
        }
    }
}
export default Mixin
