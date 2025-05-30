import{w as c,e as m}from"./index-B7YJKKKT.js";import{j as t}from"./split-props-DmF7O8iz.js";import{B as l,L as p}from"./link-lgyWlac8.js";import{S as e}from"./stack-_KP_h2ws.js";import{C as d,F as x,b as g,I as h}from"./input-DOo3KK0k.js";import{B as f}from"./button-DkNkTOHc.js";import{L as u}from"./link-DFd913HJ.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";import"./walk-object-BWqUPtXj.js";import"./field.anatomy-Ccc1lf1v.js";const j=()=>t.jsx(d,{w:"96",p:"8",children:t.jsxs(e,{gap:"8",w:"full",children:[t.jsxs(e,{gap:"6",as:"form",children:[t.jsxs(x,{children:[t.jsx(g,{children:"メールアドレス"}),t.jsx(h,{id:"mail"})]}),t.jsx(f,{variant:"solid",colorPalette:"teal",type:"submit",children:"パスワードリセット"})]}),t.jsx(e,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:t.jsx(l,{children:t.jsx(u,{asChild:!0,_hover:{textDecoration:"underline"},children:t.jsx(p,{href:"/signin",children:"ログイン画面に戻る"})})})})]})}),P={title:"features/signin/ResetPasswordForm",component:j,args:{}},s={play:async({canvasElement:a})=>{const o=c(a).getByText("ログイン画面に戻る");m(o.getAttribute("href")).toBe("/signin")}};var n,r,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const backToSigninLink = canvas.getByText('ログイン画面に戻る');
    expect(backToSigninLink.getAttribute('href')).toBe('/signin');
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _=["Basic"];export{s as Basic,_ as __namedExportsOrder,P as default};
