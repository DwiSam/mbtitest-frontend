import { Helmet } from "react-helmet-async";

const Title = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `Career Paths | ${title}` : "Career Paths"}</title>
      </Helmet>

      <main>{children}</main>
    </>
  );
};

export default Title;
