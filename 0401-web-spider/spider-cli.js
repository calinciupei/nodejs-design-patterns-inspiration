
import { spider } from "./spider.js";

spider(process.argv[2], (err, filename, downloaded) => {
  if (err) {
    console.log(err);
  } else if (downloaded) {
    console.log(`Completed the download of file ${filename}`);
  } else {
    console.log(`"${filename}" was already downloaded`);
  }
});