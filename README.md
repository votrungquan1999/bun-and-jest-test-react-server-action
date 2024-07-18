## Testing react server action using Bun
This is a simple project to test the react server action using Bun.

### To run with Bun
```bash
bun install

bun test
```

### To run with jest
- Comment out the content of src/app/actions/__tests__/jest-test.spec.ts since bun does not support ignore files.
```bash
rm -rf src/app/actions/__tests__/jest-test.spec.ts
```

- Run the following commands

```bash
npm install

npx jest
```

