

# Type Narrowing in TypeScript

## What is Type Narrowing?
Type Narrowing is a process of TypeScript that justifing type of a variable and come out accurate type.
Let, Make a function, which can get both String and Number.

```
function display(value: string | number) {
  console.log(value);
}
```

Here:

```
string | number
```
It's means this `value` will be string or number.
there have a problem, if you want to use any method of string then you have to determine to TypeScript, this value already as a string.

Exp:
```
function display(value: string | number) {
  console.log(value.toUpperCase());
}
```
it's Error. Because `toUpperCase()` is a string method. But this value will be a number. The solution of this problem called **Type Narrowing.**

In TypeScript, there have some methode for Type Narrowing. The best three are:
1. `typeof`
2. `instanceof`
3. `in` operator

## typeof Operator
`typeof` is a JavaScript operator that use to help of identify the data type for a value. We can use it in typscript for type narrow.

## instanceof Operator

`instanceof` are use to justify a object is a instanc of specific Class. With the simple word, a object create from which class, to find this use `instanceof`.

## in Operator

`in` Operator is use to justify and finding property of an object. Specially it important for Object Union Type.


## Why Type Narrowing are important?
Let you are building a Full Stack Application. Here transfer various type of data from backed to frontend. Some time it will ge string, number or object. If we would not justify the type of a value with use method or property directly. There will prosibility to show Runtime Error.

If we use Type Narrowing:

1. Can do correct operation accourding to Type
2. Dicrease Unnecessary Type Error.
3. Handle union type safely.
4. Code will be more Readable and Maintainable
5. TypeScript Compiler can identify error firstly.
