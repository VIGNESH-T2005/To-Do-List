# To-Do List App

A task management app built with vanilla HTML, CSS, and JavaScript — my first hands-on project combining DOM manipulation, dynamic UI, and Tailwind CSS.

 **Live Demo:** https://to-do-list-site.netlify.app/

---

## Features

- Add tasks using a text input and submit button
- Click a checkbox to mark a task as complete (strikethrough effect)
- Delete any task with the × button
- Progress bar updates live based on how many tasks are completed

---

## What I Learned

### HTML
- Structuring a page using semantic elements like `<aside>`, `<main>`, `<form>`, and `<ul>`
- Linking an external JS file and Tailwind CSS CDN to HTML
- Using the `required` attribute on inputs for basic form validation

### Tailwind CSS
- Building a responsive two-column layout using `flex-col md:flex-row`
- Using breakpoint prefixes like `md:` and `sm:` to handle different screen sizes
- Applying spacing, color, border, and hover utilities directly in HTML
- Styling a sidebar and main content area side by side

### JavaScript (Vanilla)
- Selecting DOM elements using `getElementById`
- Listening for `submit` events and preventing default form behavior with `e.preventDefault()`
- Dynamically creating `<li>`, `<input>`, `<span>`, and `<button>` elements in JavaScript
- Building the task list at runtime using `appendChild`
- Toggling CSS classes (`line-through`, `text-gray-400`) based on checkbox state
- Removing elements from the DOM using `li.remove()`
- Calculating completion percentage and updating a progress bar's inline width
- Wrapping all logic inside `DOMContentLoaded` so the script runs after the page loads

### CSS Concept
- Using `transition-all` on the progress bar for a smooth animated width change
- Understanding how inline `style` overrides interact with Tailwind utility classes

---

## Key Code — Progress Bar Logic

```js
function updateProgress() {
  const total = list.children.length;

  const completed = Array.from(list.children).filter(li =>
    li.querySelector('input[type="checkbox"]').checked
  ).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  progress.style.width = percent + '%';
}
```

This function counts all tasks, finds how many are checked, calculates the percentage, and sets the progress bar width dynamically.

---

## Project Structure

```
to-do-list/
├── index.html   → markup, layout, Tailwind classes
└── script.js    → task logic, DOM manipulation, progress bar
```

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and layout |
| Tailwind CSS v2 | Utility-first styling and responsiveness |
| Vanilla JavaScript | DOM manipulation and task logic |
| Netlify | Hosting and deployment |

---

*Built by Vicky*
