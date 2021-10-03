async function newFormHandler(event) {
    event.preventDefault();
  
    const branch_name = document.querySelector('input[name="prop-title"]').value;
    const branch_address = document.querySelector('input[name="prop-text"]').value;
    const branch_number = document.querySelector('input[name="prop-contact"]').value;
  

      const response = await fetch(`/api/props`, {
      method: 'POST',
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
  
  document.querySelector('.new-prop-form').addEventListener('submit', newFormHandler);
  