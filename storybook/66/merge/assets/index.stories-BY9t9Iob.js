import{w as S,e as l,u as n}from"./index-B7YJKKKT.js";import{j as e}from"./split-props-DmF7O8iz.js";import{c as L,r as F}from"./server-BWySQ-MK.js";import{b as P,P as A,g as C,u as D,d as R,e as v}from"./index-CoNZZOVw.js";import{B as M,L as _}from"./link-lgyWlac8.js";import{h as G}from"./index-DErkXTPI.js";import{s as B}from"./schema-B0NCGO6n.js";import{ar as q,aF as N}from"./types-DwQkBYn-.js";import{S as w}from"./stack-_KP_h2ws.js";import{C as O,F as h,b as g,I as x,d as f}from"./input-DOo3KK0k.js";import{B as H}from"./button-DkNkTOHc.js";import{L as W}from"./link-DFd913HJ.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D3ueQH4H.js";import"./index-B1S6n_iG.js";import"./iframe-BZtX-ApK.js";import"./field.anatomy-Ccc1lf1v.js";import"./_interop_require_wildcard-BLzwqx1Q.js";import"./add-base-path-CCQl4eex.js";import"./walk-object-BWqUPtXj.js";const $=async({email:s,password:a,passwordConfirmation:t})=>{const r=await L();if(a!==t)return{success:!1};const o={email:s,password:a},{error:i}=await r.auth.signUp(o);return F("/","layout"),{success:!i}},z=q({email:B.shape.email,password:B.shape.password,passwordConfirmation:N().superRefine(P(C,A))}).refine(s=>s.password===s.passwordConfirmation,{message:"パスワードが一致しません",path:["passwordConfirmation"]}),U=()=>{var i,p,m;const{register:s,handleSubmit:a,formState:{errors:t,isSubmitting:r}}=D({resolver:R(z)}),o=async c=>{const{success:k}=await $(c);k?(v.create({description:"ユーザー登録が完了しました",type:"success"}),G("/signin")):v.create({description:"ユーザー登録に失敗しました",type:"error"})};return e.jsx(O,{w:"96",p:"8",children:e.jsxs(w,{gap:"8",w:"full",children:[e.jsxs(w,{gap:"6",as:"form",onSubmit:c=>{c.preventDefault(),a(o)(c)},children:[e.jsxs(h,{invalid:!!t.email,children:[e.jsx(g,{children:"メールアドレス"}),e.jsx(x,{...s("email"),placeholder:"メールアドレスを入力してください",disabled:r}),e.jsx(f,{children:(i=t.email)==null?void 0:i.message})]}),e.jsxs(h,{invalid:!!t.password,children:[e.jsx(g,{children:"パスワード"}),e.jsx(x,{...s("password"),type:"password",placeholder:"パスワードを入力してください",disabled:r}),e.jsx(f,{children:(p=t.password)==null?void 0:p.message})]}),e.jsxs(h,{invalid:!!t.passwordConfirmation,children:[e.jsx(g,{children:"パスワード(確認)"}),e.jsx(x,{...s("passwordConfirmation"),type:"password",placeholder:"パスワードを入力してください（確認用）",disabled:r}),e.jsx(f,{children:(m=t.passwordConfirmation)==null?void 0:m.message})]}),e.jsx(H,{variant:"solid",colorPalette:"teal",type:"submit",loading:r,children:"登録"})]}),e.jsx(w,{w:"full",gap:"2",textAlign:"right",color:"gray.500",fontSize:"sm",children:e.jsx(M,{children:e.jsx(W,{asChild:!0,_hover:{textDecoration:"underline"},children:e.jsx(_,{href:"/signin",children:"ログイン画面に戻る"})})})})]})})},ue={title:"features/signin/SignupForm",component:U,args:{}},d={play:async({canvasElement:s})=>{const t=S(s).getByText("ログイン画面に戻る");l(t.getAttribute("href")).toBe("/signin")}},u={play:async({canvasElement:s})=>{const a=S(s),t=a.getByRole("button",{name:"登録"});await n.click(t);const r=await a.findAllByText("必須項目です");l(r.length).toBeGreaterThan(0);const o=a.getByPlaceholderText("メールアドレスを入力してください");await n.clear(o),await n.paste("invalid-email"),await n.click(t);const i=await a.findByText("メールアドレスの形式で入力してください");l(i).toBeInTheDocument(),await n.clear(o),await n.paste("test@example.com");const p=a.getByPlaceholderText("パスワードを入力してください");await n.paste("short"),await n.click(t);const m=await a.findAllByText("8〜24文字で入力してください");l(m.length).toBeGreaterThan(0),await n.clear(p),await n.paste("password123"),a.getByPlaceholderText("パスワードを入力してください（確認用）").focus(),await n.paste("different123"),await n.click(t);const c=await a.findByText("パスワードが一致しません");l(c).toBeInTheDocument()}};var E,y,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const we=["Basic","ErrorMessages"];export{d as Basic,u as ErrorMessages,we as __namedExportsOrder,ue as default};
