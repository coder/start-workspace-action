#!/usr/bin/env bash
set -euo pipefail

# Check if dist/index.js exists
if [ ! -f "dist/index.js" ]; then
  echo "Error: dist/index.js not found. Please run 'bun run build' first."
  exit 1
fi

# Calculate hash of all files in src/ directory (sorted by filename)
SOURCE_HASH=$(find src -type f | sort | xargs cat | shasum -a 256 | cut -d ' ' -f 1)

# Create a temporary file with hash prefix
TMP_FILE=$(mktemp)
echo "// Source hash: $SOURCE_HASH" > "$TMP_FILE"

# If the file already contains a hash line, replace it, otherwise add it to the top
if grep -q "^// Source hash: [a-f0-9]\{64\}" "dist/index.js"; then
  sed "s|^// Source hash: [a-f0-9]\{64\}|// Source hash: $SOURCE_HASH|" "dist/index.js" > "$TMP_FILE.2"
  mv "$TMP_FILE.2" "$TMP_FILE"
else
  cat "dist/index.js" >> "$TMP_FILE"
fi

# Replace the original file
mv "$TMP_FILE" "dist/index.js"

echo "✅ Updated dist/index.js with source hash: $SOURCE_HASH"