process.on("exit", async (sig) => {
  console.log("SIGINT received, exiting gracefully...");
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  process.exit(0);
});

new Promise((resolve, reject) => {
  setTimeout(resolve, 400000000);
}).then(console.log("done"));
