# typescript-learning
Learning Typescript for fun and profit

# Installing TypeScript
TypeScript is installed into a project through the package manager 
E.g. `yarn add typescript` or `npm install typescript`

For npm run `npm init` inside the project folder to create a `package.json` file.
Then run `npm install typescript` in the root folder.
It's possible to have many projects all using different version of typescript.

The typescript compiler is named `tsc`
It takes as input a file containing TypeScript code and outputs a file containing JavaScript code.
The command `$(npm bin)/tsc myCode.ts` will check the types of your program.
If successful it will create a file in the same folder called `myCode.js`
That file can then be run using node.js by typing `node myCode.js`

You can see a complete list of typescript compiler options by typing `$(npm bin)/tsc --help`
The important options on this list are:
- `--strict` This enables all strict type checking options.
- `--noImplicitReturns` This reports an error when a function has a declared return type but some paths don't return a value.
- `--noFallthroughCasesInSwitch` This option will tell you when you accidentally write a case statement with no break or return.
- `--noUnusedLocals` This option prevents unused local variables which are usually a mistake.

It is recommended to compile TypeScript with 
`$(npm bin)/tsc --noImplicitReturns --noFallthroughCasesInSwitch --strict --noUnusedLocals myCode.ts`

These options can be added to `tsconfig.json`

Often you will need to check the result of a single expression. 
This can be done using a command prompt, where an expression can be typed to get immediate output.
`ts-node` is recommended and can be installed with `npm install ts-node`

It's strongly recommended to use a linter for TypeScript as it will catch errors that the compiler can't.
`typescript-eslint` is recommended.

# How to use TypeScript in Node.js

Install TypeScript (see above)

Created first.ts and put Node's sample webserver code in it
Can run it with `node first.ts`

When try to compile it with 
`$(npm bin)/tsc --noImplicitReturns --noFallthroughCasesInSwitch --strict --noUnusedLocals first.ts`

There are the following errors:
```
first.ts:1:14 - error TS2580: Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i @types/node`.

1 const http = require('http');
               ~~~~~~~

```
This is because with default options TypeScript only likes import statements
This can be fix by changing require to `import * as http from "http";`

```
first.ts:6:35 - error TS7006: Parameter 'req' implicitly has an 'any' type.

6 const server = http.createServer((req, res) => {
                                    ~~~

first.ts:6:40 - error TS7006: Parameter 'res' implicitly has an 'any' type.

6 const server = http.createServer((req, res) => {
                                         ~~~

```

These two errors are because TypeScript can't find type definitions for the parameters req and res.
The community already maintains type definitions for Node as part of the `DefinitelyTyped` project
Those types can be installed with `npm install @types/node`

Take care to match the `@types/node` version to the `Node` version.

Install `nvm` using `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
Restart terminal after installation
`nvm install 12.16.3` to install latest LTS version.
`nvm current` to see which version of Node is currently being used.

For major version 12 of Node, install version 12 of `@types/node`
This can be done with `npm install @types/node@12`

TypeScript will see every file under `node_modules/@types` automatically

Now try to compile again
`$(npm bin)/tsc --noImplicitReturns --noFallthroughCasesInSwitch --strict --noUnusedLocals first.ts`

The typescript file now compiles.

Managing type definitions is the cost of using TypeScript.
