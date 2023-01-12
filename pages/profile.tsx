import Head from "next/head";
import CompanyProfile from "../components/companyProfiles/company";
import UserRentProfile from "../components/userProfiles/userRent";

function ProfilePage() {
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
}

export default ProfilePage;
