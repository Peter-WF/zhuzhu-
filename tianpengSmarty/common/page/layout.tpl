<!doctype html>
{%html lang="zh-Hans" framework="common:static/mod.js"%}
{%head%}
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="">
<!--	//网页手机wap2.0网页的head里加入下面这条元标签，在iPhone的浏览器中页面将以原始大小显示，并不允许缩放。  -->
<meta content="yes" name="apple-mobile-web-app-capable">
<!--	// 离线应用的另一个技巧    -->
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<!--	//指定的iphone中safari顶端的状态条的样式 -->
<meta content="telephone=yes" name="format-detection">
<!--	//当该 HTML 页面在手机上浏览时，该标签用于指定是否将网页内容中的手机号码显示为拨号的超链接。 -->
<title>{%$site.title%}</title>
{%require name="common:static/cssreset.css"%}
{%require name="common:static/base.css"%}
{%/head%}
{%body id="screen"%}
{%require name="common:static/js/plugins/jquery/jquery-1.11.3.js"%}
{%require name="common:static/js/event.js"%}
{%require name="common:static/js/utils.js"%}
{%require name="common:static/js/supportIE8.js"%}
{%widget name="common:widget/header/header.tpl"%}

{%block name="main1"%}{%/block%}

{%widget name="common:widget/footer/footer.tpl"%}
    <!--<script src="../../day6/utils.js" type="text/javascript"></script>-->
    {%*<script src="../js/plugins/jquery/jquery-1.11.3.js" type="text/javascript"></script>*%}

    {%*<script src="js/sea.js"></script>*%}
    {%*{%require name="common:static/sea.css"%}*%}

    {%*{%require name="common:static/js/plugins/nav-list.js"%}*%}
    {%*{%require name="common:static/js/plugins/sliderWF.js"%}*%}
    {%* <script>
         // Set configuration
         seajs.config({
             base: "/js/",
             alias: {
 //            "jquery": "plugins/jquery/jquery-1.11.3.js",
                 "nav-list": "plugins/nav-list.js",
                 "sliderWF": "plugins/sliderWF.js",
                 "event": "event.js",
                 "utils": "utils.js",
                 "supportIE8": "supportIE8.js"
             }
         });
         seajs.use('/static/tianpeng/src/main', function (a) {
 //        a.doSomething();
             slider = new SliderWF({
                 rootTag: ".top-focus",
                 millisec: 5000
             });
             slider.sliderInit();


             var navListE = document.getElementById("J-menu-top");
             Utils.bindingToggleStyle(navListE, {display: "none"});

             NavList("J-nav-list", loadDesign);
         });

     </script>*%}
    <!--<script src="../js/plugins/nav-list.js" type="text/javascript"></script>-->
    <!--<script src="../js/plugins/sliderWF.js" type="text/javascript"></script>-->
    <!--<script src="../js/supportIE8.js" type="text/javascript"></script>-->
    <!--<script src="../js/event.js" type="text/javascript"></script>-->
    <script>
        (function () {


            slider = new SliderWF({
                rootTag: ".top-focus",
                millisec: 5000
            });
            slider.sliderInit();


            var navListE = document.getElementById("J-menu-top");
            Utils.bindingToggleStyle(navListE, {display: "none"});

            NavList("J-nav-list", loadDesign);


        })();
        function loadDesign(element, callback) {
            Utils.myAjax({
                url: "../test/ajax.json",
                async: true,
                returnType: "json",
                success: function (data) {
                    var dom = "";
                    if (data.success) {
                        for (var i = 0; i < data.data.designsList.length; i++) {
                            dom += '<div class="design-item">'
                                    + '<a href="#" class="design-item-pic">'
                                    + '<p class="mask-box">'
                                    + data.data.designsList[i].designsTitle
                                    + '</p>'
                                    + '<img class="design-item-pic-img" src="' + data.data.designsList[i].img + '" alt="作品图片" />'
                                    + '</a>'
                                    + '<div class="top-line clearfix">'
                                    + '<div class="head-circle circle fl" style="background: url(' + data.data.designsList[i].author.img + ')" top></div>'
                                    + '<p class="name-design-item fl">' + data.data.designsList[i].author.name + '</p>'
                                    + '<div title="超级用户" class="fr s-sm"></div>'
                                    + '</div>'
                                    + '<div class="mid-line clearfix">'
                                    + '<a href="#" id="">' + data.data.designsList[i].designsType + '</a>'
                                    + '<img class="fr" src="img/heart.png" alt=""/>'
                                    + ' </div>'
                                    + '<div class="bottom-line clearfix">'
                                    + '<span class="gray-font fl" id="loadTime">' + data.data.designsList[i].loadTime + '</span>'
                                    + '<span class="gray-font fr" id="like">' + data.data.designsList[i].like + '</span>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>';
                        }
                    }
                    element.innerHTML = dom;
                    callback();
                },
                error: function (data) {

                }
            });
        }
    </script>
{%/body%}
{%/html%}
