#!/usr/bin/env bash
set -euo pipefail

# Check if dist/index.js exists
if [ ! -f "dist/index.js" ]; then
  echo "Error: dist/index.js not found. Please run 'bun run build' first."
  exit 1
fi

# Calculate hash of all files in src/ directory (sorted by filename)
CALCULATED_HASH=$(find src -type f | sort | xargs cat | shasum -a 256 | cut -d ' ' -f 1)

# Extract hash from dist/index.js (if it exists)
if grep -q "^// Source hash: [a-f0-9]\{64\}" "dist/index.js"; then
  EXISTING_HASH=$(grep "^// Source hash: [a-f0-9]\{64\}" "dist/index.js" | sed 's/\/\/ Source hash: //')
else
  EXISTING_HASH=""
fi

# Compare hashes
if [ "$EXISTING_HASH" = "$CALCULATED_HASH" ]; then
  echo "✅ Build is up to date. Source hash matches."
  exit 0
else
  echo "❌ Build is out of date or hash doesn't match."
  echo "Expected hash: $CALCULATED_HASH"
  echo "Found hash:    $EXISTING_HASH"
  echo "Please run 'bun run build' to update the build."
  exit 1
fi