// Validación del formulario
$('#formularioContacto').on('submit', function (e) {
  e.preventDefault();
  const nombre = $('#nombre').val().trim();
  const correo = $('#correo').val().trim();
  const mensaje = $('#mensaje').val().trim();

  if (!nombre || !correo || !mensaje) {
    alert('Todos los campos son obligatorios.');
    return;
  }

  alert('Formulario enviado con éxito.');
  $(this).trigger('reset');
});

// Lógica del test
$('#verificarTest').click(function () {
  const respuesta = $('#respuestaTest').val();
  const feedback = $('#feedback');

  if (respuesta === 'correcta') {
    feedback.text('¡Correcto! ¡Bien hecho!').css('color', 'green');
  } else if (respuesta === 'incorrecta') {
    feedback.text('Respuesta incorrecta. Nunca hagas clic en correos sospechosos.').css('color', 'red');
  } else {
    feedback.text('Por favor selecciona una opción.').css('color', 'orange');
  }
});
