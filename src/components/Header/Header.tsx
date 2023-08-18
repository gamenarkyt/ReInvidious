import { FC } from "react";
import styles from "./Header.module.scss";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

// import { SearchBar } from "@src/components/ui/SearchBar/SearchBar";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <span onClick={() => navigate("/")}>ReInvidious</span>
      <SearchBar />
    </div>
  );
};
