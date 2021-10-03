async function newFormHandler(event) {
  event.preventDefault();

  const office_name = document.querySelector('input[name="post-title"]').value;
  const office_address = document.querySelector('input[name="post-text"]').value;
  const contact_number = document.querySelector('input[name="post-contact"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      office_name,
      office_address,
      contact_number
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/lawyer/add-lawyer');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
