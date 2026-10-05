// type InputArray = number[];
// type OutputArray = number[];

// function processArray(arr: InputArray): OutputArray {
//   return arr.map(num => num * 2);
// }

// const input: InputArray = [1, 2, 3, 4, 5];
// const output: OutputArray = processArray(input);

// console.log(output); // [2, 4, 6, 8, 10]




// type User = {
//   id: number;
//   name: string;
//   email: string;
// };  

// const users: User [] = [
//   { id: 1, name: "Alice", age: 30 },
//     { id: 2, name: "Bob",  age: 25 },
//     { id: 3, name: "Charlie",  age: 35 },
// ];
// function getUserNames(users: User[]): string[] {
//   return users.map(user => user.name);
// }
// const userNames: string[] = getUserNames(users );
// console.log(userNames); // ["Alice", "Bob", "Charlie"]

// function ispalindrome(str: string): boolean {
//   const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// const result1 = ispalindrome("racecar");
// const result2 = ispalindrome("hello");
// console.log(result1); // true
// console.log(result2); // false

//loop
// for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }}

// const numbers: number[] = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Total sum: " ,sum); // 150

// //Async Await Problem
// function fetchData(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Data Loaded");
//         }, 2000);
//     });
// }
//     async function getData() {
//         console.log("Loading...");
//         const data = await fetchData();
//         console.log(data);
//     }
//     getData();  

    //Node.js Backend Problem

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Server Running Successfully");
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });



// //variable 
// var weight = 38;
// var price = 100;
// var year = 2024;
// var age;
// console.log( price);

// const numbers =[12, 23, 34, 45, 56];
// console.log(numbers);

// for(const num of numbers){
//     console.log(num);
// }







// interface Product {
//   name: string;
//   price: number;
//   inStock: boolean;
// }

// const products: Product[] = [
//   {
//     name: "Laptop",
//     price: 50000,
//     inStock: true
//   },
//   {
//     name: "Mouse",
//     price: 1200,
//     inStock: true
//   },
//   {
//     name: "Keyboard",
//     price: 2500,
//     inStock: false
//   }
// ];

// function showAvailableProducts(products: Product[]): void {
//   products.forEach((product) => {
//     if (product.inStock) {
//       console.log(`${product.name} - ${product.price} BDT`);
//     }
//   });
// }

// showAvailableProducts(products);


// enum OrderStatus {
//   Pending = "Pending",
//   Shipped = "Shipped",
//   Delivered = "Delivered",
//   Cancelled = "Cancelled"
// }

// interface Order {
//   id: number;
//   customerName: string;
//   amount: number;
//   status: OrderStatus;
// }

// function showOrder(order: Order): void {
//   console.log(`Order ID: ${order.id}`);
//   console.log(`Customer: ${order.customerName}`);
//   console.log(`Amount: ${order.amount} BDT`);
//   console.log(`Status: ${order.status}`);
// }

// const order: Order = {
//   id: 101,
//   customerName: "Akhi",
//   amount: 2500,
//   status: OrderStatus.Shipped
// };

// showOrder(order);


// type UserRole = "admin" | "user" | "moderator";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: UserRole;
//   isActive: boolean;
// }

// interface ApiResponse<T> {
//   data: T;
//   success: boolean;
//   message: string;
//   total: number;
// }

// interface Pagination {
//   page: number;
//   limit: number;
// }

// const users: User[] = [
//   {
//     id: 1,
//     name: "Akhi",
//     email: "akhi@gmail.com",
//     role: "admin",
//     isActive: true
//   },
//   {
//     id: 2,
//     name: "Rahim",
//     email: "rahim@gmail.com",
//     role: "user",
//     isActive: true
//   },
//   {
//     id: 3,
//     name: "Karim",
//     email: "karim@gmail.com",
//     role: "moderator",
//     isActive: false
//   },
//   {
//     id: 4,
//     name: "Nila",
//     email: "nila@gmail.com",
//     role: "user",
//     isActive: true
//   }
// ];

// function getUsers(
//   users: User[],
//   pagination: Pagination,
//   role?: UserRole
// ): ApiResponse<User[]> {

//   let filteredUsers = role
//     ? users.filter((user) => user.role === role)
//     : users;

//   const startIndex = (pagination.page - 1) * pagination.limit;

//   const paginatedUsers = filteredUsers.slice(
//     startIndex,
//     startIndex + pagination.limit
//   );

//   return {
//     data: paginatedUsers,
//     success: true,
//     message: "Users fetched successfully",
//     total: filteredUsers.length
//   };
// }

// const response = getUsers(
//   users,
//   {
//     page: 1,
//     limit: 2
//   },
//   "user"
// );

// console.log(response);



// type PaymentMethod = "cash" | "bkash" | "card";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
// }

// interface CartItem {
//   product: Product;
//   quantity: number;
// }

// interface Order {
//   id: number;
//   items: CartItem[];
//   paymentMethod: PaymentMethod;
//   total: number;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 70000,
//     stock: 5
//   },
//   {
//     id: 2,
//     name: "Mouse",
//     price: 1500,
//     stock: 10
//   },
//   {
//     id: 3,
//     name: "Keyboard",
//     price: 3000,
//     stock: 7
//   }
// ];

// const cart: CartItem[] = [
//   {
//     product: products[0],
//     quantity: 1
//   },
//   {
//     product: products[1],
//     quantity: 2
//   },
//   {
//     product: products[2],
//     quantity: 1
//   }
// ];

// function calculateCartTotal(items: CartItem[]): number {
//   return items.reduce((total, item) => {
//     return total + item.product.price * item.quantity;
//   }, 0);
// }

// function createOrder(
//   items: CartItem[],
//   paymentMethod: PaymentMethod
// ): Order {
//   return {
//     id: Date.now(),
//     items,
//     paymentMethod,
//     total: calculateCartTotal(items)
//   };
// }

// const order = createOrder(cart, "bkash");

// console.log("Order ID:", order.id);
// console.log("Payment:", order.paymentMethod);
// console.log("Total:", order.total);

// interface Repository<T> {
//   getAll(): T[];
//   getById(id: number): T | undefined;
//   create(item: T): T;
//   update(id: number, item: Partial<T>): T | undefined;
//   delete(id: number): boolean;
// }


type Payment =
  | {
      type: "card";
      cardNumber: string;
      expiryDate: string;
    }
  | {
      type: "bkash";
      phoneNumber: string;
      transactionId: string;
    }
  | {
      type: "cash";
      amount: number;
    };





