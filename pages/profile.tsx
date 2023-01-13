import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import CompanyProfile from "../components/companyProfiles/company";
import UserProfile from "../components/userProfiles/user";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const { status, data } = useSession();
  const Router = useRouter();
  React.useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/login");
    }
  }, [status]);
  if (status && status === "authenticated" && data.user.role === "company") {
    return (
      <>
        <Head>
          <title>Sherlockaction</title>
          <meta name="description" content="Found the perfect vehicle" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main profile">
          <CompanyProfile />
        </main>
      </>
    );
  } else if (
    status &&
    status === "authenticated" &&
    data.user.role === "customer"
  ) {
    return (
      <>
        <Head>
          <title>Sherlockaction</title>
          <meta name="description" content="Found the perfect vehicle" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main profile">
          <UserProfile />
        </main>
      </>
    );
  }
}
