import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/images/logo.svg";
const Logo = ({ logoWidth }) => {
  return (
    <Link to="/main">
      <img
        src={LogoIcon}
        style={{ width: `${logoWidth}px` }}
        draggable="false"
      />
    </Link>
  );
};

export default Logo;
