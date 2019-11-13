import axios from 'axios';
import {
  TIANQI_URL,
  TIANQI_CITY,
  TULING_API,
  TULING_API_KEY,
  TULING_ERROR_MESSAGE,
  MOCK,
  TIANQI_KEY,
  NEWS_URL,
  NEWS_KEY,
} from '../config';
import Util from "../util";

export default class Service {
  static async get(url, params) {
    let response;
    try {
      response = await axios.get(url, params);
      console.log('------------success-----------');
      console.log(`${response.status}\n${response.statusText}\n${JSON.stringify(response.data, null, 2)}\n`)
    } catch (e) {
      console.log('------------error-------------');
      console.error(e);
      throw e
    }
    return response.data;

  }

  static async getNews() {
    let msg;
    try {
      let response;
      if (MOCK) {
        response = require('./news');
      } else {
        response = await this.get(NEWS_URL, {
          params: {
            key: NEWS_KEY,
          },
        });
      }
      msg = Util.handleNewsData(response);
    } catch (e) {
      console.error(e);
      msg = '获取新闻失败';
    }
    return msg;
  }

  static async getWeather() {
    let msg;
    try {
      let response;
      if (MOCK) {
        response = require('./weather');
      } else {
        response = await this.get(TIANQI_URL, {
          params: {
            cityname: TIANQI_CITY,
            key: TIANQI_KEY
          },
        });
      }
      msg = Util.handleWeatherData(response);
    } catch (e) {
      console.error(e);
      msg = '获取天气失败';
    }
    return msg;
  }

  static async reply(content) {
    let response;
    try {
      const data = await this.get(TULING_API, {
        params: {
          key: TULING_API_KEY,
          info: content,
        }
      });
      if (data.code === 100000) {
        response = data.text;
      } else {
        throw new Error(TULING_ERROR_MESSAGE);
      }
    } catch (e) {
      response = e.message;
    }
    return response;
  }
}
