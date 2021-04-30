---
layout: default
title: Basic
parent: Examples
---

# Example 01 Basic Navigation

This is a basic example, it will show you how to get started with the LcdMenu library

![Basic](https://i.imgur.com/nViET8b.gif)

## Requirements

- 4x4 Keypad
- LcdDisplay

## Code

Go to [.../examples/Basic/Basic.ino](https://github.com/forntoh/LcdMenu/tree/master/examples/Basic/Basic.ino)

```cpp
// ../../examples/Basic/Basic.ino#L43-L85

// Define the main menu
extern MenuItem mainMenu[];

// Initialize the main menu items
MenuItem mainMenu[] = {ItemHeader(),
                       MenuItem("Start service"),
                       MenuItem("Connect to WiFi"),
                       MenuItem("Settings"),
                       MenuItem("Blink SOS"),
                       MenuItem("Blink random"),
                       ItemFooter()};
// Construct the LcdMenu
LcdMenu menu(LCD_ROWS, LCD_COLS);

// Setup keypad
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, 4, 4);

void setup() {
    // Initialize LcdMenu with the menu items
    menu.setupLcdWithMenu(0x27, mainMenu);
}

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
