"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[47],{3047:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(4165),s=n(5861),i=n(9439),o=n(2791),a=n(1413),l=n(1243),c=n(7689),u=n(388),d=n(5048),p=n(184),h={border:"1px solid",width:"97px",margin:"5px 1px 0 1px",borderRadius:"5px",cursor:"pointer",color:"red",height:"35px"},x=function(e){var t=(0,d.I0)(),n=(0,c.s0)(),i=e.item,o=i.id,x=i.userId,f=i.title,m=i.body,y=i.userEmail;function v(){return(v=(0,s.Z)((0,r.Z)().mark((function t(){var n,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={headers:{authorization:localStorage.getItem("jwtTokenW")}},s={id:o},t.next=5,l.Z.delete("http://16.171.192.21/api/v1/post",(0,a.Z)((0,a.Z)({},n),{},{data:s}));case 5:e.setRelode((function(e){return e+1})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),alert("This post doesn't belong to you. You can only delete your own posts!!");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return(0,p.jsxs)("div",{style:{margin:"5px",border:"1px solid black",borderRadius:"6px"},children:[(0,p.jsxs)("div",{className:"buttonConatiner",children:[(0,p.jsx)("button",{style:h,onClick:function(){t((0,u.C)({id:o,userId:x,title:f,body:m,userEmail:y})),n("../fullpost")},children:"Edit"}),(0,p.jsx)("button",{style:h,onClick:function(){return v.apply(this,arguments)},children:"Delete"}),(0,p.jsx)("button",{style:h,onClick:function(){t((0,u.C)({id:o,userId:x,title:f,body:m,userEmail:y})),n("../fullpost")},children:"Comments"})]}),(0,p.jsxs)("div",{style:{},children:[(0,p.jsxs)("p",{children:["id: ",o]}),(0,p.jsxs)("p",{children:["title: ",f]}),(0,p.jsxs)("p",{children:["body: ",m]}),(0,p.jsxs)("p",{children:["userEmail: ",y]})]})]})},f=o.memo(x),m=function(e){var t=(0,o.useState)([]),n=(0,i.Z)(t,2),a=n[0],c=n[1],u=(0,o.useState)(1),d=(0,i.Z)(u,2),h=d[0],x=d[1];function m(){return(m=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{authorization:localStorage.getItem("jwtTokenW")}},e.next=4,l.Z.get("http://16.171.192.21/api/v1/post",t);case 4:n=e.sent,c(n.data.posts),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error is comming");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[h,e.refresh]),(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"dataContainer",style:{display:"flex",flexWrap:"wrap"},children:a.map((function(e,t){return(0,p.jsx)("div",{children:(0,p.jsx)(f,{item:e,setRelode:x})},.252*t)}))})})}}}]);
//# sourceMappingURL=47.a2d9855b.chunk.js.map