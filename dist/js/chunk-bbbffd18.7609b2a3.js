(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbbffd18"],{"0303":function(e,r,t){},"4fca":function(e,r,t){"use strict";var a=t("0303"),s=t.n(a);s.a},"73cf":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{"data-app":""}},[t("v-card",{staticClass:"mx-auto main-enter",attrs:{"max-width":"500"}},[t("form",{staticClass:"form",on:{submit:function(r){return r.preventDefault(),e.submitHandler(r)}}},[t("v-text-field",{attrs:{"error-messages":e.secondNameErrors,label:"Фамилия",required:""},on:{input:function(r){return e.$v.secondName.$touch()},blur:function(r){return e.$v.secondName.$touch()}},model:{value:e.secondName,callback:function(r){e.secondName=r},expression:"secondName"}}),t("v-text-field",{attrs:{"error-messages":e.firstNameErrors,label:"Имя",required:""},on:{input:function(r){return e.$v.firstName.$touch()},blur:function(r){return e.$v.firstName.$touch()}},model:{value:e.firstName,callback:function(r){e.firstName=r},expression:"firstName"}}),t("v-text-field",{attrs:{"error-messages":e.thirdNameErrors,label:"Отчество",required:""},on:{input:function(r){return e.$v.thirdName.$touch()},blur:function(r){return e.$v.thirdName.$touch()}},model:{value:e.thirdName,callback:function(r){e.thirdName=r},expression:"thirdName"}}),t("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(r){return e.$v.email.$touch()},blur:function(r){return e.$v.email.$touch()}},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),t("v-text-field",{attrs:{"error-messages":e.passwordErrors,counter:6,type:"password",label:"Пароль",required:""},on:{input:function(r){return e.$v.password.$touch()},blur:function(r){return e.$v.password.$touch()}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),t("v-select",{attrs:{items:e.items,"error-messages":e.selectErrors,label:"Категория",required:""},on:{change:function(r){return e.$v.category.$touch()},blur:function(r){return e.$v.category.$touch()}},model:{value:e.category,callback:function(r){e.category=r},expression:"category"}}),t("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[e._v("Зарегистрироваться")]),t("v-btn",{staticClass:"btn-clear",on:{click:e.clear}},[e._v("Очистить")])],1)])],1)},s=[],i=(t("96cf"),t("1da1")),n=t("1dce"),u=t("b5ae"),o={mixins:[n["validationMixin"]],validations:{password:{required:u["required"],minLength:Object(u["minLength"])(6)},email:{required:u["required"],email:u["email"]},firstName:{required:u["required"]},secondName:{required:u["required"]},thirdName:{required:u["required"]},category:{required:u["required"]}},data:function(){return{password:"",email:"",firstName:"",secondName:"",thirdName:"",category:null,items:["N","D4","D3","D2","D1","C3","C2","C1","B","A"]}},computed:{selectErrors:function(){var e=[];return this.$v.category.$dirty?(!this.$v.category.required&&e.push("Item is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.maxLength&&e.push("password must be at most 10 characters long"),!this.$v.password.required&&e.push("password is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},firstNameErrors:function(){var e=[];return this.$v.firstName.$dirty?(!this.$v.firstName.required&&e.push("поле Ф.И.О. должно быть заполнены"),e):e},secondNameErrors:function(){var e=[];return this.$v.secondName.$dirty?(!this.$v.secondName.required&&e.push("поле Ф.И.О. должно быть заполнены"),e):e},thirdNameErrors:function(){var e=[];return this.$v.thirdName.$dirty?(!this.$v.thirdName.required&&e.push("поле Ф.И.О. должно быть заполнены"),e):e}},methods:{submitHandler:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.$v.$invalid){r.next=3;break}return e.$v.$touch(),r.abrupt("return");case 3:return t={email:e.email,password:e.password,firstName:e.firstName,secondName:e.secondName,thirdName:e.thirdName,category:e.category,rank:"ранга нет",newRank:"",newRankInfo:"",error:0,avatar:"https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png",status:0},r.prev=4,r.next=7,e.$store.dispatch("register",t);case 7:e.$router.push("/"),r.next=12;break;case 10:r.prev=10,r.t0=r["catch"](4);case 12:case"end":return r.stop()}}),r,null,[[4,10]])})))()},clear:function(){this.$v.$reset(),this.password="",this.email="",this.firstName="",this.secondName="",this.thirdName="",this.category=null,this.checkbox=!1}}},c=o,d=(t("4fca"),t("2877")),l=t("6544"),m=t.n(l),h=t("8336"),f=t("b0af"),v=t("b974"),p=t("8654"),$=Object(d["a"])(c,a,s,!1,null,"1dae429c",null);r["default"]=$.exports;m()($,{VBtn:h["a"],VCard:f["a"],VSelect:v["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-bbbffd18.7609b2a3.js.map