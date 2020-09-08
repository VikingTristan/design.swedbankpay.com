#!/usr/bin/env bash
release_notes=`cat ../../RELEASE-NOTES.md`
changelog=`sed "s/^# Changelog//" ../../CHANGELOG.md`

echo '# Changelog

'"$release_notes""$changelog" > ../../CHANGELOG.md