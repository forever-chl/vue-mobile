<template>
    <div class="LoginTemplate">
        <div class="lt-login-box">
            <div class="lt-top-logo">
                <i class="icon iconfont">&#xe62f;</i>
                <p>waitting for you</p>
            </div>
            <div class="lt-input-box">
                <input class="lti-mobile" type="text" v-model="userName" placeholder="Username"> 
            </div>
            <div class="lt-input-box">
                <input class="lti-pwd" type="password" v-model="pwd" placeholder="Password">
            </div>
            <span class="lt-login-btn" @click="mobileLogin">登录</span>
        </div>
    </div>
</template>
<style>
    .LoginTemplate{position:fixed;z-index:0;top:0;left:0;width:100%;height:100%;}
    .LoginTemplate::before{content:'';position:absolute;width:120%;height:120%;top:-10%;left:-10%; z-index:-2; filter:blur(10px);background:url('../../assets/img/login-bg.jpeg') no-repeat;background-size:100% 100%;}
    .lt-login-box{position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);z-index:1;width:70%;}

    .lt-top-logo>i{font-size:3rem;color:aquamarine;}
    .lt-top-logo>p{font-size:1rem;line-height:1rem;color:#fff;margin-bottom:3rem;}

    .lt-input-box{width:100%;}
    .lt-input-box>input{background-color:rgba(0,0,0,0);color:#fff;width:100%; height:2rem;line-height:2rem;box-sizing:border-box;padding:0.2rem;border-bottom:solid 1px #ccc;border-radius:none;padding-left:1.4rem;}
    .lt-input-box>input::-webkit-input-placeholder{color:#ccc;}
    .lti-mobile{background:rgba(0,0,0,0) url('../../assets/img/mobile.png')no-repeat left center;background-size:1rem auto;}
    .lti-pwd{background:rgba(0,0,0,0) url('../../assets/img/pwd.png')no-repeat left center;background-size:1rem auto;}

    .lt-login-btn{display:block;margin-top:2rem;width:100%;height:2rem;text-align:center;color:#fff;line-height:2.5rem;background:linear-gradient(to right,rgb(117, 240, 230),rgb(105, 230, 171));}
</style>

<script src="./login.js"></script>