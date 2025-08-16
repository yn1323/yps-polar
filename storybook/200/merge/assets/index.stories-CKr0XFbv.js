import{w as S,e as l,u as n}from"./index-DtL3pAzF.js";import{j as e}from"./walk-object-BcaNdCLZ.js";import{c as L,r as F}from"./server-m3IKw6dP.js";import{b as P,P as A,g as C,u as D,d as R,e as v}from"./index-DLAQ57M0.js";import{B as M,L as _}from"./link-9timvRFI.js";import{h as G}from"./index-CkPw3BiG.js";import{s as B}from"./schema-BUa_hCS9.js";import{ar as q,aF as N}from"./types-DEkAREch.js";import{S as w,B as O}from"./stack-SH1h06aJ.js";import{C as H,F as h,b as g,I as x,d as f}from"./input-DkimR-AM.js";import{L as W}from"./link-DZ2o5KN8.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-Sp23dvMJ.js";import"./iframe-BHzbcKm7.js";import"./field.anatomy-DuhMkw1k.js";import"./_interop_require_wildcard-Ciy6n6DG.js";import"./add-base-path-D-s-KRz3.js";const $=async({email:s,password:t,passwordConfirmation:a})=>{const r=await L();if(t!==a)return{success:!1};const i={email:s,password:t},{error:o}=await r.auth.signUp(i);return F("/","layout"),{success:!o}},z=q({email:B.shape.email,password:B.shape.password,passwordConfirmation:N().superRefine(P(C,A))}).refine(s=>s.password===s.passwordConfirmation,{message:"パスワードが一致しません",path:["passwordConfirmation"]}),U=()=>{var o,p,m;const{register:s,handleSubmit:t,formState:{errors:a,isSubmitting:r}}=D({resolver:R(z)}),i=async c=>{const{success:k}=await $(c);k?(v.create({description:"ユーザー登録が完了しました",type:"success"}),G("/signin")):v.create({description:"ユーザー登録に失敗しました",type:"error"})};return e.jsx(H,{w:"96",p:"8",children:e.jsxs(w,{gap:"8",w:"full",children:[e.jsxs(w,{gap:"6",as:"form",onSubmit:c=>{c.preventDefault(),t(i)(c)},children:[e.jsxs(h,{invalid:!!a.email,children:[e.jsx(g,{children:"メールアドレス"}),e.jsx(x,{...s("email"),placeholder:"メールアドレスを入力してください",disabled:r}),e.jsx(f,{children:(o=a.email)==null?void 0:o.message})]}),e.jsxs(h,{invalid:!!a.password,children:[e.jsx(g,{children:"パスワード"}),e.jsx(x,{...s("password"),type:"password",placeholder:"パスワードを入力してください",disabled:r}),e.jsx(f,{children:(p=a.password)==null?void 0:p.message})]}),e.jsxs(h,{invalid:!!a.passwordConfirmation,children:[e.jsx(g,{children:"パスワード(確認)"}),e.jsx(x,{...s("passwordConfirmation"),type:"password",placeholder:"パスワードを入力してください（確認用）",disabled:r}),e.jsx(f,{children:(m=a.passwordConfirmation)==null?void 0:m.message})]}),e.jsx(O,{variant:"solid",colorPalette:"teal",type:"submit",loading:r,children:"登録"})]}),e.jsx(w,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:e.jsx(M,{children:e.jsx(W,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(_,{href:"/signin",children:"ログイン画面に戻る"})})})})]})})},me={title:"features/signin/SignupForm",component:U,args:{}},d={play:async({canvasElement:s})=>{const a=S(s).getByText("ログイン画面に戻る");l(a.getAttribute("href")).toBe("/signin")}},u={play:async({canvasElement:s})=>{const t=S(s),a=t.getByRole("button",{name:"登録"});await n.click(a);const r=await t.findAllByText("必須項目です");l(r.length).toBeGreaterThan(0);const i=t.getByPlaceholderText("メールアドレスを入力してください");await n.clear(i),await n.paste("invalid-email"),await n.click(a);const o=await t.findByText("メールアドレスの形式で入力してください");l(o).toBeInTheDocument(),await n.clear(i),await n.paste("test@example.com");const p=t.getByPlaceholderText("パスワードを入力してください");await n.paste("short"),await n.click(a);const m=await t.findAllByText("8〜24文字で入力してください");l(m.length).toBeGreaterThan(0),await n.clear(p),await n.paste("password123"),t.getByPlaceholderText("パスワードを入力してください（確認用）").focus(),await n.paste("different123"),await n.click(a);const c=await t.findByText("パスワードが一致しません");l(c).toBeInTheDocument()}};var E,y,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const signInLink = canvas.getByText('ログイン画面に戻る');
    expect(signInLink.getAttribute('href')).toBe('/signin');
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var b,j,I;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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

    // エラーメッセージが表示されることを確認
    const requiredErrorElements = await canvas.findAllByText('必須項目です');
    expect(requiredErrorElements.length).toBeGreaterThan(0);

    // 不正なメールアドレスでテスト
    const emailInput = canvas.getByPlaceholderText('メールアドレスを入力してください');
    await userEvent.clear(emailInput);
    await userEvent.paste('invalid-email');
    await userEvent.click(submitButton);
    const emailFormatError = await canvas.findByText('メールアドレスの形式で入力してください');
    expect(emailFormatError).toBeInTheDocument();

    // パスワードが短すぎる場合のテスト
    await userEvent.clear(emailInput);
    await userEvent.paste('test@example.com');
    const passwordInput = canvas.getByPlaceholderText('パスワードを入力してください');
    await userEvent.paste('short');
    await userEvent.click(submitButton);
    const passwordLengthErrors = await canvas.findAllByText('8〜24文字で入力してください');
    expect(passwordLengthErrors.length).toBeGreaterThan(0);

    // パスワード不一致のテスト
    await userEvent.clear(passwordInput);
    await userEvent.paste('password123');

    // パスワード確認欄にフォーカスを当てる
    canvas.getByPlaceholderText('パスワードを入力してください（確認用）').focus();
    await userEvent.paste('different123');
    await userEvent.click(submitButton);
    const passwordMatchError = await canvas.findByText('パスワードが一致しません');
    expect(passwordMatchError).toBeInTheDocument();
  }
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const de=["Basic","ErrorMessages"];export{d as Basic,u as ErrorMessages,de as __namedExportsOrder,me as default};
