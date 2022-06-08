import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * @param {String} Text 文本内容
         * */
        Text: 'Want to try? Hurry up!',
        /**
         * @param {Object} basic 字体基本配置
         * */
        Basic: {
            color: '#000',
            background: '#fff',
            fontSize: 48,
            letterSpacing: 0,
            fontWeight: '900',
            fontFamily: '楷体'
        }
    },
    mutations: {
        /**
         * @Function setState
         * @param {Object} state 当前vuex的state
         * @param {Array} payload [obj, key, value] 三个参数时[模块名， 被修改值名， 修改值]，两个参数时修改主vuex[被修改值名， 修改值]
         * */
        setState (state, payload) {
            const [obj, key, value] = payload
            if (payload.length === 3) {
                if (state[obj]) {
                    state[obj][key] = value
                }
            } else {
                state[obj] = key
            }
        }
    }
})

export default store
