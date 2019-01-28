# Guidelines

## File Length

Although many people use IDEs for management of code and therefore some of the complexity issues of managing large blocks of code are reduced for those users, it also causes raw complexity to increase for users who do not use the same software, therefore, recommendations to decrease the complexity of code are important. This project aims to encourage the use of modular code, the parts of which can be easily understood within a predictable timeframe. Halstead complexity provides such an estimation to calculate the complexity of a program and the length of time to write and understand it. Based on the common practice of separating functions, classes, and components into separte files, we tentatively recommend keeping files to a Halstead complexity level that takes an estimated 60 minutes to understand.

The Algorithms described by Halstead can be found on [Wikipedia](https://en.wikipedia.org/wiki/Halstead_complexity_measures) and the javascript implementation is maintained by [Jared Stilwell](https://github.com/escomplex/escomplex).

``` javascript

let vocab_1  = number_of_distinct_operators
let vocab_2  = number_of_distinct_operands
let length_1 = total_number_of_operators
let length_2 = total_number_of_operands

halsteadTime( vocab_1, vocab_2, length_1, length_2)

```

Running this on the javascript ported [tweetnacl](https://github.com/dchest/tweetnacl-js) library we get:

``` json
{
  length: 15591,
  vocabulary: 777,
  difficulty: 315.4057771664374,
  volume: 149701.20836206462,
  effort: 47216625.96619177,
  bugs: 49.90040278735487,
  time_seconds: 2623145.887010654,
  time_hours: 728.6516352807372
}
```

You can test this result by using the npm script 

``` bash
npm run complexity <path_to_file>
```
