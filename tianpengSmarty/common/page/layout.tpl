<!doctype html>
{%html lang="zh-Hans" framework="common:static/js/mod.js"%}
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
