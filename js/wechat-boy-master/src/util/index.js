export default class Util {
  static handleWeatherData(response) {
    const data = response.result.data;
    const realtime = data.realtime;
    const weather = realtime.weather;
    const wind = realtime.wind;
    const pm25 = data.pm25.pm25;
    return `今天是${realtime.date}
    农历${realtime.moon}
    ${realtime.city_name}天气：${weather.info}
    温度：${weather.temperature}
    湿度：${weather.humidity}
    空气质量：pm2.5 ${pm25.pm25} ${pm25.quality}
    ${pm25.des}`;
  }

  static handleNewsData(response) {
    const data = response.result.data;
    let msg = '今日早报:\n';
    data.slice(0, 10).forEach(item => {
      msg = msg + `${item.title}\n来源：${item.author_name},${item.url}\n\n`;
    });
    return msg;
  }
}
