const core = require("@actions/core")
const github = require("@actions/github")
try {
    console.log("hello " + core.getInput("name"))
    console.log(github)
} catch (error) {
    core.setFailed(error.message)
}