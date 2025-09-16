import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import QFF from "../components/QFF";

function Home() {
  return (
    <Layout>
      <div className="mx-auto">
        <section>
          <Hero />
        </section>
        <section>
          <QFF />
        </section>
        <section>
          <Hero2 />
        </section>
      </div>
    </Layout>
  );
}

export default Home;
