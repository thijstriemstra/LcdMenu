---
layout: default
title: GenerateMenu.h
parent: Reference
---

# Menu Generator

Used to generate menu's from strings.

## Todos
    
    - Get parameters from the line
    
    - Use a map to for `ftpr` (string name to function map)

## Methods

1. ### uint8_t index = 0

    Current character position

    ```cpp
    uint8_t index = 0
    ```


1. ### 💡 MenuItem* creatMenu(uint8_t size, MenuItem* parent)

    Create a new menu and assign it's parent

    ```cpp
    MenuItem* creatMenu(uint8_t size, MenuItem* parent)
    ```

    **Params:**

    - `size` - number of items in the menu to create
    - `parent` - parent for the new menu

    **Returns:**

    - `MenuItem*` the created menu

1. ### 💡 char* readLine(char* file)

    Read a single line separated by `\n`

    ```cpp
    char* readLine(char* file)
    ```

    **Params:**

    - `file` - input to read

    **Returns:**

    - `char*` the line read

1. ### 💡 MenuItem* generateMenu(char* input)

    Generate a menu from a string input

    ```cpp
    MenuItem* generateMenu(char* input)
    ```

    **Params:**

    - `input` - number of items in the menu to create

    **Returns:**

    - `MenuItem*` the created menu
