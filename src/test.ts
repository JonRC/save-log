const childProcess = require("child_process");
const fs = require("fs");

const logstashLogProcess = childProcess.exec(
  "kubectl logs --follow logstash-6b88f774f4-z92lr -n jonathan-cardoso-linte-com-hub",
  {
    timeout: 99999999,
    maxBuffer: 1024 * 1024 * 10000,
  }
);

logstashLogProcess.stdout.on("data", (data: any) => {
  fs.appendFileSync("./log.txt", data);
});
