<!doctype html>
{%html lang="zh-Hans" framework="common:static/js/mod.js"%}
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

{%require name="common:static/css/cssreset.css"%}
{%require name="common:static/css/base.css"%}
{%require name="common:static/css/sliderWF.css"%}
{%/head%}
{%body id="screen"%}
    {%require name="common:static/js/plugins/jquery/jquery-1.11.3.js"%}
    {%require name="common:static/js/event.js"%}
    {%require name="common:static/js/utils.js"%}
    {%require name="common:static/js/supportIE8.js"%}
    {%require name="common:static/js/plugins/sliderWF.js"%}
    {%require name="common:static/js/plugins/nav-list.js"%}
    {%require name="common:static/js/init.js"%}
    {%require name="common:static/js/mybase.js"%}
    {%widget name="common:widget/header/header.tpl"%}
    {%block name="main"%}{%/block%}

    {%widget name="common:widget/footer/footer.tpl"
    QrCode=$dataFirst.data.QrCode about=$dataFirst.data.about
    help=$dataFirst.data.help friendlink=$dataFirst.data.friendlink
    copyrightContent=$dataFirst.data.copyrightContent copyright=$dataFirst.data.copyright%}

{%script%}

    require.async("common:static/js/init2.js");

{%/script%}
{%/body%}
{%/html%}
