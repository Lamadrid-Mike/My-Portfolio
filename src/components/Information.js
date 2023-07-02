import "../styles/Information.css";
import Skills from "./Skills";
import EmailIcon from "@mui/icons-material/Email";

function Information() {
  return (
    <div>
      <div className="information-container">
        <div className="left-container">
          <h1>Web developer / programmer</h1>
          <p className="p-information">
            Coding has always caught my eye, so I made the decision to enroll in
            a bootcamp. I haven't looked back since, love learning new
            programming skills every day.
          </p>
          <div className="contact-btns">
            <a
              className="email-btn"
              href="mailto:mikealamadrid@hotmail.com?subject=Hello world!&body="
            >
              <EmailIcon fontSize="small" className="email-icon" />
              mikealamadrid@hotmail.com
            </a>
            <a className="phone-btn" href="tel:862-249-8300">
              862-249-8300
            </a>
          </div>
        </div>
        <div className="right-container">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Information;
