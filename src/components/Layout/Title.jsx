import { Helmet } from "react-helmet-async";

const Title = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Career Paths ` : "Career Paths"}</title>
      </Helmet>

      <main>{children}</main>
    </>
  );
};

export default Title;
