#!/usr/bin/env node

// const {program} = require('commander')
import { program } from "commander";
program
  .command("add", "Add a new item")
  .command("remove", "Remove an item")
  .command("view", "View an item or check if an item exist")
  .command("update", "Update an item")
  .command("viewAll", "View all items")
  .parse(process.argv)

