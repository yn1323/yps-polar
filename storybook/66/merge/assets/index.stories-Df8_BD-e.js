import{w as E,u as S}from"./index-B7YJKKKT.js";import{j as e}from"./split-props-DmF7O8iz.js";import{s as j}from"./serverFetch-tyXnFAZy.js";import{b as F,U as N,f as w,u as B,d as R,e as u}from"./index-CjiUcOV_.js";import{h as T}from"./index-DErkXTPI.js";import{ar as U,aF as I}from"./types-B8EAP9_e.js";import{S as p}from"./stack-_KP_h2ws.js";import{T as k}from"./text-DojoISay.js";import{C as L,F as M,b as P,I as q,d as C}from"./input-DOo3KK0k.js";import{B as G}from"./button-DkNkTOHc.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-B1S6n_iG.js";import"./field.anatomy-Ccc1lf1v.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./walk-object-BWqUPtXj.js";const H=async(r,{userName:s})=>{const{success:t}=await j(`/api/auth/user/${r}`,{method:"POST",mutation:{userId:r,userName:s}});return{success:t}},O=U({userName:I().superRefine(F(w,N))}),i=({userId:r,callbackRoutingPath:s})=>{var m;const{register:t,handleSubmit:b,formState:{errors:c,isSubmitting:x}}=B({resolver:R(O)}),_=async a=>{const{success:v}=await H(r,{userName:a.userName});v?(u.create({description:"ユーザー名登録が完了しました",type:"success"}),s&&T(s)):u.create({description:"ユーザー名登録に失敗しました",type:"error"})};return e.jsx(L,{w:"96",p:"8",children:e.jsxs(p,{gap:"8",w:"full",children:[e.jsx(k,{fontSize:"lg",children:"ユーザー名登録"}),e.jsxs(p,{gap:"6",as:"form",onSubmit:a=>{a.preventDefault(),b(_)(a)},children:[e.jsxs(M,{invalid:!!c.userName,children:[e.jsx(P,{children:"ユーザー名"}),e.jsx(q,{...t("userName"),placeholder:"ユーザー名"}),e.jsx(C,{children:(m=c.userName)==null?void 0:m.message})]}),e.jsx(G,{variant:"solid",colorPalette:"teal",type:"submit",loading:x,children:"登録"})]})]})})};try{i.displayName="UserForm",i.__docgenInfo={description:"",displayName:"UserForm",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},callbackRoutingPath:{defaultValue:null,description:"",name:"callbackRoutingPath",required:!1,type:{name:"string"}}}}}catch{}const ae={title:"features/register/UserForm",component:i,args:{userId:"fa96ae18-86da-4e34-95c3-a63ad6879068"}},o={},n={play:async({canvasElement:r})=>{const t=E(r).getByRole("button",{name:"登録"});await S.click(t)}};var l,d,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // フォームの送信ボタンを取得
    const submitButton = canvas.getByRole('button', {
      name: '登録'
    });

    // 何も入力せずに送信
    await userEvent.click(submitButton);
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const oe=["Basic","ErrorMessages"];export{o as Basic,n as ErrorMessages,oe as __namedExportsOrder,ae as default};
