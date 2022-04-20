import classess from "../style/Question.module.css";

const Question = () => {
  return (
    <>
      <div className={classess.question__container}>
        <htmlForm action="" style={{ padding: "5rem 0" }}>
          <p className={classess.question__text}>
            On average, how many days do you spend on your laptop per week?
          </p>
          <div className={classess.answer__container}>
            <input
              type="radio"
              id="1day"
              name="spend_days"
              value="1 day/week"
            />
            <label htmlFor="1day">1 day/week</label>
            <br />
            <input
              type="radio"
              id="2day"
              name="spend_days"
              value="2 days/week"
            />
            <label htmlFor="2day">2 days/week</label>
            <br />
            <input
              type="radio"
              id="3day"
              name="spend_days"
              value="3 days/week"
            />
            <label htmlFor="3day">3 days/week</label>
            <br />
            <input
              type="radio"
              id="4day"
              name="spend_days"
              value="4 days/week"
            />
            <label htmlFor="4day">4 days/week</label>
            <br />
            <input
              type="radio"
              id="5day"
              name="spend_days"
              value="5 days/week"
            />
            <label htmlFor="5day">5 days/week</label>
            <br />
            <input
              type="radio"
              id="5day"
              name="spend_days"
              value="6 days/week"
            />
            <label htmlFor="6day">6 days/week</label>
            <br />
            <input
              type="radio"
              id="7day"
              name="spend_days"
              value="7 days/week"
            />
            <label htmlFor="7day">7 days/week</label>
            <br />
          </div>
          <p className={classess.question__text}>
            On average, how many hours do you spend on your laptop per day?
          </p>
          <div className={classess.answer__container}>
            <input type="radio" id="1day" name="spend_hours" value="< 1hr" />
            <label htmlFor="1day"> 1hr</label>
            <br />
            <input
              type="radio"
              id="2day"
              name="spend_hours"
              value="1hr – 3hr"
            />
            <label htmlFor="2day">1hr – 3hr</label>
            <br />
            <input
              type="radio"
              id="3day"
              name="spend_hours"
              value="3hr – 6hr"
            />
            <label htmlFor="3day">3hr – 6hr</label>
            <br />
            <input
              type="radio"
              id="4day"
              name="spend_hours"
              value="6hr – 9hr"
            />
            <label htmlFor="4day">6hr – 9hr</label>
            <br />
            <input type="radio" id="5day" name="spend_hours" value="> 9hr" />
            <label htmlFor="5day"> 9hr</label>
            <br />
          </div>
          <p className={classess.question__text}>
            Putting your current laptop in mind, how much do you agree with the
            following statements?
          </p>
          <table>
            <thead>
              <tr>
                <td style={{ width: "30%" }}></td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>
                        Strongly Disagree
                      </span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>Disagree</span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>
                        Slightly Disagree
                      </span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>Neutral</span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>
                        Slightly Agree
                      </span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>Agree</span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <span className={classess.option_label}>
                        Strongly Agree
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <div className={classess.control_label}>
                        <span className={classess.question__text}>
                          My laptop processes tasks and runs at a high speed
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="strongly_disagree">
                    <input
                      type="radio"
                      id="strongly_disagree"
                      name="speed"
                      value="Strongly Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="disagree">
                    <input
                      type="radio"
                      id="disagree"
                      name="speed"
                      value="Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="slightly_disagree">
                    <input
                      type="radio"
                      id="slightly_disagree"
                      name="speed"
                      value="Slightly Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="neutral">
                    <input
                      type="radio"
                      id="neutral"
                      name="speed"
                      value="Neutral"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="slightly_agree">
                    <input
                      type="radio"
                      id="slightly_agree"
                      name="speed"
                      value="Slightly Agree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="agree">
                    <input type="radio" id="agree" name="speed" value="Agree" />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="strongly_agree">
                    <input
                      type="radio"
                      id="strongly_agree"
                      name="speed"
                      value="Strongly Agree"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <div className={classess.control_label}>
                        <span className={classess.question__text}>
                          My laptop makes me feel special
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="strongly_disagree">
                    <input
                      type="radio"
                      id="strongly_disagree"
                      name="feel_special"
                      value="Strongly Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="disagree">
                    <input
                      type="radio"
                      id="disagree"
                      name="feel_special"
                      value="Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="slightly_disagree">
                    <input
                      type="radio"
                      id="slightly_disagree"
                      name="feel_special"
                      value="Slightly Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="neutral">
                    <input
                      type="radio"
                      id="neutral"
                      name="feel_special"
                      value="Neutral"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="slightly_agree">
                    <input
                      type="radio"
                      id="slightly_agree"
                      name="feel_special"
                      value="Slightly Agree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="agree">
                    <input
                      type="radio"
                      id="agree"
                      name="feel_special"
                      value="Agree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="strongly_agree">
                    <input
                      type="radio"
                      id="strongly_agree"
                      name="feel_special"
                      value="Strongly Agree"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div className={classess.answer_options}>
                    <div className={classess.controls}>
                      <div className={classess.control_label}>
                        <span className={classess.question__text}>
                          My laptop is reliable and does not hang often
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="strongly_disagree">
                    <input
                      type="radio"
                      id="strongly_disagree"
                      name="reliable"
                      value="Strongly Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="disagree">
                    <input
                      type="radio"
                      id="disagree"
                      name="reliable"
                      value="Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="slightly_disagree">
                    <input
                      type="radio"
                      id="slightly_disagree"
                      name="reliable"
                      value="Slightly Disagree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="neutral">
                    <input
                      type="radio"
                      id="neutral"
                      name="reliable"
                      value="Neutral"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="slightly_agree">
                    <input
                      type="radio"
                      id="slightly_agree"
                      name="reliable"
                      value="Slightly Agree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="agree">
                    <input
                      type="radio"
                      id="agree"
                      name="reliable"
                      value="Agree"
                    />
                  </label>
                </td>
                <td className={classess.option_radio}>
                  <label htmlFor="strongly_agree">
                    <input
                      type="radio"
                      id="strongly_agree"
                      name="reliable"
                      value="Strongly Agree"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Submit" />
        </htmlForm>
      </div>
    </>
  );
};

export default Question;
