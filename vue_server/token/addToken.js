const jwt = require('jsonwebtoken');
const serect = 'token';  //密钥，不能丢
module.exports = (userInfo) => { //创建token并导出
  const token = jwt.sign({
    user: userInfo.userName,
    id: userInfo.id
  }, serect, {expiresIn: '30s'});
  return token;
};
