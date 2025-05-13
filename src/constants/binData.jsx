import {
    FaLeaf,
    FaRecycle,
    FaExclamationTriangle,
    FaQuestion,
  } from "react-icons/fa";
  
const bins = [
  {
    id: "organic",
    label: "Organic",
    icon: <FaLeaf />,
    color: "bg-green-500",
    index: 0,
  },
  {
    id: "recycle",
    label: "Recycle",
    icon: <FaRecycle />,
    color: "bg-blue-500",
    index: 1,
  },
  {
    id: "hazardous",
    label: "Hazardous",
    icon: <FaExclamationTriangle />,
    color: "bg-red-500",
    index: 2,
  },
  {
    id: "other",
    label: "Other",
    icon: <FaQuestion />,
    color: "bg-gray-500",
    index: 3,
  },
];

export default bins;
