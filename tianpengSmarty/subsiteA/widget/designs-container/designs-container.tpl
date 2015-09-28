{%*{%require name="js/nav-list.js"%}*%}
{%*{%require name="common:static/js/nav-list.js"%}*%}
{%*{%require name="common:static/js/plugins/nav-list.js"%}*%}
<div class="designs-container">
    <div class="row designs-container-row clearfix">
        <h2 class="designs-container-title">海量作品</h2>

        <div class="design-list " id="J-nav-list">
            <a href="#tab1" data-targetid="tab1" class="single-design-box J-nav-item active">
                平面
            </a>
            <a href="#tab2" data-targetid="tab2" class="single-design-box J-nav-item">
                网页
            </a>
            <a href="#tab3" data-targetid="tab3" class="single-design-box J-nav-item">
                移动APP
            </a>
            <a href="#tab4" data-targetid="tab4" class="single-design-box J-nav-item">
                插画
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
                    <img class="design-item-pic-img" src="img/test-img3.png" alt="作品图片" id="designs-mg"/>
                </a>

                <div class="top-line clearfix">
                    <a href="#" class="head-circle circle fl"
                       id="author-img">
                        <img src="img/boy-img.png" alt="个人头像">
                    </a>

                    <p class="name-design-item fl" id="" id="author-name">{%$design.author.name%}</p>

                    <div title="超级用户" class="fr s-sm"></div>
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
            <img src="img/loading.gif">正在努力加载中
        </div>
        <div class="designs-pic-list clearfix tab" id="tab3">

        </div>
        <div class="designs-pic-list clearfix tab" id="tab4">

        </div>
    </div>
</div>