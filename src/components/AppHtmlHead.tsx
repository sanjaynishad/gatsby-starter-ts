import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface ISeoProps {
  title: string;
  children?: React.ReactNode;
}

export function AppHtmlHead({ title, children }: ISeoProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <base href="/" />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      /> */}

      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        rel="stylesheet"
      /> */}

      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      {children}
    </>
  );
}
