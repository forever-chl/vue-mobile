<template>
    <div class="SongListTemplate">
        <sl-head :title="dataList.playlist?dataList.playlist.name:''"></sl-head>
        <div class="sl-top" v-if="dataList.playlist">
            <div class="slt-img"><img :src="dataList.playlist.coverImgUrl"></div>
            <div class="slt-text">
                <h1>{{dataList.playlist.name}}</h1>
                <p><img :src="dataList.playlist.creator.avatarUrl" alt=""><span>{{dataList.playlist.creator.nickname}}</span></p>
            </div>
        </div>
        <ol class="sl-all" v-if="dataList.playlist">
            <li v-for="item in dataList.playlist.tracks" :key="item.id" @click="goListen(item.id)">
                <span>{{item.name}}</span>
                <p>{{item.ar[0].name}}-{{item.al.name}}</p>
            </li>
        </ol>
    </div>
</template>
<style>
    .SongListTemplate{background-color:#fff;}
    .sl-top{height:6rem;display:flex;padding:1rem;box-sizing:content-box;border-bottom:solid 1px #e1e1e1;}
    .slt-img>img{width:6rem;height:6rem;}
    .slt-text{padding-left:1rem;display:flex;flex-direction:column;justify-content:space-between;text-align:left;}
    .slt-text>h1{font-size:1rem;}
    .slt-text>p>img{width:1rem;vertical-align:middle;margin-right:0.5rem;border-radius:50%;}
    .slt-text>p>span{vertical-align:middle;}

    .sl-all{counter-reset:decimal;list-style-type:none;}
    .sl-all>li::before{counter-increment:decimal;content:counters(decimal,'.') ' ';}
    .sl-all>li{padding:1rem 0;margin:0 1rem;text-align:left;border-bottom:solid 1px #e1e1e1;}
</style>

<script src="./songList.js"></script>
