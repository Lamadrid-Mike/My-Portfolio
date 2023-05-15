const SocialIcons = (props) => {
  return (
    <a href={props.link} target="_blank" className="footer-icon">
      {props.icon}
    </a>
  );
};

export default SocialIcons;
