"use stract"

//根据不同的环境读取对应的配置文件
if(process.env.NODE_ENV === 'production'){
  module.exports = require('./env.json');
}else if(process.env.NODE_ENV === 'testing'){
  module.exports = require('./testing.env.json');
}else {
  module.exports = require('./development.env.json');
}