// 配置
window.Config = {

  // 站点名
  SiteName: '祝福 Todo 状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur533152-ae8d6686c60c63775d9aaa0d',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/lixworth/BlessingTodo'
    },
	{
      text: 'Blog',
      url: 'https://lixworth.me'
    }
  ]
};
