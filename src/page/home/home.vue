<template>
    <div class="HomeTemplate">
        <div class="app-container">
            <router-view/>
        </div>
        <my-footer-bar v-bind:footerData="footbarData"></my-footer-bar>
    </div>
</template>
<style>
    .app-container{margin-bottom:2.5rem;}
</style>
<script>
    import footbar from '../../components/footbar/footbar.vue'
    export default{
        name:'HomeTemplate',
        data() {
            return {
            footbarData:[
                {"index":"1","icon":"&#xe502;","name":"首页","url":"index"},
                {"index":"2","icon":"&#xe76a;","name":"列表","url":"list"},
                {"index":"3","icon":"&#xe5f7;","name":"发现","url":"find"},
                {"index":"4","icon":"&#xe604;","name":"我的","url":"my"}]
            }
        },
        components:{
            'my-footer-bar':footbar
        }
    }
</script>
