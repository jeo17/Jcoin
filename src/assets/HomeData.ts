import { LuBox,LuTrophy,LuHeadphones} from "react-icons/lu";
import { MdPayment } from "react-icons/md";


type AllIcons = typeof LuBox  | typeof LuTrophy | typeof LuHeadphones| typeof MdPayment

interface feutures {
  title: string;
  desc: string;
  icon: AllIcons;
}

export const Feutures: [feutures] = [
  { title: "Fasted Delivery", desc: "Delivery in 24/H", icon: LuBox },
  { title: "24 Hours Return", desc: "100% money-back guarantee", icon: LuTrophy },
  { title: "Secure Payment", desc: "Your money is safe", icon: MdPayment },
  { title: "Support 24/7", desc: "Live contact/message", icon: LuHeadphones },
];
