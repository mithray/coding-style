#Standards for code, project organization, and design

https://google.github.io/styleguide/javascriptguide.xml
https://github.com/airbnb/javascript
https://github.com/rwaldron/idiomatic.js
https://standardjs.com/

## The Language should be made as simple as possible, but no simpler.



you can't rely on automatic semicolon insertion if you use IFFEs
move all vars to the top of the scope


always use ===, never ==

== is not transitive, but === is transitive


don't use ++x or x++, as this is introduces an inconsistent grammar between adding one and adding integers other than one.


JS  Potential problems: perhaps all these should be explicit?
automatic semicolon insertion
with
type coercion
implied global variables

Smalltalk80. Best designed language in history ? 



javascript object keys are always strings, automatic type coercios
keys in object don't need quotes if they are 'valid identifiers' (eg, strings not containing special characters?)

can forEach and map replace for loop completely ? 
for in, for of

Use  namespace for your functions

https://www.researchgate.net/publication/299412540_Code_Readability_Testing_an_Empirical_Study
https://www.bookdepository.com/Complexity-in-Language-Salikoko-S-Mufwene-Francois-Pellegrino-Christophe-Coupe/9781107054370
https://churchofentropy.wordpress.com/2016/01/10/the-history-of-our-planet-in-under-2000-words/
# language_philosophy
#naming conventions

Class names: Pascal Casing

Brackets: Egyptian
file names: Snake 
