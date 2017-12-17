//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    markers: [{
      iconPath: "/images/map.png",
      id: 0,
      latitude: 36.718820,
      longitude: 119.128520,
      width: 50,
      height: 50
    }]
  },
  markertap(e) {
    wx.openLocation({
      latitude: 36.718820,
      longitude: 119.128520,
      scale: 18,
      name: '万达广场',
      address: '山东省潍坊市万达广场'
    })
  },
  onLoad: function () {

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })

    wx.request({
      url: 'https://qiaker.cn/wxlogin',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.data.items = res.data
      }
    })
  },
  onShareAppMessage: function (options) {
    //console.log(options);
    return {
      title: '标题',
      desc: '描述',
      path: '/pages/index/',
    }
  }
})
