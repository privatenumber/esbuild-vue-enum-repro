### Reproduction steps
1. Install dependencies: `npm ci`
2. Produce Typescript and Esbuild builds to compare: `npm run build`
3. Test Typescript dist is working: `node dist-ts`
4. See esbuild dist is not working: `node dist-esbuild`
