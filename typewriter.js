const sentence = "hello there from lighthouse labs";

let previousTime = 50;
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, previousTime += 50);
}

setTimeout(() => {
  console.log("\n");
}, previousTime);