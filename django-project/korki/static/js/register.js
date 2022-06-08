const form_field = document.getElementsByTagName('input');
const message = document.querySelector('.errorlist');
if (message) {
  message.innerHTML = '<li>Error! Check your password or username</li>';
}
console.log(message.value);
form_field[1].placeholder = '🙍Username';
form_field[2].placeholder = '✉️Email';
form_field[3].placeholder = '🔐Enter Password';
form_field[4].placeholder = '🔐Re-enter Password';
