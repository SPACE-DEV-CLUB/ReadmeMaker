import { css } from '@emotion/react';
import { MEDIA_QUERY_END_POINT } from 'constants/index';

const GlobalStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Montserrat', -apple-system, 'BlinkMacSystemFont', system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      sans-serif;

    @media screen and (min-width: ${MEDIA_QUERY_END_POINT.X_LARGE}) {
      font-size: 24px;
    }
    @media screen and (min-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
      font-size: 20px;
    }
    @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
      font-size: 16px;
    }
    @media screen and (min-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
      font-size: 12px;
    }
  }
  ol,
  ul {
    list-style: none;
  }

  li + li {
    margin: 0;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: black;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  .sr-only {
    position: absolute;
    margin: -1px;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
  }
`;

export default GlobalStyle;
