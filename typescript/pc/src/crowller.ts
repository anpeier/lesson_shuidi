// ts -> .d.ts翻译文件 -> js
import superagent from "superagent";
import cheerio from "cheerio";
import fs from "fs";
import path from "path";

interface courseResult {
  time: number;
  data: Array<string>;
}
interface content {
  [propName: number]: Array<string>;
}
class Crowller {
  private secret = "secretKey";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";
  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfo: string[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find(".course-desc");
      const title = descs.eq(0).text();
      courseInfo.push(title);
    });
    const result = {
      time: new Date().getTime(),
      data: courseInfo,
    };
    return result;
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  generateJsonContent(courseInfo: courseResult) {
    const filePath = path.resolve(__dirname, "../data/course.json");
    let fileContent: content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
    
  }

  async initSpiderProcess() {
    const filePath = path.resolve(__dirname, "../data/course.json");

    const html = await this.getRawHtml();
    const courseInfo = this.getCourseInfo(html);
    const fileContent = this.generateJsonContent(courseInfo);
    fs.writeFileSync(filePath, JSON.stringify(fileContent))
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();
