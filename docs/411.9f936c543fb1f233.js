"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[411],{8881:(M,g,r)=>{r.r(g),r.d(g,{LoginPatientComponent:()=>v});var p=r(6814),i=r(95),m=r(2956),t=r(5879),_=r(6628);function c(n,l){if(1&n&&(t.TgZ(0,"div",31),t._uU(1),t.qZA()),2&n){const a=t.oxw();t.xp6(1),t.hij(" ",a.apiErrorMessage," ")}}function u(n,l){1&n&&(t.TgZ(0,"p",33),t._uU(1,"Email is required"),t.qZA())}function f(n,l){1&n&&(t.TgZ(0,"p",33),t._uU(1,"Email is invalid , name@example.com"),t.qZA())}function h(n,l){if(1&n&&(t.TgZ(0,"div",31),t.YNc(1,u,2,0,"p",32),t.YNc(2,f,2,0,"p",32),t.qZA()),2&n){const a=t.oxw();let o,e;t.xp6(1),t.Q6J("ngIf",null==(o=a.loginPatient.get("email"))?null:o.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(e=a.loginPatient.get("email"))?null:e.getError("email"))}}function C(n,l){1&n&&t._UZ(0,"i",34)}function P(n,l){1&n&&t._UZ(0,"i",35)}function x(n,l){1&n&&(t.TgZ(0,"p",33),t._uU(1,"Password is required"),t.qZA())}function w(n,l){1&n&&(t.TgZ(0,"p",33),t._uU(1," Password is invalid , Minimum eight characters, at least one letter and one number"),t.qZA())}function Z(n,l){if(1&n&&(t.TgZ(0,"div",31),t.YNc(1,x,2,0,"p",32),t.YNc(2,w,2,0,"p",32),t.qZA()),2&n){const a=t.oxw();let o,e;t.xp6(1),t.Q6J("ngIf",null==(o=a.loginPatient.get("password"))?null:o.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(e=a.loginPatient.get("password"))?null:e.getError("pattern"))}}let v=(()=>{class n{constructor(a,o){this._authService=a,this._Router=o,this.isNotValidForm=!1,this.validInput=!1,this.apiErrorMessage="",this.hidePassword=!0,this.loginPatient=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])})}login(a){1==a.valid?(this.isNotValidForm=!1,this._authService.login({email:this.loginPatient.value.email,password:this.loginPatient.value.password,role:"PATIENT"}).subscribe({next:e=>{console.log(e),localStorage.setItem("patientToken",e.data.token),this._authService.getPatientToken(),this._Router.navigate(["/patientHome"])},error:e=>{console.log(e),this.apiErrorMessage=e.error.message}})):this.isNotValidForm=!0}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(_.e),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-patient"]],standalone:!0,features:[t.jDz],decls:43,vars:7,consts:[[1,"container","w-75","mx-auto"],[1,"medical-image","mx-auto","my-0"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 358 227","fill","none",1,"text-auto","m-0","w-100"],["filter","url(#filter0_d_2800_22410)"],["d","M214.772 144.5C214.772 163.554 199.326 179 180.272 179C161.219 179 145.772 163.554 145.772 144.5C145.772 125.446 161.219 110 180.272 110C199.326 110 214.772 125.446 214.772 144.5ZM149.045 144.5C149.045 161.747 163.026 175.728 180.272 175.728C197.519 175.728 211.5 161.747 211.5 144.5C211.5 127.253 197.519 113.272 180.272 113.272C163.026 113.272 149.045 127.253 149.045 144.5Z","fill","#5EC2FC"],["d","M198.772 148.5C198.772 184.122 190.714 213 180.772 213C170.831 213 162.772 184.122 162.772 148.5C162.772 112.878 170.831 84 180.772 84C190.714 84 198.772 112.878 198.772 148.5ZM164.48 148.5C164.48 180.744 171.774 206.883 180.772 206.883C189.771 206.883 197.065 180.744 197.065 148.5C197.065 116.256 189.771 90.1174 180.772 90.1174C171.774 90.1174 164.48 116.256 164.48 148.5Z","fill","#5EC2FC"],["d","M189.699 123.386C224.505 143.482 247.818 168.265 241.769 178.742C235.721 189.218 202.601 181.42 167.795 161.325C132.989 141.229 109.676 116.446 115.724 105.969C121.773 95.493 154.892 103.291 189.699 123.386ZM168.834 159.525C200.339 177.715 230.317 184.773 235.792 175.291C241.267 165.808 220.165 143.375 188.66 125.185C157.155 106.996 127.176 99.9376 121.702 109.42C116.227 118.903 137.328 141.336 168.834 159.525Z","fill","#5EC2FC"],["d","M189.986 158.104C155.058 177.988 121.892 185.584 115.907 175.071C109.922 164.558 133.385 139.917 168.313 120.034C203.241 100.15 236.407 92.5537 242.392 103.067C248.377 113.579 224.914 138.221 189.986 158.104ZM169.341 121.839C137.726 139.837 116.488 162.141 121.905 171.657C127.322 181.173 157.343 174.297 188.958 156.299C220.573 138.301 241.811 115.997 236.394 106.481C230.977 96.9653 200.956 103.841 169.341 121.839Z","fill","#5EC2FC"],["id","filter0_d_2800_22410","x","-9.22754","y","-30","width","376.456","height","357","filterUnits","userSpaceOnUse","color-interpolation-filters","sRGB"],["flood-opacity","0","result","BackgroundImageFix"],["in","SourceAlpha","type","matrix","values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0","result","hardAlpha"],["stdDeviation","57"],["in2","hardAlpha","operator","out"],["type","matrix","values","0 0 0 0 0 0 0 0 0 0.34 0 0 0 0 1 0 0 0 0.25 0"],["mode","normal","in2","BackgroundImageFix","result","effect1_dropShadow_2800_22410"],["mode","normal","in","SourceGraphic","in2","effect1_dropShadow_2800_22410","result","shape"],[1,"mb-5","main-color","text-center","fw-bolder"],["class","alert alert-danger",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-4","position-relative"],["type","email","formControlName","email","id","floatingInput","placeholder","name@example.com",1,"form-control"],["for","floatingInput"],[1,"fa-solid","fa-envelope"],[1,"form-floating","mb-2","position-relative"],["formControlName","password","id","floatingPassword","placeholder","Password",1,"form-control",3,"type"],["for","floatingPassword"],[1,"cursor-pointer",3,"click"],["class","fa-solid fa-eye",4,"ngIf"],["class","fa-solid fa-eye-slash",4,"ngIf"],["routerLink","/forgotPasswordPatient",1,"ms-1"],["type","submit",1,"btn","button","mt-3","px-5","fs-5","text-white","mx-auto","d-block"],[1,"alert","alert-danger"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-eye-slash"]],template:function(o,e){if(1&o&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1),t.O4$(),t.TgZ(3,"svg",2)(4,"g",3),t._UZ(5,"path",4)(6,"path",5)(7,"path",6)(8,"path",7),t.qZA(),t.TgZ(9,"defs")(10,"filter",8),t._UZ(11,"feFlood",9)(12,"feColorMatrix",10)(13,"feOffset")(14,"feGaussianBlur",11)(15,"feComposite",12)(16,"feColorMatrix",13)(17,"feBlend",14)(18,"feBlend",15),t.qZA()()()(),t.kcU(),t.TgZ(19,"h1",16),t._uU(20,"Login "),t._UZ(21,"br"),t._uU(22," Now"),t.qZA(),t.YNc(23,c,2,1,"div",17),t.TgZ(24,"form",18),t.NdJ("ngSubmit",function(){return e.login(e.loginPatient)}),t.TgZ(25,"div",19),t._UZ(26,"input",20),t.TgZ(27,"label",21),t._uU(28,"Email"),t.qZA(),t._UZ(29,"i",22),t.qZA(),t.YNc(30,h,3,2,"div",17),t.TgZ(31,"div",23),t._UZ(32,"input",24),t.TgZ(33,"label",25),t._uU(34,"Password"),t.qZA(),t.TgZ(35,"span",26),t.NdJ("click",function(){return e.togglePasswordVisibility()}),t.YNc(36,C,1,0,"i",27),t.YNc(37,P,1,0,"i",28),t.qZA()(),t.YNc(38,Z,3,2,"div",17),t.TgZ(39,"a",29),t._uU(40,"Forgot Password?"),t.qZA(),t.TgZ(41,"button",30),t._uU(42," Login "),t.qZA()()()()),2&o){let s,d;t.xp6(23),t.Q6J("ngIf",e.apiErrorMessage),t.xp6(1),t.Q6J("formGroup",e.loginPatient),t.xp6(6),t.Q6J("ngIf",(null==(s=e.loginPatient.get("email"))?null:s.errors)&&((null==(s=e.loginPatient.get("email"))?null:s.touched)||e.isNotValidForm)),t.xp6(2),t.Q6J("type",e.hidePassword?"password":"text"),t.xp6(4),t.Q6J("ngIf",!e.hidePassword),t.xp6(1),t.Q6J("ngIf",e.hidePassword),t.xp6(1),t.Q6J("ngIf",(null==(d=e.loginPatient.get("password"))?null:d.errors)&&((null==(d=e.loginPatient.get("password"))?null:d.touched)||e.isNotValidForm))}},dependencies:[p.ez,p.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH],styles:["section[_ngcontent-%COMP%]{min-height:80vh;display:flex;justify-content:center;align-items:center}.button[_ngcontent-%COMP%]{background-color:var(--secondary-color);transition:.3s all}.button[_ngcontent-%COMP%]:hover{background-color:#055ad9}h1[_ngcontent-%COMP%]{text-shadow:0px 0px 114px rgba(0,87,255,.25);font-size:34px;font-family:var(--font-secondary);font-weight:400;letter-spacing:10px}.medical-image[_ngcontent-%COMP%]{width:30%}input[_ngcontent-%COMP%]{background-color:#eff0f6}i[_ngcontent-%COMP%]{position:absolute;top:5px;right:0;z-index:2;height:100%;padding:1rem .75rem;overflow:hidden;text-overflow:ellipsis}@media screen and (max-width : 380px){section[_ngcontent-%COMP%]{margin-top:20px}}@media screen and (min-width : 521px){h1[_ngcontent-%COMP%]   br[_ngcontent-%COMP%]{display:none}}@media screen and (max-width : 576px){.medical-image[_ngcontent-%COMP%]{width:70%}}@media screen and (min-width : 577px) and (max-width : 770px){.medical-image[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width : 771px) and (max-width : 992px){.medical-image[_ngcontent-%COMP%]{width:40%}}@media screen and (min-width : 390px) and (max-width : 520px){button[_ngcontent-%COMP%]{margin-bottom:80px}}@media screen and (max-width : 580px){a[_ngcontent-%COMP%]{font-size:14px}}"]})}return n})()}}]);