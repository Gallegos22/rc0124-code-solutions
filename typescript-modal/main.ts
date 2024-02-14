const $openModal = document.querySelector('.open-modal');
console.log($openModal);
const $dismissModal = document.querySelector('.dismiss-modal');
console.log($dismissModal);
const $dialog = document.querySelector('dialog');
console.log($dialog);

if (!$openModal) throw new Error('The $openModal query failed');
if (!$dismissModal) throw new Error('The $dismissModal query failed');
if (!$dialog) throw new Error('The $dialog query failed');

function modalPopUp(): any {
  $dialog?.showModal();
}

function modalCloseOut(): any {
  $dialog?.close();
}

$openModal.addEventListener('click', modalPopUp);

$dismissModal.addEventListener('click', modalCloseOut);
