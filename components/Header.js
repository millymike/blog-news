import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Blog</span> News
      </h1>

      <p className={headerStyles.description}>
        Keep up to date with the hottest trends and latest updates
      </p>
    </div>
  );
};

export default Header;
