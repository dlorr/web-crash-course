# HTML Notes

HTML - Hyper Text Markup Language

- not a programming language
- markup language for creating webpages / documents
- building blocks of the web
- markup language used to structure content on web pages
- JavaScript is used for functionality and to make pages dynamic

---

## Create `index.html`

Open the file with a browser to see output.

---

## Tag Syntax

- Element names surrounded by angle brackets
- Come in pairs (`<p>` start tag and end tag `</p>`)
- Some tags close themselves (remnants of XHTML `<br />`) (!)

---

## Doctype

Explains what type of document the page is.

- HTML4
- HTML5
- XHTML

HTML5

```html
<!DOCTYPE html>
```

HTML4 (not complete)

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
```

XHTML 1.0 strict (not complete)

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN">
```

---

VS Code built-in feature for HTML5 page structure just type:

```
!
```

Emmet abbreviation will show then press **Tab**.

CTRL + U in browser to see your HTML code.

---

# Tags

## Inline level elements

- Do not start on a new line (stay in the same line with other content)
- Take up only as much width as necessary
- Usually used for styling or formatting text
- Usually should not contain block-level elements

Examples:

```
<span>, <a>, <img>, <strong>, <em>, <abbr>, <cite>, <code>, <mark>, <time>, <label>, <input>, <textarea>, <select>, <button>
```

---

## Block level elements

- Always start on a new line
- Take up the full width available (stretch across the page)
- Can contain other block elements or inline elements
- Commonly used for page layout and structure

Examples:

```
<div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, <table>, <section>, <article>, <header>, <footer>, <main>, <form>, <blockquote>
```

---

To open link in new tab use `target="_blank"`:

```html
<a href="http://google.com" target="_blank"></a>
```

---

## Tag attributes

Provide info about an element.

- placed within the start tag
- key/value pairs (`id="yourId"`)

Example:

```html
<h1 title="Your Title">Heading One</h1>
```

---

# Lists

## Unordered List

```html
<ul></ul>
```

Just bullets.

List items inside `<ul>`:

```html
<li></li>
```

---

## Ordered List

```html
<ol></ol>
```

With numbers.

List items inside `<ol>`:

```html
<li></li>
```

---

# HTML5 Semantic Tags

Semantic element clearly describes its meaning to both the browser and the developer.

```
<header>, <footer>, <aside>, <main>, <article>, <section>, <nav>, <details>
```

---

```html
<!DOCTYPE html>
```

- Declares the document type as HTML5
- Ensures browsers render the page in standards mode

---

```html
<html lang="en"></html>
```

- Root element of the HTML page
- All other HTML content goes inside this tag
- `lang="en"` specifies the language (English)
- Helps with accessibility (screen readers) and SEO

---

```html
<head></head>
```

- Contains metadata (information about the document)
- Content here does not appear directly on the webpage
- Can include character encoding, title, CSS, scripts, meta tags

---

```html
<meta charset="UTF-8" />
```

- Defines the character encoding as UTF-8
- Supports most characters, symbols, and emojis
- Prevents text display issues

---

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- Makes the page responsive to different screen sizes
- `width=device-width` matches the device’s screen width
- `initial-scale=1.0` sets the default zoom level
- Essential for mobile-friendly design

---

```html
<title>HTML Crash Course</title>
```

- Defines the title of the page
- Shown in the browser tab and search engine results
- Helps users identify the page when multiple tabs are open

---

```html
<body></body>
```

- Contains all the visible content of the web page
- Text, images, links, forms, buttons, and other elements go here
- Only one `<body>` tag is allowed per HTML document

---

```html
<h1>Heading One</h1>
```

- Defines the most important heading (largest size)
- Used for main titles or page headings
- Only one `<h1>` is recommended per page for SEO

---

```html
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>
```

- Heading levels from most important (`h1`) to least (`h6`)

---

```html
<br />
```

- Inserts a single line break
- Does not need a closing tag

---

```html
<hr />
```

- Creates a horizontal line (thematic break)
- Used to separate content or sections visually

---

```html
<ul>
  <li>List Item</li>
</ul>
```

- Defines an unordered list
- Commonly used for menus, bullet lists, or grouped items.

---

```html
<ol>
  <li>List Item</li>
</ol>
```

- Defines an ordered list
- Useful for steps, rankings, or sequences.

---

```html
<table></table>
```

- Defines a table element used to display data in rows and columns

```html
<thead>
  <tr>
    <th>
      <tbody>
        <td>
          <tfoot></tfoot>
        </td>
      </tbody>
    </th>
  </tr>
</thead>
```

Table structure elements.

---

## thead

```
- Defines the header section of a table.
- Usually contains column headings (<th>).
```

---

## tr

```
- Defines a single row inside a table.
- Can contain <th> (header cells) or <td> (data cells).
```

---

## th

```
- Defines a table header cell.
- Content is bold and centered by default.
- Represents column or row headings.
```

---

## th

```
- Defines a table header cell.
- Content is bold and centered by default.
- Represents column or row headings.
```

---

## tbody

```
- Defines the main body of the table.
- Contains the actual data rows (<tr> with <td>).
```

---

## td

```
- Defines a table data cell.
- Holds the actual data inside the table.
```

---

## tfoot

```
- Defines the footer section of a table.
- Usually contains summary rows, totals, or notes.
- Placed after <tbody>, but browsers may render it at the bottom.
```

---

## colspan

Attribute for `<th>` or `<td>`.

Example:

```html
<td colspan="2"></td>
```

Merges two columns into one.

---

## rowspan

Attribute for `<th>` or `<td>`.

Example:

```html
<td rowspan="3"></td>
```

Merges three rows into one.

---

```html
<form action="process.php" method="POST"></form>
```

Defines an HTML form used to collect user input.

- `action` → where the form data is sent
- `method="POST"` → sends data in the request body

---

```html
<input type="text" name="firstName" placeholder="Enter first name" />
```

Text input field.

---

```html
<input type="email" name="email" placeholder="Enter email" />
```

Email input field with validation.

---

```html
<textarea name="message"></textarea>
```

Multiline text input field.

---

```html
<select name="gender">
  <option value="male">Male</option>
</select>
```

Dropdown menu.

---

```html
<input type="number" name="age" />
```

Numeric input field.

---

```html
<input type="date" name="birthday" />
```

Date picker input.

---

```html
<input type="submit" name="submit" value="Submit" />
```

Submit button.

---

```html
<button>Click Me</button>
```

Clickable button.  
Inside a `<form>` it acts as a submit button by default (!)

---

```html
<a href="assets/images/sample.jpg" target="_blank"> ... </a>
```

Hyperlink element.

---

```html
<img src="assets/images/sample.jpg" alt="Sample Image" width="500px" />
```

Embeds an image.

---

```html
<blockquote cite="http://traversymedia.com"></blockquote>
```

Defines a block quotation.

---

```html
<abbr title="World Wide Web">WWW</abbr>
```

Defines an abbreviation.

---

```html
<cite>HTML crash course</cite>
```

Defines the title of a creative work.

---

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <aside>
            <footer></footer>
          </aside>
        </article>
      </section>
    </main>
  </nav>
</header>
```

Semantic layout elements.

---

## header

```
- Defines the header section of a page or a section.
- Usually contains logo, navigation, or introductory content.
- Can be used multiple times (for page header and article headers).
```

---

## nav

```
- Defines a navigation section.
- Contains links for site or page navigation.
- Example: menus, tables of contents.
```

---

## main

```
- Represents the main content of the document.
- Should only appear once per page.
- Excludes sidebars, headers, and footers.
```

---

## section

```
- Defines a thematic grouping of content.
- Typically has a heading (<h1>–<h6>) inside.
- Used to break content into sections.
```

---

## article

```
- Represents independent, self-contained content.
- Example: blog post, news article, forum post.
- Can be shared or reused outside the main site.
```

---

## aside

```
- Defines content related to the main content but not essential.
- Example: sidebars, ads, pull quotes, extra notes.
```

---

## footer

```
- Defines the footer of a page or section.
- Usually contains copyright info, contact details, links.
- Can be used multiple times (page footer and article footer).
```

---

```html
<figure>
  <figcaption></figcaption>
</figure>
```

Groups media content (images, diagrams, code snippets) with a caption. Often used with (`figcaption`).

---

```html
<mark></mark>
```

Highlights text for reference or emphasis. Typically shown with a yellow background by default.

---

```html
<time datetime="2025-09-16">September 16, 2025</time>
```

Represents a date or time. Can use datetime attribute for machine-readable format.

---

```html
<details>
  <summary></summary>
</details>
```

## details

```
- Defines a disclosure widget the user can open and close.
- Used to hide and show extra information on demand.
- By default, content inside is hidden until expanded.
```

---

## summary

```
- Defines the visible heading/caption for the <details>.
- Clicking the <summary> toggles the hidden content inside <details>.

```
