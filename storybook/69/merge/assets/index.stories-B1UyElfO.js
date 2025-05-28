import{w as N,e as d,u}from"./index-B7YJKKKT.js";import{j as a}from"./split-props-DmF7O8iz.js";import{c as R,r as W}from"./server-VjdpdtEG.js";import{u as V,d as K,e as b}from"./index-BG0Ak4uT.js";import{B as g,L as j,a as B}from"./link-cdGHpZQO.js";import{h as $}from"./index-Cylou7E1.js";import{r as J,R as m}from"./index-D3ueQH4H.js";import{s as Q}from"./schema-Bz0m5RD_.js";import{C as U,S as y,F as E,b as O,I as P,d as C}from"./input-0kOjCAdz.js";import{c as X,B as T}from"./button-DkNkTOHc.js";import{T as I}from"./text-DojoISay.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-CHh2Uf4K.js";import"./iframe-BaQPbJuH.js";import"./walk-object-BnMl0lCN.js";import"./types-B8EAP9_e.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";const S=J.forwardRef(function(e,n){const{direction:r,align:s,justify:i,wrap:p,basis:l,grow:o,shrink:c,inline:v,...q}=e;return a.jsx(X.div,{ref:n,...q,css:{display:v?"inline-flex":"flex",flexDirection:r,alignItems:s,justifyContent:i,flexWrap:p,flexBasis:l,flexGrow:o,flexShrink:c,...e.css}})}),Y=async({email:t,password:e})=>{const n=await R(),r={email:t,password:e},{error:s}=await n.auth.signInWithPassword(r);return W("/","layout"),{success:!s}},Z=async()=>{const t=await R(),{error:e}=await t.auth.signInWithOAuth({provider:"google"});return W("/","layout"),{success:!e}};var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=m.createContext&&m.createContext(M),tt=["attr","size","title"];function et(t,e){if(t==null)return{};var n=nt(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function nt(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x.apply(this,arguments)}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?F(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rt(t,e,n){return e=at(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t){var e=st(t,"string");return typeof e=="symbol"?e:e+""}function st(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function H(t){return t&&t.map((e,n)=>m.createElement(e.tag,w({key:n},e.attr),H(e.child)))}function it(t){return e=>m.createElement(ot,x({attr:w({},t.attr)},e),H(t.child))}function ot(t){var e=n=>{var{attr:r,size:s,title:i}=t,p=et(t,tt),l=s||n.size||"1em",o;return n.className&&(o=n.className),t.className&&(o=(o?o+" ":"")+t.className),m.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,p,{className:o,style:w(w({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&m.createElement("title",null,i),t.children)};return k!==void 0?m.createElement(k.Consumer,null,n=>e(n)):e(M)}function ct(t){return it({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}const lt=()=>{var l,o;const{register:t,handleSubmit:e,formState:{errors:n,isSubmitting:r}}=V({resolver:K(Q)}),s=c=>{c?(b.create({description:"ログインに成功しました",type:"success"}),$("/dashboard")):b.create({description:"ログインに失敗しました",type:"error"})},i=async c=>{const{success:v}=await Y(c);s(v)},p=async()=>{const{success:c}=await Z();s(c)};return a.jsx(U,{w:"96",p:"8",children:a.jsxs(y,{gap:"8",w:"full",children:[a.jsxs(y,{gap:"6",as:"form",onSubmit:c=>{c.preventDefault(),e(i)(c)},children:[a.jsxs(E,{invalid:!!n.email,children:[a.jsx(O,{children:"メールアドレス"}),a.jsx(P,{...t("email"),placeholder:"メールアドレスを入力してください",disabled:r}),a.jsx(C,{children:(l=n.email)==null?void 0:l.message})]}),a.jsxs(E,{invalid:!!n.password,children:[a.jsx(O,{children:"パスワード"}),a.jsx(P,{...t("password"),type:"password",placeholder:"パスワードを入力してください",disabled:r}),a.jsx(C,{children:(o=n.password)==null?void 0:o.message})]}),a.jsx(T,{variant:"solid",colorPalette:"teal",type:"submit",loading:r,children:"メールアドレスでログイン"})]}),a.jsxs(S,{alignItems:"center",gap:"6",mx:"-2",children:[a.jsx(g,{flex:"1",h:"1px",bg:"gray.300"}),a.jsx(I,{children:"or"}),a.jsx(g,{flex:"1",h:"1px",bg:"gray.300"})]}),a.jsx(T,{variant:"outline",onClick:p,children:a.jsxs(S,{align:"center",gap:"2",children:[a.jsx(ct,{}),a.jsx(I,{children:"Googleでログイン"})]})}),a.jsxs(y,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:[a.jsx(g,{children:a.jsx(j,{asChild:!0,_hover:{textDecoration:"underline"},children:a.jsx(B,{href:"/signin/signup",children:"新規登録"})})}),a.jsx(g,{children:a.jsx(j,{asChild:!0,_hover:{textDecoration:"underline"},children:a.jsx(B,{href:"/signin/forget",children:"パスワードを忘れた方"})})})]})]})})},Tt={title:"features/signin/SigninForm",component:lt,args:{}},f={play:async({canvasElement:t})=>{const e=N(t),n=e.getByText("新規登録");d(n.getAttribute("href")).toBe("/signin/signup");const r=e.getByText("パスワードを忘れた方");d(r.getAttribute("href")).toBe("/signin/forget")}},h={play:async({canvasElement:t})=>{const e=N(t),n=e.getByRole("button",{name:"メールアドレスでログイン"});await u.click(n);const r=await e.findAllByText("必須項目です");d(r.length).toBeGreaterThan(0);const s=e.getByPlaceholderText("メールアドレスを入力してください");await u.clear(s),await u.paste("invalid-email"),await u.click(n);const i=await e.findByText("メールアドレスの形式で入力してください");d(i).toBeInTheDocument(),await u.clear(s),await u.paste("test@example.com"),e.getByPlaceholderText("パスワードを入力してください").focus(),await u.paste("short"),await u.click(n);const l=await e.findByText("8〜24文字で入力してください");d(l).toBeInTheDocument()}};var D,L,_;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const signupLink = canvas.getByText('新規登録');
    expect(signupLink.getAttribute('href')).toBe('/signin/signup');
    const forgetPasswordLink = canvas.getByText('パスワードを忘れた方');
    expect(forgetPasswordLink.getAttribute('href')).toBe('/signin/forget');
  }
}`,...(_=(L=f.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var z,A,G;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // フォームの送信ボタンを取得
    const submitButton = canvas.getByRole('button', {
      name: 'メールアドレスでログイン'
    });

    // 何も入力せずに送信
    await userEvent.click(submitButton);

    // エラーメッセージが表示されることを確認
    const requiredErrorElements = await canvas.findAllByText('必須項目です');
    expect(requiredErrorElements.length).toBeGreaterThan(0);

    // 不正なメールアドレスでテスト
    const emailInput = canvas.getByPlaceholderText('メールアドレスを入力してください');
    await userEvent.clear(emailInput);
    await userEvent.paste('invalid-email');
    await userEvent.click(submitButton);
    const mailFormatError = await canvas.findByText('メールアドレスの形式で入力してください');
    expect(mailFormatError).toBeInTheDocument();

    // パスワードが短すぎる場合のテスト
    await userEvent.clear(emailInput);
    await userEvent.paste('test@example.com');

    // パスワード欄にフォーカスを当てる
    const passwordInput = canvas.getByPlaceholderText('パスワードを入力してください');
    passwordInput.focus();
    await userEvent.paste('short');
    await userEvent.click(submitButton);
    const passwordLengthError = await canvas.findByText('8〜24文字で入力してください');
    expect(passwordLengthError).toBeInTheDocument();
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const It=["Basic","ErrorMessages"];export{f as Basic,h as ErrorMessages,It as __namedExportsOrder,Tt as default};
