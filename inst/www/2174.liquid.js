"use strict";(self.webpackChunkjs=self.webpackChunkjs||[]).push([[2174],{2174:(t,e,o)=>{o.r(e),o.d(e,{ld_tooltip:()=>d,ld_tooltip_popper:()=>h});var i=o(8815),l=o(3848),r=o(1057);let a=0;const d=class{constructor(t){(0,i.r)(this,t),this.idDescriber="ld-tooltip-"+ ++a,this.hideDelay=0,this.position="top center",this.showDelay=0,this.tag="button",this.triggerType="hover",this.hasDefaultTrigger=!0,this.visible=!1,this.mapPositionToAttachment=t=>({"bottom center":"top center","bottom left":"top left","bottom right":"top right","left bottom":"bottom right","left middle":"middle right","left top":"top right","right bottom":"bottom left","right middle":"middle left","right top":"top left","top center":"bottom center","top left":"bottom left","top right":"bottom right"}[t]),this.mapPositionToTargetAttachment=t=>{var e;return null!==(e={"left bottom":"bottom left","left middle":"middle left","left top":"top left","right bottom":"bottom right","right middle":"middle right","right top":"top right"}[t])&&void 0!==e?e:t},this.initTooltip=async()=>{const t=this.mapPositionToAttachment(this.position),e=this.mapPositionToTargetAttachment(this.position);this.tooltipRef.querySelector("slot").assignedNodes().forEach((t=>{this.tooltipRef.appendChild(t)}));const o="string"==typeof this.tetherOptions?JSON.parse(this.tetherOptions):this.tetherOptions,i=Object.assign({attachment:t,classPrefix:"ld-tether",constraints:[{attachment:"together",to:"window"}],element:this.tooltipRef,target:this.triggerRef,targetAttachment:e},o);this.popper=new l.T(i),this.popper.enable(),this.popper.enable(),this.popper.enable(),this.popper.enable(),this.visible=!0},this.toggleTooltip=()=>{null!=this.popper&&(this.visible?this.hideTooltip():this.showTooltip())},this.handleHideTrigger=()=>{"click"===this.triggerType||this.disabled||(clearTimeout(this.delayTimeout),this.popper&&(this.delayTimeout=setTimeout((()=>{this.hideTooltip()}),this.hideDelay)))},this.handleShowTrigger=()=>{"click"===this.triggerType||this.disabled||(clearTimeout(this.delayTimeout),void 0===this.popper?this.delayTimeout=setTimeout(this.initTooltip,this.showDelay):this.delayTimeout=setTimeout(this.showTooltip.bind(this),this.showDelay))},this.handleToggleTrigger=()=>{"hover"===this.triggerType||this.disabled||(void 0===this.popper?this.initTooltip():this.toggleTooltip())}}updatePopper(t){t&&this.hideTooltip()}async hideTooltip(){var t;clearTimeout(this.delayTimeout),null===(t=this.popper)||void 0===t||t.disable(),this.visible=!1}async showTooltip(){this.disabled||(clearTimeout(this.delayTimeout),this.popper.enable(),this.visible=!0)}handleClickOutside(t){this.popper&&"click"===this.triggerType&&t.target.closest("ld-tooltip")!==this.element&&t.target.closest(".ld-tooltip")!==this.tooltipRef&&this.hideTooltip()}handleTouchOutside(t){this.handleClickOutside(t)}componentWillLoad(){this.hasDefaultTrigger=!this.element.querySelector('[slot="trigger"]')}disconnectedCallback(){var t,e;null===(t=this.popper)||void 0===t||t.destroy(),null===(e=this.tooltipRef)||void 0===e||e.remove()}render(){const t=this.tag;return(0,i.h)(i.H,null,(0,i.h)(t,{"aria-describedby":this.idDescriber,class:(0,r.g)(["ld-tooltip__trigger","click"===this.triggerType&&"ld-tooltip__trigger--clickable"]),onClick:this.handleToggleTrigger,onMouseEnter:this.handleShowTrigger,onFocus:this.handleShowTrigger,onMouseLeave:this.handleHideTrigger,onBlur:this.handleHideTrigger,part:"trigger focusable",ref:t=>{this.triggerRef=t},type:"button"},(0,i.h)("ld-sr-only",null,"Info"),(0,i.h)("slot",{name:"trigger"},(0,i.h)("svg",{class:"ld-tooltip__icon",fill:"none",part:"icon",viewBox:"0 0 24 24"},(0,i.h)("path",{"clip-rule":"evenodd",d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.9249 18.0751 1 12 1C5.9249 1 1 5.9249 1 12C1 18.0751 5.9249 23 12 23Z","fill-rule":"evenodd",fill:"currentColor"}),(0,i.h)("path",{"clip-rule":"evenodd",d:"M11.9996 8.6477C12.9254 8.6477 13.6758 7.8973 13.6758 6.9715C13.6758 6.0458 12.9254 5.2953 11.9996 5.2953C11.0739 5.2953 10.3235 6.0458 10.3235 6.9715C10.3235 7.8973 11.0739 8.6477 11.9996 8.6477ZM10.8453 17.8038C11.1932 18.1517 11.6736 18.3256 12.2865 18.3256H13.4545C13.6864 18.3256 13.8023 18.2263 13.8023 18.0275V12.2873C13.8023 11.6744 13.6284 11.1939 13.2805 10.8461C12.9326 10.4982 12.4522 10.3242 11.8393 10.3242H10.6713C10.4394 10.3242 10.3235 10.4236 10.3235 10.6224V16.3626C10.3235 16.9755 10.4974 17.456 10.8453 17.8038Z","fill-rule":"evenodd",fill:"var(--ld-col-wht)"})))),(0,i.h)("ld-tooltip-popper",{"aria-hidden":this.visible?void 0:"true",arrow:this.arrow,hasDefaultTrigger:this.hasDefaultTrigger,id:this.idDescriber,part:"popper",size:this.size,ref:t=>{this.tooltipRef=t},triggerType:this.triggerType},(0,i.h)("slot",null)))}get element(){return(0,i.g)(this)}static get watchers(){return{disabled:["updatePopper"]}}};d.style=".ld-tooltip__trigger{--ld-tooltip-trigger-icon-col:var(--ld-thm-primary);--ld-tooltip-trigger-icon-col-hover:var(--ld-thm-primary-hover);--ld-tooltip-trigger-icon-col-focus:var(--ld-thm-primary-focus);background:none;border:0;color:inherit;display:inline-block;font-family:inherit;font-size:inherit;padding:0}.ld-tooltip__trigger--clickable{cursor:pointer}.ld-tooltip__trigger:focus:focus-visible .ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col-focus)}.ld-tooltip__trigger:hover .ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col-hover)}.ld-tooltip__trigger+.ld-tooltip{display:none;opacity:0;position:absolute}.ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col);display:flex;height:var(--ld-sp-16);width:var(--ld-sp-16)}";const h=class{constructor(t){(0,i.r)(this,t),this.initialized=!1,this.triggerType="hover"}componentDidLoad(){setTimeout((()=>{this.initialized=!0}))}render(){return(0,i.h)(i.H,{class:(0,r.g)(["ld-tooltip",this.arrow&&"ld-tooltip--with-arrow",this.hasDefaultTrigger&&"ld-tooltip--with-default-trigger",this.initialized&&"ld-tooltip--initialized",this.size&&`ld-tooltip--${this.size}`,"click"===this.triggerType&&"ld-tooltip--interactive"]),role:"tooltip"},this.arrow&&(0,i.h)("span",{class:"ld-tooltip__arrow"}),(0,i.h)("slot",null))}get element(){return(0,i.g)(this)}};h.style="@keyframes ld-tooltip-show{0%{opacity:0}to{opacity:1}}@keyframes ld-tooltip-hide{to{visibility:hidden}}:host(.ld-tooltip){--ld-zi-max:2147483647;--ld-tooltip-animation-duration:0s;--ld-tooltip-distance-from-trigger:var(--ld-sp-8);--ld-tooltip-max-width:20rem;--ld-tooltip-offset-x:0px;--ld-tooltip-offset-y:0px;--ld-tooltip-padding:var(--ld-sp-16);--ld-tooltip-sm-padding:var(--ld-sp-6) var(--ld-sp-8);--tooltip-col:var(--ld-col-neutral-900);--tooltip-bg-col:var(--ld-col-wht);animation:ld-tooltip-hide 0s ease var(--ld-tooltip-animation-duration);animation-fill-mode:forwards;background-color:var(--tooltip-bg-col);border-radius:var(--ld-br-m);color:var(--tooltip-col);filter:var(--ld-drop-shadow-hover);margin-left:var(--ld-tooltip-offset-x);margin-top:var(--ld-tooltip-offset-y);max-width:var(--ld-tooltip-max-width);opacity:0;padding:var(--ld-tooltip-padding);pointer-events:none;position:relative;transition:opacity var(--ld-tooltip-animation-duration) ease-in;z-index:var(--ld-zi-max)}@media (prefers-reduced-motion:no-preference){:host(.ld-tooltip--initialized){--ld-tooltip-animation-duration:0.2s}}:host(.ld-tooltip--sm){--ld-tooltip-padding:var(--ld-tooltip-sm-padding)}:host(.ld-tooltip--with-arrow){--ld-tooltip-arrow-size:0.5rem;--ld-tooltip-arrow-offset:var(--ld-sp-16);--ld-tooltip-distance-from-trigger:calc(var(--ld-tooltip-arrow-size) + var(--ld-sp-8))}:host(.ld-tooltip--interactive){pointer-events:auto}:host(.ld-tooltip.ld-tether-enabled){animation:ld-tooltip-show var(--ld-tooltip-animation-duration) ease-out;opacity:1}:host(.ld-tooltip.ld-tether-element-attached-bottom) .ld-tooltip__arrow{bottom:var(--ld-tooltip-arrow-offset)}:host(.ld-tooltip.ld-tether-element-attached-bottom.ld-tether-target-attached-top){margin-top:calc(var(--ld-tooltip-distance-from-trigger)*-1 - var(--ld-tooltip-offset-y))}:host(.ld-tooltip.ld-tether-element-attached-bottom.ld-tether-target-attached-top) .ld-tooltip__arrow{border-top-color:var(--tooltip-bg-col);top:100%}:host(.ld-tooltip.ld-tether-element-attached-center) .ld-tooltip__arrow{left:calc(50% - var(--ld-tooltip-arrow-size))}:host(.ld-tooltip.ld-tether-element-attached-left.ld-tether-target-attached-right){margin-left:calc(var(--ld-tooltip-offset-x) + var(--ld-tooltip-distance-from-trigger))}:host(.ld-tooltip.ld-tether-element-attached-left.ld-tether-target-attached-right) .ld-tooltip__arrow{border-right-color:var(--tooltip-bg-col);right:100%}:host(.ld-tooltip.ld-tether-element-attached-middle) .ld-tooltip__arrow{top:calc(50% - var(--ld-tooltip-arrow-size))}:host(.ld-tooltip.ld-tether-element-attached-right) .ld-tooltip__arrow{right:var(--ld-tooltip-arrow-offset)}:host(.ld-tooltip.ld-tether-element-attached-right.ld-tether-target-attached-left){margin-left:calc(var(--ld-tooltip-distance-from-trigger)*-1 - var(--ld-tooltip-offset-x))}:host(.ld-tooltip.ld-tether-element-attached-right.ld-tether-target-attached-left) .ld-tooltip__arrow{border-left-color:var(--tooltip-bg-col);left:100%}:host(.ld-tooltip.ld-tether-element-attached-top.ld-tether-target-attached-bottom){margin-top:calc(var(--ld-tooltip-distance-from-trigger) + var(--ld-tooltip-offset-y))}:host(.ld-tooltip.ld-tether-element-attached-top.ld-tether-target-attached-bottom) .ld-tooltip__arrow{border-bottom-color:var(--tooltip-bg-col);bottom:100%}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-bottom.ld-tether-target-attached-top):where(.ld-tether-element-attached-right)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-top.ld-tether-target-attached-bottom):where(.ld-tether-element-attached-right)){--ld-tooltip-offset-x:1rem}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-bottom.ld-tether-target-attached-top):where(.ld-tether-element-attached-left)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-top.ld-tether-target-attached-bottom):where(.ld-tether-element-attached-left)){--ld-tooltip-offset-x:-1rem}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-left.ld-tether-target-attached-right):where(.ld-tether-element-attached-bottom)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-right.ld-tether-target-attached-left):where(.ld-tether-element-attached-bottom)){--ld-tooltip-offset-y:1rem}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-left.ld-tether-target-attached-right):where(.ld-tether-element-attached-top)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-right.ld-tether-target-attached-left):where(.ld-tether-element-attached-top)){--ld-tooltip-offset-y:-1rem}.ld-tooltip__arrow{border:var(--ld-tooltip-arrow-size) solid #0000;position:absolute}"}}]);