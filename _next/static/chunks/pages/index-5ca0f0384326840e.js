(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8910)}])},3779:function(e,n,t){"use strict";var a=t(5893),s=(t(7294),t(8768)),r=t.n(s);n.Z=function(e){var n=e.text;return(0,a.jsxs)("button",{type:"button",className:"".concat(r().btn," ").concat(r().cube," mt-4"),children:[(0,a.jsx)("div",{className:r().bgTop,children:(0,a.jsx)("div",{className:r().bgInner})}),(0,a.jsx)("div",{className:r().bgRight,children:(0,a.jsx)("div",{className:r().bgInner})}),(0,a.jsx)("div",{className:r().bg,children:(0,a.jsx)("div",{className:r().bgInner})}),(0,a.jsx)("div",{className:r().btnText,children:n})]})}},8910:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var a=t(5893),s=t(9008),r=t(1664),o=t(7160),i=t.n(o),c=t(4184),l=t.n(c),d=t(7294),h=t(5446),u=t(6792),m=t(6518);function x(e,n){return Array.isArray(e)?e.includes(n):e===n}const g=d.createContext({});g.displayName="AccordionContext";var p=g;const f=d.forwardRef((({as:e="div",bsPrefix:n,className:t,children:s,eventKey:r,...o},i)=>{const{activeEventKey:c}=(0,d.useContext)(p);return n=(0,u.vE)(n,"accordion-collapse"),(0,a.jsx)(m.Z,{ref:i,in:x(c,r),...o,className:l()(t,n),children:(0,a.jsx)(e,{children:d.Children.only(s)})})}));f.displayName="AccordionCollapse";var j=f;const v=d.createContext({eventKey:""});v.displayName="AccordionItemContext";var y=v;const w=d.forwardRef((({as:e="div",bsPrefix:n,className:t,...s},r)=>{n=(0,u.vE)(n,"accordion-body");const{eventKey:o}=(0,d.useContext)(y);return(0,a.jsx)(j,{eventKey:o,children:(0,a.jsx)(e,{ref:r,...s,className:l()(t,n)})})}));w.displayName="AccordionBody";var N=w;const b=d.forwardRef((({as:e="button",bsPrefix:n,className:t,onClick:s,...r},o)=>{n=(0,u.vE)(n,"accordion-button");const{eventKey:i}=(0,d.useContext)(y),c=function(e,n){const{activeEventKey:t,onSelect:a,alwaysOpen:s}=(0,d.useContext)(p);return r=>{let o=e===t?null:e;s&&(o=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==a||a(o,r),null==n||n(r)}}(i,s),{activeEventKey:h}=(0,d.useContext)(p);return"button"===e&&(r.type="button"),(0,a.jsx)(e,{ref:o,onClick:c,...r,"aria-expanded":i===h,className:l()(t,n,!x(h,i)&&"collapsed")})}));b.displayName="AccordionButton";var _=b;const k=d.forwardRef((({as:e="h2",bsPrefix:n,className:t,children:s,onClick:r,...o},i)=>(n=(0,u.vE)(n,"accordion-header"),(0,a.jsx)(e,{ref:i,...o,className:l()(t,n),children:(0,a.jsx)(_,{onClick:r,children:s})}))));k.displayName="AccordionHeader";var C=k;const T=d.forwardRef((({as:e="div",bsPrefix:n,className:t,eventKey:s,...r},o)=>{n=(0,u.vE)(n,"accordion-item");const i=(0,d.useMemo)((()=>({eventKey:s})),[s]);return(0,a.jsx)(y.Provider,{value:i,children:(0,a.jsx)(e,{ref:o,...r,className:l()(t,n)})})}));T.displayName="AccordionItem";var I=T;const Z=d.forwardRef(((e,n)=>{const{as:t="div",activeKey:s,bsPrefix:r,className:o,onSelect:i,flush:c,alwaysOpen:m,...x}=(0,h.Ch)(e,{activeKey:"onSelect"}),g=(0,u.vE)(r,"accordion"),f=(0,d.useMemo)((()=>({activeEventKey:s,onSelect:i,alwaysOpen:m})),[s,i,m]);return(0,a.jsx)(p.Provider,{value:f,children:(0,a.jsx)(t,{ref:n,...x,className:l()(o,g,c&&`${g}-flush`)})})}));Z.displayName="Accordion";var H=Object.assign(Z,{Button:_,Collapse:j,Item:I,Header:C,Body:N}),B=t(682),A=t(8182),E=t(5675),P=t(3779),z=function(){return(0,a.jsxs)("div",{className:i().container,children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:"Neuracode"}),(0,a.jsx)("meta",{name:"description",content:"Neuracode"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"title",content:"Neuracode"}),(0,a.jsx)("meta",{name:"description",content:"Neuracode is a 501(c)(3) student-run nonprofit organization that educates students around the world on the topic of machine learning. Neuracode is on a mission to make sure that all students have the opportunity to learn about machine learning, including low-income or underrepresented groups. Neuracode helps students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. Neuracode is primarily looking for students who are in middle school or high school. The website is Neuracode.org. We provide free coding courses on machine learning and artificial intelligence for students of all ages through elementary school, middle school, or high school. Additionally, we provide free tutoring for students with Scratch, Python, Scikit-Learn, Keras, TensorFlow, and more (Java, JavaScript, C++). Students can be in any grade, including first grade, second grade, third grade, fourth grade, fifth grade, sixth grade, seventh grade, eighth grade, ninth grade, tenth grade, eleventh grade, or twelfth grade. We offer free machine learning classes and free artificial intelligence classes that take place over Zoom. These AI Classes are taught by high school students who volunteer in the summer, allowing Neuracode to run classes from June to August. Our tutors are able to teach courses such as Block Coding with Scratch, Intro to Machine Learning, Intro to Python, Intermediate Python, Intermediate Keras, and Intermediate TensorFlow."}),(0,a.jsx)("meta",{name:"keywords",content:"neuracode, nonprofit, non-profit, 501(c)(3), 501 c 3, 501c3, neura code, educate, education, low-income, low income, underrepresented students, student led, student-led, machine learning, high school, programming, coding, computer science, cs, intro to machine learning, intro to python, intermediate python, Intermediate Scikit-Learn, Intermediate Keras, Intermediate TensorFlow, scikit-learn, keras, tensorflow, GitHub, LinkedIn, Discord, Email, python, ai, ml, ai enthusiast, artificial intelligence, neural networks, azam ahmed, united states, neuracode global, new jersey, nj, neuracode.org, neural, ann, cnn, rnn, artificial neural network, convolutional neural network, recurrent neural network, nn, supervised learning, unsupervised learning, reinforcement learning, regression, classification, decision trees, random forests, gan, generative, generative adversarial networks, deep learning, azam, ahmed, azam ahmed president, machine learning classes, machine learning tutoring, coding classes, programming classes"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("meta",{name:"language",content:"English"}),(0,a.jsx)("meta",{name:"author",content:"Azam Ahmed"}),(0,a.jsx)("meta",{name:"subject",content:"Neuracode: Teaching Machine Learning"}),(0,a.jsx)("meta",{name:"copyright",content:"Azam Ahmed"}),(0,a.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,a.jsx)("meta",{name:"classification",content:"Neuracode: Teaching Machine Learning"}),(0,a.jsx)("meta",{name:"distribution",content:"Global"}),(0,a.jsx)("meta",{name:"rating",content:"General"}),(0,a.jsx)("meta",{name:"owner",content:"Azam Ahmed"}),(0,a.jsx)("meta",{name:"url",content:"https://neuracode.org"}),(0,a.jsx)("meta",{name:"identifier-URL",content:"https://neuracode.org"}),(0,a.jsx)("meta",{name:"coverage",content:"Worldwide"}),(0,a.jsx)("meta",{property:"og:title",content:"Neuracode"}),(0,a.jsx)("meta",{property:"og:description",content:"Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. Neuracode is on a mission to make sure that all students have the opportunity to learn about machine learning, including low-income or underrepresented groups. Neuracode helps students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. Neuracode is primarily looking for students who are in middle school or high school. The website is Neuracode.org."}),(0,a.jsx)("meta",{property:"og:image",content:"https://neuracode.org/android-chrome-192x192.png"}),(0,a.jsx)("meta",{property:"og:url",content:"https://neuracode.org"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{name:"twitter:site",content:"neuracode"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Neuracode"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Neuracode is a nonprofit organization that educates students around the world on the topic of machine learning. Neuracode is on a mission to make sure that all students have the opportunity to learn about machine learning, including low-income or underrepresented groups. Neuracode helps students of all backgrounds learn about machine learning, and we are always looking for new students to join our team. Neuracode is primarily looking for students who are in middle school or high school. The website is Neuracode.org."}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://neuracode.org/android-chrome-192x192.png"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://neuracode.org"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,a.jsxs)(B.Z,{className:i().main,children:[(0,a.jsxs)("section",{className:i().sectionContainer,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:i().title,"data-aos":"flip-up","data-aos-once":"true",children:"Machine learning is for everyone!"}),(0,a.jsx)("h5",{className:i().description,"data-aos":"slide-right","data-aos-once":"true","data-aos-delay":"100",children:"Neuracode is a nonprofit organization that is on a mission to provide everyone an equal opportunity to learn machine learning. We support students from a variety of backgrounds, including low-income or underrepresented students."}),(0,a.jsx)(r.default,{href:"/courses",passHref:!0,children:(0,a.jsx)("div",{className:i().coursesBtnWrapper,"data-aos":"slide-right","data-aos-once":"true","data-aos-delay":"200",children:(0,a.jsx)("div",{className:i().viewCoursesBtn,children:(0,a.jsx)(P.Z,{text:"View Courses"})})})})]}),(0,a.jsx)("div",{className:"d-flex align-items-center justify-content-center ".concat(i().aiImage),"data-aos":"zoom-in-right","data-aos-once":"true",children:(0,a.jsx)(E.default,{src:"/illustrations/artificial_intelligence.svg",alt:"artificial intelligence",width:"550",height:"450"})})]}),(0,a.jsxs)("section",{className:i().sectionContainer2,children:[(0,a.jsx)(r.default,{href:"/courses",passHref:!0,children:(0,a.jsx)("div",{"data-aos-once":"true",children:(0,a.jsxs)(A.Z,{style:{width:"18rem"},className:"".concat(i().infoCard," mt-4 mb-5"),children:[(0,a.jsx)(A.Z.Img,{variant:"top",src:"/home_icons/education.png",className:i().smallIcon}),(0,a.jsxs)(A.Z.Body,{children:[(0,a.jsx)(A.Z.Title,{children:"Learn Machine Learning"}),(0,a.jsx)(A.Z.Text,{children:"With our sophisticated curriculum, you will easily progress through our courses with a firm grasp of the knowledge."})]})]})})}),(0,a.jsx)(r.default,{href:"/join",passHref:!0,children:(0,a.jsx)("div",{"data-aos-once":"true",children:(0,a.jsxs)(A.Z,{style:{width:"18rem"},className:"".concat(i().infoCard," mt-4 mb-5"),children:[(0,a.jsx)(A.Z.Img,{variant:"top",src:"/home_icons/leadership.png",className:i().smallIcon}),(0,a.jsxs)(A.Z.Body,{children:[(0,a.jsx)(A.Z.Title,{children:"Volunteer Opportunity"}),(0,a.jsx)(A.Z.Text,{children:"By volunteering for Neuracode, you will gain tutoring or leadership experience, and you will earn volunteer hours."})]})]})})}),(0,a.jsx)(r.default,{href:"/events/neurahacks",passHref:!0,children:(0,a.jsx)("div",{"data-aos-once":"true",children:(0,a.jsxs)(A.Z,{style:{width:"18rem"},className:"".concat(i().infoCard," mt-4 mb-5"),children:[(0,a.jsx)(A.Z.Img,{variant:"top",src:"/home_icons/coding.png",className:i().smallIcon}),(0,a.jsxs)(A.Z.Body,{children:[(0,a.jsx)(A.Z.Title,{children:"Competitive Hackathons"}),(0,a.jsx)(A.Z.Text,{children:"Using the machine learning skills you obtained from our courses or prior knowledge, create a cool project and earn rewards."})]})]})})}),(0,a.jsx)(r.default,{href:"/blog/latest-blogs",passHref:!0,children:(0,a.jsx)("div",{"data-aos-once":"true",children:(0,a.jsxs)(A.Z,{style:{width:"18rem"},className:"".concat(i().infoCard," mt-4 mb-5"),children:[(0,a.jsx)(A.Z.Img,{variant:"top",src:"/home_icons/robot.png",className:i().smallIcon}),(0,a.jsxs)(A.Z.Body,{children:[(0,a.jsx)(A.Z.Title,{children:"Project Blog"}),(0,a.jsxs)(A.Z.Text,{children:["Further improve your ML skills by reading through our blogs on a variety of machine learning projects."," "]})]})]})})})]}),(0,a.jsxs)("section",{className:"".concat(i().sectionContainer3," mt-5 w-75"),children:[(0,a.jsx)("h2",{className:i().sectionTitle,children:"Register for Classes"}),(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-around align-items-center flex-wrap",children:[(0,a.jsx)(E.default,{src:"/illustrations/learning.svg",alt:"learning",width:"550",height:"450","data-aos":"zoom-in-right","data-aos-once":"true"}),(0,a.jsxs)("div",{style:{fontSize:"1.25rem"},"data-aos":"zoom-in-left","data-aos-once":"true",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Rigorous Curriculum"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Plethora of Resources"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Virtual: Learn Anywhere"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Beginner to Advanced"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," ","Knowledgeable Tutors"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Discord Community Support"]}),(0,a.jsx)("a",{href:"https://forms.gle/y4jfEVaoNM2HrzRe8",target:"_blank",rel:"noreferrer",className:"text-decoration-none",children:(0,a.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center",children:(0,a.jsx)(P.Z,{text:"Enroll Now!"})})})]})]})]}),(0,a.jsxs)("section",{className:"".concat(i().sectionContainer4," mt-5 w-75"),children:[(0,a.jsx)("h2",{className:i().sectionTitle,children:"Join the Mission"}),(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-around align-items-center flex-wrap",children:[(0,a.jsxs)("div",{style:{fontSize:"1.25rem"},"data-aos":"zoom-in-right","data-aos-once":"true",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Tutoring or Leadership Experience"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," ","Community Service Hours"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Earn President's Volunteer Service Award"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Tutors gain knowledge through teaching"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:i().check,children:"\u2713"})," Fun environment"]}),(0,a.jsx)("a",{href:"https://forms.gle/7dYev7Agaj36qsHe8",target:"_blank",rel:"noreferrer",className:"text-decoration-none",children:(0,a.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center",children:(0,a.jsx)(P.Z,{text:"Apply Now!"})})})]}),(0,a.jsx)(E.default,{src:"/illustrations/teaching.svg",alt:"teaching",width:"550",height:"450","data-aos":"zoom-in-left","data-aos-once":"true"})]})]}),(0,a.jsxs)("section",{className:"mt-5 w-75",children:[(0,a.jsx)("h2",{className:i().sectionTitle,children:"Join the Discord"}),(0,a.jsx)("div",{className:"d-flex flex-row justify-content-around align-items-center flex-wrap",children:(0,a.jsx)("iframe",{src:"https://discord.com/widget?id=941049795949264969&theme=dark",width:"350",height:"500",allowTransparency:!0,frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})})]}),(0,a.jsxs)("section",{className:"".concat(i().sectionContainer5," mt-5"),children:[(0,a.jsx)("h2",{className:i().sectionTitle,children:"Frequently Asked Questions"}),(0,a.jsx)("div",{className:"mt-4 mb-5","data-aos":"flip-up","data-aos-once":"true",children:(0,a.jsxs)(H,{children:[(0,a.jsxs)(H.Item,{eventKey:"0",children:[(0,a.jsx)(H.Header,{children:"Are all courses free?"}),(0,a.jsx)(H.Body,{children:"Yes! All courses are free. Our mission is to help students all around the world and expose them to the field machine learning."})]}),(0,a.jsxs)(H.Item,{eventKey:"1",children:[(0,a.jsx)(H.Header,{children:"Is Neuracode a nonprofit?"}),(0,a.jsx)(H.Body,{children:"Yes, we are a student-run 501(c)(3) nonprofit organization."})]}),(0,a.jsxs)(H.Item,{eventKey:"2",children:[(0,a.jsx)(H.Header,{children:"Will volunteers earn volunteer hours?"}),(0,a.jsx)(H.Body,{children:"Yes. Tutors will earn the number of volunteer hours they stay each class and an additional volunteer hour for getting used to the new system. Every presentation created by a tutor will earn 4 volunteer hours. The number of volunteer hours earned by students in other positions will be calculated based on the position they are in."})]}),(0,a.jsxs)(H.Item,{eventKey:"3",children:[(0,a.jsx)(H.Header,{children:"How will I attend the course?"}),(0,a.jsx)(H.Body,{children:"Classes will take place online over Zoom, and the link to the meeting will be sent to you via email when you sign up for the course."})]})]})})]})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",title:"Home_title__T09hD",sectionTitle:"Home_sectionTitle__GgIAn",sectionContainer:"Home_sectionContainer__IVbIU",description:"Home_description__41Owk",sectionContainer2:"Home_sectionContainer2__qp_ls",sectionContainer5:"Home_sectionContainer5__w_bTz",infoCard:"Home_infoCard__HP9ii",smallIcon:"Home_smallIcon__1musk",check:"Home_check__G1jDm",coursesBtnWrapper:"Home_coursesBtnWrapper__cDxd0",aiImage:"Home_aiImage__8MpID",viewCoursesBtn:"Home_viewCoursesBtn__a_78n"}},8768:function(e){e.exports={btn:"ThreeDButton_btn__sBxXr",cube:"ThreeDButton_cube__3mSYY",bgTop:"ThreeDButton_bgTop__lRjE_",bgInner:"ThreeDButton_bgInner__4ggAP",bg:"ThreeDButton_bg__veJ6P",bgRight:"ThreeDButton_bgRight__W_Z7K",btnText:"ThreeDButton_btnText__Z0mwU",bounce:"ThreeDButton_bounce__iV22P"}},9008:function(e,n,t){e.exports=t(3121)},8182:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var a=t(4184),s=t.n(a),r=t(7294),o=t(6792),i=t(6611),c=t(9602),l=t(5893);const d=r.forwardRef((({bsPrefix:e,className:n,variant:t,as:a="img",...r},i)=>{const c=(0,o.vE)(e,"card-img");return(0,l.jsx)(a,{ref:i,className:s()(t?`${c}-${t}`:c,n),...r})}));d.displayName="CardImg";var h=d,u=t(9059);const m=r.forwardRef((({bsPrefix:e,className:n,as:t="div",...a},i)=>{const c=(0,o.vE)(e,"card-header"),d=(0,r.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,l.jsx)(u.Z.Provider,{value:d,children:(0,l.jsx)(t,{ref:i,...a,className:s()(n,c)})})}));m.displayName="CardHeader";var x=m;const g=(0,c.Z)("h5"),p=(0,c.Z)("h6"),f=(0,i.Z)("card-body"),j=(0,i.Z)("card-title",{Component:g}),v=(0,i.Z)("card-subtitle",{Component:p}),y=(0,i.Z)("card-link",{Component:"a"}),w=(0,i.Z)("card-text",{Component:"p"}),N=(0,i.Z)("card-footer"),b=(0,i.Z)("card-img-overlay"),_=r.forwardRef((({bsPrefix:e,className:n,bg:t,text:a,border:r,body:i,children:c,as:d="div",...h},u)=>{const m=(0,o.vE)(e,"card");return(0,l.jsx)(d,{ref:u,...h,className:s()(n,m,t&&`bg-${t}`,a&&`text-${a}`,r&&`border-${r}`),children:i?(0,l.jsx)(f,{children:c}):c})}));_.displayName="Card",_.defaultProps={body:!1};var k=Object.assign(_,{Img:h,Title:j,Subtitle:v,Body:f,Link:y,Text:w,Header:x,Footer:N,ImgOverlay:b})}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);