/*function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}*/
function formatTime(time) {
    var times=time || 0;
		times = +times;
		var  hour = 0,
			minutes = 0,
			second = 0,
			regTwo = /^\d{2}$/,
			regInteger = /^(\d{1,2})\.?\d*$/;
		if(times/3600 >= 1) {
			hour = times/3600;
			hour = +regInteger.exec(hour.toString())[1] 
			times -= hour*3600; 
			hour = regTwo.test(hour.toString()) ? hour.toString() : `0${hour}`;
		}
		if(times/60 >= 1) {
			minutes = times/60;
			minutes = +regInteger.exec(minutes.toString())[1] 
			times -= minutes*60; 
			minutes = regTwo.test(minutes.toString()) ? minutes.toString() : `0${minutes}`;
		}
		second = times;
		second = regTwo.test(second.toString()) ? second.toString() : `0${second}`;
		return {
			hour: hour,
			minutes: minutes,
			second: second,
		}
	}
module.exports = {
  formatTime: formatTime
}
