"use strict";(self.webpackChunkFrontend_Reto_Q=self.webpackChunkFrontend_Reto_Q||[]).push([[592],{507:(m,l,e)=>{e.d(l,{A:()=>d});var n=e(8256),s=e(6895),r=e(433);function a(t,c){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"input",2),n.NdJ("ngModelChange",function(u){const g=n.CHM(o).$implicit,p=n.oxw();return n.KtG(p.optionsSelected[g]=u)})("ngModelChange",function(){n.CHM(o);const u=n.oxw();return n.KtG(u.emitOptionsSelected())}),n.qZA(),n.TgZ(2,"label",3),n._uU(3),n.qZA(),n._UZ(4,"br"),n.qZA()}if(2&t){const o=c.$implicit,i=n.oxw();n.xp6(1),n.Q6J("id",o)("name",o)("value",o)("ngModel",i.optionsSelected[o]),n.xp6(1),n.Q6J("for",o),n.xp6(1),n.Oqu(o)}}let d=(()=>{class t{constructor(){this.optionsSelectedEvent=new n.vpe,this.optionsSelected={}}ngOnInit(){}emitOptionsSelected(){let o=[];for(let i in this.optionsSelected)this.optionsSelected[i]&&o.push(i);this.optionsSelectedEvent.emit(o)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-multiple-choice"]],inputs:{sentence:"sentence",options:"options"},outputs:{optionsSelectedEvent:"optionsSelectedEvent"},decls:4,vars:2,consts:[[1,"quiz-container"],[4,"ngFor","ngForOf"],["type","checkbox",3,"id","name","value","ngModel","ngModelChange"],[3,"for"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"h2"),n._uU(2),n.qZA(),n.YNc(3,a,5,6,"div",1),n.qZA()),2&o&&(n.xp6(2),n.Oqu(i.sentence),n.xp6(1),n.Q6J("ngForOf",i.options))},dependencies:[s.sg,r.Wl,r.JJ,r.On],styles:[".quiz-container[_ngcontent-%COMP%]{background-color:#fffffff8;padding:20px;box-shadow:0 0 5px #0000004d;margin-bottom:20px;text-align:left;width:1000px;color:#1f1f1f;border:none;border-radius:15px}.quiz-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px;font-weight:bolder;font-family:Helvetica;color:#131313}.quiz-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}input[type=radio][_ngcontent-%COMP%]{margin-bottom:10px}label[_ngcontent-%COMP%]{margin-left:10px}button[_ngcontent-%COMP%]{background-color:#007bff;border:none;color:#fff;padding:10px 20px;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0062cc}"]}),t})()},5321:(m,l,e)=>{e.r(l),e.d(l,{QuestionModule:()=>g});var n=e(6895),s=e(529),r=e(5808),a=e(232),d=e(507),t=e(619),c=e(362),o=e(8256);const i=[{path:"",children:[{path:"app-multiple-choice",component:d.A},{path:"app-single-choice",component:t.u},{path:"app-true-or-false",component:c.$},{path:"**",component:a.O}]}];let u=(()=>{class p{}return p.\u0275fac=function(x){return new(x||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[n.ez,r.Bz.forChild(i),r.Bz]}),p})();var f=e(433);let g=(()=>{class p{}return p.\u0275fac=function(x){return new(x||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[n.ez,s.JF,u,f.u5]}),p})()},619:(m,l,e)=>{e.d(l,{u:()=>d});var n=e(8256),s=e(6895);function r(t,c){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"input",3),n.NdJ("change",function(){const f=n.CHM(o).$implicit,g=n.oxw(2);return n.KtG(g.chooseOption(f))}),n.qZA(),n.TgZ(2,"label",4),n._uU(3),n.qZA(),n._UZ(4,"br"),n.qZA()}if(2&t){const o=c.$implicit,i=n.oxw(2);n.xp6(1),n.Q6J("value",o)("checked",o===i.optionsSelected[0]),n.xp6(2),n.Oqu(o)}}function a(t,c){if(1&t&&(n.TgZ(0,"div",1)(1,"h2"),n._uU(2),n.qZA(),n.YNc(3,r,5,3,"div",2),n.qZA()),2&t){const o=n.oxw();n.xp6(2),n.Oqu(o.sentence),n.xp6(1),n.Q6J("ngForOf",o.options)}}let d=(()=>{class t{constructor(){this.optionsSelectedEvent=new n.vpe}ngOnInit(){this.optionsSelected=[]}ngOnChanges(o){o.sentence&&(this.optionsSelected=[])}chooseOption(o){this.optionsSelected=[o],this.optionsSelectedEvent.emit(this.optionsSelected)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-single-choice"]],inputs:{sentence:"sentence",options:"options"},outputs:{optionsSelectedEvent:"optionsSelectedEvent"},features:[n.TTD],decls:1,vars:1,consts:[["class","quiz-container",4,"ngIf"],[1,"quiz-container"],[4,"ngFor","ngForOf"],["type","radio","name","respuesta",3,"value","checked","change"],["for","verdadero"]],template:function(o,i){1&o&&n.YNc(0,a,4,2,"div",0),2&o&&n.Q6J("ngIf",i.options)},dependencies:[s.sg,s.O5],styles:[".quiz-container[_ngcontent-%COMP%]{background-color:#fffffff8;padding:20px;box-shadow:0 0 5px #0000004d;margin-bottom:20px;text-align:left;width:1000px;color:#1f1f1f;border:none;border-radius:15px}.quiz-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px;font-weight:bolder;font-family:Helvetica;color:#131313}.quiz-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}input[type=radio][_ngcontent-%COMP%]{margin-bottom:10px}label[_ngcontent-%COMP%]{margin-left:10px}button[_ngcontent-%COMP%]{background-color:#007bff;border:none;color:#fff;padding:10px 20px;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0062cc}"]}),t})()},362:(m,l,e)=>{e.d(l,{$:()=>d});var n=e(8256),s=e(6895);function r(t,c){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"input",3),n.NdJ("change",function(){const f=n.CHM(o).$implicit,g=n.oxw(2);return n.KtG(g.chooseOption(f))}),n.qZA(),n.TgZ(2,"label",4),n._uU(3),n.qZA(),n._UZ(4,"br"),n.qZA()}if(2&t){const o=c.$implicit,i=n.oxw(2);n.xp6(1),n.Q6J("name",o)("value",o)("id",o)("checked",o===i.optionsSelected[0]),n.xp6(2),n.Oqu(o)}}function a(t,c){if(1&t&&(n.TgZ(0,"div",1)(1,"h2"),n._uU(2),n.qZA(),n.YNc(3,r,5,5,"div",2),n.qZA()),2&t){const o=n.oxw();n.xp6(2),n.Oqu(o.sentence),n.xp6(1),n.Q6J("ngForOf",o.options)}}let d=(()=>{class t{constructor(){this.optionsSelectedEvent=new n.vpe}ngOnInit(){this.optionsSelected=[]}ngOnChanges(o){o.sentence&&(this.optionsSelected=[])}chooseOption(o){this.optionsSelected=[o],this.optionsSelectedEvent.emit(this.optionsSelected)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-true-or-false"]],inputs:{sentence:"sentence",options:"options"},outputs:{optionsSelectedEvent:"optionsSelectedEvent"},features:[n.TTD],decls:1,vars:1,consts:[["class","quiz-container",4,"ngIf"],[1,"quiz-container"],[4,"ngFor","ngForOf"],["type","radio",3,"name","value","id","checked","change"],["for","verdadero"]],template:function(o,i){1&o&&n.YNc(0,a,4,2,"div",0),2&o&&n.Q6J("ngIf",i.options)},dependencies:[s.sg,s.O5],styles:[".quiz-container[_ngcontent-%COMP%]{background-color:#fffffff8;padding:20px;box-shadow:0 0 5px #0000004d;margin-bottom:20px;text-align:left;width:1000px;color:#1f1f1f;border:none;border-radius:15px}.quiz-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px;font-weight:bolder;font-family:Helvetica;color:#131313}.quiz-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}input[type=radio][_ngcontent-%COMP%]{margin-bottom:10px}label[_ngcontent-%COMP%]{margin-left:10px}button[_ngcontent-%COMP%]{background-color:#007bff;border:none;color:#fff;padding:10px 20px;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0062cc}"]}),t})()}}]);