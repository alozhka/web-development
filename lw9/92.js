{
    function calc(op) {
        let newOp= ""
        let state = "op"
        let method = ""
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
                            ch1 = calc(newOp)
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
                        if (ch1 !== null)
                            ch2 = Number(op[i])
                        if (ch1 === null)
                            ch1 = Number(op[i])
                    }
                }
            }
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