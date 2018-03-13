<template>
  <ul class="service-case">
        <li v-for="(item,index) in casetypeList" :key="item.caseId">
            <label>{{item.caseName}}：</label>
            <span v-for="info in item.typeList" :id="index+'-'+info.id" :key="info.id">{{info.name}}</span>
        </li>
  </ul>
</template>

<style>
    .service-case{padding:1rem 1rem 0 1rem;}
    .service-case>li{margin-bottom:20px;font-size:12px;list-style:none;}
    .service-case>li>span{border:solid 1px #999;color:#999;border-radius:2px;padding:3px 10px;margin-right:8px;cursor:pointer;}
    .service-case>li>span.active{border:solid 1px #01BAFE;color:#01BAFE;}
    .service-case>li>span.disabled{border:solid 1px #e5e5e5;color:#e5e5e5;}
</style>
<script src="./taobao.js"></script>