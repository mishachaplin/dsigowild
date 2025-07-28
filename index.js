 document.getElementById('wild-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbzP2DPAq6as1fNbETFZoWIlTH9vz0zMk8edgK5KYSuLT7e5WccejQLwO5y3OSQnvAYvYw/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await res.json();
      document.getElementById('form-status').textContent = result.success
        ? 'Спасибо! Форма отправлена.'
        : 'Произошла ошибка. Попробуйте позже.';
      form.reset();
    } catch (err) {
      document.getElementById('form-status').textContent = 'Ошибка при отправке.';
    }
  });