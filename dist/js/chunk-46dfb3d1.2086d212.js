(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46dfb3d1"],{"09e6":function(t,e,s){},"1f4f":function(t,e,s){"use strict";s("a9e3");var a=s("5530"),n=(s("8b37"),s("80d2")),r=s("7560"),o=s("58df");e["a"]=Object(o["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},2804:function(t,e,s){"use strict";var a=s("49aa"),n=s.n(a);n.a},"49aa":function(t,e,s){},"67f7":function(t,e,s){"use strict";var a=s("b3a2"),n=s.n(a);n.a},8543:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Турнир - "+t._s(t.tournament.tournamentName))]),s("h3",[t._v("Дата проведения - "+t._s(t.tournament.date))]),"Турнирная сетка"==t.tournament.tournamentType?s("PleiOff"):"Стандартный с разделением на категории"==t.tournament.tournamentType?s("ClassicWithCategory"):s("Classic")],1)},n=[],r=s("5530"),o=(s("96cf"),s("1da1")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{"data-app":""}},[1==t.status?s("div",[s("v-simple-table",[[s("thead",[s("tr",[1==t.result?s("th",[t._v("Место")]):t._e(),s("th",[t._v("Участник")]),s("th",[t._v("Категория")]),s("th",[t._v("Заезд I")]),s("th",[t._v("Заезд II")])]),t._l(t.tournament.peopleInfo,(function(e,a){return s("tr",{key:a,staticClass:"infoUserTr",attrs:{"data-id":e.id}},[1==t.result?s("td",[t._v(t._s(a+1))]):t._e(),s("td",[t._v(" "+t._s(e.secondName)+" "+t._s(e.firstName)+" ")]),s("td",[t._v(" "+t._s(e.category)+" ")]),s("td",[s("input",{staticClass:"input-time",attrs:{type:"number"},domProps:{value:e.firstTry}})]),s("td",[s("input",{staticClass:"input-time",attrs:{type:"number"},domProps:{value:e.secondTry}})])])}))],2)]],2),s("div",{staticClass:"container"},[s("v-divider"),s("v-select",{attrs:{items:t.items,label:"Добавить новых участников",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item,n=e.index;return[0===n?s("v-chip",[s("span",[t._v(t._s(a))])]):t._e(),1===n?s("span",{staticClass:"grey--text caption"},[t._v("(+"+t._s(t.value.length-1)+" others) ")]):t._e()]}}],null,!1,1029767770),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticClass:"profile__block-btn"},[s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.randomPlace(e)}}},[t._v(" Перемешать участников ")]),s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.addPeople(e)}}},[t._v(" Добавить участников ")])],1),s("div",{staticClass:"profile__block-btn"},[s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.resultAll(e)}}},[t._v(" Посчитать результаты ")]),s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.saveTournament(e)}}},[t._v(" Cохранить изменения ")])],1),s("div",{staticClass:"message-block message-block--none"},[t._v("Данные Турнира успешно изменены!")]),s("div",{staticClass:"message-block2 message-block2--none"},[t._v("Участник успешно добавлен")]),s("div",{staticClass:"message-block3 message-block3--none"},[t._v("Результаты посчитаны!")])],1):s("div",[s("v-simple-table",[[s("thead",[s("tr",[1==t.result?s("th",[t._v("Место")]):t._e(),s("th",[t._v("Участник")]),s("th",[t._v("Категория")]),s("th",[t._v("Заезд I")]),s("th",[t._v("Заезд II")])]),t._l(t.tournament.peopleInfo,(function(e,a){return s("tr",{key:a,staticClass:"infoUserTr",attrs:{"data-id":e.id}},[1==t.result?s("td",[t._v(t._s(a+1))]):t._e(),s("td",[t._v(" "+t._s(e.secondName)+" "+t._s(e.firstName)+" ")]),s("td",[t._v(" "+t._s(e.category)+" ")]),s("td",[t._v(" "+t._s(e.firstTry)+" ")]),s("td",[t._v(" "+t._s(e.secondTry)+" ")])])}))],2)]],2)],1)])},c=[],l=(s("4de4"),{name:"TournamentList",data:function(){return{tournament:{},peopleInfo:[],oldPeopleInfo:{},firstTry:null,secondTry:null,status:0,items:[],value:[],valueCategory:[],result:0}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,o,i,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,t.$store.dispatch("fetchTournamentById",s);case 3:return a=e.sent,e.next=6,t.$store.dispatch("fetchStatus");case 6:return t.status=e.sent,t.oldPeopleInfo=a.peopleInfo,t.tournament=Object(r["a"])({},a),e.next=11,t.$store.dispatch("fetchUsers");case 11:return n=e.sent,e.next=14,t.$store.dispatch("fetchAllUser");case 14:for(o=e.sent,i=n,c=o,l=function(e){for(var s=0;s<t.tournament.peopleInfo.length;s++)o[e].id==t.tournament.peopleInfo[s].id&&(c=c.filter((function(t){return t!==o[e]})),i=i.filter((function(t){return t!==o[e].secondName+" "+o[e].firstName})))},u=0;u<o.length;u++)l(u);t.items=i,t.valueCategory=c;case 21:case"end":return e.stop()}}),e)})))()},methods:{saveTournament:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,r,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(e.prev=0,s=document.getElementsByClassName("infoUserTr"),a=[],n=0,r=s.length;n<r;n++)for(o=0;o<t.oldPeopleInfo.length;o++)s[n].dataset.id==t.oldPeopleInfo[o].id&&a.push({id:t.oldPeopleInfo[o].id,firstName:t.oldPeopleInfo[o].firstName,secondName:t.oldPeopleInfo[o].secondName,category:t.oldPeopleInfo[o].category,firstTry:String(s[n].childNodes[3].childNodes[0].value),secondTry:String(s[n].childNodes[4].childNodes[0].value)});return i=t.$route.params.id,t.tournament.peopleInfo=a,e.next=8,t.$store.dispatch("updateTournament",{peopleInfo:a,id:i});case 8:c=document.getElementsByClassName("message-block")[0],c.classList.remove("message-block--none"),setTimeout((function(){c.classList.add("message-block--none")}),3500),e.next=15;break;case 13:e.prev=13,e.t0=e["catch"](0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))()},addPeople:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,r,o,i,c,l,u,m,d,p,f,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s=[],a=0;a<t.value.length;a++)for(n=0;n<t.valueCategory.length;n++)t.value[a]==t.valueCategory[n].secondName+" "+t.valueCategory[n].firstName&&s.push(t.valueCategory[n].id);return r=t.tournament.peopleInfo,e.next=5,t.$store.dispatch("fetchAllUser");case 5:for(o=e.sent,i=0;i<o.length;i++)for(c=0;c<s.length;c++)o[i].id==s[c]&&r.push({id:o[i].id,firstName:o[i].firstName,secondName:o[i].secondName,category:o[i].category,firstTry:0,secondTry:0});return t.tournament.peopleInfo=r,e.prev=8,l=t.$route.params.id,e.next=12,t.$store.dispatch("updateTournament",{peopleInfo:r,id:l});case 12:u=document.getElementsByClassName("message-block2")[0],u.classList.remove("message-block2--none"),setTimeout((function(){u.classList.add("message-block2--none")}),3500),e.next=19;break;case 17:e.prev=17,e.t0=e["catch"](8);case 19:return e.next=21,t.$store.dispatch("fetchUsers");case 21:for(m=e.sent,d=m,p=o,f=function(e){for(var s=0;s<t.tournament.peopleInfo.length;s++)o[e].id==t.tournament.peopleInfo[s].id&&(p=p.filter((function(t){return t!==o[e]})),d=d.filter((function(t){return t!==o[e].secondName+" "+o[e].firstName})))},h=0;h<o.length;h++)f(h);t.items=d,t.valueCategory=p;case 28:case"end":return e.stop()}}),e,null,[[8,17]])})))()},randomPlace:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tournament.peopleInfo.sort((function(){return Math.random()-.5})),s=t.$route.params.id,e.next=4,t.$store.dispatch("updateTournament",{peopleInfo:t.tournament.peopleInfo,id:s});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))()},resultAll:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=function(t){return function(e,s){return e[t]>s[t]?1:-1}},t.result=1,s=t.tournament.peopleInfo,a=0;a<s.length;a++)String(s[a].firstTry)>=String(s[a].secondTry)?s[a].bestTry=String(s[a].secondTry):s[a].bestTry=String(s[a].firstTry);return s.sort(n("bestTry")),e.prev=5,r=t.$route.params.id,e.next=9,t.$store.dispatch("updateTournament",{peopleInfo:s,id:r});case 9:o=document.getElementsByClassName("message-block3")[0],o.classList.remove("message-block3--none"),setTimeout((function(){o.classList.add("message-block3--none")}),3500),e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](5);case 16:case"end":return e.stop()}}),e,null,[[5,14]])})))()}}}),u=l,m=(s("a12a"),s("2877")),d=s("6544"),p=s.n(d),f=s("8336"),h=s("cc20"),v=s("ce7e"),_=s("b974"),g=s("1f4f"),C=Object(m["a"])(u,i,c,!1,null,"105de63e",null),b=C.exports;p()(C,{VBtn:f["a"],VChip:h["a"],VDivider:v["a"],VSelect:_["a"],VSimpleTable:g["a"]});var T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{"data-app":""}},[1==t.status?s("div",[s("v-simple-table",[[s("thead",[s("tr",[1==t.result?s("th",[t._v("Место")]):t._e(),s("th",[t._v("Участник")]),s("th",[t._v("Категория")]),s("th",[t._v("Заезд I")]),s("th",[t._v("Заезд II")])]),t._l(t.tournament.peopleInfo,(function(e,a){return s("tr",{key:a,staticClass:"infoUserTr",attrs:{"data-id":e.id}},[1==t.result?s("td",[t._v(t._s(a+1))]):t._e(),s("td",[t._v(" "+t._s(e.secondName)+" "+t._s(e.firstName)+" ")]),s("td",[t._v(" "+t._s(e.category)+" ")]),s("td",[s("input",{staticClass:"input-time",attrs:{type:"number"},domProps:{value:e.firstTry}})]),s("td",[s("input",{staticClass:"input-time",attrs:{type:"number"},domProps:{value:e.secondTry}})])])}))],2)]],2),s("div",{staticClass:"container"},[s("v-divider"),s("v-select",{attrs:{items:t.items,label:"Добавить новых участников",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item,n=e.index;return[0===n?s("v-chip",[s("span",[t._v(t._s(a))])]):t._e(),1===n?s("span",{staticClass:"grey--text caption"},[t._v("(+"+t._s(t.value.length-1)+" others) ")]):t._e()]}}],null,!1,1029767770),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticClass:"profile__block-btn"},[s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.randomPlace(e)}}},[t._v(" Перемешать участников ")]),s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.addPeople(e)}}},[t._v(" Добавить участников ")])],1),s("div",{staticClass:"profile__block-btn"},[s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.resultAll(e)}}},[t._v(" Посчитать результаты ")]),s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.saveTournament(e)}}},[t._v(" Cохранить изменения ")])],1),s("div",{staticClass:"message-block message-block--none"},[t._v("Данные Турнира успешно изменены!")]),s("div",{staticClass:"message-block2 message-block2--none"},[t._v("Участник успешно добавлен")]),s("div",{staticClass:"message-block3 message-block3--none"},[t._v("Результаты посчитаны!")])],1):s("div",[s("v-simple-table",[[s("thead",[s("tr",[1==t.result?s("th",[t._v("Место")]):t._e(),s("th",[t._v("Участник")]),s("th",[t._v("Категория")]),s("th",[t._v("Заезд I")]),s("th",[t._v("Заезд II")])]),t._l(t.tournament.peopleInfo,(function(e,a){return s("tr",{key:a,staticClass:"infoUserTr",attrs:{"data-id":e.id}},[1==t.result?s("td",[t._v(t._s(a+1))]):t._e(),s("td",[t._v(" "+t._s(e.secondName)+" "+t._s(e.firstName)+" ")]),s("td",[t._v(" "+t._s(e.category)+" ")]),s("td",[t._v(" "+t._s(e.firstTry)+" ")]),s("td",[t._v(" "+t._s(e.secondTry)+" ")])])}))],2)]],2)],1)])},y=[],k={name:"TournamentList",data:function(){return{tournament:{},peopleInfo:[],oldPeopleInfo:{},firstTry:null,secondTry:null,status:0,items:[],value:[],valueCategory:[],result:0}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,o,i,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,t.$store.dispatch("fetchTournamentById",s);case 3:return a=e.sent,e.next=6,t.$store.dispatch("fetchStatus");case 6:return t.status=e.sent,t.oldPeopleInfo=a.peopleInfo,t.tournament=Object(r["a"])({},a),e.next=11,t.$store.dispatch("fetchUsers");case 11:return n=e.sent,e.next=14,t.$store.dispatch("fetchAllUser");case 14:for(o=e.sent,i=n,c=o,l=function(e){for(var s=0;s<t.tournament.peopleInfo.length;s++)o[e].id==t.tournament.peopleInfo[s].id&&(c=c.filter((function(t){return t!==o[e]})),i=i.filter((function(t){return t!==o[e].secondName+" "+o[e].firstName})))},u=0;u<o.length;u++)l(u);t.items=i,t.valueCategory=c;case 21:case"end":return e.stop()}}),e)})))()},methods:{saveTournament:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,r,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(e.prev=0,s=document.getElementsByClassName("infoUserTr"),a=[],n=0,r=s.length;n<r;n++)for(o=0;o<t.oldPeopleInfo.length;o++)s[n].dataset.id==t.oldPeopleInfo[o].id&&a.push({id:t.oldPeopleInfo[o].id,firstName:t.oldPeopleInfo[o].firstName,secondName:t.oldPeopleInfo[o].secondName,category:t.oldPeopleInfo[o].category,firstTry:String(s[n].childNodes[3].childNodes[0].value),secondTry:String(s[n].childNodes[4].childNodes[0].value),award:t.oldPeopleInfo[o].award});return i=t.$route.params.id,t.tournament.peopleInfo=a,e.next=8,t.$store.dispatch("updateTournament",{peopleInfo:a,id:i});case 8:c=document.getElementsByClassName("message-block")[0],c.classList.remove("message-block--none"),setTimeout((function(){c.classList.add("message-block--none")}),3500),e.next=15;break;case 13:e.prev=13,e.t0=e["catch"](0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))()},addPeople:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,r,o,i,c,l,u,m,d,p,f,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s=[],a=0;a<t.value.length;a++)for(n=0;n<t.valueCategory.length;n++)t.value[a]==t.valueCategory[n].secondName+" "+t.valueCategory[n].firstName&&s.push(t.valueCategory[n].id);return r=t.tournament.peopleInfo,e.next=5,t.$store.dispatch("fetchAllUser");case 5:for(o=e.sent,i=0;i<o.length;i++)for(c=0;c<s.length;c++)o[i].id==s[c]&&r.push({id:o[i].id,firstName:o[i].firstName,secondName:o[i].secondName,category:o[i].category,award:o[i].award,firstTry:0,secondTry:0});return t.tournament.peopleInfo=r,e.prev=8,l=t.$route.params.id,e.next=12,t.$store.dispatch("updateTournament",{peopleInfo:r,id:l});case 12:u=document.getElementsByClassName("message-block2")[0],u.classList.remove("message-block2--none"),setTimeout((function(){u.classList.add("message-block2--none")}),3500),e.next=19;break;case 17:e.prev=17,e.t0=e["catch"](8);case 19:return e.next=21,t.$store.dispatch("fetchUsers");case 21:for(m=e.sent,d=m,p=o,f=function(e){for(var s=0;s<t.tournament.peopleInfo.length;s++)o[e].id==t.tournament.peopleInfo[s].id&&(p=p.filter((function(t){return t!==o[e]})),d=d.filter((function(t){return t!==o[e].secondName+" "+o[e].firstName})))},h=0;h<o.length;h++)f(h);t.items=d,t.valueCategory=p;case 28:case"end":return e.stop()}}),e,null,[[8,17]])})))()},randomPlace:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tournament.peopleInfo.sort((function(){return Math.random()-.5})),s=t.$route.params.id,e.next=4,t.$store.dispatch("updateTournament",{peopleInfo:t.tournament.peopleInfo,id:s});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))()},resultAll:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=function(t){return function(e,s){return e[t]<s[t]?1:-1}},function(t){return function(e,s){return e[t]>s[t]?1:-1}},t.result=1,s=t.tournament.peopleInfo,a=0;a<s.length;a++)String(s[a].firstTry)>=String(s[a].secondTry)?s[a].bestTry=String(s[a].secondTry):s[a].bestTry=String(s[a].firstTry);return s.sort(n("bestTry")),s.sort(n("award")),e.prev=7,r=t.$route.params.id,e.next=11,t.$store.dispatch("updateTournament",{peopleInfo:s,id:r});case 11:o=document.getElementsByClassName("message-block3")[0],o.classList.remove("message-block3--none"),setTimeout((function(){o.classList.add("message-block3--none")}),3500),e.next=18;break;case 16:e.prev=16,e.t0=e["catch"](7);case 18:case"end":return e.stop()}}),e,null,[[7,16]])})))()}}},N=k,w=(s("67f7"),Object(m["a"])(N,T,y,!1,null,"7e19261c",null)),I=w.exports;p()(w,{VBtn:f["a"],VChip:h["a"],VDivider:v["a"],VSelect:_["a"],VSimpleTable:g["a"]});var x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{"data-app":""}},[t.countUsers<=16?s("div",[s("section",{attrs:{id:"bracket"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"split split-one"},[s("div",{staticClass:"round round-one current"},[s("div",{staticClass:"round-details"},[t._v("Round 1")]),t._l(t.firstBlock,(function(e,a){return s("ul",{key:a,staticClass:"matchup"},t._l(e,(function(e,n){return s("li",{key:n,staticClass:"team team-top",on:{click:function(e){return e.preventDefault(),t.firstRoundLeft(e)}}},[t._v(t._s(e.secondName)+" "+t._s(e.firstName)+" "),s("span",{staticClass:"score"},[t._v(t._s(a+1))])])})),0)}))],2),t._v(" "),s("div",{staticClass:"round round-two"},[s("div",{staticClass:"round-details"},[t._v("Round 2")]),s("ul",{staticClass:"matchup",attrs:{"data-number":"r2left1"},on:{click:function(e){return e.preventDefault(),t.secondRoundLeft(e)}}},[s("li",{staticClass:"team team-top",domProps:{innerHTML:t._s(this.champions.r2left1Top)}}),s("li",{staticClass:"team team-bottom",domProps:{innerHTML:t._s(this.champions.r2left1Bot)}})]),s("ul",{staticClass:"matchup",attrs:{"data-number":"r2left2"},on:{click:function(e){return e.preventDefault(),t.secondRoundLeft(e)}}},[s("li",{staticClass:"team team-top",domProps:{innerHTML:t._s(this.champions.r2left2Top)}}),s("li",{staticClass:"team team-bottom",domProps:{innerHTML:t._s(this.champions.r2left2Top)}})])])]),s("div",{staticClass:"champion"},[s("div",{staticClass:"semis-l"},[s("div",{staticClass:"round-details"},[t._v("west semifinals")]),s("ul",{staticClass:"matchup championship west",attrs:{"data-number":"r3left1"},on:{click:function(e){return e.preventDefault(),t.thirdRoundLeft(e)}}},[s("li",{staticClass:"team team-top",domProps:{innerHTML:t._s(this.champions.r3left1Top)}}),s("li",{staticClass:"team team-bottom",domProps:{innerHTML:t._s(this.champions.r3left1Bot)}})])]),s("div",{staticClass:"final"},[s("i",{staticClass:"fa fa-trophy"}),s("div",{staticClass:"round-details"},[t._v("championship")]),s("ul",{staticClass:"matchup championship",attrs:{"data-number":"r4"},on:{click:function(e){return e.preventDefault(),t.final(e)}}},[s("li",{staticClass:"team team-top final__element",domProps:{innerHTML:t._s(this.champions.r4Top)}}),s("li",{staticClass:"team team-bottom final__element",domProps:{innerHTML:t._s(this.champions.r4Bot)}})])]),s("div",{staticClass:"semis-r"},[s("div",{staticClass:"round-details"},[t._v("east semifinals")]),s("ul",{staticClass:"matchup championship east",attrs:{"data-number":"r3left2"},on:{click:function(e){return e.preventDefault(),t.thirdRoundRight(e)}}},[s("li",{staticClass:"team team-top",domProps:{innerHTML:t._s(this.champions.r3right1Top)}}),s("li",{staticClass:"team team-bottom",domProps:{innerHTML:t._s(this.champions.r3right1Bot)}})])])]),s("div",{staticClass:"split split-two"},[s("div",{staticClass:"round round-two"},[s("div",{staticClass:"round-details"},[t._v("Round 2")]),s("ul",{staticClass:"matchup",attrs:{"data-number":"r2right1"},on:{click:function(e){return e.preventDefault(),t.secondRoundRight(e)}}},[s("li",{staticClass:"team team-top",domProps:{innerHTML:t._s(this.champions.r2right1Top)}}),s("li",{staticClass:"team team-bottom",domProps:{innerHTML:t._s(this.champions.r2right1Bot)}},[t._v(">")])]),s("ul",{staticClass:"matchup",attrs:{"data-number":"r2right2"},on:{click:function(e){return e.preventDefault(),t.secondRoundRight(e)}}},[s("li",{staticClass:"team team-top",domProps:{innerHTML:t._s(this.champions.r2right2Top)}}),s("li",{staticClass:"team team-bottom",domProps:{innerHTML:t._s(this.champions.r2right2Bot)}})])]),t._v(" "),s("div",{staticClass:"round round-one current"},[s("div",{staticClass:"round-details"},[t._v("Round 1")]),t._l(t.secondBlock,(function(e,a){return s("ul",{key:a,staticClass:"matchup"},t._l(e,(function(e,n){return s("li",{key:n,staticClass:"team team-top",on:{click:function(e){return e.preventDefault(),t.firstRoundRight(e)}}},[t._v(t._s(e.secondName)+" "+t._s(e.firstName)+" "),s("span",{staticClass:"score"},[t._v(t._s(a+1))])])})),0)}))],2)])])]),s("div",{staticClass:"container"},[s("v-select",{attrs:{items:t.items,label:"Добавить новых участников",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item,n=e.index;return[0===n?s("v-chip",[s("span",[t._v(t._s(a))])]):t._e(),1===n?s("span",{staticClass:"grey--text caption"},[t._v("(+"+t._s(t.value.length-1)+" others) ")]):t._e()]}}],null,!1,1029767770),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticClass:"profile__block-btn"},[s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.addPeople(e)}}},[t._v(" Добавить участников ")]),s("v-btn",{staticClass:"profile__btn",attrs:{color:"#ed4d34"},on:{click:function(e){return e.preventDefault(),t.saveResults(e)}}},[t._v(" Cохранить результаты ")])],1)]):s("section",{attrs:{id:"bracket"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"split split-one"},[s("div",{staticClass:"round round-one current"},[t._m(0),t._l(t.firstBlock,(function(e,a){return s("ul",{key:a,staticClass:"matchup"},t._l(e,(function(e,a){return s("li",{key:a,staticClass:"team team-top"},[t._v(t._s(e.secondName)+" "+t._s(e.firstName))])})),0)}))],2),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._m(3),s("div",{staticClass:"split split-two"},[t._m(4),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"round round-one current"},[t._m(6),t._l(t.secondBlock,(function(e,a){return s("ul",{key:a,staticClass:"matchup"},t._l(e,(function(e,a){return s("li",{key:a,staticClass:"team team-top"},[t._v(t._s(e.secondName)+" "+t._s(e.firstName))])})),0)}))],2)])])])])},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"round-details"},[t._v("Round 1"),s("br"),s("span",{staticClass:"date"},[t._v("March 16")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"round round-two"},[s("div",{staticClass:"round-details"},[t._v("Round 2"),s("br"),s("span",{staticClass:"date"},[t._v("March 18")])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"round round-three"},[s("div",{staticClass:"round-details"},[t._v("Round 3"),s("br"),s("span",{staticClass:"date"},[t._v("March 22")])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"champion"},[s("div",{staticClass:"semis-l"},[s("div",{staticClass:"round-details"},[t._v("west semifinals "),s("br"),s("span",{staticClass:"date"},[t._v("March 26-28")])]),s("ul",{staticClass:"matchup championship"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"vote-count"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"vote-count"})])])]),s("div",{staticClass:"final"},[s("i",{staticClass:"fa fa-trophy"}),s("div",{staticClass:"round-details"},[t._v("championship "),s("br"),s("span",{staticClass:"date"},[t._v("March 30 - Apr. 1")])]),s("ul",{staticClass:"matchup championship"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"vote-count"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"vote-count"})])])]),s("div",{staticClass:"semis-r"},[s("div",{staticClass:"round-details"},[t._v("east semifinals "),s("br"),s("span",{staticClass:"date"},[t._v("March 26-28")])]),s("ul",{staticClass:"matchup championship"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"vote-count"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"vote-count"})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"round round-three"},[s("div",{staticClass:"round-details"},[t._v("Round 3"),s("br"),s("span",{staticClass:"date"},[t._v("March 22")])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"round round-two"},[s("div",{staticClass:"round-details"},[t._v("Round 2"),s("br"),s("span",{staticClass:"date"},[t._v("March 18")])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])]),s("ul",{staticClass:"matchup"},[s("li",{staticClass:"team team-top"},[t._v(" "),s("span",{staticClass:"score"})]),s("li",{staticClass:"team team-bottom"},[t._v(" "),s("span",{staticClass:"score"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"round-details"},[t._v("Round 1"),s("br"),s("span",{staticClass:"date"},[t._v("March 16")])])}],L=(s("fb6a"),{name:"TournamentList",data:function(){return{tournament:{},firstBlock:[],secondBlock:[],countUsers:0,leftNumber2:0,rightNumber2:0,items:[],value:[],valueCategory:[],champions:{}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,o,i,c,l,u,m,d,p,f,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,t.$store.dispatch("fetchTournamentById",s);case 3:return a=e.sent,t.tournament=Object(r["a"])({},a),t.champions=a.champions,e.next=8,t.$store.dispatch("fetchUsers");case 8:return n=e.sent,e.next=11,t.$store.dispatch("fetchAllUser");case 11:for(o=e.sent,i=n,c=o,l=function(e){for(var s=0;s<t.tournament.peopleInfo.length;s++)o[e].id==t.tournament.peopleInfo[s].id&&(c=c.filter((function(t){return t!==o[e]})),i=i.filter((function(t){return t!==o[e].secondName+" "+o[e].firstName})))},u=0;u<o.length;u++)l(u);for(t.items=i,t.valueCategory=c,t.countUsers=t.tournament.peopleInfo.length,m=t.tournament.peopleInfo,d=m,p=2,f=[],h=0;h<Math.ceil(d.length/p);h++)f[h]=d.slice(h*p,h*p+p);t.firstBlock=f.slice(0,f.length/2),t.secondBlock=f.slice(f.length/2,f.length),t.leftNumber2=Math.round(t.firstBlock.length/2),t.rightNumber2=Math.round(t.secondBlock.length/2);case 28:case"end":return e.stop()}}),e)})))()},methods:{addPeople:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,n,o,i,c,l,u,m,d,p,f,h,v,_,g,C,b,T,y,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s=[],a=0;a<t.value.length;a++)for(n=0;n<t.valueCategory.length;n++)t.value[a]==t.valueCategory[n].secondName+" "+t.valueCategory[n].firstName&&s.push(t.valueCategory[n].id);return o=t.tournament.peopleInfo,e.next=5,t.$store.dispatch("fetchAllUser");case 5:for(i=e.sent,c=0;c<i.length;c++)for(l=0;l<s.length;l++)i[c].id==s[l]&&o.push({id:i[c].id,firstName:i[c].firstName,secondName:i[c].secondName,category:i[c].category,firstTry:0,secondTry:0});return t.tournament.peopleInfo=o,e.prev=8,u=t.$route.params.id,e.next=12,t.$store.dispatch("updateTournament",{peopleInfo:o,id:u});case 12:m=document.getElementsByClassName("message-block2")[0],m.classList.remove("message-block2--none"),setTimeout((function(){m.classList.add("message-block2--none")}),3500),e.next=19;break;case 17:e.prev=17,e.t0=e["catch"](8);case 19:return d=t.$route.params.id,e.next=22,t.$store.dispatch("fetchTournamentById",d);case 22:return p=e.sent,t.tournament=Object(r["a"])({},p),e.next=26,t.$store.dispatch("fetchUsers");case 26:for(f=e.sent,h=f,v=i,_=function(e){for(var s=0;s<t.tournament.peopleInfo.length;s++)i[e].id==t.tournament.peopleInfo[s].id&&(v=v.filter((function(t){return t!==i[e]})),h=h.filter((function(t){return t!==i[e].secondName+" "+i[e].firstName})))},g=0;g<i.length;g++)_(g);for(t.items=h,t.valueCategory=v,t.countUsers=t.tournament.peopleInfo.length,C=t.tournament.peopleInfo,b=C,T=2,y=[],k=0;k<Math.ceil(b.length/T);k++)y[k]=b.slice(k*T,k*T+T);t.firstBlock=y.slice(0,y.length/2),t.secondBlock=y.slice(y.length/2,y.length),t.leftNumber2=Math.round(t.firstBlock.length/2),t.rightNumber2=Math.round(t.secondBlock.length/2);case 43:case"end":return e.stop()}}),e,null,[[8,17]])})))()},firstRoundLeft:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o,i,c,l,u,m,d,p,f,h,v;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.target.childNodes[1].innerHTML,n=t.target.innerHTML,1==a){for(r=document.getElementsByClassName("matchup"),o=0,i=r.length;o<i;o++)"r2left1"==r[o].dataset.number&&(r[o].childNodes[0].innerHTML=n);e.champions["r2left1Top"]=n}if(2==a){for(c=document.getElementsByClassName("matchup"),l=0,u=c.length;l<u;l++)"r2left1"==c[l].dataset.number&&(c[l].childNodes[1].innerHTML=n);e.champions["r2left1Bot"]=n}if(3==a){for(m=document.getElementsByClassName("matchup"),d=0,p=m.length;d<p;d++)"r2left2"==m[d].dataset.number&&(m[d].childNodes[0].innerHTML=n);e.champions["r2left2Top"]=n}if(4==a){for(f=document.getElementsByClassName("matchup"),h=0,v=f.length;h<v;h++)"r2left2"==f[h].dataset.number&&(f[h].childNodes[1].innerHTML=n);e.champions["r2left2Bot"]=n}case 6:case"end":return s.stop()}}),s)})))()},firstRoundRight:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o,i,c,l,u,m,d,p,f,h,v;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.target.childNodes[1].innerHTML,n=t.target.innerHTML,1==a){for(r=document.getElementsByClassName("matchup"),o=0,i=r.length;o<i;o++)"r2right1"==r[o].dataset.number&&(r[o].childNodes[0].innerHTML=n);e.champions["r2right1Top"]=n}if(2==a){for(c=document.getElementsByClassName("matchup"),l=0,u=c.length;l<u;l++)"r2right1"==c[l].dataset.number&&(c[l].childNodes[1].innerHTML=n);e.champions["r2right1Bot"]=n}if(3==a){for(m=document.getElementsByClassName("matchup"),d=0,p=m.length;d<p;d++)"r2right2"==m[d].dataset.number&&(m[d].childNodes[0].innerHTML=n);e.champions["r2right2Top"]=n}if(4==a){for(f=document.getElementsByClassName("matchup"),h=0,v=f.length;h<v;h++)"r2right2"==f[h].dataset.number&&(f[h].childNodes[1].innerHTML=n);e.champions["r2right2Bot"]=n}case 6:case"end":return s.stop()}}),s)})))()},secondRoundLeft:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o,i,c,l,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.target.childNodes[1].innerHTML,n=t.target.innerHTML,1==a||2==a){for(r=document.getElementsByClassName("matchup"),o=0,i=r.length;o<i;o++)"r3left1"==r[o].dataset.number&&(r[o].childNodes[0].innerHTML=n);e.champions["r3left1Top"]=n}if(3==a||4==a){for(c=document.getElementsByClassName("matchup"),l=0,u=c.length;l<u;l++)"r3left2"==c[l].dataset.number&&(c[l].childNodes[0].innerHTML=n);e.champions["r3left1Bot"]=n}case 4:case"end":return s.stop()}}),s)})))()},secondRoundRight:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o,i,c,l,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.target.childNodes[1].innerHTML,n=t.target.innerHTML,1==a||2==a){for(r=document.getElementsByClassName("matchup"),o=0,i=r.length;o<i;o++)"r3left1"==r[o].dataset.number&&(r[o].childNodes[1].innerHTML=n);e.champions["r3right1Top"]=n}if(3==a||4==a){for(c=document.getElementsByClassName("matchup"),l=0,u=c.length;l<u;l++)"r3left2"==c[l].dataset.number&&(c[l].childNodes[1].innerHTML=n);e.champions["r3right1Bot"]=n}case 4:case"end":return s.stop()}}),s)})))()},thirdRoundLeft:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.target.childNodes[1].innerHTML,n=t.target.innerHTML,1==a||2==a){for(r=document.getElementsByClassName("matchup"),o=0,i=r.length;o<i;o++)"r4"==r[o].dataset.number&&(r[o].childNodes[0].innerHTML=n);e.champions["r4Top"]=n}case 3:case"end":return s.stop()}}),s)})))()},thirdRoundRight:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.target.childNodes[1].innerHTML,n=t.target.innerHTML,3==a||4==a){for(r=document.getElementsByClassName("matchup"),o=0,i=r.length;o<i;o++)"r4"==r[o].dataset.number&&(r[o].childNodes[1].innerHTML=n);e.champions["r4Bot"]=n}case 3:case"end":return s.stop()}}),s)})))()},final:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n,r,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:for(a=t.target.innerHTML,n=document.getElementsByClassName("matchup"),r=0,o=n.length;r<o;r++)n[r].classList.remove("active");t.target.classList.add("active"),e.champions["final"]=a,e.champions["finalClass"]="active";case 6:case"end":return s.stop()}}),s)})))()},saveResults:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,t.$store.dispatch("updateTournamentPleiOff",{champions:t.champions,id:s});case 3:case"end":return e.stop()}}),e)})))()}}}),B=L,$=(s("2804"),Object(m["a"])(B,x,R,!1,null,"27518d74",null)),M=$.exports;p()($,{VBtn:f["a"],VChip:h["a"],VSelect:_["a"]});var P={name:"TournamentList",data:function(){return{tournament:{}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$route.params.id,e.next=3,t.$store.dispatch("fetchTournamentById",s);case 3:a=e.sent,t.tournament=Object(r["a"])({},a);case 5:case"end":return e.stop()}}),e)})))()},components:{Classic:b,ClassicWithCategory:I,PleiOff:M}},H=P,E=(s("b2da"),Object(m["a"])(H,a,n,!1,null,"461a90ce",null));e["default"]=E.exports},"8b37":function(t,e,s){},a12a:function(t,e,s){"use strict";var a=s("b1f5"),n=s.n(a);n.a},b1f5:function(t,e,s){},b2da:function(t,e,s){"use strict";var a=s("09e6"),n=s.n(a);n.a},b3a2:function(t,e,s){}}]);
//# sourceMappingURL=chunk-46dfb3d1.2086d212.js.map