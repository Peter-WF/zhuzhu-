{%*{%require name="js/sliderWF.js"%}*%}
{%*{%require name="common:static/js/plugins/sliderWF.js"%}*%}
<div class="ban-ner" style="">
    <div class="menu-top">
        <div class="logo-img" alt="������"></div>
        <div class="menu-navbar-toggle  toggle-btn" data-toggle="J-menu-top" type="button">
            �˵�
        </div>
        <ul class="menu-top-ul clearfix" style="display: none;" id="J-menu-top">
            <li class="fl menu-top-li">��ҳ</li>
            <li class="fl menu-top-li">���ʦ</li>
            <li class="fl menu-top-li">�ɹ�����</li>
            <li class="fl menu-top-li">��Ʒ����</li>
        </ul>
    </div>
    <div class="function-div">
        <div class="function-box">������ƥ�����ʦ</div>
        <div class="function-box  onload-box">
            <div class="onload-img" alt="�ϴ�"></div>
            �ϴ���Ʒ
        </div>
    </div>
    <div class="banner-center">
        <span class="big-h">רҵ�г������׽���</span>

        <span class="big-h2">��ƴ��Ƽ� ��ѧ��׼�����׻��� ƽ̨0Ӷ��</span>
        <a href="#" class="center-btn">�˽�������</a>

        <div class="trading-push">
            {%foreach $tradingPushList as $tradingPush%}
                <a class="trading-item">
                    ����
                <span class="emphasis ">
                    {%$tradingPush.employerName%}
                </span>
                    �����ʦ
                <span class="emphasis ">
                    {%$tradingPush.designerName%}</span>�ɹ���ɺ��������
                <span class="emphasis ">
                     {%$tradingPush.money%}
                </span>
                    Ԫ
                </a>
            {%/foreach%}
        </div>
    </div>
</div>