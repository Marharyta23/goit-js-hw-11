import{i as n,S as g}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let c;a.form.addEventListener("submit",d);function d(s){if(s.preventDefault(),a.gallery.innerHTML="",c=s.target.elements.search.value.trim(),console.log(c),c===""){n.error({position:"bottomCenter",icon:"",message:"Please, write something"});return}a.loader.style.display="block",p(c).then(r=>{if(r.hits.length===0){n.error({position:"bottomCenter",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}else h(r.hits)}).catch(r=>console.log(r)).finally(()=>a.loader.style.display="none"),s.target.reset()}function p(s){const i=`https://pixabay.com/api/?key=42263237-cb79a6606f476b00f134f6b96&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(o=>o.json())}function f(s){return s.map(({largeImageURL:i,webformatURL:o,tags:e,likes:t,views:l,comments:m,downloads:u})=>`<li class="gallery-item">
        <a
          class="gallery-link"
          href='${i}'
        >
          <img
            class="gallery-image"
            src='${o}'
            data-source="large-image.jpg"
            alt='${e}'
          />
        </a>
        <ul class="image-desc-list">
          <li class="image-desc-item">
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${t}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${l}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Comments</h3>
            <p class="image-desc-text">${m}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${u}</p>
          </li>
        </ul>
      </li>`).join("")}function h(s){const r=f(s);a.gallery.insertAdjacentHTML("afterbegin",r);const i=new g(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});i.on("show.simplelightbox"),i.refresh()}
//# sourceMappingURL=commonHelpers.js.map
