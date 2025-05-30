import{w as D,e as m,u as o}from"./index-B7YJKKKT.js";import{j as e}from"./walk-object-CiAimSH9.js";import{c as G,r as R}from"./server-DenoSzsr.js";import{u as _,d as q,e as w}from"./index-5en6YmdF.js";import{B as d,L as y}from"./link-6rP8A-Ny.js";import{h as M}from"./index-CI9keGzL.js";import{F as O}from"./index-01bN8X0h.js";import{s as z}from"./schema-DaFr7zsK.js";import{c as $,S as f,B as v}from"./stack-ClIc0vBX.js";import{C as H,F as B,b as j,I as E,d as b}from"./input-BAVZW04c.js";import{r as J}from"./index-D3ueQH4H.js";import{T}from"./text-BIv1V6xq.js";import{L as k}from"./link-B1ixhI-o.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-DCCrmINF.js";import"./iframe-CHFTp_tY.js";import"./field.anatomy-Ccc1lf1v.js";import"./types-DwQkBYn-.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";const I=J.forwardRef(function(t,n){const{direction:a,align:i,justify:l,wrap:p,basis:c,grow:u,shrink:r,inline:h,...W}=t;return e.jsx($.div,{ref:n,...W,css:{display:h?"inline-flex":"flex",flexDirection:a,alignItems:i,justifyContent:l,flexWrap:p,flexBasis:c,flexGrow:u,flexShrink:r,...t.css}})}),K=async({email:s,password:t})=>{const n=await G(),a={email:s,password:t},{error:i}=await n.auth.signInWithPassword(a);return R("/","layout"),{success:!i}},N=async()=>{const s=await G(),{error:t}=await s.auth.signInWithOAuth({provider:"google"});return R("/","layout"),{success:!t}},Q=()=>{var c,u;const{register:s,handleSubmit:t,formState:{errors:n,isSubmitting:a}}=_({resolver:q(z)}),i=r=>{r?(w.create({description:"ログインに成功しました",type:"success"}),M("/mypage")):w.create({description:"ログインに失敗しました",type:"error"})},l=async r=>{const{success:h}=await K(r);i(h)},p=async()=>{const{success:r}=await N();i(r)};return e.jsx(H,{w:"96",p:"8",children:e.jsxs(f,{gap:"8",w:"full",children:[e.jsxs(f,{gap:"6",as:"form",onSubmit:r=>{r.preventDefault(),t(l)(r)},children:[e.jsxs(B,{invalid:!!n.email,children:[e.jsx(j,{children:"メールアドレス"}),e.jsx(E,{...s("email"),placeholder:"メールアドレスを入力してください",disabled:a}),e.jsx(b,{children:(c=n.email)==null?void 0:c.message})]}),e.jsxs(B,{invalid:!!n.password,children:[e.jsx(j,{children:"パスワード"}),e.jsx(E,{...s("password"),type:"password",placeholder:"パスワードを入力してください",disabled:a}),e.jsx(b,{children:(u=n.password)==null?void 0:u.message})]}),e.jsx(v,{variant:"solid",colorPalette:"teal",type:"submit",loading:a,children:"メールアドレスでログイン"})]}),e.jsxs(I,{alignItems:"center",gap:"6",mx:"-2",children:[e.jsx(d,{flex:"1",h:"1px",bg:"gray.300"}),e.jsx(T,{children:"or"}),e.jsx(d,{flex:"1",h:"1px",bg:"gray.300"})]}),e.jsx(v,{variant:"outline",onClick:p,children:e.jsxs(I,{align:"center",gap:"2",children:[e.jsx(O,{}),e.jsx(T,{children:"Googleでログイン"})]})}),e.jsxs(f,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:[e.jsx(d,{children:e.jsx(k,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(y,{href:"/signin/signup",children:"新規登録"})})}),e.jsx(d,{children:e.jsx(k,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(y,{href:"/signin/forget",children:"パスワードを忘れた方"})})})]})]})})},xe={title:"features/signin/SigninForm",component:Q,args:{}},g={play:async({canvasElement:s})=>{const t=D(s),n=t.getByText("新規登録");m(n.getAttribute("href")).toBe("/signin/signup");const a=t.getByText("パスワードを忘れた方");m(a.getAttribute("href")).toBe("/signin/forget")}},x={play:async({canvasElement:s})=>{const t=D(s),n=t.getByRole("button",{name:"メールアドレスでログイン"});await o.click(n);const a=await t.findAllByText("必須項目です");m(a.length).toBeGreaterThan(0);const i=t.getByPlaceholderText("メールアドレスを入力してください");await o.clear(i),await o.paste("invalid-email"),await o.click(n);const l=await t.findByText("メールアドレスの形式で入力してください");m(l).toBeInTheDocument(),await o.clear(i),await o.paste("test@example.com"),t.getByPlaceholderText("パスワードを入力してください").focus(),await o.paste("short"),await o.click(n);const c=await t.findByText("8〜24文字で入力してください");m(c).toBeInTheDocument()}};var F,L,S;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const signupLink = canvas.getByText('新規登録');
    expect(signupLink.getAttribute('href')).toBe('/signin/signup');
    const forgetPasswordLink = canvas.getByText('パスワードを忘れた方');
    expect(forgetPasswordLink.getAttribute('href')).toBe('/signin/forget');
  }
}`,...(S=(L=g.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var P,C,A;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(C=x.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const he=["Basic","ErrorMessages"];export{g as Basic,x as ErrorMessages,he as __namedExportsOrder,xe as default};
