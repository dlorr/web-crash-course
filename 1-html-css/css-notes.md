# CSS Notes

## CSS

CSS - Cascading Style Sheets

- not a programming language
- used for website layout and design
- can be extended with Sass / Less
- stylesheet / styling language

---

# Methods for adding CSS

Inline CSS

- Directly inside an HTML element

Example

```html
<p style="color:red;">Text</p>
```

Internal CSS

- using `<style>` tag within a single document

Example

```html
<style>
  p {
    color: red;
  }
</style>
```

External CSS

- linking an external `.css` file

Example

```html
<link rel="stylesheet" href="style.css" />
```

---

# Colors in CSS

Color names  
HTML color names  
Hexadecimal  
RGB

Example

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
```

---

# Positions in CSS

## position

- Defines where an element is placed on the page
- Values: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Also supports `inherit` and `initial`

Example: put a box in the top-right corner of its parent.

---

## static

- Default position for all elements
- The element appears in the normal document flow
- `top`, `right`, `bottom`, `left` properties have no effect

---

## relative

- The element is positioned relative to its normal position
- You can move it using `top`, `right`, `bottom`, `left`
- Leaves the original space in the flow

---

## absolute

- The element is positioned relative to the nearest positioned ancestor (not static)
- If no such ancestor exists, it is positioned relative to the `<html>` element
- Removed from normal document flow

---

## fixed

- The element is positioned relative to the viewport (browser window)
- Stays in the same place even when scrolling
- Commonly used for navbars, sticky buttons

---

## initial

- Resets the property to its default value defined by the CSS specification

---

## inherit

- Inherits the value from its parent element

Example

```css
position: inherit;
```

---

## sticky

- A hybrid of relative and fixed
- Acts like relative until a scroll position is reached, then becomes fixed
- Often used for headers or section titles
- Requires `top`, `left`, `right`, or `bottom` to work

---

# Overflow in CSS

## overflow

- Defines what happens if content is bigger than the container
- Values: `visible`, `hidden`, `scroll`, `auto`

Example

```css
overflow: hidden;
```

---

## visible

- Default value
- Content that overflows the container is still visible

---

## hidden

- Extra content is clipped
- No scrollbars are shown

---

## scroll

- Always shows scrollbars
- Even if content fits

---

## auto

- Adds scrollbars only when necessary

---

# Display in CSS

## display

- Defines how an element behaves in the layout
- Values: `block`, `inline`, `inline-block`, `none`, `flex`, `grid`

Example

```css
li {
  display: inline;
}
```

---

## block

- Element takes up the full width of its container
- Starts on a new line

Examples

```
<div> <p> <h1>-<h6>
```

---

## inline

- Element only takes as much width as its content
- Does not start on a new line

Examples

```
<span> <a> <strong>
```

---

## inline-block

- Behaves like inline but allows width and height

---

## none

- Element is completely removed from the page
- No space is taken

---

## flex

- Turns the element into a flex container
- Its children are arranged using Flexbox

---

## grid

- Turns the element into a grid container
- Its children are arranged in rows and columns

---

# Clearing Floats

```html
<div class="clr"></div>
```

- Empty div used to clear floated elements

CSS

```css
.clr {
  clear: both;
}
```

- `clear: both` clears left and right floats

---

# Overflow Example

```css
overflow: hidden;
```

- Extra content outside the container is clipped

---

# Flexbox

Flexbox - a CSS layout mode that provides an easy way to arrange items within a container

- no floats needed
- responsive and mobile friendly
- positioning child elements is easier
- order of elements can be changed without editing HTML

---

## Flexbox Model Concept

Ability to alter item width and height to best fit available space.

- direction-agnostic layout system
- built for **one-dimensional layouts**

---

## display

```css
display: flex;
display: inline-flex;
```

- `flex` behaves like block container
- `inline-flex` behaves like inline container

---

## flex-direction

Defines main axis direction.

```
row
column
```

---

## flex-wrap

Controls if items wrap.

```
wrap
nowrap
wrap-reverse
```

---

## flex-basis

Initial size of a flex item.

Example

```css
flex-basis: 200px;
```

---

## justify-content

Aligns items along the **main axis**.

```
flex-start
flex-end
center
space-between
space-around
space-evenly
```

---

## align-items

Aligns items along the **cross axis**.

```
flex-start
flex-end
center
stretch
```

---

## align-content

Controls spacing between multiple flex lines.

---

## align-self

Overrides alignment for a single flex item.

---

## flex-grow

Defines how much an item grows.

Example

```css
flex-grow: 2;
```

---

## flex-shrink

Defines how much an item shrinks.

Example

```css
flex-shrink: 0;
```

---

## flex

Shorthand for

```
flex-grow flex-shrink flex-basis
```

Example

```css
flex: 1;
```

---

## order

Controls order of items.

Default

```
order: 0;
```

---

# Grid

```css
display: grid;
display: inline-grid;
```

- Turns an element into a grid container

---

## grid-template-columns

Defines number and size of columns.

Example

```css
grid-template-columns: 200px 1fr 2fr;
grid-template-columns: repeat(3, 1fr);
```

---

## grid-template-rows

Defines rows.

Example

```css
grid-template-rows: 100px auto 50px;
```

---

## gap

Spacing between grid items.

```css
gap: 20px;
```

---

## grid-column

Defines column start and end.

```css
grid-column: 1 / 3;
```

---

## grid-row

Defines row start and end.

```css
grid-row: 2 / 4;
```

---

## justify-items

Aligns items horizontally inside cells.

```
start
end
center
stretch
```

---

## align-items

Aligns items vertically inside cells.

```
start
end
center
stretch
```

---

## justify-content

Aligns the entire grid horizontally.

```
start
end
center
space-between
space-around
space-evenly
```

---

## align-content

Aligns the entire grid vertically.

```
start
end
center
space-between
space-around
space-evenly
```

---

# Flexbox vs Grid

## Flexbox

- One-dimensional layout system
- Row OR column
- Best for smaller components

Uses:

```
justify-content
align-items
flex-direction
```

---

## Grid

- Two-dimensional layout system
- Rows AND columns
- Best for full-page layouts

Uses:

```
grid-template-columns
grid-template-rows
grid-area
```

---

# Axis Reminder

```css
/* flex-direction: row;
   justify-content → horizontal alignment
   align-items → vertical alignment
*/
```

```css
/* flex-direction: column;
   justify-content → vertical alignment
   align-items → horizontal alignment
*/
```
