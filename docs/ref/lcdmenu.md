---
layout: default
title: LcdMenu.h
parent: Reference
---

# LcdMenu

The LcdMenu class contains all fields and methods to manipulate the menu
items.

```cpp
class LcdMenu
```


---

## Private Fields

1. ### uint8_t cursorPosition = 1

    Cursor position

    ```cpp
    uint8_t cursorPosition = 1
    ```


1. ### uint8_t top = 1

    First visible item's position in the menu array

    ```cpp
    uint8_t top = 1
    ```


1. ### uint8_t bottom = 0

    Last visible item's position in the menu array

    ```cpp
    uint8_t bottom = 0
    ```


1. ### uint8_t maxRows

    Rows on the LCD Display

    ```cpp
    uint8_t maxRows
    ```


1. ### uint8_t maxCols

    Columns on the LCD Display

    ```cpp
    uint8_t maxCols
    ```


1. ### uint8_t blinkerPosition

    Colum location of Blinker

    ```cpp
    uint8_t blinkerPosition
    ```


1. ### MenuItem* currentMenuTable

    Array of menu items

    ```cpp
    MenuItem* currentMenuTable
    ```


1. ### byte downArrow[8] =

    Down arrow (↓)

    ```cpp
    byte downArrow[8] =
    ```


1. ### byte upArrow[8] =

    Up arrow (↑)

    ```cpp
    byte upArrow[8] =
    ```


## Private Methods

1. ### Ⓜ️ void drawCursor()

    Draws the cursor

    ```cpp
    void drawCursor()
    ```


1. ### Ⓜ️ void drawMenu()

    Draw the menu items with up and down indicators

    ```cpp
    void drawMenu()
    ```


1. ### Ⓜ️ boolean isAtTheStart()

    Check if the cursor is at the start of the menu items

    ```cpp
    boolean isAtTheStart()
    ```

    **Returns:**

    - true : `boolean` if it is at the start

1. ### Ⓜ️ boolean isAtTheEnd()

    Check if the cursor is at the end of the menu items

    ```cpp
    boolean isAtTheEnd()
    ```

    **Returns:**

    - true : `boolean` if it is at the end

1. ### Ⓜ️ void reset(boolean isHistoryAvailable)

    Reset the display

    ```cpp
    void reset(boolean isHistoryAvailable)
    ```

    **Params:**

    - `isHistoryAvailable` - indicates if there is a previous position


1. ### Ⓜ️ void resetBlinker()

    Calculate and set the new blinker position

    ```cpp
    void resetBlinker()
    ```


## Public Fields

1. ### unsigned long startTime

    Time when the toast started showing in milliseconds

    ```cpp
    unsigned long startTime
    ```


1. ### unsigned int duration

    How long the toast should Last in milliseconds

    ```cpp
    unsigned int duration
    ```


1. ### #ifndef USE_STANDARD_LCD

    LCD Display

    ```cpp
    #ifndef USE_STANDARD_LCD
    ```


# Constructor

## 💡 LcdMenu(uint8_t maxRows, uint8_t maxCols)

Constructor for the LcdMenu class

```cpp
LcdMenu(uint8_t maxRows, uint8_t maxCols)
```

**Params:**

- `maxRows` - rows on lcd display e.g. 4
- `maxCols` - columns on lcd display e.g. 20

**Returns:**

- new `LcdMenu` object

## Public Methods

1. ### Ⓜ️ void setupLcdWithMenu(

    Call this function in `setup()` to initialize the LCD and the custom
    characters used as up and down arrows

    ```cpp
    void setupLcdWithMenu(
    ```

    **Params:**

    - `lcd_Addr` - address of the LCD on the I2C bus (default 0x27)
    - `menu` - menu to display


1. ### Ⓜ️ void setSubMenu(uint8_t position, MenuItem* items)

    Call this function to set sub menu items for any main menu item

    ```cpp
    void setSubMenu(uint8_t position, MenuItem* items)
    ```

    **Params:**

    - `position` - main menu item/where to place the sub menu
    - `items` - sub menu items


1. ### Ⓜ️ void up()

    Execute an "up press" on menu

    ```cpp
    void up()
    ```


1. ### Ⓜ️ void down()

    Execute a "down press" on menu

    ```cpp
    void down()
    ```


1. ### Ⓜ️ void enter()

    Execute an "enter" action on menu.
    
    It does the following depending on the type of the current menu item:
    
    - Open a sub menu.
    - Execute a callback action.
    - Toggle the state of an item.

    ```cpp
    void enter()
    ```


1. ### Ⓜ️ void back()

    Execute a "backpress" action on menu.
    
    Navigates up once.

    ```cpp
    void back()
    ```


1. ### Ⓜ️ void left()

    Execute a "left press" on menu
    
    *NB: Works only for `ItemInput` type*
    
    Moves the cursor one step to the left.

    ```cpp
    void left()
    ```


1. ### Ⓜ️ void right()

    Execute a "right press" on menu
    
    *NB: Works only for `ItemInput` type*
    
    Moves the cursor one step to the right.

    ```cpp
    void right()
    ```


1. ### Ⓜ️ void backspace()

    Execute a "backspace cmd" on menu
    
    *NB: Works only for `ItemInput` type*
    
    Removes the character at the current cursor position.

    ```cpp
    void backspace()
    ```


1. ### Ⓜ️ void type(String character)

    Display text at the cursor position
    used for `Input` type menu items

    ```cpp
    void type(String character)
    ```

    **Params:**

    - `character` - character to append


1. ### Ⓜ️ void clear()

    Clear the value of the input field

    ```cpp
    void clear()
    ```


1. ### Ⓜ️ uint8_t getCursorPosition() { return this->cursorPosition; }

    Get the current cursor position

    ```cpp
    uint8_t getCursorPosition() { return this->cursorPosition; }
    ```

    **Returns:**

    - `cursorPosition` e.g. 1, 2, 3...

1. ### Ⓜ️ void displayNotification(String message, unsigned int duration)

    Show a message at the bottom of the screen

    ```cpp
    void displayNotification(String message, unsigned int duration)
    ```

    **Params:**

    - `message` - message to display
    - `duration` - how long to display the message


1. ### Ⓜ️ void updateTimer()

    Executes any delayed task when appropriate time reaches

    ```cpp
    void updateTimer()
    ```


1. ### Ⓜ️ MenuItem* getItemAt(uint8_t position)

    Get a `MenuItem` at position

    ```cpp
    MenuItem* getItemAt(uint8_t position)
    ```

    **Returns:**

    - `MenuItem` - item at `position`
