<div class="designer-container">

    <div class="row designer-container-row clearfix">
        <h2 class="designer-container-title">推荐设计师</h2>
        <!--<a href="#" class="more-box red-box">MORE +</a>-->
        <a href="javascript:void(0);" class="more-box gray-box">MORE +</a>
        {%*{%var_dump($dataFirst.data.designers)%}*%}
        <div class="designer-list clearfix">
            {%foreach $designers as $designer%}
                <div class=" single-designer-box">
                    <div class="designer-box-top clearfix">
                        <a href="#" class="circle designer-circle fl">
                            <img class="designer-img" src="img/girl.png" alt="">

                            <div class="blue-box"><span class="white-font">{%$designer.state%}</span></div>
                        </a>
                        {%if $designer.type eq 's'%}
                            <div class="super-designer-sm" title="超级用户"></div>
                        {%else if $designer.type eq 'g'%}
                            <div class="good-designer-sm" title="高级用户"></div>
                        {%else if $designer.type eq 'p'%}
                            <div class="general-designer-sm" title="超级用户"></div>
                        {%/if%}
                        <div class="fl">
                            <p class="designer-name">{%$designer.designername%}</p>

                            <p class="designer-from">来源：{%$designer.comeFrom%}</p>

                            <p class="designer-number">成交数：<span>{%$designer.designer-number%}</span></p>
                        </div>
                    </div>
                    <div class="designer-box-bottom">
                        <ul class="designer-work-list">
                            {%foreach $designer.designerWorks as $designerWork%}
                                <li class="designer-work">
                                    <img class="designer-work-pic" src="img/test-img1.png"
                                         alt="{%$designerWork.detail%}"/>
                                </li>
                            {%/foreach%}
                        </ul>
                    </div>
                </div>
            {%/foreach%}
        </div>
    </div>
</div>