// ts -> .d.ts翻译文件 -> js
import superagent from "superagent";
import fs from "fs";
import path from "path";

export interface Analyze {
  analyze: (html: string, filePath: string) => string;
}
class Crowller {
  private filePath = path.resolve(__dirname, "../../data/course.json");

  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyze.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyze: Analyze) {
    this.initSpiderProcess();
  }
}
export default Crowller;
