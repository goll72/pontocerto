#!/bin/sh

set -eu

REPO_ROOT=$(git rev-parse --show-toplevel)

SCHEMA="$REPO_ROOT/backend/db/schema.sql"
MIGRATION="$REPO_ROOT/backend/db/migration.sql"

ssh -o ExitOnForwardFailure=yes -fNT -S /tmp/ssh-pontocerto-db -M -L 5433:127.0.0.1:5432 pontocerto.dev

trap "ssh -S /tmp/ssh-pontocerto-db -O exit pontocerto.dev" EXIT INT HUP

psqldef -p 5433 -W "$DATABASE_PASSWORD" pontocerto --dry-run < "$SCHEMA" > "$MIGRATION"
