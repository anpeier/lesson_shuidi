import cheerio from "cheerio";
import fs from "fs";
import { Analyze } from "./crowller";

interface courseResult {
  time: number;
  data: Array<string>;
}
interface content {
  [propName: number]: Array<string>;
}

class DellAnalyzer implements Analyze {
  private static instance: DellAnalyzer;
  // 单例模式
  static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer();
    }
    return DellAnalyzer.instance;
  }
  private getCourseInfo(html: string) {
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

  private generateJsonContent(courseInfo: courseResult, filePath: string) {
    let fileContent: content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html);
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }

  private constructor() {}
}

export default DellAnalyzer;
