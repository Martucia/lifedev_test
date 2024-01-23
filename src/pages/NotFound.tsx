import { NavLink } from "react-router-dom";
import { ROUTES } from "../shared/constants/routes";
import ChevronIcon from "../shared/ui/icons/chevron-icon";

export default function NotFoundPage() {
  return (
    <div>
      <div
        style={{
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        It looks like we couldn't find the page you were looking for..
      </div>
      <NavLink
        style={{
          padding: "14px 30px",
          display: "inline-flex",
          color: "#fff",
          background: "#5932EA",
          borderRadius: 8,
          marginTop: 20,
          alignItems: "center",
          gap: 8,
        }}
        to={ROUTES.CUSTOMERS}
      >
        Customers
        <ChevronIcon />
      </NavLink>
    </div>
  );
}
