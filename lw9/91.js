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
            case "number":
                if (PrimeCheck(Number))
                    return Number + " is Prime number"
                else
                    return Number + " is not Prime number"
            case "object": {

            }
        }
    }
}