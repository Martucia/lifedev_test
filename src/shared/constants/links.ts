import DiscountIcon from "../ui/icons/discount-icon";
import KeyIcon from "../ui/icons/key-icon";
import QuestionIcon from "../ui/icons/question-icon";
import SquareIcon from "../ui/icons/square-icon";
import UserIcon from "../ui/icons/user-icon";
import WalletIcon from "../ui/icons/wallet-icon";
import { ROUTES } from "./routes";

type LinkType = {
  path: string;
  text: string;
  icon: () => JSX.Element;
};

export const sidebarLinks: LinkType[] = [
  {
    path: ROUTES.DASHBOARD,
    text: "Dashboard",
    icon: KeyIcon,
  },
  {
    path: ROUTES.PRODUCT,
    text: "Product",
    icon: SquareIcon,
  },
  {
    path: ROUTES.CUSTOMERS,
    text: "Customers",
    icon: UserIcon,
  },
  {
    path: ROUTES.INCOME,
    text: "Income",
    icon: WalletIcon,
  },
  {
    path: ROUTES.PROMOTE,
    text: "Promote",
    icon: DiscountIcon,
  },
  {
    path: ROUTES.HELP,
    text: "Help",
    icon: QuestionIcon,
  },
];
