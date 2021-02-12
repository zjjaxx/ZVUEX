let Vue
class Store{
    constructor(options){
        this.$options=options
        for(let key in options){
            Object.defineProperty(this,key,{
                get:function(){
                    return this.$options[key]
                }
            })
        }
        Vue.observable(this.$options.state)
    }
    commit(eventName,...payload){
        this.$options.mutations[eventName].call(this.$options,this.$options.state,...payload)
    }
    dispatch(eventName,payload){
        this.$options.actions[eventName].call(this.$options,{commit:this.commit.bind(this)},payload)
    }
}

let install=function(_Vue){
    Vue=_Vue
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype.$store=this.$options.store
            }
        }
    })
}
export default {
    Store,
    install
}