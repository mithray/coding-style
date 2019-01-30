const jsonToDot = require('json-to-dot')
var fs = require('fs')
var data = fs.readFileSync('./stats.json','utf8')
 
let dot = jsonToDot({
  foo: ['bar', 'buzz'],
  bar: ['foo'],
  norf: ['worble', 'buzz'],
  worf: ['worble'],
  fizz: ['buzz']
})
dot = jsonToDot(data)

console.log(dot)
