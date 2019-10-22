'use strict'

let html = '',
  i = 1,
  j = 1;
            
for(i; i < 11; i++){
  html = html + `<p>La tabla del ${i}</p>`
  for(j = 1; j < 11; j++){
    html = html + `<p> ${i} x ${j} = ${i * j} </p>`;
  }
}
document.getElementById('app').innerHTML = html;
            
            