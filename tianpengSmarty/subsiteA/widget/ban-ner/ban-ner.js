////王斐 滑块slider插件 2015年8月13日00:36:37
; //这个分号用于避免上一个js 少分号
(function ($) {
    //var SliderWF = function () { 这样写也可以
    function SliderWF(data) {

        this.rootTag = data.rootTag ? data.rootTag : ""; //根节点
        this.nView = data.nView ? data.nView : 1; //每个.sliderWF-main中需要展示的项数
        this.viewheight = data.viewheight ? data.viewheight : $(this.rootTag + " .sliderWF").css("height"); //显示部分高度
        this.viewwidthTotal = data.viewwidthTotal ? data.viewwidthTotal : $(this.rootTag + " .sliderWF").css("width"); //获取显示区域总宽度
        this.viewpadding = data.viewpadding ? data.viewpadding : 0; //padding左右间隔
        this.speed = data.speed ? data.speed : 1500; //默认:定义速度
        this.prevTagClassOrId = data.prevTagClassOrId ? data.prevTagClassOrId : ".sliderWF-prev"; //前一个 按钮
        this.nextTagClassOrId = data.nextTagClassOrId ? data.nextTagClassOrId : ".sliderWF-next"; //后一个 按钮
        this.totalTagClassOrId = data.totalTagClassOrId ? data.nextTagClassOrId : ".sliderWF-total"; //绑定总滑块数
        this.currentIndexTagClassOrId = data.currentIndexTagClassOrId ? data.nextTagClassOrId : ".sliderWF-currentIndex"; //绑定当前滑块序号tag

        this.ifAnimate = false; //是否正在动画
        this.currentSliderIndex = 0; //记录当前展示的滑块序数
        this.nImg = $(this.rootTag + " .sliderWF-main img," + this.rootTag + " .sliderWF-main .imgWF").length; //获取滑块数目用于设置 .sliderWF-main 宽度
        this.viewwidth = this.viewwidthTotal.substr(0, this.viewwidthTotal.length - 2) / this.nView + "px"; //每个展示项的宽度

        this.millisec=data.millisec?data.millisec:5000;
        this.moveType=1;//-1表示向左滚

    };
    //SliderWF.sliderLeft= function (_this_) {
    //    //滑块左移
    //    //判断是否正在动画 如果正在动画则不继续
    //    if (_this_.currentSliderIndex < _this_.nImg - 1 * _this_.nView && !_this_.ifAnimate) {
    //        _this_.ifAnimate = !_this_.ifAnimate; //加锁
    //        _this_.currentSliderIndex++;
    //        _this_.sliderAnimate(_this_);
    //    }
    //};
    SliderWF.prototype = {
        sliderInit: function () {
            $(this.rootTag + " .sliderWF " + this.prevTagClassOrId).hide(); //隐藏左滑块按钮
            $(this.rootTag + " .sliderWF " + this.totalTagClassOrId).html(this.nImg);
            var _this_ = this; //保存this变量
            $(this.rootTag + " .sliderWF-main img ," + this.rootTag + " .sliderWF-main .imgWF").each(function () { //
                $(this).css("height", _this_.viewheight); //设置图片宽度高度
                $(this).css("width", _this_.viewwidth.substr(0, _this_.viewwidth.length - 2) - _this_.viewpadding * 2 + "px");
            });
            //delete this.viewwidth;//会删除这条属性
            $(this.rootTag + " .sliderWF-main").css("width", this.viewwidth.substr(0, this.viewwidth.length - 2) * this.nImg);
            if (SliderWF[this.rootTag]) {
                $(this.rootTag + " .sliderWF " + this.prevTagClassOrId).off("click");
                $(this.rootTag + " .sliderWF " + this.nextTagClassOrId).off("click");
                _this_.currentSliderIndex = 0;
                _this_.ifAnimate = !_this_.ifAnimate; //加锁
                _this_.sliderAnimate(_this_);
            } else {
                SliderWF[this.rootTag] = true;
            }
            $(this.rootTag + " .sliderWF " + this.prevTagClassOrId).click(function (e) {
                //滑块右移
                e.stopPropagation();
                if (_this_.currentSliderIndex > 0 && !_this_.ifAnimate) {
                    _this_.ifAnimate = !_this_.ifAnimate; //加锁
                    _this_.currentSliderIndex--;
                    _this_.sliderAnimate(_this_);
                }
            });
            $(this.rootTag + " .sliderWF " + this.nextTagClassOrId).click(function (e) {
                //滑块左移
                e.stopPropagation();
                //判断是否正在动画 如果正在动画则不继续
                if (_this_.currentSliderIndex < _this_.nImg - 1 * _this_.nView && !_this_.ifAnimate) {
                    _this_.ifAnimate = !_this_.ifAnimate; //加锁
                    _this_.currentSliderIndex++;
                    _this_.sliderAnimate(_this_);
                }
            });
            setInterval(function () {
                _this_.sliderLeft(_this_)
            }, _this_.millisec);
            //setInterval(this.millisec,this.sliderLeft());
        },
        sliderLeft: function () {
            //滑块左移
            //判断是否正在动画 如果正在动画则不继续
            if (!this.ifAnimate) {
                this.ifAnimate = !this.ifAnimate; //加锁
                if(this.currentSliderIndex==this.nImg-1 ){
                    this.moveType=-1;
                }else if(this.currentSliderIndex==0 ){
                    this.moveType=1;
                }
                this.currentSliderIndex+=this.moveType;
                this.sliderAnimate(this);
            }
        },
        sliderAnimate: function () {
            var _this_ = this; //保存this变量
            $(this.rootTag + " .sliderWF-main ").animate({
                marginLeft: this.viewwidth.substr(0, this.viewwidth.length - 2) * this.currentSliderIndex * (-1) + 'px'
            }, _this_.speed, function () {
                $(_this_.rootTag + " .sliderWF " + _this_.prevTagClassOrId).show();
                $(_this_.rootTag + " .sliderWF " + _this_.nextTagClassOrId).show();
                if (_this_.currentSliderIndex == 0) {
                    $(_this_.rootTag + " .sliderWF " + _this_.prevTagClassOrId).hide();
                }
                if (_this_.currentSliderIndex == _this_.nImg - 1 * _this_.nView) {
                    $(_this_.rootTag + " .sliderWF " + _this_.nextTagClassOrId).hide();
                }
                //因为currentSliderIndex是从0开始
                $(_this_.rootTag + " .sliderWF " + _this_.currentIndexTagClassOrId).html(parseInt(_this_.currentSliderIndex) + 1);
                _this_.ifAnimate = !_this_.ifAnimate; //解锁
            });
        },
        returnIfAnimate: function () {
            return this.ifAnimate;
        },
        //this.sliderInit(this);//调用原型方法
        //重要此处必须把自己传进去 因为在执行 .click .each .animate(function(){ this })时 "this" 已经不再是SliderWF
        // this 是指距离他最近的那个function所属的对象

        ////用于指定millisec后执行滚动
        //sliderByTime: function (_this_) {
        //    //if (Object.prototype.toString.call(cb) == "[object Function]") {
        //    //    callback = cb;
        //    //}
        //    setInterval(SliderWF.sliderLeft(_this_),_this_.millisec);
        //}
    };
    //window["SliderWF"] = SliderWF;
    window.SliderWF = SliderWF;
})(jQuery);