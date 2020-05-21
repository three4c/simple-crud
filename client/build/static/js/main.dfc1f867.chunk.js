(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){e.exports=a(69)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(15),s=a.n(c),u=a(13),i=a(11),o=a(4),l=a(17),m=a(33),d=a.n(m)()(),h={changeName:d("CHANGE_NAME"),changeAge:d("CHANGE_AGE"),initializeForm:d("INITIALIZE_FORM"),postForm:d.async("POST_FORM")},f={editName:d("EDIT_NAME"),editAge:d("EDIT_AGE"),getCharacters:d.async("GET_CHARACTERS"),updateCharacters:d.async("UPDATE_CHARACTERS"),deleteCharacters:d.async("DELETE_CHARACTERS")},b=Object(l.reducerWithInitialState)({name:"",age:""}).case(h.changeName,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{name:t})})).case(h.changeAge,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{age:t})})).case(h.initializeForm,(function(e){return Object(o.a)(Object(o.a)({},e),{},{name:"",age:""})})).case(h.postForm.started,(function(e){return Object(o.a)({},e)})).case(h.postForm.done,(function(e){return Object(o.a)({},e)})).case(h.postForm.failed,(function(e){return Object(o.a)({},e)})),p=Object(l.reducerWithInitialState)({name:"",age:"",isFetching:!1,characterArray:[]}).case(f.editName,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{name:t})})).case(f.editAge,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{age:t})})).case(f.getCharacters.started,(function(e){return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0})})).case(f.getCharacters.done,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{isFetching:!1,characterArray:t.result})})).case(f.getCharacters.failed,(function(e){return Object(o.a)(Object(o.a)({},e),{},{isFetching:!1})})).case(f.updateCharacters.started,(function(e){return Object(o.a)({},e)})).case(f.updateCharacters.done,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{characterArray:t.result})})).case(f.updateCharacters.failed,(function(e){return Object(o.a)({},e)})).case(f.deleteCharacters.started,(function(e){return Object(o.a)({},e)})).case(f.deleteCharacters.done,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{characterArray:t.result})})).case(f.deleteCharacters.failed,(function(e){return Object(o.a)({},e)})),g=a(34),O=a(36),j=a(7),C=a.n(j),A=a(12),E=a(5),v=a(10),_=a.n(v),N=C.a.mark(x),y=function(e,t,a){return e.preventDefault(),_.a.post("/api/characters",{name:t,age:a}).then((function(r){return{characterArray:r.data,e:e,name:t,age:a}})).catch((function(e){return{error:e}}))};function x(e){var t,a,r,n,c,s;return C.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(E.b)(y,e.payload.e,e.payload.name,e.payload.age);case 2:if(t=u.sent,a=t.characterArray,r=t.e,n=t.name,c=t.age,s=t.error,!(a&&r&&n&&c)){u.next=17;break}return u.next=11,Object(E.c)(h.postForm.done({params:{},result:a}));case 11:return u.next=13,Object(E.c)(f.getCharacters.done({params:{},result:a}));case 13:return u.next=15,Object(E.c)(h.initializeForm());case 15:u.next=19;break;case 17:return u.next=19,Object(E.c)(h.postForm.failed({params:{},error:s}));case 19:case"end":return u.stop()}}),N)}var F=[Object(E.d)(h.postForm.started,x)],k=C.a.mark(L),w=function(){return _.a.get("/api/characters").then((function(e){return{characterArray:e.data}})).catch((function(e){return{error:e}}))};function L(){var e,t,a;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(E.b)(w);case 2:if(e=r.sent,t=e.characterArray,a=e.error,!t){r.next=10;break}return r.next=8,Object(E.c)(f.getCharacters.done({params:{},result:t}));case 8:r.next=12;break;case 10:return r.next=12,Object(E.c)(f.getCharacters.failed({params:{},error:a}));case 12:case"end":return r.stop()}}),k)}var I=[Object(E.d)(f.getCharacters.started,L)],T=C.a.mark(R),S=function(e,t,a){return _.a.put("/api/characters",{id:e,name:t,age:a}).then((function(r){return{characterArray:r.data,id:e,name:t,age:a}})).catch((function(e){return{error:e}}))};function R(e){var t,a,r,n,c,s;return C.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(E.b)(S,e.payload.id,e.payload.name,e.payload.age);case 2:if(t=u.sent,a=t.characterArray,r=t.id,n=t.name,c=t.age,s=t.error,console.log(r,n,c),!(a&&r&&n&&c)){u.next=14;break}return u.next=12,Object(E.c)(f.updateCharacters.done({params:{},result:a}));case 12:u.next=16;break;case 14:return u.next=16,Object(E.c)(f.updateCharacters.failed({params:{},error:s}));case 16:case"end":return u.stop()}}),T)}var z=[Object(E.d)(f.updateCharacters.started,R)],D=C.a.mark(H),G=function(e){return _()({method:"delete",url:"/api/characters",data:{id:e}}).then((function(t){return{characterArray:t.data,id:e}})).catch((function(e){return{error:e}}))};function H(e){var t,a,r,n;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(E.b)(G,e.payload.id);case 2:if(t=c.sent,a=t.characterArray,r=t.id,n=t.error,!a||!r){c.next=11;break}return c.next=9,Object(E.c)(f.deleteCharacters.done({params:{},result:a}));case 9:c.next=13;break;case 11:return c.next=13,Object(E.c)(f.deleteCharacters.failed({params:{},error:n}));case 13:case"end":return c.stop()}}),D)}var M=[Object(E.d)(f.deleteCharacters.started,H)],B=C.a.mark(W);function W(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([].concat(Object(A.a)(F),Object(A.a)(I),Object(A.a)(z),Object(A.a)(M)));case 2:case"end":return e.stop()}}),B)}var J=Object(O.a)(),P=Object(g.createLogger)({diff:!0,collapsed:!0}),V=Object(i.e)(Object(i.c)({form:b,character:p}),{},Object(i.a)(J,P));J.run(W);var U=V,Z=(a(65),function(e){var t=e.name,a=e.age;return n.a.createElement("div",{className:"AddForm"},n.a.createElement("h2",{className:"AddForm__title"},"\u30d5\u30a9\u30fc\u30e0"),n.a.createElement("form",{onSubmit:function(r){return e.postForm(r,t,a)}},n.a.createElement("input",{className:"AddForm__input",placeholder:"\u540d\u524d",value:t,onChange:function(t){return e.changeName(t.target.value)}}),n.a.createElement("input",{className:"AddForm__input",placeholder:"\u5e74\u9f62",value:a,onChange:function(t){return e.changeAge(t.target.value)}}),n.a.createElement("button",{className:"AddForm__submit",type:"submit"},"\u9001\u4fe1")))}),$=Object(u.b)((function(e){return Object(o.a)({},e.form)}),(function(e){return{changeName:function(t){return e(h.changeName(t))},changeAge:function(t){return e(h.changeAge(t))},initializeForm:function(){return e(h.initializeForm())},postForm:function(t,a,r){return e(h.postForm.started({params:{},e:t,name:a,age:r}))}}}))(Z),q=a(35),K=(a(66),function(e){var t=Object(r.useState)(new Array(e.characterArray.length).fill(!1)),a=Object(q.a)(t,2),c=a[0],s=a[1];Object(r.useEffect)((function(){e.getCharacters()}),[]);var u=Object(r.useCallback)((function(e){var t=Object(A.a)(c);t[e]=!t[e],s(t)}),[c]);return n.a.createElement("div",{className:"CharacterList"},e.isFetching?n.a.createElement("h2",{className:"CharacterList__title"},"Now Loading..."):n.a.createElement("div",null,n.a.createElement("h2",{className:"CharacterList__title"},"\u30ea\u30b9\u30c8"),n.a.createElement("ul",{className:"CharacterList__list"},e.characterArray.map((function(t,a){return n.a.createElement("li",{key:t._id,className:"CharacterList__listItem"},c[a]?n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{defaultValue:t.name,onChange:function(t){return e.editName(t.target.value)}}),n.a.createElement("input",{defaultValue:t.age,onChange:function(t){return e.editAge(t.target.value)}})):"".concat(t.name," (").concat(t.age,")"),n.a.createElement("div",{className:"CharacterList__listArea"},n.a.createElement("button",{className:"CharacterList__listButton",onClick:function(){e.updateCharacters(t._id,e.name?e.name:t.name,e.age?e.age:t.age),u(a)}},n.a.createElement("i",{className:"gg-edit-markup"})),n.a.createElement("button",{className:"CharacterList__listButton",onClick:function(){return e.deleteCharacters(t._id)}},n.a.createElement("i",{className:"gg-trash"}))))})))))}),Q=Object(u.b)((function(e){return Object(o.a)({},e.character)}),(function(e){return{editName:function(t){return e(f.editName(t))},editAge:function(t){return e(f.editAge(t))},getCharacters:function(){return e(f.getCharacters.started({params:{}}))},updateCharacters:function(t,a,r){return e(f.updateCharacters.started({params:{},id:t,name:a,age:r}))},deleteCharacters:function(t){return e(f.deleteCharacters.started({params:{},id:t}))}}}))(K),X=(a(67),function(){return n.a.createElement("div",{className:"App"},n.a.createElement($,null),n.a.createElement(Q,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,{store:U},n.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.dfc1f867.chunk.js.map