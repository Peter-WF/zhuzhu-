{%*{%require name="js/nav-list.js"%}*%}
{%*{%require name="common:static/js/nav-list.js"%}*%}
{%*{%require name="common:static/js/plugins/nav-list.js"%}*%}
<div class="designs-container">
    <div class="row designs-container-row clearfix">
        <h2 class="designs-container-title">������Ʒ</h2>

        <div class="design-list " id="J-nav-list">
            <a href="#tab1" data-targetid="tab1" class="single-design-box J-nav-item active">
                ƽ��
            </a>
            <a href="#tab2" data-targetid="tab2" class="single-design-box J-nav-item">
                ��ҳ
            </a>
            <a href="#tab3" data-targetid="tab3" class="single-design-box J-nav-item">
                �ƶ�APP
            </a>
            <a href="#tab4" data-targetid="tab4" class="single-design-box J-nav-item">
                �廭
            </a>
        </div>

        <a href="javascript:void(0);" class="more-box gray-box">MORE +</a>

        <div class="designs-pic-list clearfix tab active J-loaded" id="tab1">
            {%foreach $designsList as $design%}
            <div class="design-item">
                <a href="#" class="design-item-pic">
                    <p class="mask-box" id="designs-itle">
                        {%$design.designsTitle%}
                    </p>
                    <img class="design-item-pic-img" src="img/test-img3.png" alt="��ƷͼƬ" id="designs-mg"/>
                </a>

                <div class="top-line clearfix">
                    <a href="#" class="head-circle circle fl"
                       id="author-img">
                        <img src="img/boy-img.png" alt="����ͷ��">
                    </a>

                    <p class="name-design-item fl" id="" id="author-name">{%$design.author.name%}</p>

                    <div title="�����û�" class="fr s-sm"></div>
                </div>
                <div class="mid-line clearfix">
                    <a href="#" id="">{%$design.designsType%}</a>
                    <img class="fr" src="img/heart.png" alt=""/>
                </div>
                <div class="bottom-line clearfix">
                    <span class="gray-font fl" id="loadTime">{%$design.loadTime%}</span>
                    <span class="gray-font fr" id="like">{%$design.like%}</span>
                </div>
            </div>
            {%/foreach%}
        </div>
        <div class="designs-pic-list clearfix tab" id="tab2">
            <img src="img/loading.gif">����Ŭ��������
        </div>
        <div class="designs-pic-list clearfix tab" id="tab3">

        </div>
        <div class="designs-pic-list clearfix tab" id="tab4">

        </div>
    </div>
</div>