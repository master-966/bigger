var oPlace_box=document.querySelector('.place_box')
var oBp=document.querySelector('.bp')
var oSp=document.querySelector('.sp')
var arr = ["河南", "安徽", "福建", "甘肃", "贵州", "海南", "河北", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "青海", "山东", "山西", "陕西", "四川", "云南", "浙江", "台湾", "广东"]
for(var i=0;i<arr.length;i++){
    var oSpan=document.createElement('span')
    oSpan.className='ospan'
    oSpan.innerHTML=arr[i]
    oBp.appendChild(oSpan)
}

oPlace_box.onclick=function(e){
    var ev=e||event;
    var target=ev.target || ev.srcElement;
    if(target.nodeName == "SPAN"){
        oSp.innerHTML=target.innerHTML
    }
}

var suo=document.getElementById('suo')
var suo_arr=["抢手机新品","卷纸","新品电脑","5g手机"]
var suo_num=1
function pl(){
    suo.placeholder=suo_arr[suo_num]
    suo_num++
    if(suo_num>suo_arr.length-1){
        suo_num=0
    }
}
var timer = setInterval(pl,3000)
suo.onfocus=function(){
    clearInterval(timer)
}
suo.onblur=function(){
    timer = setInterval(pl,3000)
}
