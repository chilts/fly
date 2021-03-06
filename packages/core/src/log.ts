export default require("console-log-level")({
  level: process.env.LOG_LEVEL || "info",
  prefix(level: string) {
    return `[${level}]`
  }
})
