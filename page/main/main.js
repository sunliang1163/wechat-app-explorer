var util = require('../../util/util.js')
var app = getApp();
Page({
  data: {
		innerHeight:"640",
		hour: "00",
		minutes: "00",
		second: "00",
		bg: "transparent",
    imgUrls: [
    	      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    	      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    	      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    	    ],
    	    indicatorDots: true,
    	    autoplay: true,
    	    interval: 3000,
    	    duration: 1000
  },
  //事件处理函数
  onLoad: function () {  
				var dateTimes=9000;
				var _this=this;
				var timer=null;
				var objTimes=null;
				 timer=setInterval(function(){
					 objTimes  = util.formatTime(dateTimes--);
					if(dateTimes==-1){
						 clearInterval(timer);
						timer=null;
					}
					_this.setData({
					hour: objTimes.hour,
					minutes: objTimes.minutes,
					second: objTimes.second
				  });
				},1000);
				this.setData({
					innerHeight:innerHeight
				});
  },
	bindViewList:function(){
		wx.navigateTo({
      url: '../scrolls/scrolls'
    })
	},
	scroll:function(e){
	   	console.log(e);
			var realHeight=e.detail.scrollTop;
			var  opacity = 0.8 * (realHeight/142);
			if(opacity <= 0.8 ) {
				this.setData({
					bg: 'rgba(234, 44, 44,'+opacity+')'
				})
			}
	},
})