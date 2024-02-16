const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('The $domElement query failed');

function tasklist(event: Event): any {
  const eventTarget = event.target as HTMLElement;
  console.log(eventTarget);
  console.log(eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const taskListItem = eventTarget.closest('.task-list-item');
    console.log('.task-list-item');
    taskListItem?.remove();
  }
}

$taskList.addEventListener('click', tasklist);
