async function editFormHandler(event) {
    event.preventDefault();
  
    const branch_name = document.querySelector('input[name="prop-title1"]').value.trim();
    const branch_address = document.querySelector('input[name="prop-text1"]').value;
    const branch_number = document.querySelector('input[name="prop-contact1"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/props/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        branch_name,
        branch_address,
        branch_number
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/bank/add-bank');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-prop-form').addEventListener('submit', editFormHandler);