---
layout: default
title: MenuItem.h
parent: Reference
---

# MenuItem

The MenuItem class

```cpp
class MenuItem
```


## Public Fields

1. ### boolean isOn = false

    `Boolean` state of the item *(either ON or OFF)*

    ```cpp
    boolean isOn = false
    ```


1. ### String value

    String value of an `ItemInput`

    ```cpp
    String value
    ```


## Getters

1. ### Ⓜ️ char* getText() { return text; }

    Get the text of the item

    ```cpp
    char* getText() { return text; }
    ```

    **Returns:**

    - `String` - Item's text

1. ### Ⓜ️ fptr getCallback() { return callback; }

    Get the callback of the item

    ```cpp
    fptr getCallback() { return callback; }
    ```

    **Returns:**

    - `ftpr` - Item's callback

1. ### 💡 MenuItem* getSubMenu() { return subMenu; }

    Get the sub menu at item

    ```cpp
    MenuItem* getSubMenu() { return subMenu; }
    ```

    **Returns:**

    - `MenuItem*` - Submenu at item

1. ### Ⓜ️ byte getType() { return type; }

    Get the type of the item

    ```cpp
    byte getType() { return type; }
    ```

    **Returns:**

    - `byte` - type of menu item

1. ### Ⓜ️ char* getTextOn() { return textOn; }

    Get the text when toggle is ON

    ```cpp
    char* getTextOn() { return textOn; }
    ```

    **Returns:**

    - `String` - ON text

1. ### Ⓜ️ char* getTextOff() { return textOff; }

    Get the text when toggle is OFF

    ```cpp
    char* getTextOff() { return textOff; }
    ```

    **Returns:**

    - `String` - OFF text

## Setters

1. ### Ⓜ️ void setText(char* text) { this->text = text; }

    Set the text of the item

    ```cpp
    void setText(char* text) { this->text = text; }
    ```

    **Params:**

    - `text` - text to display for the item


1. ### Ⓜ️ void setCallBack(fptr callback) { this->callback = callback; }

    Set the callback on the item

    ```cpp
    void setCallBack(fptr callback) { this->callback = callback; }
    ```

    **Params:**

    - `callback` - reference to callback function


1. ### 💡 void setSubMenu(MenuItem* subMenu) { this->subMenu = subMenu; }

    Set the sub menu on the item

    ```cpp
    void setSubMenu(MenuItem* subMenu) { this->subMenu = subMenu; }
    ```

    **Params:**

    - `subMenu` - for the item


    Operators

1. ### 💡 MenuItem& operator[](const uint8_t index)

    Get item at index from the submenu

    ```cpp
    MenuItem& operator[](const uint8_t index)
    ```

    **Params:**

    - `index` - for the item


    
# ItemHeader

This item must be present at the all menus collections *(the first item in
the array)*.

**Example**

```cpp
MenuItem mainMenu[] = {ItemHeader(),
                       MenuItem("Item 1"),
                       MenuItem("Item 2"),
                       ...
```

## 💡 ItemHeader() : MenuItem(NULL, this, MENU_ITEM_MAIN_MENU_HEADER) {}


```cpp
ItemHeader() : MenuItem(NULL, this, MENU_ITEM_MAIN_MENU_HEADER) {}
```


## 💡 explicit ItemHeader(MenuItem* parent)


```cpp
explicit ItemHeader(MenuItem* parent)
```

**Params:**

- `parent` - the parent menu item


---

# ItemFooter

This item must be present at the all menus *(the last item in the array)*

**Example**

```cpp
MenuItem mainMenu[] = {ItemHeader(),
                       MenuItem("Item 1"),
                       MenuItem("Item 2"),
                       ...
                       ItemFooter()};
```

## 💡 ItemFooter() : MenuItem(NULL, this, MENU_ITEM_END_OF_MENU) {}


```cpp
ItemFooter() : MenuItem(NULL, this, MENU_ITEM_END_OF_MENU) {}
```


---

# ItemInput

This is an item type where a user can type in information,
the information is persisted in the item and can be gotten later by
using `item->value`

## Ⓜ️ ItemInput(char* text, String value, fptr callback)


```cpp
ItemInput(char* text, String value, fptr callback)
```

**Params:**

- `text` - text to display for the item
- `value` - the input value
- `callback` - reference to callback function


---

# ItemSubMenu

This item type indicates that the current item contains a sub menu.
The sub menu is opened when `enter()` is invoked.

## 💡 ItemSubMenu(char* text, MenuItem* parent)


```cpp
ItemSubMenu(char* text, MenuItem* parent)
```

**Params:**

- `text` - text to display for the item
- `parent` - the parent of the sub menu item


---

# ItemToggle

This item type indicates that the current item is **toggleable**.
When `enter()` is invoked, the state of `isOn` is toggled.

## Ⓜ️ ItemToggle(char* key, fptr callback)


```cpp
ItemToggle(char* key, fptr callback)
```

**Params:**

- `key` - key of the item
- `callback` - reference to callback function


## Ⓜ️ ItemToggle(char* key, char* textOn, char* textOff, fptr callback)


```cpp
ItemToggle(char* key, char* textOn, char* textOff, fptr callback)
```

**Params:**

- `key` - key of the item
- `textOn` - display text when ON
- `textOff` - display text when OFF
- `callback` - reference to callback function


---

# ItemCommand

This item type indicates that the current item is a **command**.
When `enter()` is invoked, the command *(callback)* bound to this item is
invoked.

## Ⓜ️ ItemCommand(char* key, fptr callback)


```cpp
ItemCommand(char* key, fptr callback)
```

**Params:**

- `key` - key of the item
- `callback` - reference to callback function

