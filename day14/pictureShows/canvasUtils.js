/**
 * Created by Administrator on 2015/9/25.
 */
;
(function () {
    /**
     * 创建CanvasUtils工具对象
     * @param id
     * @constructor
     */
    var CanvasUtils = function (id) {
        return new CanvasUtils.prototype.init(id, "boy.jpg");
    }
    CanvasUtils.prototype = {
        //初始化
        init: function (id, imgUrl) {
            this.canvas = document.getElementById(id);
            this.ctx = this.canvas.getContext('2d');
            this.imageData = null; //存储当前图片信息
            //初始化图片
            this.img = new Image();
            this.img.src = imgUrl;
            //坐标
            this.imgX = 0;
            this.imgY = 0;
            this.lastX = 0;
            this.lastY = 0;
            var _this_=this;
            //移除浏览器默认右键菜单事件
            this.canvas.oncontextmenu = function () {
                Utils.removeClass(_this_.canvas, "active");
                //移除涂色功能
                _this_.canvas.onmousemove = function () {
                };
                return false;
            };
            //打开图片
            document.getElementById("img-url").addEventListener("change", function () {
                _this_.clear();
                var reader = new FileReader();
                if (this.files[0]) {
                    reader.onload = function (event) {
                        _this_.img.src = event.target.result;
                        _this_.ctx.beginPath();
                        _this_.ctx.drawImage(_this_.img, 0, 0, _this_.canvas.width, _this_.canvas.height);
                        _this_.ctx.closePath();
                    };
                }
                reader.readAsDataURL(this.files[0]);
            });
            this.initKeyboard(_this_);
        }, initKeyboard: function (_this_) {
            function keypress(e) {
                var currKey = 0, CapsLock = 0, e = e || event;
                currKey = e.keyCode || e.which || e.charCode;
                CapsLock = currKey >= 65 && currKey <= 90;
                if (currKey == 32) {
                    console.log(currKey);
                    _this_.dragImg();
                }if(e.shiftKey&&currKey==115||currKey==83){
                    _this_.saveImg();
                }
            }
            function onkeyup(e){
                canvasUtils.restoreEvent();
            }
            document.onkeypress = keypress;
            document.onkeyup  = onkeyup ;
        }
        ,
        /**
         * 工具方法-画线
         * @param startX
         * @param startY
         * @param endX
         * @param endY
         */
        drawLine: function (startX, startY, endX, endY) {
            if (this.canvas.getContext) {
                //var ctx = this.canvas.getContext('2d');
                this.ctx.beginPath();         // 开始路径绘制
                this.ctx.moveTo(startX, startY);      // 设置路径起点，坐标为(20,20)
                this.ctx.lineTo(endX, endY);     // 绘制一条到(200,20)的直线
                this.ctx.lineWidth = 2.0;     // 设置线宽
                this.ctx.strokeStyle = "red"; // 设置线的颜色
                this.ctx.stroke();           // 绘制线段
                this.ctx.closePath();        // 关闭
            }
        },
        /**
         * 工具方法-将图片放在一个点上图片
         * @param centerX
         * @param centerY
         */
        moveImg: function (touchX, touchY) {
            console.log("1.imgX:" + this.imgX + ';imgY:' + this.imgY + ";");
            this.imgX = this.imgX + (touchX - this.lastX);
            this.imgY = this.imgY + (touchY - this.lastY);
            this.lastX = touchX;
            this.lastY = touchY;
            console.log("2.imgX:" + this.imgX + ';imgY:' + this.imgY + ";");
            console.log("3.lastX:" + this.lastX + ';lastY:' + this.lastY + ";");
            this.clear();
            this.insertImg(this.imgX, this.imgY);
        },
        //插入图片
        insertImg: function (x, y) {
            //var ctx = this.canvas.getContext('2d');
            this.ctx.drawImage(this.img, x | 0, y | 0); // 设置对应的图像对象，以及它在画布上的位置 默认插在左上角
            this.imageData = null; //存储当前图片信息
        },
        //保存图片
        saveImg: function () {
            var image = new Image();
            image.src = this.canvas.toDataURL("image/png");
            this.img = image;
            //return image;
        },
        //修改Canvas信息
        updateCanvasData: function () {
            var currentImgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);//存储当前图片信息
            if (!this.imageData) {
                this.imageData = currentImgData;
            }
            var red = document.getElementById("red").value * 2.55;
            var green = document.getElementById("green").value * 2.55;
            var blue = document.getElementById("blue").value * 2.55;
            var opacity = document.getElementById("opacity").value * 2.55;
            for (var i = 0; i < this.imageData.data.length; i++) {
                if (i % 4 == 0) {
                    currentImgData.data[i] = this.imageData.data[i] + red;
                } else if (i % 4 == 1) {
                    currentImgData.data[i] = this.imageData.data[i] + green;
                } else if (i % 4 == 2) {
                    currentImgData.data[i] = this.imageData.data[i] + blue;
                } else if (i % 4 == 3) {
                    currentImgData.data[i] = opacity;
                }
            }
            this.ctx.putImageData(currentImgData, 0, 0);
            //this.ctx.shadowOffsetX = 10;
            //this.ctx.shadowOffsetY = 10;
            //this.ctx.shadowBlur = 5;
            //this.ctx.shadowColor = "rgba(0,0,0,0.5)";
            //
            //this.ctx.fillStyle = "#CC0000";
            //this.ctx.fillRect(10,10,150,100);
            //
            //this.ctx.restore();
            //
            //this.ctx.fillStyle = "#000000";
            //this.ctx.fillRect(180,10,150,100);
        },
        //随便画画
        bindDrawLine: function () {
            var _this_ = this;
            this.canvas.onmousedown = function (event) {
                var x = event.layerX;
                var y = event.layery;
                Utils.addClass(_this_.canvas, "active");
                _this_.canvas.onmousemove = function (e) {
                    var xx = e.layerX;
                    var yy = e.layerY;
                    console.log(xx + '---' + yy);
                    _this_.drawLine(x, y, xx, yy);
                    x = xx;
                    y = yy;
                };
            };
            this.canvas.onmouseup = function (event) {
                Utils.removeClass(_this_.canvas, "active");
                _this_.canvas.onmousemove = function (e) {
                };
            };
        },
        //随便拉拉
        dragImg: function () {
            var _this_ = this;
            this.canvas.onmousedown = function (event) {
                //初始化当前点

                //var x = event.layerX;
                //var y = event.layery;
                _this_.lastX = event.layerX;
                _this_.lastY = event.layerY;
                Utils.addClass(_this_.canvas, "active");
                //_this_.moveImg(x, y);
                _this_.canvas.onmousemove = function (e) {
                    var xx = e.layerX;
                    var yy = e.layerY;

                    console.log(xx + '---' + yy);
                    _this_.moveImg(xx, yy);
                };
            };
            this.canvas.onmouseup = function (event) {
                Utils.removeClass(_this_.canvas, "active");
                _this_.canvas.onmousemove = function (e) {
                };
            }
        },
        //移除onmousedown onmousemove事件
        restoreEvent: function () {
            this.canvas.onmousedown = function () {

            };
            this.canvas.onmousemove = function () {

            };
        },
        //清楚画布之前内容
        clear: function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.imageData = null;//清空画布之前的内容
        },
        //反色
        inverse: function () {
            var currentImgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);//存储当前图片信息
            if (!this.imageData) {
                this.imageData = currentImgData;
            }
            for (var i = 0; i < this.imageData.data.length; i++) {
                if (i % 4 != 3) {
                    currentImgData.data[i] = 255 - this.imageData.data[i];
                }
            }
            this.ctx.putImageData(currentImgData, 0, 0);
        },
        //灰色调
        //newr = (r * 0.272) + (g * 0.534) + (b * 0.131);
        //newg = (r * 0.349) + (g * 0.686) + (b * 0.168);
        //newb = (r * 0.393) + (g * 0.769) + (b * 0.189);
        gray: function () {
            var currentImgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);//存储当前图片信息
            if (!this.imageData) {
                this.imageData = currentImgData;
            }
            for (var i = 0; i < this.imageData.data.length; i++) {
                if (i % 4 == 0) {
                    currentImgData.data[i] = currentImgData.data[i] * 0.272 + currentImgData.data[i + 1] * 0.534 + currentImgData.data[i + 2] * 0.131;
                } else if (i % 4 == 1) {
                    currentImgData.data[i] = currentImgData.data[i - 1] * 0.349 + currentImgData.data[i + 1] * 0.686 + currentImgData.data[i + 1] * 0.168;
                } else if (i % 4 == 2) {
                    currentImgData.data[i] = currentImgData.data[i - 2] * 0.393 + currentImgData.data[i - 1] * 0.769 + currentImgData.data[i] * 0.189;
                }
            }
            this.ctx.putImageData(currentImgData, 0, 0);
        },
        //模糊
        blur: function () {

        },
        //浮雕
        cameo: function () {

        },
        //雕刻
        carving: function () {

        },
        //镜像
        mirror: function () {

        }
    }
    CanvasUtils.prototype.init.prototype = CanvasUtils.prototype;
    window.CanvasUtils = CanvasUtils;
})
();
