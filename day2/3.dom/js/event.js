/**
 * Created by Administrator on 2015/9/17.
 */
var EventUtil = {
    addEvent: function(element, type, handler){
        if(element.addEventListener){  //��׼�����
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){  //�Ͱ汾IE�����
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeEvent: function(element, type, handler) {
        if(element.removeEventListener){  //��׼�����
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){  //�Ͱ汾IE�����
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    getEvent: function(event){
        return event || window.event;
    },
    getTarget: function(event){
        return this.getEvent(event).target || this.getEvent(event).srcElement;
    },
    preventDefault: function(event) {
        var evt = this.getEvent(event);

        if(evt.preventDefault) {   //��׼�����
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        var evt = this.getEvent(event);

        if(evt.stopPropagation) { //��׼�����
            evt.stopPropagation();
        } else {
            evt.cancelBubble = true;
        }
    }
}