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
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      {children}
    </>
  );
}
