(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=a(65),d=a(67),h=a(66),f=a(64),b=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},r.a.createElement("i",{className:"far fa-address-book"}," ",t," ")),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}," Home ")),r.a.createElement(f.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}," Adicionar ")),r.a.createElement(f.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}," Sobre ")))))))};b.defaultProps={branding:"My App"};var v=b,E=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Sobre Meus Contatos"),r.a.createElement("p",{className:"lead"},"Um simples gerenciador de contatos"),r.a.createElement("p",{className:"text-secondary"},"Vers\xe3o 1.0.0"))},y=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 P\xe1gina N\xe3o Encontrada"),r.a.createElement("p",{className:"lead"},"Desculpe, essa p\xe1gina n\xe3o existe"))},C=a(8),g=a.n(C),N=a(12),j=a(14),O=a(29),k=a(17),w=a(13),x=a.n(w),S=r.a.createContext(),T=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(k.a)({},e,{contacts:[t.payload].concat(Object(O.a)(e.contacts))});case"UPDATE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return T(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(S.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),D=S.Consumer,I=a(27),P=a.n(I),_=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"{name}"},t),r.a.createElement("input",{type:o,name:a,className:P()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},"Esse campo \xe9 obrigat\xf3rio"))};_.defaultProps={type:"text"};var F=_,M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={addContact:!1,name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(N.a)(g.a.mark(function e(t,n){var r,c,o,l,s,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name \xe9 obrigat\xf3rio"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return a.setState({errors:{phone:"Telefone \xe9 obrigat\xf3rio"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return a.setState({errors:{email:"Email \xe9 obrigat\xf3rio"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,x.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(D,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header",style:{cursor:"pointer"},onClick:function(){return e.setState({addContact:!e.state.addContact})}},r.a.createElement("i",{className:"fas fa-address-card",style:{cursor:"pointer",float:"left",color:"#076BFF"}})," ","Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(F,{label:"Nome",name:"name",placeholder:"Insira o nome... ",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(F,{label:"Telefone",name:"phone",placeholder:"Insira o Telefone... ",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement(F,{label:"Email",name:"email",type:"email",placeholder:"Insira o email... ",value:n,onChange:e.onChange,error:o.email}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={addContact:!1,name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(N.a)(g.a.mark(function e(t,n){var r,c,o,l,s,i,m;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name \xe9 obrigat\xf3rio"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return a.setState({errors:{phone:"Telefone \xe9 obrigat\xf3rio"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return a.setState({errors:{email:"Email \xe9 obrigat\xf3rio"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,x.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(g.a.mark(function e(){var t,a,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(D,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header",style:{cursor:"pointer"},onClick:function(){return e.setState({addContact:!e.state.addContact})}},r.a.createElement("i",{className:"fas fa-address-card",style:{cursor:"pointer",float:"left",color:"#076BFF"}})," ","Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(F,{label:"Nome",name:"name",placeholder:"Insira o nome... ",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(F,{label:"Telefone",name:"phone",placeholder:"Insira o Telefone... ",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement(F,{label:"Email",name:"email",type:"email",placeholder:"Insira o email... ",value:n,onChange:e.onChange,error:o.email}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(N.a)(g.a.mark(function e(t,a){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(D,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(f.a,{to:"/contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-user-edit",style:{cursor:"pointer",float:"right",color:"blue",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null))})}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).deleteContact=function(e){var t=a.state.contacts.filter(function(t){return t.id!==e});a.setState({contacts:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-primary"},"Contact")," List"),t.map(function(e){return r.a.createElement(L,{key:e.id,contact:e})}))})}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),W=(a(58),a(60),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,{branding:"Meus Contatos"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:U}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:M}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(h.a,{exact:!0,path:"/about",component:E}),r.a.createElement(h.a,{exact:!0,path:"/test",component:J}),r.a.createElement(h.a,{component:y}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.84328826.chunk.js.map