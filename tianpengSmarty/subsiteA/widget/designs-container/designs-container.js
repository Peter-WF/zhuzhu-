//navList�¼�����
;
(function () {
    /**
     *
     * @param id
     * @constructor
     */
    function NavList(id,callback) {
        return new NavList.prototype.init(id,callback);
    }

    NavList.prototype = {
        //TODO���￼���Ƿ���Ҫ��OperationFunctuon���ڹ��췽�������ⱻ����
        init: function (id,callback) {
            var navListE = document.getElementById(id);
            EventUtil.addEvent(navListE, "click", this.OperationFunctuon(id,callback));
            return this;
        },
        OperationFunctuon: function (id,callback) {
            // ����¼�Դe.targe�Ƿ�ΪJ-nav-item
            var currentActiveTab = "";//���ñհ���������
            var navListE = document.getElementById(id);
            var callback=callback;
            return function (e) {
                //TODO ������� J-nav-item����д����̫��
                var currentId = e.target ? e.target : e.srcElement;
                if (currentId && Utils.hasClass(currentId, "J-nav-item")) {
                    //��ֹĬ���¼�

                    //e.preventDefault();
                    (e.preventDefault) ? e.preventDefault() : e.returnValue = false;
                    //��ֹ�¼�ð��
                    (e.stopPropagation) ? e.stopPropagation() : e.cancelBubble = true;

                    var parentElement = navListE;
                    //this.parentNode.firstChild()
                    var childrenElementList = parentElement.children;
                    var targetId = currentId.getAttribute("data-targetid");//�õ���ǰ�������data-targetid����


                    for (var i = 0; i < childrenElementList.length; i++) {
                        Utils.removeClass(childrenElementList[i], "active");//�Ƴ�����active//TODO ��Ҫ�Ż�
                    }
                    Utils.addClass(currentId, "active");//����ǰ��������active

                    var allTab = document.getElementsByClassName("tab");
                    if (currentActiveTab == "") {
                        for (var i = 0; i < allTab.length; i++) {
                            Utils.removeClass(allTab[i], "active");//�Ƴ�����active//TODO ��Ҫ�Ż�
                        }
                    } else {

                        Utils.removeClass(document.getElementById(currentActiveTab), "active");
                    }
                    currentActiveTab = targetId;
                    var targetElement = document.getElementById(targetId);
                    if (!Utils.hasClass(targetElement, "J-loaded")) {
                        Utils.addClass(targetElement, "loading");
                        targetElement.innerHTML = '<div> <img src="img/loading.gif">����Ŭ��������</div>';

                        var _this_ = this;
                        callback(targetElement,function(){
                            Utils.removeClass(targetElement,"loading");
                        });
                        //setTimeout(function (_this_) {
                        //    targetElement.innerHTML = "���سɹ�";
                        //    Utils.removeClass(targetElement, "loading");
                        //
                        //}, 1000);
                    } else {
                    }
                    Utils.addClass(targetElement, "active");//���active��
                    Utils.addClass(targetElement, "J-loaded");//���J-loaded��

                    return
                }
            }
        }
    }
    NavList.prototype.init.prototype = NavList.prototype;
    window.NavList = NavList;
})()
