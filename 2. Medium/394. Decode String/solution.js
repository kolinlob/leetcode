/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];

    for (const c of s) {
        if (c == "]") {
            let txt = "";
            let cur = stack.pop();
            while (cur != "[") {
                txt = cur + txt;
                cur = stack.pop();
            }
            let num = "";
            cur = stack.pop();
            while (!Number.isNaN(+cur)) {
                num = cur + num;
                cur = stack.pop();
            }
            stack.push(cur);
            stack.push(txt.repeat(+num));
        } else {
            stack.push(c);
        }
    }

    return stack.join("");
};