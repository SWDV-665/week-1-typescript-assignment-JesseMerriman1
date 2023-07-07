class Grocery {
    name: string;
    quantity: number;
    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }
  }
  const groceries: Grocery[] = [
    new Grocery('Milk', 10),
    new Grocery('Bread', 1),
    new Grocery('Eggs', 7),
  ];
  const htmlOutput = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Groceries List</title>
  </head>
  <body>
    <h1>Groceries List</h1>
    <ul>
      ${groceries.map(grocery => `<li>${grocery.name}: ${grocery.quantity}</li>`).join('')}
    </ul>
  </body>
  </html>
  `;

  const fs = require('fs');
  fs.writeFileSync('groceries.html', htmlOutput);