'use strict';
const scene = document.getElementById('scene');
const table = document.getElementById('table-space');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
scene.addEventListener('pointermove', (event) => {
  if (reducedMotion.matches || event.pointerType === 'touch') return;
  const rect = scene.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  table.style.transform = `translate(-50%,-50%) rotateX(${50 - y * 12}deg) rotateZ(${-24 + x * 12}deg)`;
});
scene.addEventListener('pointerleave', () => { table.style.transform = ''; });
const response = document.getElementById('response');
const ask = document.getElementById('ask');
function showResponse(content) {
  ask.hidden = true;
  response.hidden = false;
  response.innerHTML = content;
}
function reset() { response.hidden = true; ask.hidden = false; }
document.getElementById('yes').addEventListener('click', () => {
  showResponse(`<h2>It’s a date, Sonia. ♡</h2><p>November 17. My place. I can’t wait to cook for you.<br>Send me a little “yes” so I know you’re coming, and we’ll pick a time.</p><div class="actions"><button class="primary" id="calendar">Save the date <span>↗</span></button><button class="secondary" id="copy">Copy my reply</button><button class="secondary" id="back">Go back</button></div><p class="small-note">This page doesn’t send your answer automatically.</p>`);
  document.getElementById('calendar').addEventListener('click', saveCalendar);
  document.getElementById('back').addEventListener('click', reset);
  document.getElementById('copy').addEventListener('click', async (event) => {
    const message = 'Yes, Vladimir, it’s a date! ♡ Dinner at your place on November 17. What time should I come?';
    try { await navigator.clipboard.writeText(message); event.target.textContent = 'Copied ♡'; }
    catch { const text = document.createElement('textarea'); text.value = message; response.append(text); text.select(); event.target.textContent = 'Select & copy the reply below'; }
  });
  if (!reducedMotion.matches) {
    for (let i = 0; i < 32; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece'; piece.textContent = i % 3 ? '♡' : '✧';
      piece.style.left = `${Math.random() * 100}%`; piece.style.fontSize = `${12 + Math.random() * 18}px`;
      piece.style.animationDelay = `${Math.random() * .8}s`;
      document.getElementById('confetti').append(piece);
      setTimeout(() => piece.remove(), 4500);
    }
  }
});
document.getElementById('another').addEventListener('click', () => {
  showResponse(`<h2>Let’s find our evening.</h2><p>I’d still love to cook for you. Message me a day that works for you, and we’ll make it happen. ♡</p><button class="secondary" id="back">Back to the invitation</button><p class="small-note">This page doesn’t send your answer automatically.</p>`);
  document.getElementById('back').addEventListener('click', reset);
});
function saveCalendar() {
  const calendar = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Vladimir//Dinner for Sonia//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT','UID:sonia-dinner-20261117@tablefortwo.local','DTSTAMP:20261015T000000Z','DTSTART;VALUE=DATE:20261117','DTEND;VALUE=DATE:20261118','SUMMARY:Dinner with Vladimir ♡','DESCRIPTION:A homemade dinner at Vladimir’s place. We’ll agree on the time together.','LOCATION:Vladimir’s place','END:VEVENT','END:VCALENDAR',''].join('\r\n');
  const url = URL.createObjectURL(new Blob([calendar], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'dinner-with-vladimir.ics'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
