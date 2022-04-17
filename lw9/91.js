{
    function PrimeCheck(Number) {
        if (Number <= 2) return true
        for (let i = 2; i <= Math.sqrt(Number); i++)
            if (Number % i === 0) return false
        return true
    }

    function isPrimeNumber(Number) {
        const type = typeof (Number)
        switch (type) {
            case "number": {
                if (PrimeCheck(Number))
                    console.log(Number + " is Prime number")
                else
                    console.log(Number + " is not Prime number")
                break
            }
            case "object": {
                for (let i = 0; i < Number.length; i++)
                    if (PrimeCheck(Number[i]))
                        console.log(Number[i] + " is Prime number")
                    else
                        console.log(Number[i] + " is not Prime number")
                break
            }
            default: {
                alert("[!] Can't identify")
            }
        }
    }
}