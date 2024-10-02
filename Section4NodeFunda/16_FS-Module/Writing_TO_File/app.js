import { log } from "node:console";
import { readFile, writeFile,appendFile} from "node:fs/promises";

// const contentBuffer = await fs.readFile("C:\\Users\\sanww\\OneDrive\\Desktop\\text.txt")
// log(contentBuffer )
// fs.appendFile("text1.txt", contentBuffer )

// try {
//   const imageBuffer = await readFile("testttt.png");
//   writeFile("C:\\Users\\sanww\\OneDrive\\Desktop\\imageTest.png", imageBuffer);
// } catch (err) {
//   appendFile(
//     "error.log",
//     `\n\n${new Date().toLocaleTimeString()}\n${err.message} \n ${err.stack}`
//   );
//   log(err)
//   log('TO SEE FULL ERROR YOU CAN GO ./error.log FILE')
// }


const videoBuffer = await readFile("C:\\obs\\check.mp4")
log(videoBuffer)
