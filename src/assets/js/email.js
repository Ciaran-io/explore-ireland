const btnEmail = document.getElementById('button_email');
// form event listener for form submition
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.init('user_ZxaX1Ph4GVNusJIcXdifR');

  btnEmail.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_k3subcm';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btnEmail.value = 'Message Sent';
    },
    (err) => {
      btnEmail.value = 'Message failed to send';
      alert(JSON.stringify(err));
    }
  );
});
