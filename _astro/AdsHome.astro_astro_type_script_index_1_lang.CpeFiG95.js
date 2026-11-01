const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/svc-atom.B5bQ7d44.js","_astro/web-text.CJHuvrFg.js","_astro/lit.Db6wVdDu.js","_astro/pastel.DCPDNyuP.js","_astro/site.CZnNQnqr.js","_astro/iconify-icon.BQKUsOMK.js","_astro/atom-shell.Bn2tAYkz.js","_astro/repeat.C7e6QB9i.js","_astro/preload-helper.CWk6GCoH.js","_astro/format.ZIua1AAn.js","_astro/perf.mVLxyeMg.js","_astro/cookier.C2A61Slr.js","_astro/vn.D3ww6mPo.js"])))=>i.map(i=>d[i]);
import{a as e,c as i,n as t,t as r}from"./lit.Db6wVdDu.js";import"./web-toast.BllJ9F9u.js";import"./iconify-icon.BQKUsOMK.js";import{t as n}from"./preload-helper.CWk6GCoH.js";var o=class extends r{static properties={lang:{type:String},content:{type:Object},_near:{state:!0},_active:{state:!0}};static styles=i`
        :host { display: block; color: var(--color-base-content); }
        .head { max-width: 46rem; margin: 0 auto 1.5rem; text-align: center; }
        .eyebrow { margin: 0 0 .6rem; font-size: .72rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--color-primary); }
        h2 { margin: 0; font-size: clamp(1.6rem, 3.2vw, 2.4rem); line-height: 1.2; font-weight: 700; }
        .desc { margin: .9rem auto 0; line-height: 1.65; opacity: .72; }
        .frame {
            position: relative; height: min(78vh, 760px); min-height: 520px; overflow: hidden;
            border-radius: 1.25rem; background: #04060c;
            border: 1px solid color-mix(in oklab, var(--color-base-content) 14%, transparent);
            box-shadow: 0 24px 60px -24px color-mix(in oklab, var(--color-primary) 40%, transparent);
            contain: layout paint; transform: translateZ(0);
        }
        svc-atom { display: block; width: 100%; height: 100%; }
        .veil {
            position: absolute; inset: 0; z-index: 5; display: flex; flex-direction: column; align-items: center;
            justify-content: center; gap: .6rem; border: 0; padding: 0; cursor: pointer; color: #fff; font: inherit;
            background: radial-gradient(60% 50% at 50% 50%, rgb(4 6 12 / .15), rgb(4 6 12 / .55));
        }
        .veil .btn { display: inline-flex; align-items: center; gap: .5rem; padding: .8rem 1.4rem; border-radius: 999px; font-weight: 700;
            background: var(--color-primary); color: #04060c; box-shadow: 0 10px 30px -8px var(--color-primary); }
        .veil .hint { font-size: .8rem; opacity: .8; }
        .veil:focus-visible .btn { outline: 2px solid #fff; outline-offset: 3px; }
        .full { position: absolute; top: .75rem; right: .75rem; z-index: 6; display: inline-flex; align-items: center; gap: .35rem;
            padding: .4rem .75rem; border-radius: 999px; font-size: .78rem; font-weight: 600; text-decoration: none; color: #fff;
            background: rgb(4 6 12 / .6); border: 1px solid rgb(255 255 255 / .18); backdrop-filter: blur(8px); }
        .links { display: flex; flex-wrap: wrap; justify-content: center; gap: .6rem; margin-top: 1rem; }
        .links a { display: inline-flex; align-items: center; gap: .4rem; padding: .5rem .95rem; border-radius: 999px; font-size: .85rem;
            font-weight: 600; text-decoration: none; color: inherit;
            border: 1px solid color-mix(in oklab, var(--color-base-content) 16%, transparent); }
        .links a:hover { border-color: var(--color-primary); color: var(--color-primary); }
    `;constructor(){super(),this.lang="en",this.content={},this._near=!1,this._active=!1,this._io=null}firstUpdated(){const e=this.renderRoot.querySelector(".frame");if(!("IntersectionObserver"in window))return this._mount();this._io=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&this._mount()},{rootMargin:"300px 0px"}),this._io.observe(e)}disconnectedCallback(){super.disconnectedCallback(),this._io?.disconnect()}async _mount(){this._io?.disconnect(),this._near||(await n(()=>import("./svc-atom.B5bQ7d44.js").then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),this._near=!0)}render(){const i=this.content??{},r="vi"===this.lang?"vi":"en";return e`
            ${i.heading?e`
                <div class="head">
                    ${i.eyebrow?e`<p class="eyebrow">${i.eyebrow}</p>`:t}
                    <h2>${i.heading}</h2>
                    ${i.description?e`<p class="desc">${i.description}</p>`:t}
                </div>`:t}
            <div class="frame">
                ${this._near?e`<svc-atom lang=${r}></svc-atom>`:t}
                ${this._active?t:e`
                    <button class="veil" type="button" @click=${()=>{this._mount(),this._active=!0}}>
                        <span class="btn"><iconify-icon icon="ri:cursor-line"></iconify-icon>${i.start??"Explore live ads"}</span>
                        ${i.hint?e`<span class="hint">${i.hint}</span>`:t}
                    </button>`}
                ${i.open?.href?e`<a class="full" href=${i.open.href}><iconify-icon icon="ri:fullscreen-line"></iconify-icon>${i.open.label}</a>`:t}
            </div>
            ${i.links?.length?e`
                <nav class="links">
                    ${i.links.map(i=>e`<a href=${i.href}>${i.icon?e`<iconify-icon icon=${i.icon}></iconify-icon>`:t}${i.label}</a>`)}
                </nav>`:t}
        `}};customElements.get("atom-live")||customElements.define("atom-live",o);