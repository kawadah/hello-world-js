# CONTRIBUTING

## Publishing

### Verify before publish

#### Verify as npm package

Run [arethetypeswrong/cli](https://www.npmjs.com/package/@arethetypeswrong/cli) (attw) and [publint](https://publint.dev).

```sh
attw --pack .
publint
```

#### Verify as JSR package

```sh
# With Deno
deno publish --dry-run
# With npm
npx jsr publish --dry-run
```

### Publish

Always publish via GitHub Actions.
