export default{
    mounted () {
        this.pageInit();
    },
    methods:{
        pageInit(){
            var _this=this;
            var allCard=document.querySelectorAll(".tantan-list-box");
            for(var i=0;i<allCard.length;i++){
                _this.addTouchEvent(allCard[i],i);
            }
        },
        //添加触摸事件监听
        addTouchEvent(element,index){
            var _this=this;
            var firstTouchx,firstTouchy,newElement;
            element.addEventListener("touchstart",function(event){
                _this.setTransform(element,0);
                _this.setNewElementCalss(index);
                var touchMoveObj = event.changedTouches[0];
                firstTouchx=touchMoveObj.clientX;
                firstTouchy=touchMoveObj.clientY;
            },false);

            element.addEventListener("touchmove",function(event){
                _this.setNewElementCalss(index);
                var newIndex=index;
                var touchMoveObj = event.changedTouches[0]
                var movex=touchMoveObj.clientX-firstTouchx;
                var movey=touchMoveObj.clientY-firstTouchy;

                var direction=_this.getDirection(movex,movey);
                if((direction=='right'||direction=='down')&&index>=1){
                    newIndex--;
                }else if((direction=="left"||direction=='up')&&index<3){
                    newIndex++;
                }

                if(newIndex>=0&&newIndex<5&&newIndex!=index){
                    newElement=document.querySelectorAll(".tantan-list-box")[newIndex];
                    newElement.classList.remove("hide");
                    newElement.classList.add("show");
                    element.classList.add("scroll");
                    _this.setTranslate(element,{'x':movex+"px",'y':movey+"px",'z':0});
                }
            },false);

            element.addEventListener("touchend",function(event){
                var newIndex=index;
                var touchMoveObj = event.changedTouches[0]
                var movex=touchMoveObj.clientX-firstTouchx;
                var movey=touchMoveObj.clientY-firstTouchy;

                var direction=_this.getDirection(movex,movey);
                if(direction=='right'&&index>=1){
                    newIndex--;
                }else if(direction=="left"&&index<3){
                    newIndex++;
                }

                if(newIndex>=0&&newIndex<5&&newIndex!=index){
                    newElement=document.querySelectorAll(".tantan-list-box")[newIndex];
                    newElement.classList.remove("hide");
                    element.classList.add("scroll");
                    _this.setTransform(element,1000);
                    _this.setTranslate(element,{'x':direction=="left"?'-120%':'120%','y':0,z:0});
                    document.querySelectorAll(".tantan-point>ul>li").forEach(function(element){
                        element.classList.remove("active");
                    });
                    document.querySelectorAll(".tantan-point>ul>li")[newIndex].classList.add("active");
                }else{
                    _this.setNewElementCalss(index);
                }
            },false);
        },
        //添加动画效果事件设置
        setTransform(el,value){
            el.style.webkitTransitionDuration = el.style.transitionDuration = value+'ms';
        },
        //添加移动效果
        setTranslate(el,value){
            if(el)el.style.webkitTransform = el.style.transform = "translate3d("+value.x+","+value.y+","+value.z+")";
        },
        //获取移动方向
        getDirection(x, y) {
            if (x === y) { return '';}
            if (Math.abs(x) >= Math.abs(y)) {
                return x > 0 ? 'right' : 'left';
            } else {
                return y > 0 ? 'down' : 'up';
            }
        },
        //清除移动样式
        setNewElementCalss(index){
            var _this=this;
            var allCard=document.querySelectorAll(".tantan-list-box");
            for(var i=0;i<allCard.length;i++){
                if(i!=index){
                    allCard[i].classList.add("hide");
                }
                _this.setTranslate(allCard[i],{'x':0,'y':0,'z':0});
                allCard[i].classList.remove("scroll");
                allCard[i].classList.remove("show");
            }
        }
    }
}