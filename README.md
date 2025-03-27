# start-workspace-action

This GitHub Action starts a Coder workspace in response to GitHub issues and comments containing @coder.

## Development

To install dependencies:

```bash
bun install
```

### Building

The GitHub Action runs from the compiled code in the `dist/` directory. You must build the project after making changes:

```bash
bun run build
```

This command will:
1. Compile the TypeScript source code
2. Bundle it into a single file (dist/index.js)
3. Add a source hash to the file

### Build Verification

This project includes a build verification system that ensures the compiled code matches the source code. A hash of all files in the `src/` directory is stored in the compiled output file.

To verify the build is up to date:

```bash
bun run verify-build
```

### Pre-commit Hook

A pre-commit hook is set up to automatically build and verify the code before each commit. This ensures that the `dist/index.js` file is always up to date with the source code in the `src/` directory.

## CI/CD

A GitHub workflow is set up to verify that the build is up to date on each push and pull request. This prevents commits with outdated builds from being merged into the main branch.

This project was created using `bun init` in bun v1.2.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
