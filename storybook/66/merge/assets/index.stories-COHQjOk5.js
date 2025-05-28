import{w as C,e as c,u as o}from"./index-B7YJKKKT.js";import{j as e}from"./split-props-DmF7O8iz.js";import{c as D,r as G}from"./server-COwHnug4.js";import{u as _,d as q,e as w}from"./index-CoNZZOVw.js";import{B as m,L as f}from"./link-lgyWlac8.js";import{h as W}from"./index-DErkXTPI.js";import{e as y,f as M}from"./index-DUJ2Hh5E.js";import{s as O}from"./schema-B0NCGO6n.js";import{S as g}from"./stack-_KP_h2ws.js";import{C as z,F as v,b as B,I as E,d as j}from"./input-DOo3KK0k.js";import{B as b}from"./button-DkNkTOHc.js";import{T}from"./text-DojoISay.js";import{L as k}from"./link-DFd913HJ.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-B1S6n_iG.js";import"./iframe-7Vqbk9aW.js";import"./field.anatomy-Ccc1lf1v.js";import"./types-DwQkBYn-.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";import"./walk-object-BWqUPtXj.js";const $=async({email:s,password:t})=>{const n=await D(),a={email:s,password:t},{error:i}=await n.auth.signInWithPassword(a);return G("/","layout"),{success:!i}},H=async()=>{const s=await D(),{error:t}=await s.auth.signInWithOAuth({provider:"google"});return G("/","layout"),{success:!t}},J=()=>{var l,x;const{register:s,handleSubmit:t,formState:{errors:n,isSubmitting:a}}=_({resolver:q(O)}),i=r=>{r?(w.create({description:"ログインに成功しました",type:"success"}),W("/mypage")):w.create({description:"ログインに失敗しました",type:"error"})},d=async r=>{const{success:R}=await $(r);i(R)},h=async()=>{const{success:r}=await H();i(r)};return e.jsx(z,{w:"96",p:"8",children:e.jsxs(g,{gap:"8",w:"full",children:[e.jsxs(g,{gap:"6",as:"form",onSubmit:r=>{r.preventDefault(),t(d)(r)},children:[e.jsxs(v,{invalid:!!n.email,children:[e.jsx(B,{children:"メールアドレス"}),e.jsx(E,{...s("email"),placeholder:"メールアドレスを入力してください",disabled:a}),e.jsx(j,{children:(l=n.email)==null?void 0:l.message})]}),e.jsxs(v,{invalid:!!n.password,children:[e.jsx(B,{children:"パスワード"}),e.jsx(E,{...s("password"),type:"password",placeholder:"パスワードを入力してください",disabled:a}),e.jsx(j,{children:(x=n.password)==null?void 0:x.message})]}),e.jsx(b,{variant:"solid",colorPalette:"teal",type:"submit",loading:a,children:"メールアドレスでログイン"})]}),e.jsxs(y,{alignItems:"center",gap:"6",mx:"-2",children:[e.jsx(m,{flex:"1",h:"1px",bg:"gray.300"}),e.jsx(T,{children:"or"}),e.jsx(m,{flex:"1",h:"1px",bg:"gray.300"})]}),e.jsx(b,{variant:"outline",onClick:h,children:e.jsxs(y,{align:"center",gap:"2",children:[e.jsx(M,{}),e.jsx(T,{children:"Googleでログイン"})]})}),e.jsxs(g,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:[e.jsx(m,{children:e.jsx(k,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(f,{href:"/signin/signup",children:"新規登録"})})}),e.jsx(m,{children:e.jsx(k,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(f,{href:"/signin/forget",children:"パスワードを忘れた方"})})})]})]})})},ge={title:"features/signin/SigninForm",component:J,args:{}},p={play:async({canvasElement:s})=>{const t=C(s),n=t.getByText("新規登録");c(n.getAttribute("href")).toBe("/signin/signup");const a=t.getByText("パスワードを忘れた方");c(a.getAttribute("href")).toBe("/signin/forget")}},u={play:async({canvasElement:s})=>{const t=C(s),n=t.getByRole("button",{name:"メールアドレスでログイン"});await o.click(n);const a=await t.findAllByText("必須項目です");c(a.length).toBeGreaterThan(0);const i=t.getByPlaceholderText("メールアドレスを入力してください");await o.clear(i),await o.paste("invalid-email"),await o.click(n);const d=await t.findByText("メールアドレスの形式で入力してください");c(d).toBeInTheDocument(),await o.clear(i),await o.paste("test@example.com"),t.getByPlaceholderText("パスワードを入力してください").focus(),await o.paste("short"),await o.click(n);const l=await t.findByText("8〜24文字で入力してください");c(l).toBeInTheDocument()}};var I,L,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const signupLink = canvas.getByText('新規登録');
    expect(signupLink.getAttribute('href')).toBe('/signin/signup');
    const forgetPasswordLink = canvas.getByText('パスワードを忘れた方');
    expect(forgetPasswordLink.getAttribute('href')).toBe('/signin/forget');
  }
}`,...(S=(L=p.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var F,P,A;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const he=["Basic","ErrorMessages"];export{p as Basic,u as ErrorMessages,he as __namedExportsOrder,ge as default};
