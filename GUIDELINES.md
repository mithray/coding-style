# Guidelines

## File Length

Although many people use IDEs for management of code, and some of the complexity issues are reduced for those users, it also causes raw complexity to increase for users who do not use the same software, therefore recommendations to decrease the complexity of code are important. This project aims to encourage the use of modular code, the parts of which can be easily understood within a predictable timeframe. Halstead complexity provides such an estimation to calculate the complexity of a program and the length of time to write and understand it. Based on the common practice of separating functions, classes, and components into separte files, we recommend keeping files to a Halstead complexity level that takes an estimated 60 minutes to understand.

``` javascript

let vocab_1  = the_number_of_distinct_operators
let vocab_2  = the_number_of_distinct_operands
let length_1 = the_total_number_of_operators
let length_2 = the_total_number_of_operands

halsteadTime( vocab_1, vocab_2, length_1, length_2)

```
