const getItems = () => {
  fetch('/api/v1/items')
    .then(response => response.json())
    .then(console.log);
};

const addItem = event => {
  event.preventDefault();
  const name = event.target.name.value;

  fetch('/api/v1/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
    .then(response => response.json())
    .catch(error => alert(error));
};

$('#item-form').submit(addItem);

$(document).ready(() => {
  getItems();
});
