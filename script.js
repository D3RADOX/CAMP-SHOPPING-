function addItem() {
  const input = document.getElementById('foodInput');
  const category = document.getElementById('category').value;
  const list = document.getElementById('foodList');

  if (!input.value.trim()) return;

  const li = document.createElement('li');
  li.className = category;
  li.textContent = `${input.value.trim()} [${category.toUpperCase()}]`;

  list.appendChild(li);
  input.value = '';
}

function downloadList() {
  const items = document.querySelectorAll('#foodList li');
  let text = 'Diabetic Food List:\n\n';

  items.forEach(item => {
    text += `- ${item.textContent}\n`;
  });

  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'diabetic_food_list.txt';
  a.click();
}