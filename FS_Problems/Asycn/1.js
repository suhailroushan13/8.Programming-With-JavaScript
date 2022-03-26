import { readFile, writeFile, unlink } from "fs/promises";

async function work() {
  try {
    var data = await readFile("sample.txt");
    await writeFile("HELLO.txt", data.toString().toUpperCase());
    console.log("File Created");
    await unlink("HELLO.txt");
    console.log("File Deleted");
  } catch (error) {
    console.log(error);
  }
}
work();
