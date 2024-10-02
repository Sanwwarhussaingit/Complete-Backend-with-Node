#!node
import {readFile,writeFile} from "node:fs/promises";
const args = process.argv;

try {
    const readBuffer = await readFile(args[2]);
    writeFile(args[3], readBuffer);

} catch (error) {
    console.log("not found file",error);
}