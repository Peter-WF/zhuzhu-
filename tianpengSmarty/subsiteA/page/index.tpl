{%extends file="common/page/layout.tpl"%}
{%block name="main"%}
    {%widget name="A:widget/ban-ner/ban-ner.tpl" tradingPushList=$dataFirst.data.tradingPushList %}
    {%widget name="A:widget/top-container/top-container.tpl" sliderImg=$dataFirst.data.sliderImg %}
    {%widget name="A:widget/designer-container/designer-container.tpl" designers=$dataFirst.data.designers %}
    {%widget name="A:widget/designs-container/designs-container.tpl" designsList=$dataFirst.data.designsList %}
    {%widget name="A:widget/features-container/features-container.tpl"%}
{%/block%}