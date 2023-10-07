// Función para verificar si una contraseña cumple con los requisitos
function esContraseñaValida(contraseña) {
    return contraseña && contraseña.length >= 8 && /[A-Z]/.test(contraseña) && /\d/.test(contraseña);
  }
  
  // Función para registrar un usuario
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
  
  // Agregar un listener al formulario para manejar el registro
  const formulario = document.getElementById('registroForm');
  formulario.addEventListener('submit', registrarUsuario);
  