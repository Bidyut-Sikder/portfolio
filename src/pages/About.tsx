import AboutComponent from "@/components/AboutComponent";

import Layout from "@/layout/Layout";
import { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Bidyut Sikder - Portfolio, Projects, and More</title>
        <meta
          name="description"
          content="bidyutsikder || Web Application Specialist"
        />
      </Helmet>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutComponent />
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default Home;