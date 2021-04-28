---
layout: default
title: Menu Generator ⚙
nav_order: 3
---

# Menu Generator ⚙

Use this tool to generate menus for this library, you don't need to format it by yourself,
just enter your desired *"white-spaced"* heirarchy like in the example below.
Then copy the generated code to your favorite arduino editor.

```ruby
Settings          # Level 0 - Sub menu (contains children and has no prefix)
 T:Backlight      # Level 1 - Toggle Item (has a prefix)
 I:Brightnes      # Level 1 - Input Item
Wifi              # Level 0 - Sub menu
 AndroidHotspot   # Level 1 - Sub menu
  I:Password      # Level 2 - Input Item
  C:Connect       # Level 2 - Command Item
```

*NB: Remove the comments after pasting the above example in the input field below*
{: .fs-2 .text-yellow-300 }

### Input

{% include generator-js.html %}
{% include generator-css.html %}
{% include generator.html %}
{% include generator-js1.html %}