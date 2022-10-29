import{_ as m,o as t,c as a,a as e,r as v,F as p,b as u,t as d,d as l,n as _,e as r}from"./index.364f3834.js";const g={},f={width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w=e("path",{d:"M22.7254 0.207275H2.27383C1.29414 0.207275 0.501953 0.980713 0.501953 1.93696V22.4729C0.501953 23.4291 1.29414 24.2073 2.27383 24.2073H22.7254C23.7051 24.2073 24.502 23.4292 24.502 22.4776V1.93696C24.502 0.980713 23.7051 0.207275 22.7254 0.207275ZM7.62227 20.6588H4.05977V9.20259H7.62227V20.6588ZM5.84102 7.64165C4.69727 7.64165 3.77383 6.71821 3.77383 5.57915C3.77383 4.44009 4.69727 3.51665 5.84102 3.51665C6.98008 3.51665 7.90352 4.44009 7.90352 5.57915C7.90352 6.71353 6.98008 7.64165 5.84102 7.64165ZM20.9535 20.6588H17.3957V15.0901C17.3957 13.7635 17.3723 12.0526 15.5441 12.0526C13.6926 12.0526 13.4113 13.501 13.4113 14.9963V20.6588H9.8582V9.20259H13.2707V10.7682H13.3176C13.791 9.86821 14.9535 8.91665 16.6832 8.91665C20.2879 8.91665 20.9535 11.2885 20.9535 14.3729V20.6588Z",fill:"#9CA3AF"},null,-1),b=[w];function y(n,s){return t(),a("svg",f,b)}const C=m(g,[["render",y]]),x={class:"section-team"},k={class:"container"},H=e("h1",{class:"section-title"},"Meet our team",-1),V=e("p",null," Proven leadership in transportation, aviation technology, and sustainability ",-1),$={class:"our-team"},A=["src"],I={class:"name"},M={class:"title"},B=["href"],T=e("div",{class:"join-team-card"},[e("h3",{class:"title"},"Want to Join The Imperium Jets Team?"),e("p",null," If you have what it takes to join the private aviation field, take the next step towards your new career. "),e("a",{class:"link",href:"#"},"support@bytheseat.com")],-1),J={__name:"TeamSection",setup(n){const s=v([{name:"Lidor Revah",title:"Co-founder & CEO",image:"lidor-revah.png",url:"lidor-revah.png"},{name:"Ron Bentata",title:"Co-founder & CTO",image:"ron-bentata.png",url:""},{name:"Assaf Alimari",title:"Head of Sales",image:"assaf-alimari.png",url:""},{name:"Gil Barcuh",title:"Head of Marketing",image:"gil-barcuh.png",url:""},{name:"Matias Braier",title:"Head of Operations",image:"matias-braier.png",url:""}]);return(c,o)=>(t(),a("section",x,[e("div",k,[H,V,e("div",$,[(t(!0),a(p,null,u(s.value,(i,h)=>(t(),a("div",{key:h,class:"team-card"},[e("img",{src:"./images/our-team/"+i.image,alt:"#"},null,8,A),e("h5",I,d(i.name),1),e("p",M,d(i.title),1),e("a",{href:i.url,target:"_blank",nofollow:"",noindex:""},[l(C)],8,B)]))),128))]),T])]))}},O="/demo/imperium-jets/images/logos/logo-white.svg",j={class:"section-about-hero"},N={class:"container"},S=r('<h1 class="section-title">About Imperium</h1><p> Imperium Jets is a technology platform in private aviation and travel that enables operators to fill empty seats and boost revenue through distribution partner networks. Through a combination of software, service and innovation, Imperium Jets manages every aspect of private flight seat sales with leading travel partnerships, simple code implementation and APIs. Imperium Jets also provides lead generation, as well as branding and private-label services. As a DOT-certified company with an extensive knowledge of private aviation regulations, Imperium Jets is well-equipped to save operators time and expense, as well as provide top-class efficiency and safety for customers. </p><a href="/#book-a-demo" class="join-us-link text-white"> Join Us<i class="icon icon-plane-white"></i></a><p class="airport-text"><i class="icon icon-star"></i> Privte jet airport </p>',4),Z={class:"flight-path"},F=r('<div class="from-to"><div>Nashville, TN</div><i class="icon-double-arrow"></i><div>Atlanta, GA</div></div><div class="distance">217 mil</div><div class="flight-by imperium"><div class="flight"><div><img src="'+O+'" alt="logo"></div><div class="time">0:25 min</div></div><div class="progress-bar"><span class="blue" style="width:15%;"></span></div></div><div class="flight-by commercial"><div class="flight"><div><i class="icon icon-plane-up"></i> Commercial flight</div><div class="time">1:07 hr</div></div><div class="progress-bar"><span style="width:50%;"></span></div></div><div class="flight-by car"><div class="flight"><div><i class="icon icon-car"></i> By car</div><div class="time">3:45 hrs</div></div><div class="progress-bar"><span style="width:100%;"></span></div></div>',5),L=[F],P=r('<div class="row"><div class="col-md-6"><div class="v-m-box"><h3 class="title">Our vision</h3><p>The largest distribution platform for private flights.</p></div></div><div class="col-md-6"><div class="v-m-box"><h3 class="title">Our mission</h3><p>Helping operators and agents turn white spaces into profit.</p></div></div></div>',1),D={__name:"AboutHeroSection",setup(n){const s=v(0);return(c,o)=>(t(),a("section",j,[e("div",N,[S,e("div",Z,[e("div",{class:"flight-path-trigger",onMouseenter:o[0]||(o[0]=i=>s.value=!0),onMouseleave:o[1]||(o[1]=i=>s.value=!1)},null,32),e("div",{class:_(["flight-details-card",{active:s.value}])},L,2)]),P])]))}},G={__name:"AboutView",setup(n){return(s,c)=>(t(),a(p,null,[l(D),l(J)],64))}};export{G as default};
