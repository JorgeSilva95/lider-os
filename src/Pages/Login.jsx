import "../Styles/Login.css";

function Login() {
  return (
    <div className="cardLogin">
      <h1>Login</h1>
      <div>
        <div>Seu e-mail.</div>
        <input
          type="email"
          name="e-mail"
          id=""
          className="boxies"
          placeholder="contato@htmlcss.com"
        />
      </div>
      <div>
        <div>Sua senha.</div>
        <input
          type="password"
          name="senha"
          id=""
          className="boxies"
          placeholder="1234"
        />
      </div>
      <div>
        <input type="checkbox" name="logued" id="checkbk" />
        <span>Manter-me logado</span>
      </div>
      <div>
        <input className="btnLogin , boxies" type="submit" value="Logar" />
      </div>
      <div className="boxregister">
        <span>Ainda não tem conta?</span>
        <input type="button" value="cadastre-se" />
      </div>
    </div>
  );
}

export default Login;
