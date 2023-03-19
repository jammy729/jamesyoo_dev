import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";
const index = () => {
  return (
    <Layout>
      <div className="container-layout">
        <ul>
          <li>
            <Link href="/admin/brixwork">brixwork</Link>
          </li>
          <li>
            <Link href="/admin/institution-database">
              world institution database
            </Link>
          </li>
          <li>
            <Link href="/admin/visual-analytics">
              educational visual analytics
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default index;
