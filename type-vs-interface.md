# Type Aliases vs Interfaces in TypeScript

## Let's get understand about Type in TypeScript

In JavaScript we create variable:

```
let name = "Rakib";
let age = 25;
let isActive = true;
```
JavaScript understand the datatype of the variable own.
But we can declear the datatype of variable in TypeScript.

```
let name: string = "Rakib";
let age: number = 25;
let isActive: boolean = true;
```

Here:

- `string` = Text or String data।
- `number` = number datatype।
- `boolean` = `true` or `false`।

## What is Type Alias?

`type` is a TypeScript's Keyword, we can create a new Type through that.
For simple word, saving Type with a name are Type Alias.

Example:

```
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Rakib",
  email: "rakib@gmail.com"
};
```
Here we create a Type with name of `User`
Now, when you use `User` as Type of Object, then TypeScript can confirmed that in Object have correct Property and Data Type.

```
const user: User = {
  id: 1,
  name: "Rakib",
  email: "rakib@gmail.com"
};
```

## What is Interface?

`interface`are use to determine the structure of a Object in TypeScript.
Example:

```
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Rakib",
  email: "rakib@gmail.com"
};
```

## Difference between Type Alias and Interface in TypeScript

| Topic             | Type  | Interface                   |
| ------------------- | ----- | --------------------------- |
| Object structure    | Yes | Yes                      |
| Union type          | Yes | Not as live               |
| Intersection type   | Yes | would be possible with`extends`      |
| Declaration merging | No    | Yes                      |
| Extending           | `&`   | `extends`                   |
| Primitive alias     | Yes | No                          |
| Tuple               | Yes | Not like as Type |


## When we want to use these then which will be?

Let, you are building a Full Stack Application where you use User data from MongoDB Database then you can use  `interface`. Because in determine Object Structure and extend as needed.

On other side,

```
type UserRole = "admin" | "user" | "moderator";

type ApiResponse = {
  success: boolean;
  data: User[];
} | {
  success: false;
  error: string;
};
```

Here it is easy to use `type` because there have need Union Type.
So, we can say, To make structure of an object than we can use both `type` and `interface` for mantain consistency.




#### My english is not good yet. If you couldn't understant any line please search in google or any AI chatbot.