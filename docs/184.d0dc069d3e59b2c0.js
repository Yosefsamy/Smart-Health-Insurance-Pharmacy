"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[184],{4184:(T,l,r)=>{r.r(l),r.d(l,{ResetPasswordPatientComponent:()=>v});var _=r(6814),a=r(95),t=r(5879),p=r(6628),u=r(2956),P=r(2425);function c(s,d){if(1&s&&(t.TgZ(0,"div",12),t._uU(1),t.qZA()),2&s){const n=t.oxw();t.xp6(1),t.hij(" ",n.apiErrorMessage," ")}}function m(s,d){1&s&&t._UZ(0,"i",13)}function g(s,d){1&s&&t._UZ(0,"i",14)}function f(s,d){1&s&&(t.TgZ(0,"p",16),t._uU(1,"Password is required"),t.qZA())}function w(s,d){1&s&&(t.TgZ(0,"p",16),t._uU(1," Password is invalid , Minimum eight characters, at least one letter and one number"),t.qZA())}function h(s,d){if(1&s&&(t.TgZ(0,"div",12),t.YNc(1,f,2,0,"p",15),t.YNc(2,w,2,0,"p",15),t.qZA()),2&s){const n=t.oxw();let o,e;t.xp6(1),t.Q6J("ngIf",null==(o=n.ResetPasswordPatient.get("password"))?null:o.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(e=n.ResetPasswordPatient.get("password"))?null:e.getError("pattern"))}}let v=(()=>{class s{constructor(n,o,e){this._authService=n,this._router=o,this._toastr=e,this.isNotValidForm=!1,this.apiErrorMessage="",this.hidePassword=!0,this.ResetPasswordPatient=new a.cw({password:new a.NI("",[a.kI.required,a.kI.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])})}ResetPassword(n){if(this.isNotValidForm=!0,n.valid){const o={email:this._authService.UserEmail,password:this.ResetPasswordPatient.value.password,role:"PATIENT"};console.log(o),this._authService.ResetPassword(o).subscribe({next:e=>{this._toastr.success(e.message),setTimeout(()=>{this._toastr.clear()},1200),setTimeout(()=>{this._router.navigate(["/loginPatient"])},1205)},error:e=>{this.apiErrorMessage=e.error.message}})}else this.isNotValidForm=!1}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(p.e),t.Y36(u.F0),t.Y36(P._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-reset-password-patient"]],standalone:!0,features:[t.jDz],decls:16,vars:6,consts:[[1,"section","h-75","d-flex","justify-content-center","align-items-center"],[1,"container","w-75","mt-5","shadow-lg","rounded-2","p-5"],["class","alert alert-danger",4,"ngIf"],[1,"text-center","mt-3"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-2","position-relative"],["formControlName","password","id","floatingPassword","placeholder","Password",1,"form-control",3,"type"],["for","floatingPassword"],[1,"cursor-pointer",3,"click"],["class","fa-solid fa-eye",4,"ngIf"],["class","fa-solid fa-eye-slash",4,"ngIf"],["type","submit",1,"btn","mt-4","px-5","fs-5","mb-3","text-white","mx-auto","d-block"],[1,"alert","alert-danger"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-eye-slash"],["class","mb-0",4,"ngIf"],[1,"mb-0"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,c,2,1,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Enter New Password"),t.qZA(),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return e.ResetPassword(e.ResetPasswordPatient)}),t.TgZ(6,"div",5),t._UZ(7,"input",6),t.TgZ(8,"label",7),t._uU(9,"New Password"),t.qZA(),t.TgZ(10,"span",8),t.NdJ("click",function(){return e.togglePasswordVisibility()}),t.YNc(11,m,1,0,"i",9),t.YNc(12,g,1,0,"i",10),t.qZA()(),t.YNc(13,h,3,2,"div",2),t.TgZ(14,"button",11),t._uU(15," Submit "),t.qZA()()()()),2&o){let i;t.xp6(2),t.Q6J("ngIf",e.apiErrorMessage),t.xp6(3),t.Q6J("formGroup",e.ResetPasswordPatient),t.xp6(2),t.Q6J("type",e.hidePassword?"password":"text"),t.xp6(4),t.Q6J("ngIf",!e.hidePassword),t.xp6(1),t.Q6J("ngIf",e.hidePassword),t.xp6(1),t.Q6J("ngIf",(null==(i=e.ResetPasswordPatient.get("password"))?null:i.errors)&&((null==(i=e.ResetPasswordPatient.get("password"))?null:i.touched)||e.isNotValidForm))}},dependencies:[_.ez,_.O5,a.UX,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:["input[_ngcontent-%COMP%]{background-color:#eff0f6}i[_ngcontent-%COMP%]{position:absolute;top:5px;right:0;z-index:2;height:100%;padding:1rem .75rem;overflow:hidden;text-overflow:ellipsis}button[_ngcontent-%COMP%]{background:#0866FF;transition:.4s all}button[_ngcontent-%COMP%]:hover{background:#0545ac}"]})}return s})()}}]);