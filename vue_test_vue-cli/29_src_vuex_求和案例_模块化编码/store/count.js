
export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            console.log("actions中的jiaOdd被调用了", context, value);
            if (context.state.sum % 2) {
                context.commit("JIA", value);
            }
        },
        jiaWait(context, value) {
            console.log("actions中的jiaWait被调用了", context, value);
            setTimeout(() => {
                context.commit("JIA", value);
            }, 300);
        },
    },
    mutations: {
        JIA(state, value) {
            console.log("mutations中的JIA被调用了", state, value);
            state.sum += value;
        },
        JIAN(state, value) {
            console.log("mutations中的JIAN被调用了", state, value);
            state.sum -= value;
        }
    },
    state: {
        sum: 0,
        school: "尚硅谷",
        subject: "前端",

    },

    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}
