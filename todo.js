import inquirer from "inquirer";
let todo = [];
let choice = "y";
let option;
while (choice == "y") {
    option = await inquirer.prompt({
        name: "option",
        type: "input",
        message: "press 1 to add item to the list and 2 to show all items"
    });
    if (option.option === "1") {
        todo[todo.length] = (await inquirer.prompt({
            name: "option",
            type: "input",
            message: "press 1 to add item to the list and 2 to show all items"
        })).option;
    }
    if (option.option === "2") {
        todo.forEach((x) => {
            console.log(x);
        });
    }
    choice = (await inquirer.prompt({
        name: "choie",
        type: "input",
        message: "press y to perform anotger action ANN N TO EXIT"
    })).choie;
}
