import { program } from "commander"
import fs from "fs"
import Conf from "conf"
import colora from "colors"
const pkg = JSON.parse(fs.readFileSync("package.json", 'utf8'))
const projectName = pkg.name

const config = new Conf({projectName: "exercice"})
let storage = config.get("storage") ? config.get("storage") : []

program
    .command("remove", "Remove an item")
    .argument('[item]', "Remove an item", "")
    .action((item) => {
        if(item === ""){
            console.log('You must specify the item name after "remove command"')
        }else{
            const newArraw = config.get("storage").filter(element => element != item)
            if(newArraw.length === config.get("storage").length){
                console.log("No " + item.red + " fund")
            }else{
                config.set("storage", newArraw)
                console.log(item.red + " has been removed")
            }  
        } 
    })

program.parse(process.argv)

