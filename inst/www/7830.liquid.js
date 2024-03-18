"use strict";(self.webpackChunkjs=self.webpackChunkjs||[]).push([[7830],{1057:(i,t,a)=>{a.d(t,{g:()=>e});const e=i=>i.filter((i=>i)).join(" ")},7830:(i,t,a)=>{a.r(t),a.d(t,{ld_pagination:()=>s});var e=a(8815),n=a(1057);const s=class{constructor(i){(0,e.r)(this,i),this.ldchange=(0,e.c)(this,"ldchange",7),this.hidePrevNext=!1,this.hideStartEnd=!1,this.itemLabel="Page",this.length=1/0,this.mode="numbers",this.offset=2,this.selectedIndex=0,this.sticky=0,this.maxSliderColumns=0,this.renderMoreIndicators=!1,this.renderSticky=!1,this.slidableItems=[],this.sliderContent=[],this.transitioning=!1,this.visibleItemsInSlider=0,this.handleTransitionEnd=()=>{this.transitioning=!1},this.handleTransitionStart=()=>{this.transitioning=!0},this.renderItem=(i,t,a)=>{const s="dots"===this.mode,o=(this.renderMoreIndicators||s)&&(i<t||i>a),l=i===this.selectedIndex+1;return(0,e.h)("li",{"aria-hidden":o?"true":void 0,class:(0,n.g)(["ld-pagination__item",!o&&"ld-pagination__item--visible",l&&"ld-pagination__item--selected"]),key:i,style:{"--ld-pagination-item-pos":""+(i-1)}},(0,e.h)("ld-button",{"aria-current":l?"true":void 0,"aria-label":o?void 0:`${this.itemLabel} ${i}`,class:s?"ld-pagination__dot":void 0,"ld-tabindex":o?-1:void 0,mode:"ghost",onClick:()=>{this.selectedIndex=i-1},part:"item focusable",size:this.size},!s&&i))},this.calculateSliderContent=()=>{const i=this.maxSliderColumns+this.sticky-1,t=this.length-this.maxSliderColumns-this.sticky+1;this.sliderContent=this.slidableItems.filter((a=>a>this.selectedIndex-20&&a<=this.selectedIndex+20||(!this.hideStartEnd||this.sticky>0)&&(a<=i||a>t)))}}handleSelectedIndex(){this.selectedIndex<-1?this.selectedIndex=-1:this.selectedIndex>=this.length?this.selectedIndex=this.length-1:this.ldchange.emit(this.selectedIndex)}componentWillLoad(){this.visibleItemsInSlider=2*this.offset+1;const i=2*this.sticky+this.visibleItemsInSlider;this.maxSliderColumns=this.visibleItemsInSlider+2,this.renderSticky=this.sticky>0&&"dots"!==this.mode,this.renderMoreIndicators="dots"!==this.mode&&this.length>i+2,this.slidableItems=Array.from({length:this.length===1/0?9999:this.length-2*this.sticky}).map(((i,t)=>t+this.sticky+1)),this.length<1&&(this.length=1),this.selectedIndex<-1?this.selectedIndex=-1:this.selectedIndex>=this.length&&(this.selectedIndex=this.length-1),this.calculateSliderContent()}componentDidLoad(){this.wrapperRef&&(this.wrapperRef.addEventListener("transitionstart",this.handleTransitionStart),this.wrapperRef.addEventListener("transitionend",this.handleTransitionEnd))}disconnectedCallback(){this.wrapperRef&&(this.wrapperRef.removeEventListener("transitionstart",this.handleTransitionStart),this.wrapperRef.removeEventListener("transitionend",this.handleTransitionEnd))}render(){const i="dots"===this.mode,t=i&&this.space?{"--ld-pagination-dots-space":"0"===this.space?"0px":this.space}:void 0,a=this.renderMoreIndicators&&this.selectedIndex>this.sticky+this.offset+1,s=this.renderMoreIndicators&&this.selectedIndex<this.length-this.offset-this.sticky-2,o=Math.max(Math.min(this.selectedIndex-this.offset-(a?0:1),this.length-this.visibleItemsInSlider-this.sticky-1+(i?-1:0)),this.sticky)+1,l=Math.min(Math.max(this.selectedIndex+(s?0:1),this.offset+this.sticky+1+(i?1:0))+this.offset,this.length-this.sticky)+1;return(0,e.h)(e.H,{role:"navigation"},(0,e.h)("ul",{"aria-label":"Pagination",class:(0,n.g)(["ld-pagination",this.size&&`ld-pagination--${this.size}`,i&&"ld-pagination--dots",this.brandColor&&"ld-pagination--brand-color"]),part:"wrapper",style:t},!this.hideStartEnd&&(0,e.h)("li",{class:"ld-pagination__arrow"},(0,e.h)("ld-button",{"aria-label":this.startLabel?void 0:`First ${this.itemLabel.toLocaleLowerCase()}`,disabled:this.selectedIndex<1||void 0,mode:"ghost",onClick:()=>{this.selectedIndex=0},part:"arrow start focusable",size:this.size},this.startLabel?this.startLabel:(0,e.h)("ld-icon",{name:"arrow-double-left",size:this.size}))),!this.hidePrevNext&&(0,e.h)("li",{class:"ld-pagination__arrow"},(0,e.h)("ld-button",{"aria-label":this.prevLabel?void 0:`Previous ${this.itemLabel.toLocaleLowerCase()}`,disabled:this.selectedIndex<1,mode:"ghost",onClick:()=>{this.selectedIndex-=1},part:"arrow prev focusable",size:this.size},this.prevLabel?this.prevLabel:(0,e.h)("ld-icon",{name:"arrow-left",size:this.size}))),this.renderSticky&&Array.from({length:Math.min(this.sticky,this.length)}).map(((i,t)=>(0,e.h)("li",{class:"ld-pagination__sticky"},(0,e.h)("ld-button",{"aria-label":`${this.itemLabel} ${t+1}`,mode:"ghost",onClick:()=>{this.selectedIndex=t},part:"sticky item focusable",size:this.size},t+1)))),this.renderMoreIndicators&&(0,e.h)("li",{class:(0,n.g)(["ld-pagination__more-indicator",a&&"ld-pagination__more-indicator--visible"]),part:"more-indicator"},(0,e.h)("span",null,". . .")),(0,e.h)("li",{class:(0,n.g)(["ld-pagination__slide-wrapper",this.transitioning&&"ld-pagination__slide-wrapper--transitioning"]),part:"slide-wrapper",ref:i=>this.wrapperRef=i,style:{"--ld-pagination-slider-cols":`${Math.min(this.slidableItems.length,this.maxSliderColumns)}`}},(0,e.h)("ul",{class:"ld-pagination__items",part:"items",style:{"--ld-pagination-slide-index":`${Math.max(Math.min(this.selectedIndex-this.offset-1,this.length-this.visibleItemsInSlider-this.sticky-2),Math.min(this.sticky,this.length),0)}`}},!i&&(0,e.h)("li",{class:(0,n.g)(["ld-pagination__marker",this.selectedIndex<0&&"ld-pagination__marker--hidden"]),key:"marker",onTransitionEnd:this.calculateSliderContent,part:"marker",style:{"--ld-pagination-selected-index":`${Math.max(this.selectedIndex,0)}`}}),this.length>0&&this.sliderContent.map((i=>this.renderItem(i,o,l))))),this.renderMoreIndicators&&(0,e.h)("li",{class:(0,n.g)(["ld-pagination__more-indicator ld-pagination__more-indicator--end",s&&"ld-pagination__more-indicator--visible"]),part:"more-indicator"},(0,e.h)("span",null,". . .")),this.renderSticky&&this.length<1/0&&Array.from({length:this.sticky}).map(((i,t)=>{const a=this.length-t;return a<=this.sticky?null:(0,e.h)("li",{class:"ld-pagination__sticky"},(0,e.h)("ld-button",{mode:"ghost",onClick:()=>{this.selectedIndex=a-1},part:"sticky item focusable",size:this.size},a))})).reverse(),!this.hidePrevNext&&(0,e.h)("li",{class:"ld-pagination__arrow"},(0,e.h)("ld-button",{"aria-label":this.nextLabel?void 0:`Next ${this.itemLabel.toLocaleLowerCase()}`,disabled:this.selectedIndex>=this.length-1,mode:"ghost",onClick:()=>{this.selectedIndex+=1},part:"arrow next focusable",size:this.size},this.nextLabel?this.nextLabel:(0,e.h)("ld-icon",{name:"arrow-right",size:this.size}))),this.length<1/0&&!this.hideStartEnd&&(0,e.h)("li",{class:"ld-pagination__arrow"},(0,e.h)("ld-button",{"aria-label":this.endLabel?void 0:`Last ${this.itemLabel.toLocaleLowerCase()}`,disabled:this.selectedIndex>=this.length-1,mode:"ghost",onClick:()=>{this.selectedIndex=this.length-1},part:"arrow end focusable",size:this.size},this.endLabel?this.endLabel:(0,e.h)("ld-icon",{name:"arrow-double-right",size:this.size})))))}static get assetsDirs(){return["assets"]}static get watchers(){return{selectedIndex:["handleSelectedIndex"],length:["componentWillLoad"],mode:["componentWillLoad"],offset:["componentWillLoad"],sticky:["componentWillLoad"]}}};s.style='.ld-pagination{--ld-pagination-animation-duration:1ms;--ld-pagination-sm-item-size:2rem;--ld-pagination-md-item-size:2.5rem;--ld-pagination-lg-item-size:3.125rem;--ld-pagination-column-size:var(--ld-pagination-default-column-size);--ld-pagination-default-column-size:calc(var(--ld-pagination-item-size) + var(--ld-pagination-items-space));--ld-pagination-dot-col:var(--ld-thm-primary);--ld-pagination-dots-indicator-size:calc(var(--ld-pagination-dots-size) + var(--ld-sp-8));--ld-pagination-dots-indicator-size-active:calc(var(--ld-pagination-dots-size) + var(--ld-sp-12));--ld-pagination-dots-sm-size:0.25rem;--ld-pagination-dots-md-size:0.375rem;--ld-pagination-dots-lg-size:0.5rem;--ld-pagination-dots-size:var(--ld-pagination-dots-md-size);--ld-pagination-dots-sm-space:var(--ld-sp-8);--ld-pagination-dots-md-space:var(--ld-sp-12);--ld-pagination-dots-lg-space:var(--ld-sp-16);--ld-pagination-dots-space:var(--ld-pagination-dots-md-space);--ld-pagination-item-size:var(--ld-pagination-md-item-size);--ld-pagination-items-space:var(--ld-sp-4);--ld-pagination-marker-col:var(--ld-thm-primary-alpha-lowest);--ld-pagination-more-indicator-font:var(--ld-typo-body-m);--ld-pagination-primary-col:var(--ld-thm-primary);--ld-pagination-selected-col:var(--thm-primary-active);align-items:center;display:inline-flex;list-style:none;margin:0;padding:var(--ld-sp-1);position:relative}.ld-pagination--sm{--ld-pagination-more-indicator-font:var(--ld-typo-body-s);--ld-pagination-item-size:var(--ld-pagination-sm-item-size);--ld-pagination-dots-size:var(--ld-pagination-dots-sm-size);--ld-pagination-dots-space:var(--ld-pagination-dots-sm-space)}.ld-pagination--lg{--ld-pagination-more-indicator-font:var(--ld-typo-body-l);--ld-pagination-item-size:var(--ld-pagination-lg-item-size);--ld-pagination-dots-size:var(--ld-pagination-dots-lg-size);--ld-pagination-dots-space:var(--ld-pagination-dots-lg-space)}.ld-pagination--brand-color{--ld-pagination-marker-col:var(--ld-col-wht-alpha-lowest);--ld-pagination-dot-col:var(--ld-col-wht);--ld-pagination-primary-col:var(--ld-col-wht);--ld-pagination-selected-col:var(--ld-col-wht)}.ld-pagination--brand-color ld-button::part(button){color:var(--ld-col-wht)}.ld-pagination--brand-color ld-button::part(button):hover{background-color:var(--ld-col-wht-alpha-low)}.ld-pagination__arrow:not(:last-child),.ld-pagination__sticky{margin-right:var(--ld-pagination-items-space)}.ld-pagination__item,.ld-pagination__sticky{width:var(--ld-pagination-item-size)}.ld-pagination__item ld-button::part(button),.ld-pagination__sticky ld-button::part(button){padding:0}.ld-pagination__item,.ld-pagination__more-indicator{opacity:0;transition:opacity .1s linear}.ld-pagination__item--visible,.ld-pagination__more-indicator--visible{opacity:1}.ld-pagination__more-indicator{color:var(--ld-pagination-primary-col);font:var(--ld-pagination-more-indicator-font);font-weight:700;height:var(--ld-pagination-item-size);line-height:1;pointer-events:none;position:relative}.ld-pagination__more-indicator--end{right:var(--ld-pagination-column-size)}.ld-pagination__more-indicator span{align-items:center;display:flex;height:100%;justify-content:center;position:absolute;white-space:nowrap;width:var(--ld-pagination-item-size)}.ld-pagination__slide-wrapper{height:var(--ld-pagination-item-size);position:relative;width:calc(var(--ld-pagination-slider-cols)*var(--ld-pagination-column-size))}.ld-pagination__slide-wrapper--transitioning{overflow:hidden}.ld-pagination__items{display:inline-flex;list-style:none;padding:0;pointer-events:none;position:absolute;transform:translateX(calc(var(--ld-pagination-slide-index)*var(--ld-pagination-column-size)*-1));transition:transform .1s ease}.ld-pagination__item{left:calc(var(--ld-pagination-item-pos)*var(--ld-pagination-column-size));position:absolute}.ld-pagination__item--visible{pointer-events:auto}.ld-pagination__item--selected ld-button{--ld-button-bg-col:#0000}.ld-pagination__item--selected ld-button::part(button){color:var(--ld-pagination-selected-col);font-weight:900}.ld-pagination__item--selected ld-button .ld-pagination__dot{background-color:var(--ld-pagination-primary-col)}.ld-pagination__marker{background:var(--ld-pagination-marker-col);border-radius:var(--ld-br-m);height:var(--ld-pagination-item-size);position:absolute;transform:translateX(calc(var(--ld-pagination-column-size)*var(--ld-pagination-selected-index)));transition:transform var(--ld-pagination-animation-duration) ease,opacity var(--ld-pagination-animation-duration) ease;width:var(--ld-pagination-item-size);z-index:-1}@media (prefers-reduced-motion:no-preference){.ld-pagination__marker{--ld-pagination-animation-duration:0.1s}}.ld-pagination__marker--hidden{opacity:0}.ld-pagination--dots{--ld-pagination-item-size:var(--ld-pagination-dots-size);--ld-pagination-items-space:var(--ld-pagination-dots-space);--ld-pagination-column-size:max(var(--ld-pagination-default-column-size),var(--ld-pagination-dots-indicator-size))}.ld-pagination--dots .ld-pagination__arrow:not(:last-child),.ld-pagination--dots .ld-pagination__sticky{margin-right:var(--ld-sp-4)}.ld-pagination--dots .ld-pagination__slide-wrapper{height:var(--ld-pagination-column-size);margin-right:var(--ld-sp-4)}.ld-pagination--dots .ld-pagination__item{align-items:center;display:flex;height:var(--ld-pagination-column-size);justify-content:center;left:calc(var(--ld-pagination-item-pos)*var(--ld-pagination-column-size));width:var(--ld-pagination-column-size)}.ld-pagination--dots .ld-pagination__item:not(.ld-pagination__item--selected) .ld-pagination__dot:after{background-color:var(--ld-pagination-primary-col);opacity:.3}.ld-pagination__dot{align-items:center;display:flex;height:var(--ld-pagination-column-size);justify-content:center;width:var(--ld-pagination-column-size)}.ld-pagination__dot::part(button){align-items:center;border-radius:var(--ld-br-full);display:flex;height:var(--ld-pagination-dots-indicator-size);justify-content:center;min-height:auto;min-width:auto;position:absolute;width:var(--ld-pagination-dots-indicator-size)}.ld-pagination__dot::part(button):active{height:var(--ld-pagination-dots-indicator-size-active);width:var(--ld-pagination-dots-indicator-size-active)}.ld-pagination__dot::part(button):focus{outline-color:var(--ld-thm-primary);outline-offset:calc(var(--ld-sp-1)*-1)}.ld-pagination__dot::part(button):focus:not(:focus-visible){outline:none}.ld-pagination__dot:after{background-color:var(--ld-pagination-dot-col);border-radius:50%;content:"";height:var(--ld-pagination-dots-size);pointer-events:none;position:absolute;width:var(--ld-pagination-dots-size)}'}}]);