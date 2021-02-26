### Description
The following code yields a run-time error:
```js
import { NodeTypes } from '@vue/compiler-core';

console.log(NodeTypes.ELEMENT);
```

`@vue/compiler-core`:
```ts
...

export declare const enum NodeTypes {
	...
```

Error:
```
console.log(import_compiler_core.NodeTypes.ELEMENT);
                                           ^

TypeError: Cannot read property 'ELEMENT' of undefined
```

I believe esbuild ignores the Typescript `declare` syntax, but the run-time error is unexpected. I think the expected behavior here would be for the enum value to be inlined (in this case `1`) and the enum map to be stripped, or for the build to throw an error.


### Reproduction steps
1. Install dependencies: `npm ci`
2. Produce Typescript and Esbuild builds to compare: `npm run build`
3. Test Typescript dist is working: `node dist-ts`
4. See esbuild dist is not working: `node dist-esbuild`
