import React from "react";
import Head from "next/head";
import CompanyProfile from "../components/companyProfiles/company";
import UserProfile from "../components/userProfiles/user";

export default function ProfilePage() {
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
