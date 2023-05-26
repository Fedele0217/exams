import "./FooterStyle.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>I viaggi del maestro</h1>
            <p>Choose your favourite destination.</p>
          </div>
          <div>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="https://fontawesome.com/">Changelog</a>
            <a href="https://fontawesome.com/">Status</a>
            <a href="https://fontawesome.com/">License</a>
            <a href="https://fontawesome.com/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="https://fontawesome.com/">GitHub</a>
            <a href="https://fontawesome.com/">Issues</a>
            <a href="https://fontawesome.com/">Project</a>
            <a href="https://fontawesome.com/"> Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="https://fontawesome.com/">Support</a>
            <a href="https://fontawesome.com/">Troubleshooting</a>
            <a href="https://fontawesome.com/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="https://fontawesome.com/">Terms of Service</a>
            <a href="https://fontawesome.com/">Privacy Policy</a>
            <a href="https://fontawesome.com/">License</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
