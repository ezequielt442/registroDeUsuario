
function esContraseñaValida(contraseña) {
    return contraseña && contraseña.length >= 8 && /[A-Z]/.test(contraseña) && /\d/.test(contraseña);
  }
  function registrarUsuario(event) {
    event.preventDefault();
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const contraseña = document.getElementById('contraseña').value;
  
    if (nombreUsuario && esContraseñaValida(contraseña)) {
      alert(`¡Hola, ${nombreUsuario}! Usuario y contraseña registrados correctamente.`);
    } else {
      alert('Por favor, verifica tus datos. La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.');
    }
  }
  
 
  const formulario = document.getElementById('registroForm');
  formulario.addEventListener('submit', registrarUsuario);
  