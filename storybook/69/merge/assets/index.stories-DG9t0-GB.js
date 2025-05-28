import{w as c,e as l}from"./index-B7YJKKKT.js";import{j as t}from"./split-props-DmF7O8iz.js";import{B as m,L as p,a as d}from"./link-cdGHpZQO.js";import{C as x,S as e,F as g,b as h,I as u}from"./input-0kOjCAdz.js";import{B as f}from"./button-DkNkTOHc.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";import"./walk-object-BnMl0lCN.js";const j=()=>t.jsx(x,{w:"96",p:"8",children:t.jsxs(e,{gap:"8",w:"full",children:[t.jsxs(e,{gap:"6",as:"form",children:[t.jsxs(g,{children:[t.jsx(h,{children:"メールアドレス"}),t.jsx(u,{id:"mail"})]}),t.jsx(f,{variant:"solid",colorPalette:"teal",type:"submit",children:"パスワードリセット"})]}),t.jsx(e,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:t.jsx(m,{children:t.jsx(p,{asChild:!0,_hover:{textDecoration:"underline"},children:t.jsx(d,{href:"/signin",children:"ログイン画面に戻る"})})})})]})}),E={title:"features/signin/ResetPasswordForm",component:j,args:{}},s={play:async({canvasElement:i})=>{const o=c(i).getByText("ログイン画面に戻る");l(o.getAttribute("href")).toBe("/signin")}};var n,a,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const backToSigninLink = canvas.getByText('ログイン画面に戻る');
    expect(backToSigninLink.getAttribute('href')).toBe('/signin');
  }
}`,...(r=(a=s.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const A=["Basic"];export{s as Basic,A as __namedExportsOrder,E as default};
