async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/props/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/bank/add-bank');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-prop-btn').addEventListener('click', deleteFormHandler);
  