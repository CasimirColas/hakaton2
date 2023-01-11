import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useSession } from "next-auth/react";

function LoginPage() {
  const { status, data } = useSession();
  const [userEmail, setuserEmail] = useState<string>("");
  const [userPassword, setuserPassword] = useState<string>("");
  async function handleConnction() {
    //validation here
    const res = await signIn("credentials", {
      email: userEmail,
      password: userPassword,
      redirect: false,
    });
    console.log(res);
  }
  function handleSignOut() {
    signOut();
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        value={userEmail}
        onChange={(e) => {
          setuserEmail(e.target.value);
        }}
        type="email"
        placeholder="john@email.com"
      />
      <input
        value={userPassword}
        onChange={(e) => {
          setuserPassword(e.target.value);
        }}
        type="password"
        placeholder="********"
      />
      <button onClick={handleConnction}>Login</button>
      <button
        onClick={() => {
          console.log("my status", status);
          console.log("my data", data);
        }}
      >
        What am I
      </button>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
}

export default LoginPage;
