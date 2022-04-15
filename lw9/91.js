{
  function PrimeCheckBint(Number) {
      let i = 2n
      for (i; i <= Math.sqrt(Number); i++)
          if (Number % i === 0n) return false
      return true
  }
  function PrimeCheckNum(Number) {
      let i = 2n
      for (i; i <= Math.sqrt(Number); i++)
          if (Number % i === 0) return false
      return true
    }
  function isPrimeNumber(Number) {
      const type = typeof (Number)
      //bigint
      if (type === 'bigint')
          if (Number <= 2n) return Number + " is not prime number"
          else if (PrimeCheckBint(Number))
              return Number + " is prime number"
          else
              return Number + " is not prime number"
      //number
      if (type === 'number')
          if (Number <= 2)
              return Number + " is not prime number"
          else if (PrimeCheckNum(Number))
              return Number + " is prime number"
          else
              return Number + " is not prime number"
      //object
      if (type === 'object') {
          const len = Object.length(Number)
          const objType = typeof(Number[0])
      //     if (objType === 'bigint')
      // }
  }
}