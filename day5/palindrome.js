;//���ڷ�ֹ֮ǰ�ļ���βû�м�;���±���
(function () {
    function getAllPalindrome(num) {
        if (num < 0) {
            return "���������0������";
        } else if (Object.prototype.toString.call(11) != "[object Number]") {
            return "����ȷ��������";
        }
        num = parseInt(num, 10);//������������϶��ٽ�ֹ��,������Ϊ�淶��ͬ���²���
        var palindromeList = [];
        var palindromeString = "";
        for (var i = 0; i <= num; i++) {//��������i<=num���ǵ����ܰ���num
            if (isPalindrome(i)) {
                palindromeList.push(i);
                palindromeString = palindromeString + " " + i;
            }
        }
        return {"palindromeList": palindromeList, "palindromeString": palindromeString};
//          alert(palindromeString);
    }

    function isPalindrome(num) {
        num = num + "";
        var stringLength = num.length;
        for (var i = 0; i < stringLength / 2; i++) {
            if (num.charAt(i) != num.charAt(stringLength - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    window.getAllPalindrome = getAllPalindrome;
    window.isPalindrome = isPalindrome;
})();