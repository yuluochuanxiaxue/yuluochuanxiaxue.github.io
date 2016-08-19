/**
 * Created by Administrator on 2016/8/19.
 */
function getClassName(node, classname) {
    if (node.getElementsByClassName) {
        return node.getElementsByClassName(classname);
    } else {
        var result = [];
        var tagnode = node.getElementsByTagName("*");
        for (var i = 0; i < tagnode.length; i++) {
            if (tagnode[i].className.indexOf(classname) != -1) {
                result.push(tagnode[i]);
            }
        }
        return result;
    }
}
/*vipp start*/
var oVpt = document.getElementById("vipp_top");
var oMyOrder=getClassName(oVpt,'my_ord')[0];
var oOrder=getClassName(oVpt,'order')[0];
var oi_p=oVpt.getElementsByTagName('i')[0];
var aSpan_vp=oVpt.getElementsByTagName('span');
oMyOrder.onmouseover = oOrder.onmouseover = function() {
    oOrder.style.display = "block";
    oi_p.style.backgroundPosition = "-26px 0";
};
oMyOrder.onmouseout = oOrder.onmouseout = function() {
    oOrder.style.display = "none";
    oi_p.style.backgroundPosition = "0 0";
};
for(var i=0;i<aSpan_vp.length;i++){
    aSpan_vp[i].onmouseover=function(){
        this.style.backgroundPosition='-26px center ';
    };
    aSpan_vp[i].onmouseout=function(){
        this.style.backgroundPosition='0 center ';
    }
}
/*vipp end*/

/*search start*/
var oId1 = document.getElementById("tnSearchBox");
var input1=oId1.getElementsByTagName('input')[0];
var recommend1=getClassName(oId1,'recommend')[0];
var left1=getClassName(oId1,'left')[0];
var lefti1=oId1.getElementsByTagName('i')[0];
var nav1 = getClassName(oId1,'nav')[0];

left1.onmouseover = nav1.onmouseover = function() {
    nav1.style.display = "block";
    lefti1.style.backgroundPosition = "-26px 0";
};
left1.onmouseout = nav1.onmouseout = function() {
    nav1.style.display = "none";
    lefti1.style.backgroundPosition = "0 0";
};
input1.onfocus = function() {
    recommend1.style.display='none';
    if (this.value == '周四特卖会') {
        this.value = '';
    }
};

//onblur : 当元素失去焦点的时候触发
input1.onblur = function() {
    recommend1.style.display='block';
    if (this.value == '') {
        this.value = '周四特卖会';
    }
};
/*search end*/

/*vip_nav start*/
var aLi_vip=document.getElementById('vip_nav').getElementsByTagName('li');
for(var i=0;i<aLi_vip.length;i++){
    aLi_vip[i].onmouseover  = function() {
        this.i=this.getElementsByTagName('i')[0];
        if(this.i){
            this.i.style.backgroundPosition = "-26px 0";
        }

    };
    aLi_vip[i].onmouseout  = function() {
        this.i=this.getElementsByTagName('i')[0];
        if(this.i){
            this.i.style.backgroundPosition = "0 0";
        }
    }
}
/*vip_nav end*/


/*全铺切换部分*/
var oBan=document.getElementById('banner');
var oRow=getClassName(oBan,'row')[0];
var aRow=oRow.getElementsByTagName('div');
var aTxtLi=document.getElementById('banner_txt').getElementsByTagName('li');
var aMainLi=document.getElementById('banner_main').getElementsByTagName('li');
var aPic=['images/bg1.jpeg','images/bg2.jpeg','images/bg3.jpeg','images/bg4.jpeg','images/bg5.jpeg','images/bg6.jpeg'];
var len=aTxtLi.length;
var index=0;
var banTimer=null;
oRow.onmouseover=function(){
    aRow[0].style.display='block';
    aRow[1].style.display='block'
};
oRow.onmouseout=function(){
    aRow[0].style.display='none';
    aRow[1].style.display='none'
};
aRow[0].onclick=function() {
    clearInterval(banTimer);
    index--;
    if (index < 0) {
        index = len-1;
    }
    move(index);
};
aRow[1].onclick=function() {
    clearInterval(banTimer);
    index++;
    if (index > len-1) {
        index = 0;
    }
    move(index);
};
for(var i=0;i<len;i++){
    aTxtLi[i].index=i;
    aTxtLi[i].onmouseover=function(){
        clearInterval(banTimer);
        move(this.index);
    };
    aTxtLi[i].onmouseout=function() {
        autoPlay();
    }
}
autoPlay();
function autoPlay(){
    banTimer=setInterval(function(){
        index%=(len-1);
        move(index);
        index++;
    },2000);
}
function move(num){
    for(var j=0;j<len;j++){
        aTxtLi[j].className='';
        aMainLi[j].style.display='none';
    }
    aTxtLi[num].className='current_txt';
    aMainLi[num].style.display='block';
    aMainLi[num].style.background='url('+aPic[num]+') no-repeat center center';
}
/*全铺切换 end*/
/*main_left*/
var oLBan=document.getElementById('left_banner');
var aLeftLi=oLBan.getElementsByTagName('li');
var aLeftI=oLBan.getElementsByTagName('i');
var aLeftP=oLBan.getElementsByTagName('p');
for(var i=0;i<aLeftLi.length;i++){
    aLeftLi[i].index=i;
    aLeftLi[i].onmouseover=function(){
        this.style.backgroundColor='#ffffff';
        aLeftI[this.index].style.backgroundPosition='-26px 0';
        aLeftP[this.index].style.color='#32993e';

    }
    aLeftLi[i].onmouseout=function(){
        this.style.backgroundColor='#3a404c';
        aLeftI[this.index].style.backgroundPosition='0 0';
        aLeftP[this.index].style.color='#f2f4f3';

    }
}
/*main_left end*/
/*sfq start*/
var aLi=document.getElementById('sfq').getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
    aLi[i].onmouseover=function(){
        for(var j=0;j<aLi.length;j++){
            aLi[j].className='';
        }
        this.className='current';
    }
}
/*sfq end*/

/*special_box start*/
var oBox=document.getElementById('special_box');
var oHead=getClassName(oBox,'special_header')[0];
var oPanel=getClassName(oBox,'special_panel')[0];
var aLi_spe=oHead.getElementsByTagName('li');
var aLi1=oPanel.getElementsByTagName('li');
var that=aLi[0];
var that1=aLi1[0];
for(var i=0;i<aLi_spe.length;i++){
    aLi_spe[i].index=i;
    aLi_spe[i].onmouseover=function(){
        for(var i=0;i<aLi_spe.length;i++){
            aLi_spe[i].className='';
            aLi1[i].style.display='none';
        }
        this.className='current';
        aLi1[this.index].style.display='block';
    };
}
/*special_box end*/

/*summer_box start*/
var oBox_sum=document.getElementById('summer_box');
var oHead_sum=getClassName(oBox_sum,'summer_header')[0];
var oPanel_sum=getClassName(oBox_sum,'summer_panel')[0];
var aLi_sum=oHead_sum.getElementsByTagName('li');
var aLi1_sum=oPanel_sum.getElementsByTagName('li');
var that_sum=aLi_sum[0];
var that1_sum=aLi1_sum[0];
for(var i=0;i<aLi_sum.length;i++){
    aLi_sum[i].index=i;
    aLi_sum[i].onmouseover=function(){
        for(var i=0;i<aLi_sum.length;i++){
            aLi_sum[i].className='';
            aLi1_sum[i].style.display='none';
        }
        this.className='current';
        aLi1_sum[this.index].style.display='block';
    };
}
/*summer_box end*/

/*board_box start*/

var oBox_board=document.getElementById('board_box');
var oHead_board=getClassName(oBox_board,'board_header')[0];
var oPanel_board=getClassName(oBox_board,'board_panel')[0];
var aLi_board=oHead_board.getElementsByTagName('li');
var aLi1_board=oPanel_board.getElementsByTagName('li');
/*var that_board=aLi_board[0];
 var that1_board=aLi1_board[0];*/
for(var i=0;i<aLi_board.length;i++){
    aLi_board[i].index=i;
    aLi_board[i].onmouseover=function(){
        for(var i=0;i<aLi_board.length;i++){
            aLi_board[i].className='';
            aLi1_board[i].style.display='none';
        }
        this.className='current';
        aLi1_board[this.index].style.display='block';
    };
}
/*board_box end*/

/*short_box start*/
var oBox_short=document.getElementById('short_box');
var oHead_short=getClassName(oBox_short,'short_header')[0];
var oPanel_short=getClassName(oBox_short,'short_panel')[0];
var aLi_short=oHead_short.getElementsByTagName('li');
var aLi1_short=oPanel_short.getElementsByTagName('li');
/*var that_short=aLi[0];
 var that1_short=aLi1[0];*/
for(var i=0;i<aLi_short.length;i++){
    aLi_short[i].index=i;
    aLi_short[i].onmouseover=function(){
        for(var i=0;i<aLi_short.length;i++){
            aLi_short[i].className='';
            aLi1_short[i].style.display='none';
        }
        this.className='current';
        aLi1_short[this.index].style.display='block';
    };
}

/*short_box end*/

/*local_box start*/
var oBox_local=document.getElementById('local_box');
var oHead_local=getClassName(oBox_local,'local_header')[0];
var oPanel_local=getClassName(oBox_local,'local_panel')[0];
var aLi_local=oHead_local.getElementsByTagName('li');
var aLi1_local=oPanel_local.getElementsByTagName('li');
for(var i=0;i<aLi_local.length;i++){
    aLi_local[i].index=i;
    aLi_local[i].onmouseover=function(){
        for(var i=0;i<aLi_local.length;i++){
            aLi_local[i].className='';
            aLi1_local[i].style.display='none';
        }
        this.className='current';
        aLi1_local[this.index].style.display='block';
    };
}
/*local_box end*/

/*surround_box start*/
var oBox_surround=document.getElementById('surround_box');
var oHead_surround=getClassName(oBox_surround,'surround_header')[0];
var oPanel_surround=getClassName(oBox_surround,'surround_panel')[0];
var aLi_surround=oHead_surround.getElementsByTagName('li');
var aLi1_surround=oPanel_surround.getElementsByTagName('li');
for(var i=0;i<aLi_surround.length;i++){
    aLi_surround[i].index=i;
    aLi_surround[i].onmouseover=function(){
        for(var i=0;i<aLi_surround.length;i++){
            aLi_surround[i].className='';
            aLi1_surround[i].style.display='none';
        }
        this.className='current';
        aLi1_surround[this.index].style.display='block';
    };
}
/*surround_box end*/

/*theme_box start*/
var oBox_theme=document.getElementById('theme_box');
var oHead_theme=getClassName(oBox_theme,'theme_header')[0];
var oPanel_theme=getClassName(oBox_theme,'theme_panel')[0];
var aLi_theme=oHead_theme.getElementsByTagName('li');
var aLi1_theme=oPanel_theme.getElementsByTagName('li');
for(var i=0;i<aLi_theme.length;i++){
    aLi_theme[i].index=i;
    aLi_theme[i].onmouseover=function(){
        for(var i=0;i<aLi_theme.length;i++){
            aLi_theme[i].className='';
            aLi1_theme[i].style.display='none';
        }
        this.className='current';
        aLi1_theme[this.index].style.display='block';
    };
}
/*theme_box end*/

/*zizhu_box start*/
var oBox_zizhu=document.getElementById('zizhu_box');
var oHead_zizhu=getClassName(oBox_zizhu,'zizhu_header')[0];
var oPanel_zizhu=getClassName(oBox_zizhu,'zizhu_panel')[0];
var aLi_zizhu=oHead_zizhu.getElementsByTagName('li');
var aLi1_zizhu=oPanel_zizhu.getElementsByTagName('li');
for(var i=0;i<aLi_zizhu.length;i++){
    aLi_zizhu[i].index=i;
    aLi_zizhu[i].onmouseover=function(){
        for(var i=0;i<aLi_zizhu.length;i++){
            aLi_zizhu[i].className='';
            aLi1_zizhu[i].style.display='none';
        }
        this.className='current';
        aLi1_zizhu[this.index].style.display='block';
    };
}
/*zizhu_box end*/

/*qianzhen_box start*/
var oBox_qianzhen=document.getElementById('qianzhen_box');
var oHead_qianzhen=getClassName(oBox_qianzhen,'qianzhen_header')[0];
var oPanel_qianzhen=getClassName(oBox_qianzhen,'qianzhen_panel')[0];
var aLi_qianzhen=oHead_qianzhen.getElementsByTagName('li');
var aLi1_qianzhen=oPanel_qianzhen.getElementsByTagName('li');
for(var i=0;i<aLi_qianzhen.length;i++){
    aLi_qianzhen[i].index=i;
    aLi_qianzhen[i].onmouseover=function(){
        for(var i=0;i<aLi_qianzhen.length;i++){
            aLi_qianzhen[i].className='';
            aLi1_qianzhen[i].style.display='none';
        }
        this.className='current';
        aLi1_qianzhen[this.index].style.display='block';
    };
}
/*qianzhen_box end*/

/*zijia_box start*/
var oBox_zijia=document.getElementById('zijia_box');
var oHead_zijia=getClassName(oBox_zijia,'zijia_header')[0];
var oPanel_zijia=getClassName(oBox_zijia,'zijia_panel')[0];
var aLi_zijia=oHead_zijia.getElementsByTagName('li');
var aLi1_zijia=oPanel_zijia.getElementsByTagName('li');
for(var i=0;i<aLi_zijia.length;i++){
    aLi_zijia[i].index=i;
    aLi_zijia[i].onmouseover=function(){
        for(var i=0;i<aLi_zijia.length;i++){
            aLi_zijia[i].className='';
            aLi1_zijia[i].style.display='none';
        }
        this.className='current';
        aLi1_zijia[this.index].style.display='block';
    };
}
/*zijia_box end*/

/*jiudian_box start*/
var oBox_jiudian=document.getElementById('jiudian_box');
var oHead_jiudian=getClassName(oBox_jiudian,'jiudian_header')[0];
var oPanel_jiudian=getClassName(oBox_jiudian,'jiudian_panel')[0];
var aLi_jiudian=oHead_jiudian.getElementsByTagName('li');
var aLi1_jiudian=oPanel_jiudian.getElementsByTagName('li');
for(var i=0;i<aLi_jiudian.length;i++){
    aLi_jiudian[i].index=i;
    aLi_jiudian[i].onmouseover=function(){
        for(var i=0;i<aLi_jiudian.length;i++){
            aLi_jiudian[i].className='';
            aLi1_jiudian[i].style.display='none';
        }
        this.className='current';
        aLi1_jiudian[this.index].style.display='block';
    };
}
/*jiudian_box end*/

/*menpiao_box start*/
var oBox_menpiao=document.getElementById('menpiao_box');
var oHead_menpiao=getClassName(oBox_menpiao,'menpiao_header')[0];
var oPanel_menpiao=getClassName(oBox_menpiao,'menpiao_panel')[0];
var aLi_menpiao=oHead_menpiao.getElementsByTagName('li');
var aLi1_menpiao=oPanel_menpiao.getElementsByTagName('li');
for(var i=0;i<aLi_menpiao.length;i++){
    aLi_menpiao[i].index=i;
    aLi_menpiao[i].onmouseover=function(){
        for(var i=0;i<aLi_menpiao.length;i++){
            aLi_menpiao[i].className='';
            aLi1_menpiao[i].style.display='none';
        }
        this.className='current';
        aLi1_menpiao[this.index].style.display='block';
    };
}
/*menpiao_box end*/

/*wanle_box start*/
var oBox_wanle=document.getElementById('wanle_box');
var oHead_wanle=getClassName(oBox_wanle,'wanle_header')[0];
var oPanel_wanle=getClassName(oBox_wanle,'wanle_panel')[0];
var aLi_wanle=oHead_wanle.getElementsByTagName('li');
var aLi1_wanle=oPanel_wanle.getElementsByTagName('li');
for(var i=0;i<aLi_wanle.length;i++){
    aLi_wanle[i].index=i;
    aLi_wanle[i].onmouseover=function(){
        for(var i=0;i<aLi_wanle.length;i++){
            aLi_wanle[i].className='';
            aLi1_wanle[i].style.display='none';
        }
        this.className='current';
        aLi1_wanle[this.index].style.display='block';
    };
}
/*wanle_box end*/

/*gonglue_box start*/
var oBox_gl=document.getElementById('gonglue_box');
var oHead_gl=getClassName(oBox_gl,'gonglue_header')[0];
var oPanel_gl=getClassName(oBox_gl,'gonglue_panel')[0];
var aLi_gl=oHead_gl.getElementsByTagName('li');
var aLi1_gl=oPanel_gl.getElementsByTagName('li');
for(var i=0;i<aLi_gl.length;i++){
    aLi_gl[i].index=i;
    aLi_gl[i].onmouseover=function(){
        for(var i=0;i<aLi_gl.length;i++){
            aLi_gl[i].className='';
            aLi1_gl[i].style.display='none';
        }
        this.className='current';
        aLi1_gl[this.index].style.display='block';
    };
}

var aLvPic=getClassName(document.body,'lv_pic');
for(var i=0;i<aLvPic.length;i++){
    aLvPic[i].onmouseover=function(){
        getClassName(this,'comment')[0].style.bottom='0';

    };
    aLvPic[i].onmouseout=function(){
        getClassName(this,'comment')[0].style.bottom='-46px';

    }
}
/*gonglue_box end*/
/**
 * Created by Administrator on 2016/8/19.
 */
/*left_nav start*/
var oMenu=document.getElementById('left_menu');
var aLi_menu=oMenu.getElementsByTagName('li');
var arr_bg1=['#D74568','#517AC0','#3AA860','#D74568','#08AFB1','#EFAD08'];
var arr_bg2=['#EF8008','#0298D6','#68A32E','#CF5EB1','#BF7342','#935EB2','#2e9900'];
var range1=[606, 1106, 1506,  2006,  2406,  2906];
var range2=[ 3306 , 3606 , 4006 , 4186,  4306, 4506 , 4700];

var arr_bg=arr_bg1.concat(arr_bg2);
var range=range1.concat(range2);

/*  document.documentElement.scrollTop  =range[8];*/
var sT=0;
var times=1;
window.onscroll=function(){
  /*  alert(1);*/
    sT = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for(var i=0;i<range.length;i++){
        aLi_menu[i].style.backgroundColor='';
        aLi_menu[i].style.color='#999';
    }
    if(sT>=range[12]){
        aLi_menu[12].style.backgroundColor=arr_bg[12];
        aLi_menu[12].style.color='white';
    }else if(sT<range[12]&&sT>range[11]){
        aLi_menu[11].style.backgroundColor=arr_bg[11];
        aLi_menu[11].style.color='white';
    }else if(sT<range[11]&&sT>range[10]){
        aLi_menu[10].style.backgroundColor=arr_bg[10];
        aLi_menu[10].style.color='white';
    }else if(sT<range[10]&&sT>range[9]){
        aLi_menu[9].style.backgroundColor=arr_bg[9];
        aLi_menu[9].style.color='white';
    }else if(sT<range[9]&&sT>range[8]){
        aLi_menu[8].style.backgroundColor=arr_bg[8];
        aLi_menu[8].style.color='white';
    }else if(sT<range[8]&&sT>range[7]){
        aLi_menu[7].style.backgroundColor=arr_bg[7];
        aLi_menu[7].style.color='white';
    }else if(sT<range[7]&&sT>range[6]){
        aLi_menu[6].style.backgroundColor=arr_bg[6];
        aLi_menu[6].style.color='white';
    }else if(sT<range[6]&&sT>range[5]){
        aLi_menu[5].style.backgroundColor=arr_bg[5];
        aLi_menu[5].style.color='white';
    }else if(sT<range[5]&&sT>range[4]){
        aLi_menu[4].style.backgroundColor=arr_bg[4];
        aLi_menu[4].style.color='white';
    }else if(sT<range[4]&&sT>range[3]){
        aLi_menu[3].style.backgroundColor=arr_bg[3];
        aLi_menu[3].style.color='white';
    }else if(sT<range[3]&&sT>range[2]){
        aLi_menu[2].style.backgroundColor=arr_bg[2];
        aLi_menu[2].style.color='white';
    }else if(sT<range[2]&&sT>range[1]){
        aLi_menu[1].style.backgroundColor=arr_bg[1];
        aLi_menu[1].style.color='white';
    } else if(sT<range[1]&&sT>range[0]){
        aLi_menu[0].style.backgroundColor=arr_bg[0];
        aLi_menu[0].style.color='white';
        oMenu.style.display='block';
        if(times==1){
            startMove(oMenu, {
                bottom : -100
            }, 300, 'linear',function(){
                startMove(oMenu, {
                    bottom : 60
                }, 100, 'linear');
            });
            times=2;
        }
    } else if(sT<range[0]){
        if(times==2){
            startMove(oMenu, {
                bottom : -800
            }, 1000, 'linear',function(){
                oMenu.style.display='none';
                oMenu.style.bottom='60px';
            });
            times=1;
        }
    }
};
/*left_nav end*/
/*right_nav start*/
var oRightNav=document.getElementById('right_nav');
var aRightNavA=getClassName(oRightNav,'right_main')[0].getElementsByTagName('span');
var oRightTip=getClassName(oRightNav,'right_tip')[0];
var oRightLi=oRightTip.getElementsByTagName('li');
var aRNA_len=aRightNavA.length;
for(var i=0;i<aRNA_len;i++){
    aRightNavA[i].index=i;
    aRightNavA[i].onmouseover=function(){
        this.style.backgroundPosition='-42px 0';
        /*oRightLi[this.index].style.opacity='1';
         oRightLi[this.index].style.filter = 'alpha(opacity=100)';*/
        /*  oRightTip.style.left='-84px';*/
        startMove(oRightLi[this.index], {
            opacity : 100,
            left:12
        }, 200, 'linear');
    };
    aRightNavA[i].onmouseout=function(){
        this.style.backgroundPosition='0 0';
        /*oRightLi[this.index].style.opacity='0';
         oRightLi[this.index].style.filter = 'alpha(opacity=0)';
         oRightTip.style.left='-96px';*/
        startMove(oRightLi[this.index], {
            opacity : 0,
            left:0
        }, 10, 'linear');
        /*   startMove(oRightTip, {
         left : -96
         }, 10, 'linear');*/

    }
}

var iTimer = null;

aRightNavA[aRNA_len-1].onclick = function() {
    clearInterval(iTimer);
    var iCur = iSpeed = 0;

    iTimer = setInterval(
        function() {
            iCur = document.documentElement.scrollTop
                || document.body.scrollTop;

            iSpeed = Math.floor((0 - iCur) / 8);
            if (iCur == 0) {
                clearInterval(iTimer);
            } else {
                document.documentElement.scrollTop = document.body.scrollTop = iCur
                    + iSpeed;
            }
        }, 30);
};
/*right_nav end*/

