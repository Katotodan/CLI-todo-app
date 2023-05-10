import { program } from "commander"
import fs from "fs"
import Conf from "conf"
import colors from "colors"
const pkg = JSON.parse(fs.readFileSync("package.json", 'utf8'))
const projectName = pkg.name

const config = new Conf({projectName: "exercice"})
let storage = config.get("storage") ? config.get("storage") : []

program
    .command("add", "Add new item")
    .argument('[item]', "New item to be added", "")
    .action((item) => {
        if(item === ""){
            console.log('You must specify the item name after "add command"')
        }else{
            const elementExist = config.get("storage").includes(item)
            if(!elementExist){
                storage.push(item)
                config.set("storage", storage)
                console.log(item.green  + " has been added")
            }else{
                console.log(item.green + " already exist")
            }
            
        }
        
    })

program.parse(process.argv)

