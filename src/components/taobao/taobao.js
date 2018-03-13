export default{
    data(){
        return{
            casetypeList:[
				{"caseId":1,"caseName":"时间","typeList":[{"id":"1","name":"半年"},{"id":"2","name":"一年"},{"id":"7","name":"两年"}]},
				{"caseId":2,"caseName":"规模大小","typeList":[{"id":"3","name":"小规模"},{"id":"4","name":"大规模"},{"id":"8","name":"超大规模"}]},
				{"caseId":3,"caseName":"类型","typeList":[{"id":"5","name":"A轮"},{"id":"6","name":"B轮"},{"id":"9","name":"C轮"}]},
				{"caseId":4,"caseName":"其他","typeList":[{"id":"10","name":"其他1"},{"id":"11","name":"其他2"},{"id":"12","name":"其他3"}]}
		    ],
	        sltIDs:[0,0,0,0],
	        combinationList:[
				{"id":1,"combination":"1,3,5,10","price":"100","description":"半年小规模A轮其他1"},
				{"id":2,"combination":"1,4,5,10","price":"100","description":"半年大规模A轮其他1"},
				{"id":3,"combination":"7,8,9,12","price":"300","description":"两年超大规模C轮其他3"},
				{"id":6,"combination":"2,4,6,11","price":"600","description":"一年大规模B轮其他2"},
				{"id":6,"combination":"2,3,5,11","price":"600","description":"一年小规模A轮其他2"}
			]
        }
    },
    mounted () {
        this.pageInit();
    },
    methods: {
        pageInit(){
            var _this=this;
            //服务组合点击事件绑定
            document.querySelectorAll(".service-case>li>span").forEach(element => {
                element.addEventListener("click",_this.changeSltCase,false);
            });
        },
		//tab选中效果切换
	    changeActive(obj){
	    	var objParent=obj.parentNode;
	    	objParent.childNodes.forEach(element=>{
                if(element.classList&&element.classList.length>0&&element.classList.contains("active")){
                    element.classList.remove("active");
                }
            });
	     	obj.classList.add("active");
	    },
	    //更改选中组合
	    changeSltCase(event){
            var obj=event.currentTarget;
            var _this=this;
	    	var seletedID=obj.attributes["id"].nodeValue;
	    	var seletedIDs=seletedID.split('-');
	    	var index=seletedIDs[0];
	    	var theID=seletedIDs[1];
	    	if(!obj.classList.contains("active")){
		    	//添加选中样式
		    	_this.changeActive(obj);
		    	//保存选中id
		    	_this.sltIDs[index]=theID;
	    	}else{
	    		obj.classList.remove("active");
	    		//清除选中id
		    	_this.sltIDs[index]=0;
	    	}
	    	//设置不可选case节点
	    	_this.setDisabledCase(seletedID);
	    },
	    //置灰不可选的组合
	    setDisabledCase(sltid){
            var _this=this;
	    	sltid=sltid.split('-');
	    	var index=sltid[0];
	    	var theID=sltid[1];
	    	var newSltIDs;
	    	var allSpan=document.querySelectorAll(".service-case>li>span");
	    	for(var i=0;i<allSpan.length;i++){
				var theDom=allSpan[i];
				var theDomID=theDom.attributes["id"].nodeValue.split("-");
				var theDomIndex=theDomID[0];
				var theDomCaseID=theDomID[1];
				if(theDomIndex==index||theDom.classList.contains("active")) continue;
				newSltIDs=_this.sltIDs.slice(0,_this.sltIDs.length);
				newSltIDs[theDomIndex]=theDomCaseID;
				if(!_this.isInCombination(newSltIDs)){
    				theDom.classList.remove("active");
    				theDom.classList.add("disabled");
    				theDom.removeEventListener("click",_this.changeSltCase,false);
    				theDom.removeAttribute("onclick");
    			}else{
    				if(theDom.classList.contains("disabled")){
    					theDom.classList.remove("disabled");
    					theDom.addEventListener("click",_this.changeSltCase,false);
    				}
    			}
			}
	    },
	    //当前组合是否存在于服务组合列表中
	    isInCombination(newSltIDs){
            var _this=this;
	    	newSltIDs=newSltIDs.map(function(val){
	    		if(val==0) return "\\d+";
	    		else return val;
	    	});
	    	var reg=new RegExp(newSltIDs.join(","),"g");
	    	for(var i=0;i<_this.combinationList.length;i++){
	    		var theCombination=_this.combinationList[i].combination;
	    		if(theCombination.match(reg)){
	    			return true;
	    		}
	    	}
	    	return false;
	    },
    }
}