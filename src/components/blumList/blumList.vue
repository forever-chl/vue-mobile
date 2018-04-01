<template>
    <ul class="sl-blum-list">
        <li v-for="item in dataList" :key="item.id" @click="goDetail(item.id)">
            <div class="sl-blum-img">
                <img :src="item.picUrl" alt="">
                <p>{{item.name}}</p>
            </div>
        </li>
    </ul>
</template>

<style>
    .sl-blum-list{display:flex;flex-wrap:wrap;justify-content:space-around;padding:0 2%;}
    .sl-blum-list>li{padding:0.2rem;}
    .sl-blum-img{width:100%;position:relative;}
    .sl-blum-img>img{width:150px;display:block;}
    .sl-blum-img>p{position:absolute;height:1rem;width:100%;bottom:0;left:0;background-color:rgba(0,0,0,0.5);color:#fff;font-size:0.6rem;overflow:hidden;text-overflow: ellipsis;}
    
</style>


<script src="./blumList.js"></script>
