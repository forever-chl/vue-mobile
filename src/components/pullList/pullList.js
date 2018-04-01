export default {
    data(){
        return{
          linesHeight:[]   
        }
    },
    mounted(){
        var _this=this;
        this.resizeAllImg();
        window.addEventListener("resize",()=>{
            _this.resizeAllImg();
        })
    },
    methods:{
        getChilds(parentName,className){
            var parentDom=document.querySelector('.'+parentName);
            var allChilds=parentDom.querySelectorAll('.'+className);
            return allChilds;
        },
        getLineMinHeight(){
            var _this=this;
            var theMinIndex=0;
            _this.linesHeight.forEach((item,index)=>{
                if(item.top<_this.linesHeight[theMinIndex].top){
                    theMinIndex=index;
                }
            });
            return theMinIndex;
        },
        resizeAllImg(){
            var _this=this;
            var allChilds=this.getChilds("container","box");
            var lineNum=Math.round(document.body.clientWidth/allChilds[0].clientWidth);
            allChilds.forEach((element,index) => {
                var theImg=element.querySelector("img");
                theImg.onload=()=>{
                    if(index<lineNum){
                        var param={};
                        param.top=element.clientHeight;
                        param.left=element.offsetLeft;
                        _this.linesHeight.push(param);
                    }else{  
                        if(_this.linesHeight.length==lineNum){
                            var theMinHeightIndex=_this.getLineMinHeight();
                            element.style.position='absolute';
                            element.style.top=_this.linesHeight[theMinHeightIndex].top+'px';
                            element.style.left=_this.linesHeight[theMinHeightIndex].left+'px';
                            _this.linesHeight[theMinHeightIndex].top+=element.clientHeight;
                        }
                    }
                };
            });
        }
    }
}