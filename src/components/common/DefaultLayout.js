import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faComments, faBars, faTimes, faTags } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Main from './Main';
import Header from './Header';
import Link from './Link';

library.add(faFacebookSquare);
library.add(faInstagram);
library.add(faTwitterSquare);
library.add(faEnvelope);
library.add(faHeart);
library.add(faBars);
library.add(faTimes);
library.add(faComments);
library.add(faTags);

const HomeContainer = styled.div`
  background: white;
  font-family: 'Zilla Slab', serif;
  font-weight: 300;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem 2rem;

  & img {
    max-width: 100%;
  }
`;

const Footer = styled.footer`
  font-family: 'Zeyada', cursive;
  font-size: 1.2rem;
  text-align: center;
  justify-self: flex-end;
  padding: 1rem 0;
  margin: 0 3rem;
  border-top: 1px solid lightgray;

  @media screen and (max-width: 960px) {
    margin: 0 2rem;
  }
`;

const Heart = styled.small`
  font-size: 10px;
`;

const DefaultLayout = ({ data, children, showSidebar = true }) => {
  const site = data.allGhostSettings.edges[0].node;

  return (
    <HomeContainer>
      <Helmet title={site.title} defer={false}>
        <html lang={site.lang} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(window.adsbygoogle = window.adsbygoogle || []).push({});`,
          }}></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Homemade+Apple|Zeyada|Roboto+Slab:100,300,400,700"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface|Srisakdi|Zilla+Slab:400,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc" />
      </Helmet>
      <Header title={site.title} />
      {showSidebar ? <Main>{children}</Main> : <div>{children}</div>}
      <Footer>
        <div>
          Made with <Heart>♡</Heart> by{` `}
          <Link href="https://github.com/pramodsum">Sumedha</Link>
        </div>
      </Footer>
    </HomeContainer>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
};

export default DefaultLayout;
