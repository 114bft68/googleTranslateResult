var language = '';
var now = 0;
var now1 = 0;
setInterval(() => {
document.querySelectorAll('.language_list_languages.language_list_tl_list.tw-ll-top')[1].children[now].click();
        if (language.includes(document.querySelectorAll('.Y2IQFc')[2].innerHTML)) {
            now++;
        } else {
            language += `"hello${now1}": "${document.querySelectorAll('.Y2IQFc')[2].innerHTML}",\n`;
            now1++;
            now++
            navigator.clipboard.writeText(language);
        }
}, 100);
