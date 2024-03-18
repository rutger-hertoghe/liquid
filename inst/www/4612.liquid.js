"use strict";(self.webpackChunkjs=self.webpackChunkjs||[]).push([[4612],{4596:(e,t,a)=>{a.d(t,{c:()=>s});const s=(e,t)=>t&&(t.closest(e)||s(e,t.getRootNode().host))},1057:(e,t,a)=>{a.d(t,{g:()=>s});const s=e=>e.filter((e=>e)).join(" ")},4612:(e,t,a)=>{a.r(t),a.d(t,{ld_sidenav_scroller_internal:()=>d,ld_sidenav_separator:()=>n});var s=a(8815),l=a(1057),o=a(4596),i=a(8574);const d=class{constructor(e){(0,s.r)(this,e),this.hasShadowBottom=!1,this.hasShadowTop=!1}handleSidenavCollapsedChange(e){e.target===this.sidenav&&(this.sidenavCollapsed=e.detail.collapsed)}handleSidenavBreakpointChange(e){e.target===this.sidenav&&(this.sidenavClosable=e.detail)}async updateShadows(){const e=this.el;e&&(this.hasShadowBottom=e.scrollTop<e.scrollHeight-e.clientHeight-10,this.hasShadowTop=e.scrollTop>10)}async scrollToTop(e=!1){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;try{this.el.scrollTo({top:0,behavior:e&&!t?"smooth":"auto"})}catch(e){}}componentWillLoad(){this.sidenav=(0,o.c)("ld-sidenav",this.el),this.sidenav&&(this.needsHRTop=!!this.sidenav.querySelector('[slot="top"]'),this.needsHRBottom=!!this.sidenav.querySelector('[slot="bottom"]'),this.relative=!this.sidenav.querySelector("ld-sidenav-slider"))}componentDidLoad(){setTimeout((()=>{this.updateShadows()}))}render(){const e=(0,l.g)(["ld-sidenav-scroller-internal",this.relative&&"ld-sidenav-scroller-internal--relative",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-scroller-internal--collapsed"]);return(0,s.h)(s.H,{class:e,onScroll:this.updateShadows.bind(this),onLdSidenavAccordionTransitionEnd:this.updateShadows.bind(this),"data-needs-bottom":this.needsHRBottom,"data-needs-top":this.needsHRTop},(0,s.h)("div",{class:"ld-sidenav-scroller-internal__shadow-top",style:{opacity:this.hasShadowTop?"1":"0"},part:"shadow-top"}),(0,s.h)("div",{class:"ld-sidenav-scroller-internal__shadow-bottom",style:{opacity:this.hasShadowBottom?"1":"0"},part:"shadow-bottom"}),this.needsHRTop&&(0,s.h)("ld-sidenav-separator",{class:"ld-sidenav-scroller-internal__hr-top",style:{opacity:this.hasShadowTop?"0":"1"}}),this.needsHRBottom&&(0,s.h)("ld-sidenav-separator",{class:"ld-sidenav-scroller-internal__hr-bottom",style:{opacity:this.hasShadowBottom?"0":"1"}}),(0,s.h)("slot",null))}get el(){return(0,s.g)(this)}};d.style=':host{--ld-scroll-shadow-height:1.5rem;--ld-scroll-shadow-intensity:0.1;display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;overscroll-behavior:none;padding-right:var(--ld-sp-32);scrollbar-width:none;width:100%}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host ::slotted(ld-sidenav-heading:first-child),:host ::slotted(ld-sidenav-navitem:first-child){margin-top:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-navitem){margin-bottom:var(--ld-sidenav-padding-y);will-change:opacity}:host(.ld-sidenav-scroller-internal--relative){position:relative}:host(.ld-sidenav-scroller-internal--relative) .ld-sidenav-scroller-internal__hr-bottom,:host(.ld-sidenav-scroller-internal--relative) .ld-sidenav-scroller-internal__hr-top{position:sticky}:host(.ld-sidenav-scroller-internal--collapsed) .ld-sidenav-scroller-internal__shadow-bottom,:host(.ld-sidenav-scroller-internal--collapsed) .ld-sidenav-scroller-internal__shadow-top{transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*(50% - var(--ld-sidenav-width-collapsed)*0.5)))}.ld-sidenav-scroller-internal__shadow-bottom,.ld-sidenav-scroller-internal__shadow-top{height:0;left:0;opacity:0;pointer-events:none;position:sticky;transition:opacity var(--ld-sidenav-transition-duration) linear,transform var(--ld-sidenav-transition-duration) ease;width:100%;z-index:1}.ld-sidenav-scroller-internal__shadow-bottom:after,.ld-sidenav-scroller-internal__shadow-top:after{content:"";display:block;height:var(--ld-scroll-shadow-height);width:100%}.ld-sidenav-scroller-internal__shadow-top{top:0}.ld-sidenav-scroller-internal__shadow-top:after{background:radial-gradient(farthest-side at 50% 0,rgb(0,0,0,var(--ld-scroll-shadow-intensity)),#0000) 0 100% no-repeat}.ld-sidenav-scroller-internal__shadow-bottom{top:100%}.ld-sidenav-scroller-internal__shadow-bottom:after{background:radial-gradient(farthest-side at 50% 100%,rgb(0,0,0,var(--ld-scroll-shadow-intensity)),#0000) 0 100% no-repeat;transform:translateY(-100%)}.ld-sidenav-scroller-internal__hr-bottom,.ld-sidenav-scroller-internal__hr-top{margin-bottom:0;margin-top:0;position:absolute;width:calc(100% - var(--ld-sidenav-padding-y)*2)}.ld-sidenav-scroller-internal__hr-top{top:0}.ld-sidenav-scroller-internal__hr-bottom{top:calc(100% - var(--ld-sp-1)*1.5)}';const n=class{constructor(e){(0,s.r)(this,e),this.scaleXCollapsed=1,this.computeScaleXCollapsed=()=>{const e=parseFloat(window.getComputedStyle(this.sidenav).getPropertyValue("--ld-sidenav-width")),t=parseFloat(window.getComputedStyle(this.sidenav).getPropertyValue("--ld-sidenav-padding-x"));return parseFloat(window.getComputedStyle(this.sidenav).getPropertyValue("--ld-sidenav-navitem-icon-size"))/(e-2*t)}}handleSidenavCollapsedChange(e){e.target===this.sidenav&&(this.sidenavCollapsed=e.detail.collapsed,this.el.parentElement&&!["LD-SIDENAV-SLIDER","LD-SIDENAV-SUBNAV"].includes(this.el.parentElement.tagName)||this.sidenav.narrow&&(0,i.t)(this.el,this.sidenavCollapsed))}handleSidenavBreakpointChange(e){e.target===this.sidenav&&(this.sidenavClosable=e.detail,this.sidenavClosable?(0,i.t)(this.el,!1):(0,i.t)(this.el,this.sidenav.narrow&&this.sidenavCollapsed))}componentWillLoad(){this.sidenav=(0,o.c)("ld-sidenav",this.el),this.sidenav&&(this.scaleXCollapsed=this.computeScaleXCollapsed()||1)}render(){const e=(0,l.g)(["ld-sidenav-separator",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-separator--collapsed"]);return(0,s.h)(s.H,{style:{"--ld-sidenav-separator-scale-x-collapsed":this.scaleXCollapsed.toString()},class:e},(0,s.h)("hr",{part:"hr"}))}get el(){return(0,s.g)(this)}};n.style=":host{display:block;margin:0 var(--ld-sidenav-padding-x) var(--ld-sidenav-padding-y);transform-origin:left;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host hr{background-color:var(--ld-sidenav-separator-line-bg-col);border:0;border-radius:var(--ld-br-full);height:var(--ld-sp-2);margin:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host(.ld-sidenav-separator--collapsed){transform:translateX(var(--ld-sidenav-translate-x-delta)) scaleX(var(--ld-sidenav-separator-scale-x-collapsed))}:host(.ld-sidenav-separator--collapsed) hr{transform:translateY(var(\n          --ld-slider-navitem-move-up-closable,var(--ld-slider-navitem-move-up,0)\n        ));transition:var(--ld-sidenav-stack-to-top-transition)}"},8574:(e,t,a)=>{a.d(t,{t:()=>s});const s=(e,t)=>{const a=e.closest("ld-sidenav-slider");if(!a)return;if(!t)return void e.style.removeProperty("--ld-slider-navitem-move-up");const s=16*parseInt(window.getComputedStyle(a).getPropertyValue("--ld-sidenav-padding-y"));let l=0,o=0;for(const t of Array.from(e.parentElement.children)){if(e===t)break;"LD-SIDENAV-ACCORDION"===t.tagName||"LD-SIDENAV-SEPARATOR"===t.tagName||"LD-SIDENAV-SUBNAV"===t.tagName||"LD-SIDENAV-NAVITEM"===t.tagName&&!["secondary","tertiary"].includes(t.mode)?o+=t.getBoundingClientRect().height:l+=s,l+=t.getBoundingClientRect().height}const i=l-o;e.style.setProperty("--ld-slider-navitem-move-up",`-${i}px`)}}}]);