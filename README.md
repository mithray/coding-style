# Coding Style

Disclaimer: There is nothing in this project so far except for ideas.... nothing usable actually exists here yet, but I think the ideas could help a lot of people, so if it interests you, please read, and maybe help me put something together? 

## Initial Motivation

Coding standards are important because when code is more readable:

* Maintainability is increased
* Projects with larger codebases can be more quickly understood, by more people
* More bugs are found
* Security of code increases
* Code is re-usable
* Because code is re-usable, less *redundant* code (code that does the same thing) is written.
* Becouse code is re-used, more eyes are on the same code, and if changes improve the readability the style, code is recursively improved.
* If code is easier to understand, more *kinds* of people can code such as
	* junior software devs
	* business managers
	* lawyers
	* web designers

## Limitations of Other Projects

Most coding style recommendations, however, have a very limited scope, and even claim to arbitrarily make style choices because:

> "These debates just distract from getting stuff done. At the end of the day you have to 'just pick something'"
> [Standard Js](https://github.com/standard/standard))

This decision is actually very practical in matters that have smaller significance[[1](#ref1)], but there are far deeper discussions about *bodies* of code that are nearly not being had at all. Underdiscussed topics include: 

### Project Management
* Optimal number of lines of code(or ideas) in a file(IDEs may sometimes reduce the significance of lines of code per file)
* code complexity/depth of function calls, 
* redundancy of software projects

### Information Theory
* redundancy of vocabulary/syntax
* Shannon Entropy

### Psychology
* Working Memory (important for file size?)
* "Chunking" (important for how sections of code are grouped together, such as functions being "chuked" as blackbox)
* Dunbar Number (viewing social group size as just an example of a set of data that a human is able to recall with reasonable timeframe, it can be used to describe the extent of a codebase a person is available to understand, and even the size of a comprehensible codebase being inversely proportional to the size of a maintainable social group! We all know programmers don't have time for people!!)
* Learning Theory


These discussions are much more in depth than traditional discussions about semicolons, indentation, quotes and number formatting. Although, the standardization of these syntaxes actually reflects a desire to reduce *redundancy* of vocabulary, that is, saying the same thing in two identical ways. A vocubulary is faster to learn if for any intended meaning there is only one possible way to express it[[2](#ref2)].

## Deeper Motivation

In the long term, better organized code that more people can read, is used by more people, so there are more people working on the same code, accomplishing one of the greatest security advantages open source code has: more eyes, shallow problems. With better organized projects and coding style, the moving parts are easier to understand, and individuals can more efficiently segregate into specialist areas, without making faulty assumptions about how other parts of the code ought to be organized. Modularity leads to increased specialization in society and a market that is more open to competition with lower barriers to entrance, all this is achieved by writing cleaner and better organized projects!!!

## What is this actually about ?

### Guidelines

* Guidelines for syntax(my 2 satoshis on what everbody else is doing, based on science of learning and perception)
* Guidelines for file organization
* Guidelines for file size

### Tools

* Syntax Transformation
* Organizing file structure with File Abstractions
* Dependency management

**[1]** <a name="ref1"></a>Such as with tabs and spaces in the case that all of the following are satisfied a) compilers treat them identically, b) IDEs handle the implementation by entering the necessary spaces when the tab key is pressed 3) their is no perceptible difference in the human perception.

**[2]** <a name="ref2"></a>https://www.python.org/dev/peps/pep-0020/ Zen of Python follows this idea. 
