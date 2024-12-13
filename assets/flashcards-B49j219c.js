import"./index_gl-B5xreevB.js";const l="https://1e80-2607-fb90-d19e-8061-bdf5-577e-f4c0-23b.ngrok-free.app/flashcards",s=!0;function i(t){let e=!0,n="";typeof t!="object"&&(n+=`	- Flashcard failed object validation.
`,e=e&&!1),t==null&&(n+=`	- Flashcard failed null validation.
`,e=e&&!1);const o=t;return typeof o.id!="number"&&(n+="	- Flashcard (id) failed numeric validation. Received: "+typeof o.id+`.
`,e=e&&!1),typeof o.front!="string"&&(n+="	- Flashcard (front) failed string validation. Received: "+typeof o.front+`.
`,e=e&&!1),typeof o.back!="string"&&(n+="	- Flashcard (back) failed string validation. Received: "+typeof o.back+`.
`,e=e&&!1),e===!1&&console.log(`Flashcard retrieval failed with the following errors:
`+n),e}async function c(){const t=l;try{const e=await fetch(t,{method:"GET",headers:s?{"ngrok-skip-browser-warning":"true"}:void 0});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const n=await e.json();if(!Array.isArray(n)||!n.every(i))throw new Error("Invalid flashcard data structure.");return console.log(`[ debug ]:
`+JSON.stringify(n,null,4)),n}catch(e){return console.error("Failed to fetch flashcards:",e),null}}async function d(t){const e=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});console.log("[ debug ]: Sending:"+JSON.stringify(t,null,4));const n=await e.json();console.log(`[ debug ]:
`+JSON.stringify(n,null,4))}function u(){const t=document.createElement("div");t.style.position="fixed",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.padding="20px",t.style.backgroundColor="white",t.style.border="1px solid black",t.style.zIndex="1000";const e=[];for(let r=0;r<3;r++){const a=document.createElement("input");r===0?(a.type="number",a.placeholder="Enter flashcard id."):(a.type="string",a.placeholder="--"),a.style.display="block",a.style.marginBottom="10px",e.push(a),t.appendChild(a)}const n=document.createElement("button");n.textContent="Submit",t.appendChild(n);const o=document.createElement("button");o.textContent="Cancel",t.appendChild(o),document.body.appendChild(t),n.addEventListener("click",()=>{const r={id:parseInt(e[0].value),front:e[1].value,back:e[2].value};t.remove(),d(r)}),o.addEventListener("click",()=>{t.remove()})}function f(){const t=document.getElementById("fc_request_button");t?t.addEventListener("click",c):console.warn("Button element is null.");const e=document.getElementById("fc_update_button");e?e.addEventListener("click",u):console.warn("Button element is null.")}document.addEventListener("DOMContentLoaded",()=>{f()});