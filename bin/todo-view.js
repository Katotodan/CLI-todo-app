import { program } from "commander"
import fs from "fs"
import Conf from "conf"
import colors from "colors"
const pkg = JSON.parse(fs.readFileSync("package.json", 'utf8'))
const projectName = pkg.name

const config = new Conf({projectName: "exercice"})


program
    .command("view", "View an item or check if an item exist")
    .argument('[item]', "View an item", "")
    .action((item) => {
        if(item === ""){
            console.log('You must specify the item name after "view command"')
        }else{
            const element = config.get("storage").indexOf(item)
            if(element != -1){
                console.log(item.blue + " exist")
            }else{
                console.log(item.red + " does'nt exist")
            }
        }
        
    })

program.parse(process.argv)

