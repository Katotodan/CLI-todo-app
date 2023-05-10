import { program } from "commander"
import fs from "fs"
import Conf from "conf"
import colors from "colors"
const pkg = JSON.parse(fs.readFileSync("package.json", 'utf8'))
const projectName = pkg.name

const config = new Conf({projectName: "exercice"})

program
    .command("viewAll", "View all items")
    .action(() =>{
        config.get("storage").forEach(element => {
            console.log(element.green)
        })
    })

program.parse(process.argv)

