(function(){"use strict";var e={9451:function(e,n,a){var r=a(9242),t=a(3396),o=a(1209),l=a(1141),i=a(8085),s=a(221),c=a(6542),p=a(6717),u=a(1904),m=a(6291),w=a(678),d=a(7139);const k={key:0,class:"weapon"},v=["src","title","alt"],g=["src","title","alt"],h=["src","alt"],_={id:"pvpDescription"},D=(0,t._)("h2",null,"PVE Description",-1),f={id:"pvePerks"},y=(0,t._)("h2",null,"Recommended PVE Perks",-1),T={class:"row"},I={class:"col-2"},M=(0,t._)("h2",null,"Barrels",-1),O=["src","alt","title"],P=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),E={class:"row"},G={class:"col-2"},S=(0,t._)("h2",null,"Magazines",-1),x=["src","alt","title"],b=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),R={class:"row"},L={class:"col-2"},K=(0,t._)("h2",null,"3rd Perk Slot",-1),A=["src","alt","title"],j=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),C={class:"row"},U={class:"col-2"},V=(0,t._)("h2",null,"4th Perk Slots",-1),Z=["src","alt","title"],q=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),H={class:"row"},Y={class:"col-2"},z=(0,t._)("h2",null,"Origin Trait",-1),Q=["src","alt","title"],N=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),B={id:"pveGodrolls"},J=(0,t._)("h2",null,"PVE Godrolls",-1),$={class:"col-2"},F={class:"row"},W=["src","alt","title"],X=(0,t._)("hr",null,null,-1),ee={class:"row"},ne=["src","alt","title"],ae=["src","alt","title"],re=["src","alt","title"],te=["src","alt","title"],oe={class:"col-2"},le={key:1},ie={key:2};function se(e,n,a,r,o,l){const i=(0,t.up)("n-card"),s=(0,t.up)("n-space");return(0,t.wg)(),(0,t.j4)(s,{justify:"center"},{default:(0,t.w5)((()=>[r.weaponData&&r.weaponData.weapon?((0,t.wg)(),(0,t.iD)("div",k,[(0,t.Wm)(i,{title:r.weaponData.weapon.name},{"header-extra":(0,t.w5)((()=>[(0,t._)("img",{class:"source-icon",src:r.weaponData.weapon.source.soureIcon.url,title:"Source: "+r.weaponData.weapon.source.sourceTitle,alt:"Source: "+r.weaponData.weapon.source.sourceTitle},null,8,v),(0,t._)("img",{class:"damagetype-icon",src:l.getDamageIcon(r.weaponData.weapon.element),title:"Damage Type: "+r.weaponData.weapon.element,alt:"Damage Type: "+r.weaponData.weapon.element},null,8,g)])),cover:(0,t.w5)((()=>[(0,t._)("img",{src:r.weaponData.weapon.image.url,alt:"Thumbnail of "+r.weaponData.weapon.name},null,8,h)])),default:(0,t.w5)((()=>[(0,t._)("section",_,[D,(0,t._)("p",null,(0,d.zw)(r.weaponData.weapon.pveDescription.text),1)]),(0,t._)("section",f,[y,(0,t._)("div",null,[(0,t._)("div",T,[(0,t._)("div",I,[M,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk1,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,O)))),128))]),P]),(0,t._)("div",E,[(0,t._)("div",G,[S,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk2,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,x)))),128))]),b]),(0,t._)("div",R,[(0,t._)("div",L,[K,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk3,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,A)))),128))]),j]),(0,t._)("div",C,[(0,t._)("div",U,[V,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk4,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,Z)))),128))]),q]),(0,t._)("div",H,[(0,t._)("div",Y,[z,(0,t._)("img",{class:"perk-icon",src:r.weaponData.weapon.originTrait.icon.url,alt:r.weaponData.weapon.originTrait.name,title:r.weaponData.weapon.originTrait.name},null,8,Q)]),N])])]),(0,t._)("section",B,[J,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pveGodrolls,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"roll row",key:e.perk1.name},[(0,t._)("div",$,[(0,t._)("div",F,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.contentIndicators,(e=>((0,t.wg)(),(0,t.iD)("img",{key:e.icon.url,src:e.icon.url,alt:e.name,title:e.name,class:"perk-icon"},null,8,W)))),128))]),X,(0,t._)("div",ee,[(0,t._)("img",{src:e.perk1.icon.url,alt:e.perk1.name,title:e.perk1.name,class:"perk-icon"},null,8,ne),(0,t._)("img",{src:e.perk2.icon.url,alt:e.perk2.name,title:e.perk2.name,class:"perk-icon"},null,8,ae),(0,t._)("img",{src:e.perk3.icon.url,alt:e.perk3.name,title:e.perk3.name,class:"perk-icon"},null,8,re),(0,t._)("img",{src:e.perk4.icon.url,alt:e.perk4.name,title:e.perk4.name,class:"perk-icon"},null,8,te)])]),(0,t._)("div",oe,[(0,t._)("h3",null,(0,d.zw)(e.title),1),(0,t._)("p",null,(0,d.zw)(e.description.text),1)])])))),128))])])),_:1},8,["title"])])):r.weaponLoading?((0,t.wg)(),(0,t.iD)("div",le,"Loading...")):r.weaponError?((0,t.wg)(),(0,t.iD)("div",ie,(0,d.zw)(e.error),1)):(0,t.kq)("",!0)])),_:1})}var ce=a(8833),pe={props:["name"],setup(e){const{result:n,loading:a,error:r}=(0,o.aM)(ce.ZP`
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
              text
            }
            pveGodrolls {
              ... on PveRoll {
                title
                description{text}
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
                contentIndicators{name,, icon{url}}
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
              text
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
      `,{name:e.name});return{weaponData:n,weaponLoading:a,weaponError:r}},data(){return{DMG_IMG_URL:{STASIS:"https://media.graphassets.com/My7R32nKQ3uF3gUA7JBE",SOLAR:"https://media.graphassets.com/i2nLrkqVTMyVNOvv06tX",ARC:"https://media.graphassets.com/1UMeBZYKQpKMVQD9OI4u",KINETIC:"https://media.graphassets.com/uAfCSEA9Ryi8nCC0HDim",VOID:"https://media.graphassets.com/eTxoUE78QEuQ4olgnqXd"}}},methods:{getDamageIcon(e){switch(console.log(e),e){case"Solar":return this.DMG_IMG_URL.SOLAR;case"Stasis":return this.DMG_IMG_URL.STASIS;case"Arc":return this.DMG_IMG_URL.ARC;case"Void":return this.DMG_IMG_URL.VOID;default:return this.DMG_IMG_URL.KINETIC}}}},ue=a(89);const me=(0,ue.Z)(pe,[["render",se]]);var we=me;const de=[{path:"/",name:"home",redirect:"/weapons/TEST"},{path:"/weapons/:name",name:"weapons",component:we,props:!0}],ke=(0,w.p7)({history:(0,w.PO)(),routes:de});var ve=ke;function ge(e,n,a,r,o,l){const i=(0,t.up)("router-view"),s=(0,t.up)("n-config-provider");return(0,t.wg)(),(0,t.j4)(s,{theme:e.darkTheme},{default:(0,t.w5)((()=>[(0,t.Wm)(i)])),_:1},8,["theme"])}var he=a(6947),_e=(0,t.aZ)({setup(){return{darkTheme:he.$}}});const De=(0,ue.Z)(_e,[["render",ge]]);var fe=De;const ye=(0,l.L)({uri:"https://api-eu-central-1.graphcms.com/v2/cl3ok6pi869bq01z1etqe6qui/master"}),Te=new i.h,Ie=new s.f({link:ye,cache:Te}),Me=(0,c.Z)({components:[p.Z,u.ZP,m.Z]}),Oe=(0,r.ri)({setup(){(0,t.JJ)(o.Gk,Ie)},render:()=>(0,t.h)(fe)});Oe.use(Me).use(ve).mount("#app")}},n={};function a(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(n,r,t,o){if(!r){var l=1/0;for(p=0;p<e.length;p++){r=e[p][0],t=e[p][1],o=e[p][2];for(var i=!0,s=0;s<r.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[s])}))?r.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(p--,1);var c=t();void 0!==c&&(n=c)}}return n}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,t,o]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,o,l=r[0],i=r[1],s=r[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(t in i)a.o(i,t)&&(a.m[t]=i[t]);if(s)var p=s(a)}for(n&&n(r);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},r=self["webpackChunkd2_archive"]=self["webpackChunkd2_archive"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(9451)}));r=a.O(r)})();
//# sourceMappingURL=app.d12df149.js.map