

const fs = require("fs");

///////////////////////////////////////////////////////

//** addperson */

const addPerson = (id, fname, lname, age, city) => {
    const allData = loadData()
    const doblcateData = allData.filter((obj) => {
        return obj.id === id
    })
    if (doblcateData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        console.log("added succ");
        saveAllData(allData)
    } else {
        console.log("Error => It already exists, add different data to it")
    }
}

//////////////////////////////////////////////////

//** load data */

const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data1.json", "utf-8")
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

////////////////////////////////////////////////////

//** save data */

const saveAllData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data1.json", allDataJson)
}


////////////////////////////////////////////////////////

//** delet data  */

const deletData = (id) => {
    const allData = loadData()
    const foundData = allData.find((obj) => {
        return obj.id == id
    })
    const delData = allData.filter((obj) => {
        return obj.id !== id
    })

    if (!foundData) {
        console.log("ERROR");
    } else {
        console.log("The remove has been completed successfully")

    }

    saveAllData(delData)
}

//////////////////////////////////////////////////////////

//**  search data */

const searchData = (id) => {
    const allData = loadData()
    const itemRead = allData.find((obj) => {
        return obj.id == id
    })

    if (itemRead) {
        console.log("item you searched =>", itemRead);
    } else {
        console.log("this is id unavailable");
    }
}

////////////////////////////////////////////////////////////

//** all data list  */

const listData = (x) => {
    const allData = loadData()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname)
    });
    console.log("The number of items in the list =>>", allData.length);
}

////////////////////////////////////////////////////////////

module.exports = {
    addPerson,
    deletData,
    searchData,
    listData,
}