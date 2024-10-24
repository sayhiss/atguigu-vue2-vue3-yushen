export const hunhe = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
}

export const hunhe2 = {
    data() {
        return {
            x:1,
            y:2
        }
    },
    mounted() {
        console.log('混合了，哈哈哈！');
    },
}