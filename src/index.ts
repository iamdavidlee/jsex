import { readFilePromise } from "./utils/ayncFile";
// readFilePromise("abc.txt")
// .then(data=>console.log(data))
// .catch(e => console.log(e));

async function readAbc(filename:string) {
    console.log("before read");
    const text = await readFilePromise(filename);
    console.log("after read");
    console.log(text);
}

console.log("before");
readAbc("abc.txt");
console.log("after");
