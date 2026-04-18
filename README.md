File 'expo/tsconfig.base' not found.ts
Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.

The value of extends is a string which contains a path to another configuration file to inherit from. The path may use Node.js style resolution.

The configuration from the base file are loaded first, then overridden by those in the inheriting config file. All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.

It's worth noting that files, include, and exclude from the inheriting config file overwrite those from the base config file, and that circularity between configuration files is not allowed.
Currently, the only top-level property that is excluded from inheritance is references.

Example
configs/base.json:

{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
tsconfig.json:

{
    tsconfig.nostrictnull.json:

{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
File 'expo/tsconfig.base' not found.ts
Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.

The value of extends is a string which contains a path to another configuration file to inherit from. The path may use Node.js style resolution.

The configuration from the base file are loaded first, then overridden by those in the inheriting config file. All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.

It's worth noting that files, include, and exclude from the inheriting config file overwrite those from the base config file, and that circularity between configuration files is not allowed.

Currently, the only top-level property that is excluded from inheritance is references.

Example
configs/base.json:

{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
tsconfig.json:

{
  "extends": "./configs/base",
  "files": ["main.ts", "supplemental.ts"]
}
tsconfig.nostrictnull.json:

{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
Properties with relative paths found in the configuration file, which aren't excluded from inheritance, will be resolved relative to the configuration file they originated in.
  
  Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
  Visit https://aka.ms/ts6 for migration information.ts
Sets a base directory from which to resolve bare specifier module names. For example, in the directory structure:

project
├── ex.ts
├── hello
│   └── world.ts
└── tsconfig.json
With "baseUrl": "./", TypeScript will look for files starting at the same folder as the
── tsconfig.json
With "baseUrl": "./", TypeScript will look for files starting at the same folder as the tsconfig.json:

import { helloWorld } from "hello/world";

console.log(helloWorld);
This resolution has higher priority than lookups from node_modules.

This feature was designed for use in conjunction with AMD module loaders in the browser, and is not recommended in any other context. As of TypeScript 4.1, baseUrl is no longer required to be set when using paths

fix in this file code 

