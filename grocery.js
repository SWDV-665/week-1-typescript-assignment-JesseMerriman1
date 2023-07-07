var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceries = [
    new Grocery('Milk', 3),
    new Grocery('Bread', 6),
    new Grocery('Eggs', 11),
];
// Generate HTML output
var htmlOutput = "\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <title>Groceries List</title>\n  </head>\n  <body>\n    <h1>Groceries List</h1>\n    <ul>\n      ".concat(groceries.map(function (grocery) { return "<li>".concat(grocery.name, ": ").concat(grocery.quantity, "</li>"); }).join(''), "\n    </ul>\n  </body>\n  </html>\n  ");
// Save HTML output to a file
var fs = require('fs');
fs.writeFileSync('groceries.html', htmlOutput);
