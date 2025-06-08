# Contributing to Revellion Theme

## Color philosophy
Revellion Theme is a modern dark theme that uses vibrant colors with carefully selected contrasts to improve readability. When adding or adjusting colors, keep the dark background and high-contrast approach so code remains clear and pleasant.

## Adding new colors
All color values live in `themes/Revellion Theme-color-theme.json`. Use standard hex notation (`#RRGGBB`) and group related scopes together. Avoid duplicating similar shades to maintain a focused palette.

After making changes, validate the theme using:

```
npm test
# or
node test/validate-theme.js
```

This ensures the theme file parses correctly before submitting a pull request.
