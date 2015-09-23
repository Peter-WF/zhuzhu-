{%extends file="common/page/layout.tpl"%}
{%block name="main"%}
  {%widget name="A:widget/post-list/post-list.tpl" posts=$data.posts%}
  {%widget name="A:widget/container.tpl" posts=$data.posts%}
{%/block%}