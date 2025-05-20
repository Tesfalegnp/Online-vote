const React = require('react');

const Router = ({ children }) => <div>{children}</div>;
const Route = ({ element }) => element;
const Routes = ({ children }) => <>{children}</>;
const Link = ({ children }) => <a>{children}</a>;

module.exports = {
  BrowserRouter: Router,
  Router,
  Route,
  Routes,
  Link,
};