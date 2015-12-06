
;//用于防止之前文件结尾没有加;导致报错
(function () {
    function getAllPalindrome(num) {
        if (num < 0) {
            return {"palindromeString": "请输入大于0的整数" };
        } else if (Object.prototype.toString.call(num) != "[object Number]") {
            return {"palindromeString": "请输入大于0的整数" };
        }
        num = parseInt(num, 10);//这里最好设置上多少进止数,避免因为规范不同导致差异
        var palindromeList = [];
        var palindromeString = "";
        for (var i = 0; i <= num; i++) {//这里用了i<=num考虑到可能包含num
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