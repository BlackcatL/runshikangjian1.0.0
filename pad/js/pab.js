/* nav轮播 */
var arr = [{
    txt:"首页",
    img:"img/01.png"
},{
    txt:"健康管理",
    img:"img/02.png"
},{
    txt:"健康评估",
    img:"img/03.png"
},{
    txt:"经络调理",
    img:"img/04.png"
},{
    txt:"营养膳食",
    img:"img/05.png"
},{
    txt:"私人医生",
    img:"img/06.png"
},{
    txt:"绿色就医",
    img:"img/07.png"
},{
    txt:"就诊陪护",
    img:"img/08.png"
},{
    txt:"讲座沙龙",
    img:"img/09.png"
}];

var nav = $(".nav");

function begin(arr){
    arr.push(arr[0]);
    arr.unshift(arr[arr.length - 2]);

    /* 在 nav 中创建 ul */
    var ul = $('<ul/>');
    nav.append(ul);
    ul.attr("id","nav_ul");
    ul.addClass("nav_ul");
    /*-- 设置 ul 的宽度为 n 个li的总和 --*/
    ul.css({
        width:nav.width() * arr.length + 'px'
    });
    /*-- //设置 ul 的宽度为 n 个li的总和 --*/
    /* //在 nav 中创建 ul */

    /* 在 ul 中创建 li，li 的个数为 arr 的个数 */
    for (var i = 1; i < arr.length - 1; i++) {
        var li = $('<li/>');
        li.addClass("nav_ul_li");
        ul.append(li);
        var div = $('<div/>');
        li.append(div);
        var img = $("<img/>")
        img.attr({src:arr[i].img});
        div.append(img);
        var p = $('<p/>');
        li.append(p);
        p.text(arr[i].txt);
        var clear = $('<div/>');
        clear.addClass("clear");
    };
    return nav;
};
begin(arr);

//nav移动(单个)
// function getOffsetSum(ele){
//     var left=0;
//     while(ele){
//         left+=ele.offsetLeft;
//         ele=ele.offsetParent;
//     }
//     return { left:left }
// }

// var maindiv=document.getElementById("nav_ul");
// maindiv.addEventListener("touchmove",touch,false);
// function touch(e){
//     switch (e.type) {
//         case "touchmove":
//         var ele=getOffsetSum(e.target);
//         var left=ele.left;
 
//         var x=e.touches[0].clientX-left/2;
//         e.preventDefault();

//         e.target.style.marginLeft=x+"px";
//         e.target.style.marginTop=y+"px";

//     }
// }



// console.log();
//nav移动

//选项卡特效
var li1 = $(".nav_ul_li");
var page = $(".page");

$(function (){
    li1.click(function () {
        var index = li1.index(this);
        page
            .eq(index).show()
            .siblings().hide();
    });
});
//选项卡特效*/ 

/* /nav轮播 */

/* banner轮播 */
// var arrimg = [{
//     img:"img/banner01.jpg"
// },{
//     img:"img/banner02.jpg"
// },{
//     img:"img/banner03.jpg"
// },{
//     img:"img/banner04.jpg"
// }];


/* /banner轮播 */

