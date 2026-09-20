function r(n,a={}){const o=a.title||"提示",s=a.okText||"确定",l=a.cancelText||"取消";return new Promise(i=>{const t=document.createElement("div");t.className="app-modal-mask",t.innerHTML=`
      <div class="app-modal app-confirm">
        <h3 class="app-confirm-title">${o}</h3>
        <p class="app-confirm-msg">${n}</p>
        <div class="app-confirm-actions">
          <button class="btn-ghost" data-act="cancel">${l}</button>
          <button class="btn-primary" data-act="ok">${s}</button>
        </div>
      </div>
    `,document.body.appendChild(t);const c=e=>{t.remove(),i(e)};t.querySelector('[data-act="ok"]').onclick=()=>c(!0),t.querySelector('[data-act="cancel"]').onclick=()=>c(!1),t.addEventListener("mousedown",e=>{e.target===t&&c(!1)})})}export{r as c};
