<template>
<div class="tantanTemplate">
    <div class="tantan-list">
        <div class="tantan-list-box">第一个</div>
        <div class="tantan-list-box hide">第二个</div>
        <div class="tantan-list-box hide">第三个</div>
        <div class="tantan-list-box hide">第四个</div>
    </div>
    <div class="tantan-point">
        <ul>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
</template>

<style>
html{background-color:#00bda4;overflow-x:hidden;}
body{background-color:#00bda4;overflow-x:hidden;}
.hide{display:none;}
.tantan-list{position:relative;width:80%;height:25rem;margin:auto;margin-top:1rem;}
.tantan-list-box{height:100%;box-shadow:0 0 10px 1px #00bda4; background:none;background-color:#fff;border-radius:0.8rem;position:relative;transition:transform 0.1s;}
.tantan-list-box::after{content:'';position:absolute;width:100%;height:2rem;bottom:-2rem;left:0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApAAAABPCAMAAABrnAWxAAAAh1BMVEX///8AmoUAAAAAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUBmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoUAmoWt39ii596i596d5Ntnw7aj596g5t2M3NEzr56a49mY4tic5NqV4NYhp5Wj5953zO/nAAAALHRSTlMaAwBJB0dICg0UEBo5Qhc1HyIqLTIdPCdFLyQ+QCgeyupMJviTNCI7KJ5vHvm4ET0AAAWsSURBVHja7dyJetJAFMXxpkYpBFkSFsNSFot14f2fz4wz4zE9oTe2CPp5/rzC77t3JhBubn27o1LXbecgRpDJ5qjUNdskAFl1OCp1zQ63AOl6OCp1vR5u6yCTVEtbXa9N+hRk8nl7VOo6bT/f1kEmVY8fj0pdo4+PCYGs2kmkukYfd8kTkIlvp62tLt/2MalqApl+1s1GXbrN5+QkyPROT3/UZXvoJAQyenQ9akiqy7V5TNPERyDT1JHsdHYiqS7TZpe6ToJMf4Ds3B0edLtRf7rtw6GTGiC9x6re4euXzXar50Dq/H3cbjdfvh7u7ipsDJIHpPPY63a7g0GW3d8odcbus2wwqHD1encBJEQSSPaYTSVSndPjNCORNsjeT5DT0bcbpc7Wt9H0J8jeSZA0IOFxNP50o9SZ+jQeeZE0Ig2Q8DheSKQ6l8fFGCJbgcSABMi5RKrzeJwDJEbkSZD1jQ2P63ytm416dfcVJIgEyA6BxJ2GN/ZiPs/zotjfKPWq9kWR5/P5gnc2bjXNILGx/YB0IMtcQ1K9ovu8rECGEYmd/QzItA6yPiDLyWQokurlHIeTSVkfkXWQaTuQYUCWDuRwONnLpPp9jfsfeCZl6UekCZIv2fWNXRTeY7/fnw3zvVSq1hbv9/lwVsHxIouivrP5mm2DjBvbe5zNlsvV6n3VB99bpZ4UaDglq9VyOZt5kWFnnwNkWcYBGT3KorJVRpFxRJZlS5C3rUCGAek8Msd36r+PSDqRfkS2BHnbFuQkgMSAlENlycSIDCAnbUDyNzU2yMo+OL5R6pdAsmJigsRzSANkl1Y2gxRHdYokgeSV3RVI1dS/BHKE55DxUhPPkBKpnvOIM2S81OA55KgNSL7VEEgdItULj5AMku80Nkje2bhm656tOGj0Hk9v7NYg+RDJI1JPIlXLp5A8IPkIySCbD5HY2bURGUXqi0OFWCM81gYkNvaJIyRA2j+vgMjwdba+z1ZMEV9kw6P50woGaf8iEiIjSYdSqRAwRo7waP4akkHWdzZGJJa2FwmSq/dKNbYCR+8RCxsDEiCN//Zpes2rgEhPMphcCaZCq9gycoTHovkVr5RANu7s2ntev4gEydkytlIKEH2zyLHmsfaGF21sAkkjEsfItT9HgmR/Floq9UvRRR8c/flxjQMkDUgDZP2i7WekFxlJDvu+mVJUwDGMHL1HPx/pFVgGaY/IeLMBSY9SKQ4YwTHeZ+wB2QyyLtJt7Z9ruygrkxEl6ovn/15loNbkh8ay8OMx3GfqHi2QzSL9OTKShEnXUKkqpgiNgaO/Xzd6ZJDGv+jGtR1I5oVH6VwqRXkbRVUeOMZ1bfx7LkDyiITIsLbDlAwm8yJUKlWrCOVeY5iOcV3DIwYkgXxOZBiSILmYO5TrPFQoVSsPrddzpxEc/Xg0PDJILG2IrJEcLzzK+boqV+pJzsXcY3QawREeawubQbJIzEgi6VGOF665Ug0tXGOPkThiPpJHgLRFVmUwORrHFkrVGsdG0JgN2nhkkCySSWZTj9K7VIoaxSoqGXEkjwTSFBlIwmQ2dY2UOtHUlUGj5/icR4A0RBLJQRabKtVYFhsQR8Mjg4RIJgmUg0ypZxsAI3GERwMki2SSQDmQTUUKUTcGjoZHAkkiMSQdyYASLpXysURgjBwxHtkjg4RIHpIwGVAqZQSM0Gh7ZJAsEiSjSbFUbShCI3OERwbJIpkkTHqVSpn95NIBR/LIIG2RbFIyleXQ1sgeGSSvbTLpVCrVok4sBceUOTJILuEpCZOCqUyIKCWO5JFBcgmZhEqljMiita0B0hSJzS2X6kUSMRzZI4M0SKJUqZeVIHA0QXIJmZRK9SqLzJFBmiY1KpWZsaVJownSNsml+uhDH4o0WiDtEqVeFzTaIIVSUZfEyCDFUqHrUGSQsqkurpBBKvUXJZDqr+o7D2SziBpg9IIAAAAASUVORK5CYII=') no-repeat center top;background-size:91% auto;}
.tantan-list-box.scroll{position:absolute;z-index:999;top:0;left:0;width:100%;box-sizing:border-box;}
.tantan-list-box.scroll::after{background:none;}
.tantan-list-box.show{animation:showBox 0.5s linear 1;}
@keyframes showBox{
    0%{-webkit-transform:scale(1,1);-moz-transform:scale(1,1);-ms-transform:scale(1,1);-o-transform:scale(1,1);transform:scale(1,1);}
    50%{-webkit-transform:scale(0.96,0.96);-moz-transform:scale(0.96,0.96);-ms-transform:scale(0.96,0.96);-o-transform:scale(0.96,0.96);transform:scale(0.96,0.96);}
    100%{-webkit-transform:scale(1,1);-moz-transform:scale(1,1);-ms-transform:scale(1,1);-o-transform:scale(1,1);transform:scale(1,1);}
}

/* 滑动小点 */
.tantan-point{text-align:center;margin-top:1rem;}
.tantan-point>ul{display:inline-block;overflow:hidden;}
.tantan-point>ul>li{width:1.6rem;float:left;text-align:center;}
.tantan-point>ul>li::before{content:'';display:inline-block;width:1rem;height:0.4rem;background-color:#fff;border-radius:.6rem;opacity:0.3;transition:width 0.3s;}
.tantan-point>ul>li.active::before{width:1.6rem;opacity:1;}
</style> 

<script src="./tantan.js"></script>

