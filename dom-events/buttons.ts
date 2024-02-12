const $btn = document.querySelector('.click-button');

if (!$btn) throw new Error('The $variableName query failed');

function handleClick(event: any): any {
  console.log('button clicked:');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$btn.addEventListener('click', handleClick);

const $hvrBtn = document.querySelector('.hover-button');

if (!$hvrBtn) throw new Error('The $variableName query failed');

function handleMouseover(event: any): any {
  console.log('button hovered:');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$hvrBtn.addEventListener('mouseover', handleMouseover);

const $dblClickedBtn = document.querySelector('.double-click-button');

if (!$dblClickedBtn) throw new Error('The $variableName query failed');

function handleDoubleClick(event: any): any {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$dblClickedBtn.addEventListener('dblclick', handleDoubleClick);
