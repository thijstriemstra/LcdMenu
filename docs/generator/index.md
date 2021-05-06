---
layout: default
title: Menu Generator ⚙
nav_order: 3
---

# Menu Generator ⚙

### Input

{% include generator.html %}

See how to use the generated code [here]({{ site.baseurl }}/docs/examples/GenerateMenu.html)
{: .fs-5 .fw-500 .mb-1 .mt-6 }

---

Use this tool to generate menus for this library, you don't need to format it by yourself,
just enter your desired _"white-spaced"_ heirarchy like in the example below.
Then copy the generated code to your code editor.

```ruby
Settings          # Level 0 - Sub menu (contains children and has no prefix)
 T:Backlight      # Level 1 - Toggle Item (has a prefix)
 I:Brightnes      # Level 1 - Input Item
Wifi              # Level 0 - Sub menu
 AndroidHotspot   # Level 1 - Sub menu
  I:Password      # Level 2 - Input Item
  C:Connect       # Level 2 - Command Item
```

_[more examples...](https://raw.githubusercontent.com/forntoh/LcdMenu/master/sample.txt)_
{: .text-right }

#### Rules

- Do not use `C`, `T`, `I` as the first character for a sub menu item.
- A prefixed `[C|T|I]:...` line can't contain sub lines.
- Use very short names _(microcontrollers have limited RAM)_
- Try to limit the heirarchy level to a maximum of **two.**

_NB: Remove the comments after pasting the above example in the input field_
{: .fs-2 .text-yellow-300 }

---

⚠ This tool has not been extensively tested, if you find a bug, please file a
<a href="https://github.com/forntoh/LcdMenu/issues/new" style="color: white">new issue</a>
{: .bg-red-200 .text-grey-lt-000 .p-2 .text-center }

<script>{% include generator.js %}</script>
<script>{% include generator-clipboard.js %}</script>
<style>{% include generator.css %}</style>
