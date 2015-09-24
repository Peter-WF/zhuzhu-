{%extends file="common/page/layout.tpl"%}
{%block name="main"%}
  {%widget name="B:widget/post/post.tpl" post=$data.post%}
  {%var_dump($data.dataFirst)%}
{%/block%}