import{w as c,e as l}from"./index-B7YJKKKT.js";import{j as t}from"./walk-object-DpPG6A06.js";import{B as m,L as p}from"./link-C3De35q6.js";import{S as e,B as d}from"./stack-bOYLMvD4.js";import{C as x,F as g,b as h,I as u}from"./input-4UjZDK3M.js";import{L as f}from"./link-Cai9mi9c.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";import"./field.anatomy-DuhMkw1k.js";const j=()=>t.jsx(x,{w:"96",p:"8",children:t.jsxs(e,{gap:"8",w:"full",children:[t.jsxs(e,{gap:"6",as:"form",children:[t.jsxs(g,{children:[t.jsx(h,{children:"メールアドレス"}),t.jsx(u,{id:"mail"})]}),t.jsx(d,{variant:"solid",colorPalette:"teal",type:"submit",children:"パスワードリセット"})]}),t.jsx(e,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:t.jsx(m,{children:t.jsx(f,{asChild:!0,_hover:{textDecoration:"underline"},children:t.jsx(p,{href:"/signin",children:"ログイン画面に戻る"})})})})]})}),A={title:"features/signin/ResetPasswordForm",component:j,args:{}},s={play:async({canvasElement:i})=>{const o=c(i).getByText("ログイン画面に戻る");l(o.getAttribute("href")).toBe("/signin")}};var n,r,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const backToSigninLink = canvas.getByText('ログイン画面に戻る');
    expect(backToSigninLink.getAttribute('href')).toBe('/signin');
  }
}`,...(a=(r=s.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const C=["Basic"];export{s as Basic,C as __namedExportsOrder,A as default};
