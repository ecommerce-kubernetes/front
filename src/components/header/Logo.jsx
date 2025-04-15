import LogoIcon from "../../assets/images/logo.svg";
const Logo = ({ logoWidth }) => {
  return <img src={LogoIcon} style={{ width: `${logoWidth}px` }} />;
};

export default Logo;
