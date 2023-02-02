import Money from "../../assets/money.png";
import Community from "../../assets/community.png";
import Landlord from "../../assets/stack-line.png";
import Peace from "../../assets/plant-line.png";
import Safety from "../../assets/shield-star-line.png";
import Payment from "../../assets/eye-2-line.png";

const MinimumLivingCost = [
  {
    id: "01",
    image: <img src={Money} alt="" />,
    text: "Pay As Little As Possible!",
  },
  {
    id: "02",
    image: <img src={Community} alt="" />,
    text: "Enjoy Wisdom Of Community!",
  },
  {
    id: "03",
    image: <img src={Landlord} alt="" />,
    text: "Let's somebody else Take Care Of Landlord!",
  },
  {
    id: "04",
    image: <img src={Peace} alt="" />,
    text: "Enjoy peaceful Environment!",
  },
  {
    id: "05",
    image: <img src={Safety} alt="" />,
    text: "Stay Safe! Save Money!",
  },
  {
    id: "06",
    image: <img src={Payment} alt="" />,
    text: "Pay For What You Use!",
  },
];
export default MinimumLivingCost;
