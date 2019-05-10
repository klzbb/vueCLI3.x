<template>
    <div class="home">
        首页模块
        <button @click="goLogin()">去登陆页面</button>
    </div>
</template>
<script>

export default {
    name:'home',
    beforeRouteEnter (to, from, next) {
      console.log(0)  
      next()
    },
    beforeCreate(){
        console.log(1)
    },
    created(){
        console.log(2)
    },
    methods:{
        goLogin(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
$red:red;
.home{
    height:300px;
    background-color:$red;
}
</style>

