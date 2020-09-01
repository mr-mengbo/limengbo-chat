module.exports = [
  {
    url: '/user/userInfo',
    type: 'get',
    reponse() {
      return {
        code: 200,
        'data|5-10': [{
          userid: '@id()', // 随机生成用户id
          username: '@cname()', // 随机生成中文名字
          date: '@date()', // 随机生成日期
          avatar: "@image('200x200','red','#fff','avatar')", // 生成图片
          description: '@paragraph()', // 描述
          ip: '@ip()', // IP地址
          email: '@email()', // email
        }],
        message: 'SUCCESS',
      };
    },
  },
];
