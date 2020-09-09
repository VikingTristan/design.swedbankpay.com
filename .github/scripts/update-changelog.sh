#!/usr/bin/env bash
release_notes=`cat RELEASE-NOTES.md`
changelog=`sed "s/^# Changelog//" CHANGELOG.md`

echo '# Changelog

'"$release_notes""$changelog" > CHANGELOG.md

git config user.name github-actions
git config user.email github-actions@github.com
git add .
git commit -m "Update changelog"
git status
git push