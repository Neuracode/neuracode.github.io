(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{9077:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/overview",function(){return s(8779)}])},8779:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return y}});var n=s(5893),t=s(7294),a=s(4184),o=s.n(a),i=s(6792);const c=t.forwardRef((({bsPrefix:e,className:r,as:s="div",...t},a)=>{const c=(0,i.vE)(e,"row"),l=(0,i.pi)(),h=`${c}-cols`,d=[];return l.forEach((e=>{const r=t[e];let s;delete t[e],null!=r&&"object"===typeof r?({cols:s}=r):s=r;const n="xs"!==e?`-${e}`:"";null!=s&&d.push(`${h}${n}-${s}`)})),(0,n.jsx)(s,{ref:a,...t,className:o()(r,c,...d)})}));c.displayName="Row";var l=c;const h=t.forwardRef(((e,r)=>{const[{className:s,...t},{as:a="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:r,className:s,...n}){r=(0,i.vE)(r,"col");const t=(0,i.pi)(),a=[],c=[];return t.forEach((e=>{const s=n[e];let t,o,i;delete n[e],"object"===typeof s&&null!=s?({span:t,offset:o,order:i}=s):t=s;const l="xs"!==e?`-${e}`:"";t&&a.push(!0===t?`${r}${l}`:`${r}${l}-${t}`),null!=i&&c.push(`order${l}-${i}`),null!=o&&c.push(`offset${l}-${o}`)})),[{...n,className:o()(s,...a,...c)},{as:e,bsPrefix:r,spans:a}]}(e);return(0,n.jsx)(a,{...t,ref:r,className:o()(s,!l.length&&c)})}));h.displayName="Col";var d=h,u=s(8182),m=s(682),p=s(6996),f=s.n(p),g=s(1664),y=function(){var e=function(){return(0,n.jsx)(l,{lg:3,md:2,xs:1,className:"g-5 justify-content-center",children:r.map((function(e,r){return(0,n.jsx)(d,{children:(0,n.jsx)(g.default,{href:e.href,passHref:!0,children:(0,n.jsxs)(u.Z,{className:f().courseCard,children:[(0,n.jsx)(u.Z.Img,{variant:"top",src:e.image,className:f().courseImg}),(0,n.jsxs)(u.Z.Body,{children:[(0,n.jsx)(u.Z.Title,{className:f().name,children:e.name}),(0,n.jsxs)(u.Z.Text,{children:[e.description,(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"Prerequisites:"})," ",e.prerequisites.join(", ")||"None"]})]})]})})},r)}))})},r=[{name:"Intro to Machine Learning",description:"Learn the basics of machine learning and theoretical knowledge on the topic. This course is meant as a primer for the other courses, which all rely on the concepts taught in this course.",image:"https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/512/000000/external-ai-digital-business-photo3ideastudio-gradient-photo3ideastudio.png",href:"/courses/intro-to-machine-learning",prerequisites:[]},{name:"Intro to Python",description:"Learn to use the general-purpose programming knowledge, which has a huge machine learning community to support it. Python is the most popular language for machine learning and this teaches you the basics you need for the other courses, which all require Python.",image:"https://img.icons8.com/color/480/000000/python--v2.png",href:"/courses/intro-to-python",prerequisites:[]},{name:"Intermediate Python",description:"After the basics, intermediate Python is the next step in the machine learning journey. This course teaches you the more advanced concepts, which you will continue to use in other courses and your machine learning journey in general.",image:"https://img.icons8.com/color/480/000000/python--v2.png",href:"/courses/intermediate-python",prerequisites:["Basic Python"]},{name:"Intro to Scikit-Learn",description:"Learn how to use Scikit-Learn, a machine learning library for Python that includes a lot of useful machine learning algorithms and functions. It is not too complex and is a great way to get started with machine learning.",image:"https://avatars2.githubusercontent.com/u/365630?v=3&s=400",href:"/courses/intro-to-scikit-learn",prerequisites:["Basic Python","Intermediate Python","AI Concepts"]},{name:"Intro to Keras",description:"Learn how to use Keras, a machine learning library for Python that is commonly used for artificial neural networks (ANNs) and deep learning. It is a high-level API that can be used along with Tensorflow.",image:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",href:"/courses/intro-to-keras",prerequisites:["Basic Python","Intermediate Python","AI Concepts"]},{name:"Intro to Tensorflow",description:"Learn how to use Tensorflow, a machine learning library that is primarily used for deep learning. It is used along with Keras and it mainly features a low-level API.",image:"https://img.icons8.com/color/480/000000/tensorflow.png",href:"/courses/intro-to-tensorflow",prerequisites:["Basic Python","Intermediate Python","AI Concepts","Keras"]}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(m.Z,{className:"mb-5",children:[(0,n.jsx)("h1",{className:f().title,children:"Overview"}),(0,n.jsx)("main",{className:"mt-5",children:(0,n.jsx)(e,{})})]})})}},6996:function(e){e.exports={courseCard:"Courses_courseCard__Um7jG",courseImg:"Courses_courseImg__g9kc_"}},8182:function(e,r,s){"use strict";s.d(r,{Z:function(){return I}});var n=s(4184),t=s.n(n),a=s(7294),o=s(6792),i=s(6611),c=s(9602),l=s(5893);const h=a.forwardRef((({bsPrefix:e,className:r,variant:s,as:n="img",...a},i)=>{const c=(0,o.vE)(e,"card-img");return(0,l.jsx)(n,{ref:i,className:t()(s?`${c}-${s}`:c,r),...a})}));h.displayName="CardImg";var d=h,u=s(9059);const m=a.forwardRef((({bsPrefix:e,className:r,as:s="div",...n},i)=>{const c=(0,o.vE)(e,"card-header"),h=(0,a.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,l.jsx)(u.Z.Provider,{value:h,children:(0,l.jsx)(s,{ref:i,...n,className:t()(r,c)})})}));m.displayName="CardHeader";var p=m;const f=(0,c.Z)("h5"),g=(0,c.Z)("h6"),y=(0,i.Z)("card-body"),x=(0,i.Z)("card-title",{Component:f}),w=(0,i.Z)("card-subtitle",{Component:g}),v=(0,i.Z)("card-link",{Component:"a"}),b=(0,i.Z)("card-text",{Component:"p"}),N=(0,i.Z)("card-footer"),j=(0,i.Z)("card-img-overlay"),P=a.forwardRef((({bsPrefix:e,className:r,bg:s,text:n,border:a,body:i,children:c,as:h="div",...d},u)=>{const m=(0,o.vE)(e,"card");return(0,l.jsx)(h,{ref:u,...d,className:t()(r,m,s&&`bg-${s}`,n&&`text-${n}`,a&&`border-${a}`),children:i?(0,l.jsx)(y,{children:c}):c})}));P.displayName="Card",P.defaultProps={body:!1};var I=Object.assign(P,{Img:d,Title:x,Subtitle:w,Body:y,Link:v,Text:b,Header:p,Footer:N,ImgOverlay:j})}},function(e){e.O(0,[774,888,179],(function(){return r=9077,e(e.s=r);var r}));var r=e.O();_N_E=r}]);