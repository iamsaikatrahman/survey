import classess from "../style/HomeHeading.module.css";

const HomeHeader = () => {
  return (
    <>
      <div className={classess.heading}>
        <div className={classess.heading__content}>
          <h3 className={classess.headingtitle}>Laptop Satisfaction Survey</h3>
          <h6 className={classess.headingsubtitle}>
            Putting your current laptop in mind, <br /> how much do you agree
            with the following statements?
          </h6>
        </div>
      </div>
    </>
  );
};
export default HomeHeader;
