App({
  //前后台定义：
  //----当用户点击左上角关闭，或者按了设备Home键离开微信，小程序并没有正在的销毁，而是进入了后台；当再次启动微信或再次打开小程序，又会从后台进入前台。

  //只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁
  
  //当小程序初始化完成时，会触发onLaunch(全局只触发一次)
  onLaunch: function () {
    console.log('App Launch')
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //当小程序启动后,或从后台进入前台显示，会触发onShow
  onShow: function () {
    console.log('App Show')
  },
  //当小程序从前台进入后台，会触发onHide
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    userInfo:null
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
})
//注意的事项:App()必须在app.js中注册，且不能注册多个。

//不要在定义于App()内的函数中调用getApp()，使用this就可以拿到app实例。

//不要在onLaunch的时候调用getCurrentPage()，此时page还没有生成。

//通过getApp获取实例之后，不要私自调用生命周期函数。
//有啥不懂的可以查看文档:http://wxopen.notedown.cn/framework/app-service/app.html