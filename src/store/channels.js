import {getNewsType} from "../services/getNews";

export default{
    namespaced: true,
    state:{
        datas:[],
        isLoading: true
    },
    mutations: {
        setData(state, payload){
            state.datas = payload
        },
        setLoading(state, payload){
            state.isLoading = payload
        }
    },
    actions: {
        async fetchDatas(context){
            context.commit("setLoading", true);
            await getNewsType().then((resp)=>{
                context.commit("setData", resp)
            })
            context.commit("setLoading", false);
        }
    }
}