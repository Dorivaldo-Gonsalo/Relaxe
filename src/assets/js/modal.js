 const dataArray = []; // array para armazenar os dados do formulário

  const form = document.getElementById('contact-form');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio padrão

    // Captura dos valores
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Armazena em um array (objeto)
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
    dataArray.push(formData);

    // Aqui você pode adicionar a lógica de envio via AJAX ou similar
    // Para este exemplo, vamos assumir que sempre é bem sucedido
    const success = true; // ou lógica real de sucesso/falha

    if (success) {
      showModal('Mensagem enviada com sucesso!');
    } else {
      showModal('Falha ao enviar a mensagem. Tente novamente.');
    }

    // Opcional: limpar o formulário após o envio
    form.reset();
  });

  function showModal(msg) {
    modalMessage.textContent = msg;
    modal.style.display = 'flex';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  // Para fechar ao clicar fora ou por qualquer motivo, você pode adicionar:
  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  }