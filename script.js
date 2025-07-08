document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const progress = document.getElementById('progress');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value.trim();
    if (task) {
      addTask(task);
      input.value = '';
    }
  });

  function updateProgress() {
    const total = list.children.length;
    const completed = Array.from(list.children).filter(li =>
      li.querySelector('input[type="checkbox"]').checked
    ).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    progress.style.width = percent + '%';
  }

  function addTask(task) {
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between bg-gray-50 px-4 py-2 rounded shadow';

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-checkbox h-5 w-5 text-blue-600 mr-3';

    // Task text span
    const span = document.createElement('span');
    span.textContent = task;
    span.className = 'flex-1';

    checkbox.onchange = () => {
      span.classList.toggle('line-through', checkbox.checked);
      span.classList.toggle('text-gray-400', checkbox.checked);
      updateProgress();
    };

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'text-red-500 hover:text-red-700 font-bold ml-4';
    delBtn.setAttribute('aria-label', 'Delete');
    delBtn.innerHTML = '&times;';
    delBtn.onclick = () => {
      li.remove();
      updateProgress();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    updateProgress();
  }
});