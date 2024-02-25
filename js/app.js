const data10 = require("./data10")
const yargs = require("yargs");


yargs.command({
    command: "add",
    describe: "you have added an person data",
    builder: {
        id: {
            describe: "yao add persone",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "yao add persone",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "yao add persone",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "yao add persone",
            demandOption: true,
            type: "number"
        },
        city: {
            describe: "yao add persone",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) => {
        data10.addPerson(x.id, x.fname, x.lname, x.age, x.city);
    }
})



yargs.command({
    command: "delet",
    describe: "deleted succ",
    handler: (x) => {
        data10.deletData(x.id)
    }
})



yargs.command({
    command: "search",
    describe: "To search for people",
    builder: {
        id: {
            describe: "this is id read",
            demandOption: true,
            type: "number",
        }
    },
    handler: (x) => {
        data10.searchData(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "The list is for all your people",
    handler: () => {
        data10.listData();
    }
})
yargs.parse()

