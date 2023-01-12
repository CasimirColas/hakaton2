import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Status() {
  const router = useRouter();
  const { status, data } = useSession();
  function handleSignOut() {
    signOut();
  }
  return (
    <div>
      <h1>You are {data?.user.email}</h1>
      <button onClick={handleSignOut}>Log out</button>
      <button
        onClick={() => {
          console.log("my status", status);
          console.log("my data", data);
        }}
      >
        ME
      </button>
      <button onClick={() => router.back()}>Go back</button>
    </div>
  );
}

export default Status;
