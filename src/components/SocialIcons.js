const SocialIcons = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="footer-icon"
    >
      {props.icon}
    </a>
  );
};

export default SocialIcons;
