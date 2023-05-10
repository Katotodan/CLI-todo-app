import { program } from "commander"
import fs from "fs"
import Conf from "conf"
const pkg = JSON.parse(fs.readFileSync("package.json", 'utf8'))
const projectName = pkg.name
import colors from "colors"

const config = new Conf({projectName: "exercice"})

program
    .command("update", "Update an item")
    .argument('[item1]', "old value", "")
    .argument('[item2]', "new value", "")
    .action((item1, item2) => {
        if(item1 === "" || item2 === ""){
            console.log(`You must add two values after remove command.\nThe first will be the old value and the last will be the updated value.`)
        }else{
            const itemIndex = config.get("storage").indexOf(item1)
            if(itemIndex != -1){
                let newArraw = config.get("storage")
                newArraw[itemIndex] = item2
                config.set("storage", newArraw)
                console.log(item1.green + " has been updated to " + item2.blue)
            }else{
                console.log(item1 + " No such item")
            }  
        } 
    })

program.parse(process.argv)

