---
layout: default
title: SubMenu
parent: Examples
---

# Example 02 Sub Menu

This example will show you how to get started with submenus

![Menu](https://i.imgur.com/8jALlOH.gif)

## Requirements

- Keypad 4x4
- LCD Display

## Code

Go to [.../examples/SubMenu/SubMenu.ino](https://github.com/forntoh/LcdMenu/tree/master/examples/SubMenu/SubMenu.ino)

```cpp
// ../../examples/SubMenu/SubMenu.ino#L44-L88

extern MenuItem mainMenu[];
extern MenuItem settingsMenu[];

MenuItem mainMenu[] = {ItemHeader(),
                       MenuItem("Start service"),
                       MenuItem("Connect to WiFi"),
                       ItemSubMenu("Settings", settingsMenu),
                       MenuItem("Blink SOS"),
                       MenuItem("Blink random"),
                       ItemFooter()};
/**
 * Create submenu and precise its parent
 */
MenuItem settingsMenu[] = {ItemHeader(mainMenu),
                           MenuItem("Backlight"),
                           MenuItem("Contrast"),
                           ItemFooter()};

LcdMenu menu(LCD_ROWS, LCD_COLS);

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, 4, 4);

void setup() { menu.setupLcdWithMenu(0x27, mainMenu); }

void loop() {
    char key = keypad.getKey();
    if (key == NO_KEY) return;

    switch (key) {
        case 'A':
            menu.up();
            break;
        case 'B':
            menu.down();
            break;
        case 'C':
            menu.enter();
            break;
        case 'D':
            menu.back();
            break;
        default:
            break;
    }
}
```

## Circuit

<img src="{{ site.baseurl }}/assets/img/circuit.png" alt="Circuit">
