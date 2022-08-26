import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import '../css/GoogleAuth.css';
import { useLoginMutation } from '../services/authApi';

declare let google: any;

const GoogleAuth: React.FC<{}> = () => {
  
  const [theme, setTheme] = useState(String);
  const [login, { isLoading }] = useLoginMutation();

  const handleCallbackResponse = (response: any) => {
    console.log("Encoded JWT ID Token: " + response.credential);
    Cookies.set('token', response.credential, { domain: process.env.HOST });
    login({});
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    event.matches ? setTheme("filled_black") : setTheme("filled_blue");
  });

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme("filled_black") : setTheme("filled_blue");

    google.accounts.id.initialize({
      client_id: "625739814497-1dn8tv2gcp21ga6st6860jsan8r93k3h.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.prompt();

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: theme,
        size: "large",
        type: "standard",
        width: 500
      }
    )
  }, [theme]);

  return (<>
    <div className="g-signin2" id="signInDiv"/><br/>
  </>);
};

export default GoogleAuth;
