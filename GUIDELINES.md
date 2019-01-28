# Guidelines

## File Length

Although many people use IDEs for management of code, and some of the complexity issues are reduced for those users, it also causes raw complexity to increase for users who do not use the same software, therefore recommendations to decrease the complexity of code are important. This project aims to encourage the use of modular code, the parts of which can be easily understood within a predictable timeframe. Halstead complexity provides such an estimation to calculate the complexity of a program and the length of time to write and understand it. Based on the common practice of separating functions, classes, and components into separte files, we recommend keeping files to a Halstead complexity level that takes an estimated 60 minutes to understand.


``` math
Volume = N * log2n
Difficulty =  
Time = Difficulty * Volume
```

``` tex
\sum_{x=0}^n f(x)
```

<math>

&eta;<sub>1</sub> = the number of distinct operators </br>
&eta;<sub>2</sub>  = the number of distinct operands </br>
N<sub>1</sub> = the total number of operators </br>
N<sub>2</sub> = the total number of operands </br>

vocabulary = &eta;<sub>1</sub> + &eta;<sub>2</sub>  </br>
length = N<sub>1</sub> + N<sub>2</sub> </br>
difficulty = &eta;<sub>1</sub>/2 * N<sub>2</sub>/&eta;<sub>2</sub>  </br>
volume = length * log<sub>2</sub>(vocabulary)</br>

effort = difficulty * volume </br>
time = effort/18 seconds </br>

</math>
