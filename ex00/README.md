## Event Lifecycle (Theme Switcher)
1. **User action:** the user clicks the theme button in the navbar.
2. **Event firing:** the browser fires a `click` event on that button.
3. **JavaScript callback:** `addEventListener("click", toggleTheme)` runs the `toggleTheme` function.
4. **DOM/CSS mutation:** `toggleTheme` changes the `data-theme` attribute on `<html>`. The CSS variables defined under `[data-theme="dark"]` apply, so the colors of the whole page change.
