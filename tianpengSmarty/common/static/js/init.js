(function () {


    slider = new SliderWF({
        rootTag: ".top-focus",
        millisec: 5000
    });
    slider.sliderInit();


    var navListE = document.getElementById("J-menu-top");
    Utils.bindingToggleStyle(navListE, {display: "none"});

    NavList("J-nav-list", loadDesign);
    function loadDesign(element, callback) {
        Utils.myAjax({
            url: "../../ajax.json",
            async: true,
            returnType: "json",
            success: function (data) {
                var dom = "";
                if (data.success) {
                    for (var i = 0; i < data.data.designsList.length; i++) {
                        dom += '<div class="design-item">'
                            + '<a href="#" class="design-item-pic">'
                            + '<p class="mask-box">'
                            + data.data.designsList[i].designsTitle
                            + '</p>'
                            + '<img class="design-item-pic-img" src="' + data.data.designsList[i].img + '" alt="作品图片" />'
                            + '</a>'
                            + '<div class="top-line clearfix">'
                            + '<div class="head-circle circle fl" style="background: url(' + data.data.designsList[i].author.img + ')" top></div>'
                            + '<p class="name-design-item fl">' + data.data.designsList[i].author.name + '</p>'
                            + '<div title="超级用户" class="fr s-sm"></div>'
                            + '</div>'
                            + '<div class="mid-line clearfix">'
                            + '<a href="#" id="">' + data.data.designsList[i].designsType + '</a>'
                            + '<div class="fr like-img"></div>'
                            + ' </div>'
                            + '<div class="bottom-line clearfix">'
                            + '<span class="gray-font fl" id="loadTime">' + data.data.designsList[i].loadTime + '</span>'
                            + '<span class="gray-font fr" id="like">' + data.data.designsList[i].like + '</span>'
                            + '</div>'
                            + '</div>'
                            + '</div>';
                    }
                }
                element.innerHTML = dom;
                callback();
            },
            error: function (data) {

            }
        });
    }

})();