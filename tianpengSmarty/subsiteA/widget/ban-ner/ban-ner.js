////��� ����slider��� 2015��8��13��00:36:37
; //����ֺ����ڱ�����һ��js �ٷֺ�
(function ($) {
    //var SliderWF = function () { ����дҲ����
    function SliderWF(data) {

        this.rootTag = data.rootTag ? data.rootTag : ""; //���ڵ�
        this.nView = data.nView ? data.nView : 1; //ÿ��.sliderWF-main����Ҫչʾ������
        this.viewheight = data.viewheight ? data.viewheight : $(this.rootTag + " .sliderWF").css("height"); //��ʾ���ָ߶�
        this.viewwidthTotal = data.viewwidthTotal ? data.viewwidthTotal : $(this.rootTag + " .sliderWF").css("width"); //��ȡ��ʾ�����ܿ��
        this.viewpadding = data.viewpadding ? data.viewpadding : 0; //padding���Ҽ��
        this.speed = data.speed ? data.speed : 1500; //Ĭ��:�����ٶ�
        this.prevTagClassOrId = data.prevTagClassOrId ? data.prevTagClassOrId : ".sliderWF-prev"; //ǰһ�� ��ť
        this.nextTagClassOrId = data.nextTagClassOrId ? data.nextTagClassOrId : ".sliderWF-next"; //��һ�� ��ť
        this.totalTagClassOrId = data.totalTagClassOrId ? data.nextTagClassOrId : ".sliderWF-total"; //���ܻ�����
        this.currentIndexTagClassOrId = data.currentIndexTagClassOrId ? data.nextTagClassOrId : ".sliderWF-currentIndex"; //�󶨵�ǰ�������tag

        this.ifAnimate = false; //�Ƿ����ڶ���
        this.currentSliderIndex = 0; //��¼��ǰչʾ�Ļ�������
        this.nImg = $(this.rootTag + " .sliderWF-main img," + this.rootTag + " .sliderWF-main .imgWF").length; //��ȡ������Ŀ�������� .sliderWF-main ���
        this.viewwidth = this.viewwidthTotal.substr(0, this.viewwidthTotal.length - 2) / this.nView + "px"; //ÿ��չʾ��Ŀ��

        this.millisec=data.millisec?data.millisec:5000;
        this.moveType=1;//-1��ʾ�����

    };
    //SliderWF.sliderLeft= function (_this_) {
    //    //��������
    //    //�ж��Ƿ����ڶ��� ������ڶ����򲻼���
    //    if (_this_.currentSliderIndex < _this_.nImg - 1 * _this_.nView && !_this_.ifAnimate) {
    //        _this_.ifAnimate = !_this_.ifAnimate; //����
    //        _this_.currentSliderIndex++;
    //        _this_.sliderAnimate(_this_);
    //    }
    //};
    SliderWF.prototype = {
        sliderInit: function () {
            $(this.rootTag + " .sliderWF " + this.prevTagClassOrId).hide(); //�����󻬿鰴ť
            $(this.rootTag + " .sliderWF " + this.totalTagClassOrId).html(this.nImg);
            var _this_ = this; //����this����
            $(this.rootTag + " .sliderWF-main img ," + this.rootTag + " .sliderWF-main .imgWF").each(function () { //
                $(this).css("height", _this_.viewheight); //����ͼƬ��ȸ߶�
                $(this).css("width", _this_.viewwidth.substr(0, _this_.viewwidth.length - 2) - _this_.viewpadding * 2 + "px");
            });
            //delete this.viewwidth;//��ɾ����������
            $(this.rootTag + " .sliderWF-main").css("width", this.viewwidth.substr(0, this.viewwidth.length - 2) * this.nImg);
            if (SliderWF[this.rootTag]) {
                $(this.rootTag + " .sliderWF " + this.prevTagClassOrId).off("click");
                $(this.rootTag + " .sliderWF " + this.nextTagClassOrId).off("click");
                _this_.currentSliderIndex = 0;
                _this_.ifAnimate = !_this_.ifAnimate; //����
                _this_.sliderAnimate(_this_);
            } else {
                SliderWF[this.rootTag] = true;
            }
            $(this.rootTag + " .sliderWF " + this.prevTagClassOrId).click(function (e) {
                //��������
                e.stopPropagation();
                if (_this_.currentSliderIndex > 0 && !_this_.ifAnimate) {
                    _this_.ifAnimate = !_this_.ifAnimate; //����
                    _this_.currentSliderIndex--;
                    _this_.sliderAnimate(_this_);
                }
            });
            $(this.rootTag + " .sliderWF " + this.nextTagClassOrId).click(function (e) {
                //��������
                e.stopPropagation();
                //�ж��Ƿ����ڶ��� ������ڶ����򲻼���
                if (_this_.currentSliderIndex < _this_.nImg - 1 * _this_.nView && !_this_.ifAnimate) {
                    _this_.ifAnimate = !_this_.ifAnimate; //����
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
            //��������
            //�ж��Ƿ����ڶ��� ������ڶ����򲻼���
            if (!this.ifAnimate) {
                this.ifAnimate = !this.ifAnimate; //����
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
            var _this_ = this; //����this����
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
                //��ΪcurrentSliderIndex�Ǵ�0��ʼ
                $(_this_.rootTag + " .sliderWF " + _this_.currentIndexTagClassOrId).html(parseInt(_this_.currentSliderIndex) + 1);
                _this_.ifAnimate = !_this_.ifAnimate; //����
            });
        },
        returnIfAnimate: function () {
            return this.ifAnimate;
        },
        //this.sliderInit(this);//����ԭ�ͷ���
        //��Ҫ�˴�������Լ�����ȥ ��Ϊ��ִ�� .click .each .animate(function(){ this })ʱ "this" �Ѿ�������SliderWF
        // this ��ָ������������Ǹ�function�����Ķ���

        ////����ָ��millisec��ִ�й���
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