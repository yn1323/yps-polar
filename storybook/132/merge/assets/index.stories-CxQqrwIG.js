import{w as S,e as c,u as r}from"./index-B7YJKKKT.js";import{j as e}from"./walk-object-CiAimSH9.js";import{c as P,r as A}from"./server-DsF9FLWI.js";import{u as D,d as C,e as h}from"./index-DLwJzy8U.js";import{B as x,L as w}from"./link-B7tE-ggm.js";import{h as R}from"./index-CI9keGzL.js";import{s as _}from"./schema-BZQn4VyQ.js";import{S as g,B as q}from"./stack-DZl6kS95.js";import{C as G,F as f,b as B,I as v,d as y}from"./input-B8ZVAnYZ.js";import{L as E}from"./link-Cp4YXEYc.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-DCCrmINF.js";import"./iframe-sVDu5Y7K.js";import"./field.anatomy-CcSQSJVj.js";import"./types-DwQkBYn-.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";const M=async({email:s,password:t})=>{const n=await P(),a={email:s,password:t},{error:i}=await n.auth.signInWithPassword(a);return A("/","layout"),{success:!i}},z=()=>{var u,l;const{register:s,handleSubmit:t,formState:{errors:n,isSubmitting:a}}=D({resolver:C(_)}),i=o=>{o?(h.create({description:"ログインに成功しました",type:"success"}),R("/mypage")):h.create({description:"ログインに失敗しました",type:"error"})},d=async o=>{const{success:F}=await M(o);i(F)};return e.jsx(G,{w:"96",p:"8",children:e.jsxs(g,{gap:"8",w:"full",children:[e.jsxs(g,{gap:"6",as:"form",onSubmit:o=>{o.preventDefault(),t(d)(o)},children:[e.jsxs(f,{invalid:!!n.email,children:[e.jsx(B,{children:"メールアドレス"}),e.jsx(v,{...s("email"),placeholder:"メールアドレスを入力してください",disabled:a}),e.jsx(y,{children:(u=n.email)==null?void 0:u.message})]}),e.jsxs(f,{invalid:!!n.password,children:[e.jsx(B,{children:"パスワード"}),e.jsx(v,{...s("password"),type:"password",placeholder:"パスワードを入力してください",disabled:a}),e.jsx(y,{children:(l=n.password)==null?void 0:l.message})]}),e.jsx(q,{variant:"solid",colorPalette:"teal",type:"submit",loading:a,children:"メールアドレスでログイン"})]}),e.jsxs(g,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:[e.jsx(x,{children:e.jsx(E,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(w,{href:"/signin/signup",children:"新規登録"})})}),e.jsx(x,{children:e.jsx(E,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(w,{href:"/signin/forget",children:"パスワードを忘れた方"})})})]})]})})},re={title:"features/signin/SigninForm",component:z,args:{}},m={play:async({canvasElement:s})=>{const t=S(s),n=t.getByText("新規登録");c(n.getAttribute("href")).toBe("/signin/signup");const a=t.getByText("パスワードを忘れた方");c(a.getAttribute("href")).toBe("/signin/forget")}},p={play:async({canvasElement:s})=>{const t=S(s),n=t.getByRole("button",{name:"メールアドレスでログイン"});await r.click(n);const a=await t.findAllByText("必須項目です");c(a.length).toBeGreaterThan(0);const i=t.getByPlaceholderText("メールアドレスを入力してください");await r.clear(i),await r.paste("invalid-email"),await r.click(n);const d=await t.findByText("メールアドレスの形式で入力してください");c(d).toBeInTheDocument(),await r.clear(i),await r.paste("test@example.com"),t.getByPlaceholderText("パスワードを入力してください").focus(),await r.paste("short"),await r.click(n);const l=await t.findByText("8〜24文字で入力してください");c(l).toBeInTheDocument()}};var b,j,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const signupLink = canvas.getByText('新規登録');
    expect(signupLink.getAttribute('href')).toBe('/signin/signup');
    const forgetPasswordLink = canvas.getByText('パスワードを忘れた方');
    expect(forgetPasswordLink.getAttribute('href')).toBe('/signin/forget');
  }
}`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var k,I,L;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const ie=["Basic","ErrorMessages"];export{m as Basic,p as ErrorMessages,ie as __namedExportsOrder,re as default};
