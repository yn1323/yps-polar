import{w as E,u as S}from"./index-DtL3pAzF.js";import{j as e}from"./walk-object-BcaNdCLZ.js";import{s as j}from"./serverFetch-BpoBzajA.js";import{b as F,U as N,f as w,u as B,d as R,e as u}from"./index-D1Qgr5dj.js";import{h as T}from"./index-CkPw3BiG.js";import{ar as U,aF as I}from"./types-DEkAREch.js";import{S as p,B as k}from"./stack-SH1h06aJ.js";import{T as L}from"./index-DsE4GiRG.js";import{C as M,F as P,b as q,I as C,d as G}from"./input-DxSR_CVd.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-Sp23dvMJ.js";import"./field.anatomy-C9I97sG2.js";import"./_interop_require_wildcard-Ciy6n6DG.js";const H=async(s,{userName:r})=>{const{success:t}=await j(`/api/auth/user/${s}`,{method:"POST",mutation:{userId:s,userName:r}});return{success:t}},O=U({userName:I().superRefine(F(w,N))}),i=({userId:s,callbackRoutingPath:r})=>{var m;const{register:t,handleSubmit:b,formState:{errors:c,isSubmitting:x}}=B({resolver:R(O)}),_=async a=>{const{success:v}=await H(s,{userName:a.userName});v?(u.create({description:"ユーザー名登録が完了しました",type:"success"}),r&&T(r)):u.create({description:"ユーザー名登録に失敗しました",type:"error"})};return e.jsx(M,{w:"96",p:"8",children:e.jsxs(p,{gap:"8",w:"full",children:[e.jsx(L,{fontSize:"lg",children:"ユーザー名登録"}),e.jsxs(p,{gap:"6",as:"form",onSubmit:a=>{a.preventDefault(),b(_)(a)},children:[e.jsxs(P,{invalid:!!c.userName,children:[e.jsx(q,{children:"ユーザー名"}),e.jsx(C,{...t("userName"),placeholder:"ユーザー名"}),e.jsx(G,{children:(m=c.userName)==null?void 0:m.message})]}),e.jsx(k,{variant:"solid",colorPalette:"teal",type:"submit",loading:x,children:"登録"})]})]})})};try{i.displayName="UserForm",i.__docgenInfo={description:"",displayName:"UserForm",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},callbackRoutingPath:{defaultValue:null,description:"",name:"callbackRoutingPath",required:!1,type:{name:"string"}}}}}catch{}const re={title:"features/register/UserForm",component:i,args:{userId:"fa96ae18-86da-4e34-95c3-a63ad6879068"}},o={},n={play:async({canvasElement:s})=>{const t=E(s).getByRole("button",{name:"登録"});await S.click(t)}};var l,d,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const te=["Basic","ErrorMessages"];export{o as Basic,n as ErrorMessages,te as __namedExportsOrder,re as default};
