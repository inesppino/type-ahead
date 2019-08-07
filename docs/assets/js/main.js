"use strict";const endpoint="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",inputSearch=document.querySelector(".search"),suggestions=document.querySelector(".suggestions"),cities=[];function findMatches(e,t){return t.filter(t=>{const n=new RegExp(e,"gi");return t.city.match(n)||t.state.match(n)})}function numberWithComas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function displayMatches(){const e=findMatches(this.value,cities).map(e=>{const t=new RegExp(this.value,"gi");return`\n    <li>\n      <span class="name">${e.city.replace(t,`<span class="hl">${this.value}</span>`)}, ${e.state.replace(t,`<span class="hl">${this.value}</span>`)}</span>\n      <span class="population">${numberWithComas(e.population)}</span>\n    </li>\n    `}).join("");suggestions.innerHTML=e}fetch(endpoint).then(e=>e.json()).then(e=>cities.push(...e)),inputSearch.addEventListener("change",displayMatches),inputSearch.addEventListener("keyup",displayMatches);