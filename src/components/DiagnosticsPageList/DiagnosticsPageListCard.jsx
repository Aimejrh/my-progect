import { Link } from "react-router-dom";

const DiagnosticsPageListCard = ({
  DiagnosticsPageListCard_Link,
  DiagnosticsPageListCard_img,
  DiagnosticsPageListCard_h3,
  DiagnosticsPageListCard_p,
}) => {
  return (
    <li>
      <Link to={DiagnosticsPageListCard_Link}>
        <img src={DiagnosticsPageListCard_img} alt="img" />
        <h3>{DiagnosticsPageListCard_h3}</h3>
        <p>{DiagnosticsPageListCard_p}</p>
      </Link>
    </li>
  );
};
export default DiagnosticsPageListCard;
