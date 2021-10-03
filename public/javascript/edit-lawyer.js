async function editFormHandler(event) {
  event.preventDefault();

  const office_name = document.querySelector('input[name="post-title1"]').value.trim();
  const office_address = document.querySelector('input[name="post-text1"]').value;
  const contact_number = document.querySelector('input[name="post-contact1"]').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
