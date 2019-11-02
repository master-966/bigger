$(function(){
    var timer;
    clearInterval(timer);
    timer=setInterval(time,2000)
    var i=0;

    //banner图自动走
    function time(){
        i++;
        i==8?i=0:i;
        $('#banner .con .img img').removeClass('active');
        $('#banner .con .img img').each(function(a,b){
            if(a==i){
                $(b).addClass('active')
            }
        })
        $('#banner .con ul li').removeClass('show');
        $('#banner .con ul li').each(function(a,b){
            if(a==i){
                $(b).addClass('show');
            }
        })
    }

    //划入停止banner图
    $('#banner .con').mouseover(function(){
        clearInterval(timer);
    })

    //划出banner图继续走
    $('#banner .con').mouseout(function(){
        timer=setInterval(time,2000)
    })

    //划过小圆点切换对应的banner
    $('#banner .con ul li').mouseover(function(){
        $('#banner .con ul li').removeClass('show');
        $('#banner .con .img img').removeClass('active');
        $(this).addClass('show');
        var self=this
        $('#banner .con ul li').each(function(a,b){
            if(self==b){
                console.log(b)
                $('#banner .con .img img').each(function(x,y){
                    if(x==a){
                        $(y).addClass('active');
                        i=a
                        console.log(i,a,x)
                    }
                })
            }
        })
    })

    $('#banner .le ul li').mouseover(function(){
        $('#banner .le .hover').css({display:'block'})
    })
    $('#banner .le ul li').mouseout(function(){
        $('#banner .le .hover').css({display:'none'})
    })
    $('#banner .le .hover').mouseout(function(){
        $('#banner .le .hover').css({display:'none'})
    })
    
})