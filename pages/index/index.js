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
  getData: function (id) {
    var that = this;
    wx.request({
      url: 'https://qiaker.cn/wxlogin',
      data: {  

      },
      success: function (res) {
        console.log(res);
        that.setData({
        })
      }
    });
  },
  onLoad: function () {
    this.getData();
  }
})
