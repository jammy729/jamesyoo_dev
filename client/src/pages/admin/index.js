import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";
const index = () => {
  return (
    <Layout>
      <div className="container-layout">
        <Link href="/admin/brixwork">brixwork</Link>
        <Link href="/admin/world-institution">world institution database</Link>
        <Link href="/admin/visual-analytics">educational visual analytics</Link>
      </div>
    </Layout>
  );
};

export default index;
