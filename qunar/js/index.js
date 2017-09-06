var closebtn = document.getElementById('close'); //获取粉色侧边栏的x关闭
var bodyAside = document.getElementsByClassName("body-aside")[0]; //获取粉色侧边栏div
var openbtn = document.getElementById("open"); //获取展开按钮
closebtn.onclick = function() { //给x关闭按钮添加点击事件
    bodyAside.style.opacity = 0;
    bodyAside.style.left = -35 + "px";
    openbtn.style.left = 0;
    openbtn.style.zIndex = 99;
}
openbtn.onclick = function() { //展开侧边栏的点击事件
        bodyAside.style.opacity = 1;
        bodyAside.style.left = 0;
        openbtn.style.left = -86 + "px";
    }
    //第一个机票选项卡

// function tab(){
//  var lis=document.getElementsByClassName("ticket-aside")[0].getElementsByTagName("li");//获取到8个li
//     var divs=document.getElementsByClassName("search-ticket");//获取到对应的8个div
//  for (var i = 0; i < lis.length; i++) { 
//      lis[i].index=i;//lis中的li，
//      lis[i].onclick=function(){  //绑定一个点击事件
//        for (var j= 0; j< lis.length; j++) {

//          lis[j].id="";
//          divs[j].style.display="none";
//        }

//        this.id="first";  //当前点击的添加id属性
//        divs[this.index].style.display="block"; 

//     }
// }
// }
// tab();
/*公用选项卡函数思路总结；
因为我的css样式全部用的class类，谁下边的li的谁不写死直接写成参数，在下边调用函数的第一位参数进行传递。
对应的div的class类不写死，在下边调用函数的第二位参数进行传递。还有机票选项卡和下边的默认效果不一致，
57行等于号后边不写死，写成参数。在下边调用函数的第三位参数进行传递。机票选项卡是点击事件，下边的全是划过事件，
51行绑定事件不能写死，通过侦听，在下边调用函数的第四位参数进行传递。调用函数括号里的参数，根据不同情况来写他的class类名和默认效果，
还有点击事件。
*/
function tab(class1, class2, liStyle, event) {
    var lis = document.getElementsByClassName(class1)[0].getElementsByTagName("li"); //获取点击的li
    // console.log(lis);
    var divs = document.getElementsByClassName(class2); //获取到对应的多个div
    // console.log(divs);
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i; //lis中的li，
        lis[i].addEventListener(event, function() { //因为有多个事件，事件名不写死(event,函数名)
            for (var j = 0; j < lis.length; j++) {

                lis[j].id = "";
                divs[j].style.display = "none";
            }
            this.id = liStyle; //因为有三种默认效果，等于号后边不能写绝对的类名，写成参数进行传递     
            divs[this.index].style.display = "block";

        })
    }
}
//白色背景机票选项卡
tab("ticket-aside", "search-ticket", "first-white", "click");
//2px下边框国内机票选项卡
tab("search-title", "select", "first1", "click");
//蓝色背景白色字，今日特惠选项卡
tab("today-title", "scenic-spot", "first", "mouseover");

//特色公寓选项卡
tab("tab-house", "link-house", "first", "mouseover");
//旅行攻略选项卡
tab("tra-link", "place", "first", "mouseover");
//骆驼书选项卡
tab("link-book", "books", "first", "mouseover");


//第二个今日特惠选项卡
// function today() {
//  //获取到今日特惠下面所有的li
//  var titles=document.getElementsByClassName("today-title")[0].getElementsByTagName("li");

//  var spots=document.getElementsByClassName("scenic-spot");//在获取2个对应的div
//  // console.log(spots);
//  for (var i = 0; i < titles.length; i++) {
//    titles[i].index=i;
//    titles[i].onclick=function () {
//      for (var j = 0; j < titles.length; j++) {
//        titles[j].className="";
//        spots[j].style.display="none";

//      }
//      this.className="on";
//      spots[this.index].style.display="block";
//    }
//  }
// }
// today();

// $.ajax({
//   url:"http://127.0.0.1:8081/index.json",
//   type:"GET",
//   success:function (data) {
//     alert(1)
//     console.log(data);
//   }
// })

//今日特惠
$.ajax({
    url: "js/index.json",
    type: "GET",
    success: function(data) {
      //今日特惠左边2块大图
      $(".spot-left li img:eq(0)").attr("src",JSON.parse(data).today[0].src);
      $(".note p:eq(0)").text(JSON.parse(data).today[0].place);
      $(".p1:first").text(JSON.parse(data).today[0].note);
      $(".money:first").text(JSON.parse(data).today[0].money);

      $(".spot-left li img:eq(1)").attr("src",JSON.parse(data).today[1].src);
      $(".note p:eq(1)").text(JSON.parse(data).today[1].place);
      $(".p1:last").text(JSON.parse(data).today[1].note);
      $(".money:last").text(JSON.parse(data).today[1].money);
      //右边4张小图
      $(".spot-right img:eq(0)").attr("src",JSON.parse(data).today[2].src);
      $(".p2:eq(0)").text(JSON.parse(data).today[2].place);
      $(".p3:eq(0)").text(JSON.parse(data).today[2].note);
      $(".p4:eq(0)").text(JSON.parse(data).today[2].money);
     console.log(JSON.parse(data))
   
    }
})






//轮播图
var slideshow = document.getElementsByClassName("slideshow")[0]; //获取到外面的盒子
var pics = slideshow.getElementsByTagName("li"); //获取到所有的li图片
var roundBox = document.getElementById('round');
var rounds = roundBox.getElementsByTagName('span'); //获取所有的小圆点，数组

var number = 0;
//定时器
var timing = setInterval(next, 2000);

function next() {
    number++
    if (number == pics.length) { //如果图片到第五章的时候，切换到第一张
        number = 0;
    }
    for (var i = 0; i < pics.length; i++) { //加上active的属性之前先清空原来的  小于li 的数组
        pics[i].className = "";
    }
    pics[number].className = "active" //让active的属性随时变换li
    roundStyle();
}
//鼠标移入的时候关掉定时器
slideshow.onmouseover = function() {
        clearInterval(timing);
    }
    //鼠标移出的时候再开
slideshow.onmouseout = function() {
        timing = setInterval(next, 2000);
    }
    //圆点样式
function roundStyle() {
    for (var i = 0; i < rounds.length; i++) {
        if (rounds[i].className == 'cur') {
            rounds[i].className = ''
                // console.log(i)
        }
    }
    rounds[number].className = 'cur'
    imgShow();
}
//图片隐藏和显示
function imgShow() {
    for (var i = 0; i < pics.length; i++) {
        if (pics[i].className == 'active') {
            pics[i].className = ''
                // console.log(i)
        }
    }
    pics[number].className = 'active'
}

//圆点点击
for (var i = 0; i < rounds.length; i++) {
    // console.log(i);
    (function(i) {

        rounds[i].onclick = function() {
            // console.log(i);
            number = i;
            roundStyle();
            imgShow();

        }

    })(i)
}
