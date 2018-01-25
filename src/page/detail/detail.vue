<template>
  <div class="DetailTemplate">
      <sl-head :title="dataList.playlist?dataList.playlist.name:''">
        <action-sheet :btns="songList" btns-val="id" btns-text="name">
            <span class="ht-songList"></span>
        </action-sheet>
      </sl-head>
      <song-list :dataList="dataList"></song-list>
  </div>
</template>

<style>
  .ht-songList{width:100%;height:100%;display:block;background:url('../../assets/img/list.png') no-repeat center center;background-size:1rem auto;}
</style>

<script src="./detail.js"></script>
