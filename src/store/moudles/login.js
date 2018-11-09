const user = {
    state: {
        maskingWidth: 0,
        maskingHeight: 0
    },
    getters: {
        
    },
    mutations: {
        setMaskingWidth(state,data){
            state.maskingWidth = data;
        },
        setMaskingHeight (state,data){
            state.maskingHeight = data;
        }
    },
    actions: {
        
    }
}
export default user;