let numberOfClicks = 0;

const $hotBtn = document.querySelector('.hot-button');
console.log($hotBtn);
const $clickCount = document.querySelector('.click-count');
console.log($clickCount);
if (!$hotBtn) throw new Error('The $domElement query failed');

function hotBtn(): any {
  numberOfClicks++;
  if (!$hotBtn || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = 'clicks:' + numberOfClicks;
  if (numberOfClicks < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (numberOfClicks < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (numberOfClicks < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (numberOfClicks < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (numberOfClicks < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
}

$hotBtn.addEventListener('click', hotBtn);
