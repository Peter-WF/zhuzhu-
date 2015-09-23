<!doctype html>
{%html lang="zh-Hans" framework="common:static/mod.js"%}
{%head%}
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="">
<!--	//��ҳ�ֻ�wap2.0��ҳ��head�������������Ԫ��ǩ����iPhone���������ҳ�潫��ԭʼ��С��ʾ�������������š�  -->
<meta content="yes" name="apple-mobile-web-app-capable">
<!--	// ����Ӧ�õ���һ������    -->
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<!--	//ָ����iphone��safari���˵�״̬������ʽ -->
<meta content="telephone=yes" name="format-detection">
<!--	//���� HTML ҳ�����ֻ������ʱ���ñ�ǩ����ָ���Ƿ���ҳ�����е��ֻ�������ʾΪ���ŵĳ����ӡ� -->
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
                                    + '<img class="design-item-pic-img" src="' + data.data.designsList[i].img + '" alt="��ƷͼƬ" />'
                                    + '</a>'
                                    + '<div class="top-line clearfix">'
                                    + '<div class="head-circle circle fl" style="background: url(' + data.data.designsList[i].author.img + ')" top></div>'
                                    + '<p class="name-design-item fl">' + data.data.designsList[i].author.name + '</p>'
                                    + '<div title="�����û�" class="fr s-sm"></div>'
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
