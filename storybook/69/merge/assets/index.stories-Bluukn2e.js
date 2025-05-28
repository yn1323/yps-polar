import{w as E,u as S}from"./index-B7YJKKKT.js";import{j as e}from"./split-props-DmF7O8iz.js";import{s as j}from"./serverFetch-1GAzyy9X.js";import{b as F,U as N,f as w,u as B,d as R,e as u}from"./index-BG0Ak4uT.js";import{h as T}from"./index-Cylou7E1.js";import{ar as U,aF as I}from"./types-B8EAP9_e.js";import{C as k,S as p,F as L,b as M,I as P,d as q}from"./input-0kOjCAdz.js";import{T as C}from"./text-DojoISay.js";import{B as G}from"./button-DkNkTOHc.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-CHh2Uf4K.js";import"./walk-object-BnMl0lCN.js";import"./_interop_require_wildcard-BLzwqx1Q.js";const H=async(s,{userName:r})=>{const{success:t}=await j(`/api/auth/user/${s}`,{method:"POST",mutation:{userId:s,userName:r}});return{success:t}},O=U({userName:I().superRefine(F(w,N))}),i=({userId:s,callbackRoutingPath:r})=>{var m;const{register:t,handleSubmit:b,formState:{errors:c,isSubmitting:x}}=B({resolver:R(O)}),_=async a=>{const{success:v}=await H(s,{userName:a.userName});v?(u.create({description:"ユーザー名登録が完了しました",type:"success"}),r&&T(r)):u.create({description:"ユーザー名登録に失敗しました",type:"error"})};return e.jsx(k,{w:"96",p:"8",children:e.jsxs(p,{gap:"8",w:"full",children:[e.jsx(C,{fontSize:"lg",children:"ユーザー名登録"}),e.jsxs(p,{gap:"6",as:"form",onSubmit:a=>{a.preventDefault(),b(_)(a)},children:[e.jsxs(L,{invalid:!!c.userName,children:[e.jsx(M,{children:"ユーザー名"}),e.jsx(P,{...t("userName"),placeholder:"ユーザー名"}),e.jsx(q,{children:(m=c.userName)==null?void 0:m.message})]}),e.jsx(G,{variant:"solid",colorPalette:"teal",type:"submit",loading:x,children:"登録"})]})]})})};try{i.displayName="UserForm",i.__docgenInfo={description:"",displayName:"UserForm",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},callbackRoutingPath:{defaultValue:null,description:"",name:"callbackRoutingPath",required:!1,type:{name:"string"}}}}}catch{}const re={title:"features/register/UserForm",component:i,args:{userId:"fa96ae18-86da-4e34-95c3-a63ad6879068"}},o={},n={play:async({canvasElement:s})=>{const t=E(s).getByRole("button",{name:"登録"});await S.click(t)}};var l,d,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
