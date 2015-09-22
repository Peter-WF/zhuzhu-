<?php

$posts = array(
    array(
        "title" => "post 1",
        "link" => "/post/id/1",
        "content" => "content 11"
    ),
    array(
        "title" => "post 2",
        "link" => "/post/id/2",
        "content" => "content 2"
    ),
    array(
        "title" => "post 3",
        "link" => "/post/id/3",
        "content" => "content 3"
    )
);
$dataFirst = array(
    "success" => true,
    "data" => array(
        "tradingPushList" => array(
            array(
                "employerName" => "\"Peter\"",
                "designerName" => "\"Nancy\"",
                "money" => 10000
            ), array(
                "employerName" => "\"Peter\"",
                "designerName" => "\"Nancy\"",
                "money" => 10000
            )
        ),
        "sliderImg" => array(
            array(
                "detail" => "设计好才是王道",
                "src" => "/img/slider.png"
            ),
            array(
                "detail" => "设计好才是王道",
                "src" => "/img/slider.png"
            ),
            array(
                "detail" => "设计好才是王道",
                "src" => "/img/slider.png"
            ),
            array(
                "detail" => "设计好才是王道",
                "src" => "/img/slider.png"
            )
        ),
        "designers" => array(
            array(
                "userId" => 110,
                "headimg" => "img/girl.png",
                "designername" => "某设计",
                "comeFrom" => "来源=>腾讯公司 网页设计",
                "designer-number" => 0,
                "type" => "s",
                "state" => "free",
                "designerWorks" => array(
                    array(
                        "pic" => "/img/test-img1.png",
                        "detail" => "有没有觉得很有创意呀"
                    ),
                    array(
                        "pic" => "/img/test-img1.png",
                        "detail" => "有没有觉得很有创意呀"
                    ),
                    array(
                        "pic" => "/img/test-img1.png",
                        "detail" => "有没有觉得很有创意呀"
                    )
                )

            ),
        ),
        "designsList" => array(

            "designsId" => 111,
            "designsTitle" => "设计阿基米德定力A波车的",
            "img" => "/img/test-img3.png",
            "like" => 772,
            "loadTime" => "三小时前",
            "designsType" => "产品类型",
            "author" => array(
                "id" => 110,
                "name" => "天朋王"
            )
        ),
        "Qr-code" => "/img/qr-code.png",
        "about" => array(
            array(
                "key" => "天蓬网",
                "value" => "www.tianpeng.com"
            ),
            array(
                "key" => "版权声明",
                "value" => "www.tianpeng.com"
            )
        ),
        "help" => array(
            array(
                "key" => "天蓬规则",
                "value" => "#"
            ),
            array(
                "key" => "天蓬规则",
                "value" => "#"
            )
        ),
        "friendlink" => array(
            array(
                "key" => "天蓬网",
                "value" => "www.tianpeng.com"
            ),
            array(
                "key" => "猪八戒网",
                "value" => "www.zhubajie.com"
            )
        ),
        "copyright" => "Copyright © 2015 TianPeng.com 天蓬网版权所有渝ICP备10202274号-8"

    )
);

$id = is_numeric($_GET['id']) ? intval($_GET['id']) - 1 : 0;
$type = $_GET['type'] ? $_GET['type'] : "tradingPushList";
// 给变量 $fis_data 赋值即可
if ($dataFirst[success]) {
    $fis_data = array(
        "site" => array(
            "title" => "fis3-smarty demo"
        ),
        "data" => array(
            "post" => isset($posts[$id]) ? $posts[$id] : $posts[0],
            "dataFirst" => isset($dataFirst["data"][$type]) ? $dataFirst["data"][$type] : $dataFirst["data"][tradingPushList]
        ));
}

