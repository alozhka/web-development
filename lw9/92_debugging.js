{
    function calcDebug(op) {
        let newOp= ""
        let state = "op"
        let method = ""
        let stateCh = '1'
        let ch1 = null
        let ch2 = null
        let countBrackets = 1

        for (let i = 0; i < op.length; i++) {
            if (state === "(") {
                switch (op[i]) {
                    case "(": {
                        countBrackets += 1
                        if (countBrackets >= 2) newOp += op[i]
                        break
                    }
                    case ")": {
                        if (countBrackets >= 2) newOp += op[i]
                        countBrackets -= 1
                        if (countBrackets === 0) {
                            console.log("newOp " + newOp)
                            ch1 = calcDebug(newOp)
                            console.log("ch1 " + ch1)
                            state = "op"
                        }
                        break
                    }
                    default: newOp += op[i]
                }
            }

            if (state === "op") {
                if (op[i] === " ") continue
                if (op[i] === "(") state = "("
                switch (op[i]) {
                    case "(": break
                    case ")": break
                    case "+": {
                        method = "+"
                        break
                    }
                    case "-": {
                        method = "-"
                        break
                    }
                    case "/": {
                        method = "/"
                        break
                    }
                    case "*": {
                        method = "*"
                        break
                    }
                    default: {
                        if (stateCh === '2') {
                        }
                        console.log(ch1, ch2)
                    }
                }
            }
            console.log(method)
        }

        if (method !== "" && ch1 !== null && ch2 !== null)
            switch (method) {
                case "+":
                    return ch1 + ch2
                case "-":
                    return ch1 - ch2
                case "*":
                    return ch1 * ch2
                case "/":
                    return Math.round(((ch1 / ch2) * 1000)) / 1000
            }
        else
            return "[!] Wrong syntax"

    }
}