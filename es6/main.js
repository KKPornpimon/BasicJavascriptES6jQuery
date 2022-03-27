//import #1
import {sayHi,sayBye} from './say.js'

//import #2
import * as say from './say.js'

//import #3
import {sayHi as sh,sayBye as sb} from './say.js'

sayHi('John')
sayBye('John')

say.sayHi('John')
say.sayBye('John')

sh('John')
sb('John')

//import class ที่มีการกำหนด default
import User from './user.js'

//สร้าง object
const obj = new User('John')
console.log(obj.name)
obj.sayHi()