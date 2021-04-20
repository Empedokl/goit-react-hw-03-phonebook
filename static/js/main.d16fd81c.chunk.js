(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{22:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var a,c,o,r,i,s,u,l=e(0),b=e.n(l),d=e(12),h=e.n(d),j=(e(22),e(17)),p=e(4),m=e(5),f=e(7),O=e(6),x=e(2),v=e(3),g=v.a.ul(a||(a=Object(x.a)(["\n  padding: 0;\n"]))),y=v.a.li(c||(c=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),C=e(1),k=function(t){Object(f.a)(e,t);var n=Object(O.a)(e);function e(){return Object(p.a)(this,e),n.apply(this,arguments)}return Object(m.a)(e,[{key:"render",value:function(){var t=this.props,n=t.contacts,e=t.onDeleteContact;return Object(C.jsx)(g,{children:n.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(C.jsxs)(y,{children:[Object(C.jsxs)("span",{children:[a,":"]}),Object(C.jsx)("span",{children:c}),Object(C.jsx)("button",{type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})}}]),e}(l.Component),S=e(16),w=e(28),D=v.a.form(o||(o=Object(x.a)(["\n  margin: 0 auto;\n"]))),I=v.a.label(r||(r=Object(x.a)(["\n  display: block;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),N=v.a.input(i||(i=Object(x.a)(["\n  display: block;\n  width: 200px;\n  font-size: 13px;\n  padding: 6px 0 4px 10px;\n  border: 1px solid #ccc;\n  background: #f6f6f6;\n\n  &:focus {\n    outline: none;\n  }\n"]))),A=v.a.button(s||(s=Object(x.a)(["\n  width: 90px;\n  height: 28px;\n  border: 1px solid #ccc;\n  background: #fff;\n  color: #666;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:active {\n    margin-top: 1px;\n    margin-bottom: -1px;\n    zoom: 1;\n  }\n"]))),F=function(t){Object(f.a)(e,t);var n=Object(O.a)(e);function e(){var t;Object(p.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={name:"",number:""},t.handleInput=function(n){var e=n.target,a=e.name,c=e.value;t.setState(Object(S.a)({},a,c))},t.handleSubmit=function(n){n.preventDefault();var e=t.state,a=e.name,c=e.number;t.props.onAddContact({id:Object(w.a)(),name:a,number:c}),t.setState({name:"",number:""})},t}return Object(m.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(C.jsxs)(D,{onSubmit:this.handleSubmit,children:[Object(C.jsxs)(I,{children:["Name",Object(C.jsx)(N,{type:"text",value:n,name:"name",onChange:this.handleInput,placeholder:"Name*",required:!0})]}),Object(C.jsxs)(I,{children:["Number",Object(C.jsx)(N,{type:"number",value:e,name:"number",onChange:this.handleInput,placeholder:"111-11-11*",required:!0})]}),Object(C.jsx)(A,{type:"submit",children:"Add contact"})]})}}]),e}(l.Component),z=v.a.label(u||(u=Object(x.a)(["\n  font-size: 18px;\n"])));var J=function(t){var n=t.name,e=t.onChangeFilter;return Object(C.jsxs)(z,{children:["Find contacts by name",Object(C.jsx)("input",{type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})},B=function(t){Object(f.a)(e,t);var n=Object(O.a)(e);function e(){var t;Object(p.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(n){t.setState((function(t){if(!t.contacts.some((function(t){return t.name===n.name})))return{contacts:[].concat(Object(j.a)(t.contacts),[n])};alert("".concat(n.name," is already in contacts!"))}))},t.handleButtonDelete=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.handleFilter=function(n){t.setState({filter:n})},t.getVisibleContacts=function(){var n=t.state,e=n.contacts,a=n.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),n=JSON.parse(t);n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,n=t.contacts,e=t.filter,a=this.getVisibleContacts();return Object(C.jsxs)("section",{className:"section",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(F,{onAddContact:this.addContact}),Object(C.jsx)("h2",{children:"Contacts"}),n.length>0&&Object(C.jsx)(J,{name:e,onChangeFilter:this.handleFilter}),Object(C.jsx)(k,{contacts:a,onDeleteContact:this.handleButtonDelete})]})}}]),e}(l.Component);h.a.render(Object(C.jsx)(b.a.StrictMode,{children:Object(C.jsx)(B,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.d16fd81c.chunk.js.map