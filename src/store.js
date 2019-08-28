import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        arr: []
    },
    mutations: {
        addGoods(state, info) {
            let isOwn = state.arr.some(function (item) {
                if (item.goods_id == info.goods_id) {
                    item.num++;
                    return true;
                } else {
                    return false;
                }
            });

            if (!isOwn) {
                state.arr.push({
                    goods_id: info.goods_id,
                    title_long: info.title_long,
                    pic_url: info.pic_url,
                    cprice: info.cprice,
                    num: 1
                })
            }
        },
        addNum(state, index) {
            state.arr[index].num++;
        },
        reduceNum(state, index) {
            if (state.arr[index].num == 0) {
                state.arr.splice(index, 1);
            } else {
                state.arr[index].num--;
            }
        },
        deleteGoods(state, index) {
            state.arr.splice(index, 1);
        }
    },
    getters: {
        totalMoney(state) {
            let money = 0;   // 计算总价
            for (let i = 0; i < state.arr.length; i++) {
                money += state.arr[i].cprice * state.arr[i].num
            }
            return money.toFixed(2)
        }
    },
    actions: {
        addGoods({ commit }, params) {     //params对应mutation对象中参数info
            commit('addGoods', params);
        },
        addNum({ commit }, params) {
            commit('addNum', params);
        },
        reduceNum({ commit }, params) {
            commit('reduceNum', params);
        },
        deleteGoods({ commit }, params) {
            commit('deleteGoods', params);
        }
    }
})
