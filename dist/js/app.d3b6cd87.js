(function(){"use strict";var e={8371:function(e,n,r){var o=r(9242),t=r(3396),a=r(1209),i=r(1141),s=r(8085),p=r(221),l=r(6542),c=r(6717),u=r(3419),w=r(6291),m=r(3105),d=r(9912),k=r.n(d),h=r(678),v=r(7139);const g={key:0,class:"weapon"},f=["src","title","alt"],D=["src","title","alt"],_=["src","alt"],y={key:1},M={key:2},T={key:0};function I(e,n,r,o,a,i){const s=(0,t.up)("GamemodeSection"),p=(0,t.up)("n-card"),l=(0,t.up)("n-space");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(l,{justify:"center"},{default:(0,t.w5)((()=>[o.weaponData&&o.weaponData.weapon?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(p,{title:o.weaponData.weapon.name},{"header-extra":(0,t.w5)((()=>[o.weaponData.weapon.source?((0,t.wg)(),(0,t.iD)("img",{key:0,class:"source-icon",src:o.weaponData.weapon.source.soureIcon.url,title:"Source: "+o.weaponData.weapon.source.sourceTitle,alt:"Source: "+o.weaponData.weapon.source.sourceTitle},null,8,f)):(0,t.kq)("",!0),o.weaponData.weapon.element?((0,t.wg)(),(0,t.iD)("img",{key:1,class:"damagetype-icon",src:i.getDamageIcon(o.weaponData.weapon.element),title:"Damage Type: "+o.weaponData.weapon.element,alt:"Damage Type: "+o.weaponData.weapon.element},null,8,D)):(0,t.kq)("",!0)])),cover:(0,t.w5)((()=>[o.weaponData.weapon.image?((0,t.wg)(),(0,t.iD)("img",{key:0,src:o.weaponData.weapon.image.url,alt:"Thumbnail of "+o.weaponData.weapon.name},null,8,_)):(0,t.kq)("",!0)])),default:(0,t.w5)((()=>[(0,t.Wm)(s,{pve:"true",weapon:o.weaponData.weapon},null,8,["weapon"]),(0,t.Wm)(s,{weapon:o.weaponData.weapon},null,8,["weapon"])])),_:1},8,["title"])])):o.weaponLoading?((0,t.wg)(),(0,t.iD)("div",y,"Loading...")):o.weaponError?((0,t.wg)(),(0,t.iD)("div",M,(0,v.zw)(e.error),1)):(0,t.kq)("",!0)])),_:1}),o.weaponData&&!o.weaponData.weapon?((0,t.wg)(),(0,t.iD)("div",T,(0,v.zw)(this.$router.push({name:"notFound"})),1)):(0,t.kq)("",!0)],64)}const S=["id"],O=["id"],b={class:"row"},G={class:"col-2 perks"},P=(0,t._)("h2",null,"Barrels",-1),L={class:"col-2 perks"},q=(0,t._)("h2",null,"Magazines",-1),W={class:"col-2 perks"},C=(0,t._)("h2",null,"3rd Slot",-1),R={class:"col-2 perks"},Z=(0,t._)("h2",null,"4th Slot",-1),j={key:0,class:"col-2"},A=(0,t._)("h2",null,"Origin Trait",-1),E=["src","alt","title"],U={key:1,class:"col-2"},z=(0,t._)("h2",null,"Masterworks",-1),K=["id"],V={class:"col-perk"},x={class:"row perks"},F={class:"row perks"},H={class:"col-desc"};function Y(e,n,r,o,a,i){const s=(0,t.up)("Markdown"),p=(0,t.up)("PerkIconList"),l=(0,t.up)("ContentIndicators"),c=(0,t.up)("n-divider");return(0,t.wg)(),(0,t.iD)(t.HY,null,[this.description?((0,t.wg)(),(0,t.iD)("section",{key:0,id:this.mode.toLowerCase()+"Description"},[(0,t._)("h2",null,(0,v.zw)(this.mode)+" Description",1),(0,t.Wm)(s,{source:this.description.markdown},null,8,["source"])],8,S)):(0,t.kq)("",!0),this.perks?((0,t.wg)(),(0,t.iD)("section",{key:1,id:this.mode.toLowerCase()+"Perks"},[(0,t._)("h2",null,"Recommended "+(0,v.zw)(this.mode)+" Perks",1),(0,t._)("div",b,[(0,t._)("div",G,[P,(0,t.Wm)(p,{perks:this.perks.perk1},null,8,["perks"])]),(0,t._)("div",L,[q,(0,t.Wm)(p,{perks:this.perks.perk2},null,8,["perks"])]),(0,t._)("div",W,[C,(0,t.Wm)(p,{perks:this.perks.perk3},null,8,["perks"])]),(0,t._)("div",R,[Z,(0,t.Wm)(p,{perks:this.perks.perk4},null,8,["perks"])]),this.pve&&this.originTrait?((0,t.wg)(),(0,t.iD)("div",j,[A,(0,t._)("img",{class:"perk-icon",src:this.originTrait.icon.url,alt:this.originTrait.name,title:this.originTrait.name},null,8,E)])):(0,t.kq)("",!0),this.masterworks&&this.masterworks[0]?((0,t.wg)(),(0,t.iD)("div",U,[z,(0,t.Wm)(p,{perks:this.masterworks},null,8,["perks"])])):(0,t.kq)("",!0)])],8,O)):(0,t.kq)("",!0),this.rolls?((0,t.wg)(),(0,t.iD)("section",{key:2,id:this.mode.toLowerCase()+"Godrolls"},[(0,t._)("h2",null,(0,v.zw)(this.mode)+" Godrolls",1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.rolls,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"roll row",key:e.perk1.name},[(0,t._)("div",V,[(0,t._)("div",x,[(0,t.Wm)(l,{indicators:e.contentIndicators},null,8,["indicators"])]),(0,t.Wm)(c),(0,t._)("div",F,[(0,t.Wm)(p,{perks:[e.perk1,e.perk2,e.perk3,e.perk4]},null,8,["perks"])])]),(0,t._)("div",H,[(0,t._)("h3",null,(0,v.zw)(e.title),1),(0,t.Wm)(s,{source:e.description.markdown},null,8,["source"])])])))),128))],8,K)):(0,t.kq)("",!0)],64)}const Q=["src","alt","title"];function N(e,n,r,o,a,i){return(0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.perks,(e=>((0,t.wg)(),(0,t.iD)("img",{key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,Q)))),128)}var $={props:["perks"]},B=r(89);const J=(0,B.Z)($,[["render",N],["__scopeId","data-v-02ef2018"]]);var X=J;const ee=["src","alt","title","width"];function ne(e,n,r,o,a,i){return(0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.indicators,(e=>((0,t.wg)(),(0,t.iD)("img",{key:e.icon.url,src:e.icon.url,alt:e.name,title:e.name,width:e.icon.width*(40/e.icon.height)},null,8,ee)))),128)}var re={props:["indicators"]};const oe=(0,B.Z)(re,[["render",ne]]);var te=oe,ae={props:["weapon","pve","pvp"],setup(e){return e.pve?{description:e.weapon.pveDescription,perks:e.weapon.pvePerks,rolls:e.weapon.pveGodrolls,mode:"PVE",originTrait:e.weapon.originTrait,masterworks:e.weapon.pveMasterworks}:{description:e.weapon.pvpDescription,perks:e.weapon.pvpPerks,rolls:e.weapon.pvpGodrolls,mode:"PVP",masterworks:e.weapon.pvpMasterworks}},components:{Markdown:k(),PerkIconList:X,ContentIndicators:te}};const ie=(0,B.Z)(ae,[["render",Y]]);var se=ie,pe=r(8833);const le=pe.ZP`
query ($name : String!){
    weapon(where: { name: $name }) {
      archetype {
        title
        rpm
        frame
      }
      name
      source{
        soureIcon{
          url
        },
        sourceTitle
      }
      element
      image {
        url
        fileName
      }
      originTrait {
        name
        icon {
          url
        }
      }
      pveDescription {
        markdown
      }
      pveGodrolls {
        ... on PveRoll {
          title
          description{markdown}
          perk1 {
            name,
            icon{url}
          }
          perk2 {
            name,
            icon{url}
          }
          perk3 {
            name,
            icon{url}
          }
          perk4 {
            name,
            icon{url}
          }
          contentIndicators{name,, icon{url,height,width}}
        }
      }
      pveMasterworks {
        icon {
          url
        }
        masterwork
      }
      pvePerks {
        perk1 {
          name,
          icon{url}
        }
        perk2 {
          name,
          icon{url}
        }
        perk3 {
          name,
          icon{url}
        }
        perk4 {
          name,
          icon{url}
        }
      }
      pvpDescription {
        markdown
      }
      pvpMasterworks {
        masterwork
        icon {
          url
        }
      }
      pvpPerks {
        perk1 {
          name,
          icon{url}
        }
        perk2 {
          name,
          icon{url}
        }
        perk3 {
          name,
          icon{url}
        }
        perk4 {
          name,
          icon{url}
        }
      }
    }
  }
`;var ce=le,ue={props:["name"],setup(e){const{result:n,loading:r,error:o}=(0,a.aM)(ce,{name:e.name});return{weaponData:n,weaponLoading:r,weaponError:o}},data(){return{DMG_IMG_URL:{STASIS:"https://media.graphassets.com/My7R32nKQ3uF3gUA7JBE",SOLAR:"https://media.graphassets.com/i2nLrkqVTMyVNOvv06tX",ARC:"https://media.graphassets.com/1UMeBZYKQpKMVQD9OI4u",KINETIC:"https://media.graphassets.com/uAfCSEA9Ryi8nCC0HDim",VOID:"https://media.graphassets.com/eTxoUE78QEuQ4olgnqXd"}}},methods:{getDamageIcon(e){switch(e){case"Solar":return this.DMG_IMG_URL.SOLAR;case"Stasis":return this.DMG_IMG_URL.STASIS;case"Arc":return this.DMG_IMG_URL.ARC;case"Void":return this.DMG_IMG_URL.VOID;default:return this.DMG_IMG_URL.KINETIC}}},components:{GamemodeSection:se}};const we=(0,B.Z)(ue,[["render",I]]);var me=we;const de=(0,t._)("h1",null,":(",-1),ke=(0,t._)("h2",null,"We can't find what you are looking for.",-1);function he(e,n){const r=(0,t.up)("n-space");return(0,t.wg)(),(0,t.j4)(r,{justify:"center"},{default:(0,t.w5)((()=>[de,ke])),_:1})}const ve={},ge=(0,B.Z)(ve,[["render",he]]);var fe=ge;const De=[{path:"/",name:"home",redirect:"/weapons/TEST"},{path:"/😢",name:"notFound",component:fe,alias:["/%F0%9F%98%A2"]},{path:"/weapons/:name",name:"weapons",component:me,props:!0}],_e=(0,h.p7)({history:(0,h.PO)(),routes:De});var ye=_e;function Me(e,n,r,o,a,i){const s=(0,t.up)("router-view"),p=(0,t.up)("n-config-provider");return(0,t.wg)(),(0,t.j4)(p,{theme:e.darkTheme},{default:(0,t.w5)((()=>[(0,t.Wm)(s)])),_:1},8,["theme"])}var Te=r(5209),Ie=(0,t.aZ)({setup(){return{darkTheme:Te.$}}});const Se=(0,B.Z)(Ie,[["render",Me]]);var Oe=Se;const be=(0,i.L)({uri:"https://api-eu-central-1.graphcms.com/v2/cl3ok6pi869bq01z1etqe6qui/master"}),Ge=new s.h,Pe=new p.f({link:be,cache:Ge}),Le=(0,l.Z)({components:[c.Z,u.ZP,w.Z,m.Z]}),qe=(0,o.ri)({setup(){(0,t.JJ)(a.Gk,Pe)},render:()=>(0,t.h)(Oe)});qe.use(Le).use(k()).use(ye).mount("#app")}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,o,t,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],t=e[c][1],a=e[c][2];for(var s=!0,p=0;p<o.length;p++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[p])}))?o.splice(p--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=t();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,t,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,a,i=o[0],s=o[1],p=o[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(t in s)r.o(s,t)&&(r.m[t]=s[t]);if(p)var c=p(r)}for(n&&n(o);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=self["webpackChunkd2_archive"]=self["webpackChunkd2_archive"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(8371)}));o=r.O(o)})();
//# sourceMappingURL=app.d3b6cd87.js.map