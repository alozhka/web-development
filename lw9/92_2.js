{
    function calc(op) { //op=operation
        let state, newOp = ""
        let ch1 = null
        let ch2 = null
        for (let i = 0; i < op.length; i++) {
            newOp += op[i]
            switch (op[i]) {
                case " ":
                    break
                case ")":
                    break
                case "+": {
                    state = "+"
                    break
                }
                case "-": {
                    state = "-"
                    break
                }
                case "/": {
                    state = "/"
                    break
                }
                case "*": {
                    state = "*"
                    break
                }
                case "(": {
                    calc(op - newOp)
                    break
                }
                default: {
                    if (ch1 !== null)
                        ch2 = Number(op[i])
                    if (ch1 === null)
                        ch1 = Number(op[i])
                    console.log(ch1, ch2)
                }
            }
        }
        if (state !== "" && ch1 !== null && ch2 !== null)
            switch (state) {
                case "+":
                    return ch1 + ch2
                case "-":
                    return ch1 - ch2
                case "*":
                    return ch1 * ch2
                case "/":
                    return Math.round(((ch1 / ch2) * 10000)) / 10000
            }
        else
            return "[!] Wrong syntax"
    }
}