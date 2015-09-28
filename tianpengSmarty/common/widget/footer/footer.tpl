<div class="footer">
  <div class="row footer-row">

    <div class="grid zbj-grid ui-footer-nav clearfix">
      <img src="img/qr-code.png" alt="" class="Qr-code"/>
      {%*{%uri name="common:widget/footer/$QrCode"%}*%}
      {%*{%var_dump($dataFirst.data.QrCode)%}*%}
      <dl class="item-about">
        <dt class="about-title"><a class="red-font" href="#" target="_blank" title="关于"><i></i> 关于</a></dt>
        {%foreach $about as $item%}
        <dd class="about-content"><a rel="nofollow" target="_blank" href="{%$item.value%}">{%$item.key%}</a></dd>
        {%/foreach%}
        <dd class="about-content"><a rel="nofollow" target="_blank" href="#">交易流程</a></dd>
        <dd class="about-content"><a rel="nofollow" target="_blank" href="#">免责声明</a></dd>
        <dd class="about-content"><a rel="nofollow" target="_blank" href="#">网站地图</a></dd>
        <dd class="about-content"><a rel="nofollow" target="_blank" href="#">服务协议</a></dd>
      </dl>
      <dl class="item-help">
        <dt class="help-title"><a class="red-font" href="#" target="_blank" title="帮助"><i></i>帮助</a></dt>
        {%foreach $help as $item%}
        <dd class="help-content"><a rel="nofollow" target="_blank" href="{%$item.value%}">{%$item.key%}</a></dd>
        {%/foreach%}
      </dl>
      <dl class="item-friendlink">
        <dt class="friendlink-title"><a class="red-font" href="#" target="_blank" title="友情链接"><i></i> 友情链接</a>
        </dt>
        {%foreach $friendlink as $item%}
          <dd class="friendlink-content"><a rel="nofollow" target="_blank" href="{%$item.value%}">{%$item.key%}</a></dd>
        {%/foreach%}
        <dd class="friendlink-content"><a rel="nofollow" target="_blank" href="#">站酷网</a></dd>
        <dd class="friendlink-content"><a rel="nofollow" target="_blank" href="#">阿爱上</a></dd>
        <dd class="friendlink-content"><a rel="nofollow" target="_blank" href="#">武器二去</a></dd>
        <dd class="friendlink-content"><a rel="nofollow" target="_blank" href="#">子阿斯顿</a></dd>
      </dl>
      <img src="img/divider.png" alt="" class="divider-img"/>
      <dl class="item-copyright">
        <dt class="copyright-title">版权信息</dt>
        <dd class="copyright-content">
          {%$copyrightContent%}
        </dd>
        <dd class="item-phone">
          <img src="img/red-phone.png" alt="电话"/>

          <p class="phone-content">400-188-6666</p>

          <p class="phone-time">Mon - Sun 9:00 - 23:00</p>
        </dd>
        <dd class="item-qq">
          <img src="img/red-tencent-footer.png" alt="qq"/>

          <p class="qq-content">12578587954</p>

          <p class="qq-time">Mon - Sun 9:00 - 23:00</p>
        </dd>
      </dl>
    </div>
    <div class="copyright">
      <img src="img/cross-divider.png" alt="" class="copyright-cross-divider-img"/>
      <span>Copyright</span>
      <span>&copy;</span>
      <span>2015</span>
      <span>-</span>
      <span>2015</span>
      <span>Tianpeng</span>
      <span>Web</span>
      <span>天蓬网版权所有</span>
      <span>渝ICP备10202274号-8</span>
    </div>
  </div>
</div>