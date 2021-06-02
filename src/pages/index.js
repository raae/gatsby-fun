import React from "react";
import { Link } from "gatsby";
import { PageLayout } from "../components/PageLayout";

// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <title>Gatsby Fun</title>
      <h1>
        Gatsby Fun <br />
        <span>— a place to do experiments&nbsp;&nbsp;&nbsp;</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>

      <ul>
        {links.map((link) =>
          link.url ? (
            <li key={link.url}>
              <span>
                <a href={`${link.url}`}>{link.text}</a>
                {link.badge && <span aria-label="New Badge">NEW!</span>}
                <p>{link.description}</p>
              </span>
            </li>
          ) : (
            <li key={link.to}>
              <span>
                <Link href={`${link.to}`}>{link.text}</Link>
                {link.badge && <span aria-label="New Badge">NEW!</span>}
                <p>{link.description}</p>
              </span>
            </li>
          )
        )}
      </ul>
    </PageLayout>
  );
};

export default IndexPage;

// data
const links = [
  // {
  //   text: "Tutorial",
  //   url: "https://www.gatsbyjs.com/docs/tutorial/",
  //   description:
  //     "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  //   color: "#E95800",
  // },
];
