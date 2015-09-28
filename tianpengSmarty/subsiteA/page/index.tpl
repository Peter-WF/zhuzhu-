{%extends file="common/page/layout.tpl"%}
{%block name="main"%}
    {%widget name="tianpeng:widget/ban-ner/ban-ner.tpl" tradingPushList=$dataFirst.data.tradingPushList %}
    {%widget name="tianpeng:widget/top-container/top-container.tpl" sliderImg=$dataFirst.data.sliderImg %}
    {%widget name="tianpeng:widget/designer-container/designer-container.tpl" designers=$dataFirst.data.designers %}
    {%widget name="tianpeng:widget/designs-container/designs-container.tpl" designsList=$dataFirst.data.designsList %}
    {%widget name="tianpeng:widget/features-container/features-container.tpl"%}
{%/block%}