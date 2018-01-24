<template>
    <div class="BlumListTemplate">
        <ul class="sl-blum-list">
            <li v-for="item in dataList" :key="item.id" @click="goDetail(item.id)">
                <div class="sl-blum-img"><img :src="item.picUrl" alt=""></div>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<style>
    .sl-blum-list{display:flex;flex-wrap:wrap;justify-content:space-around;padding:0 2%;}
    .sl-blum-list>li{width:46%;margin-top:1rem;}
    .sl-blum-img>img{width:100%;}
</style>


<script src="./blumList.js"></script>
