import React, { Component } from "react";
import { Popover, Input } from "antd";

export default class EmojiModule extends Component {
  /**
   * @constructor
   * The State Keys provided are keys used to sort the objects in the emoji's JSON file.
   */

  constructor() {
    super();
    this.state = {
      emojiKeyInput: "",
      smileys_people: {},
      animals_nature: {},
      food_drinks: {},
      activity: {},
      travel_places: {},
      objects: {},
      symbols: {},
      flags: {}
    };
  }

  /**
   * @func handleEmojiInput
   * This function sole purpose is to set the state of the value every time the user type in a character.
   * @name emojiKeyInput is the state that is being set/updated.
   */

  handleEmojiInput = e => {
    this.setState({
      emojiKeyInput: e.target.value
    });
  };

  /**
   * @func emojiOutput
   * This function sole purpose is to send the emoji that has been selected by the user.
   */

  emojiOutput = e => {
    const { getEmoji } = this.props;
    var emoji = e.target.id;

    /**
     * @prop @func getEmoji
     * This @prop is a function the developer must used to retrieve emoji selected by user.
     * The developer must create a function that will set the state every time emoji has been selected.
     */

    getEmoji(emoji);
  };

  /**
   * @func sortEmojis
   * This function sole purpose is to sort the entire emoji JSON file to each category.
   */

  sortEmojis = () => {
    let emojis = require("./emojis.json");
    let smileyData = [],
      flagsData = [],
      travelData = [],
      objectsData = [],
      foodData = [],
      animalsData = [],
      activityData = [],
      symbolsData = [];

    for (var key in emojis) {
      if (key === "smileys_people") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          smileyData.push([key, obj[key]]);
        }
      } else if (key === "animals_nature") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          animalsData.push([key, obj[key]]);
        }
      } else if (key === "food_drinks") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          foodData.push([key, obj[key]]);
        }
      } else if (key === "activity") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          activityData.push([key, obj[key]]);
        }
      } else if (key === "travel_places") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          travelData.push([key, obj[key]]);
        }
      } else if (key === "objects") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          objectsData.push([key, obj[key]]);
        }
      } else if (key === "symbols") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          symbolsData.push([key, obj[key]]);
        }
      } else if (key === "flags") {
        let obj = {};
        obj = emojis[key];
        for (var key in obj) {
          flagsData.push([key, obj[key]]);
        }
      }
    }

    this.setState({
      smileys_people: smileyData,
      animals_nature: animalsData,
      food_drinks: foodData,
      activity: activityData,
      travel_places: travelData,
      objects: objectsData,
      symbols: symbolsData,
      flags: flagsData
    });
  };

  emojiDisplay = () => {
    const {
      smileys_people,
      animals_nature,
      food_drinks,
      activity,
      travel_places,
      objects,
      symbols,
      flags,
      emojiKeyInput
    } = this.state;

    const { useDefaultStyle, eClass, eStyle } = this.props;
    const defaultStyle = {
      position: "fixed",
      width: "70%",
      height: "55px",
      margin: "-1% 0 0 -1.25%",
      paddingTop: "10px",
      paddingLeft: "3.5%"
    };

    return (
      <div>
        <div
          className={eClass ? eClass : "emoji-search"}
          style={useDefaultStyle ? defaultStyle : eStyle}
        >
          <Input
            placeholder="Search Emoji"
            id="emoji-input"
            style={
              useDefaultStyle
                ? {
                    width: "800px"
                  }
                : eStyle
            }
            value={emojiKeyInput}
            onChange={this.handleEmojiInput}
          />
        </div>
        <div className="emoji-content">
          <div>
            <div className="title">
              <h3>Smiley's {"&"} People</h3>
            </div>
            {smileys_people.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Animals {"&"} Nature</h3>
            </div>
            {animals_nature.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Food {"&"} Drinks</h3>
            </div>
            {food_drinks.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Activity</h3>
            </div>
            {activity.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Travel {"&"} Places</h3>
            </div>
            {travel_places.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Objects</h3>
            </div>
            {objects.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Symbols</h3>
            </div>
            {symbols.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <div className="title">
              <h3>Flags</h3>
            </div>
            {flags.map((el, idx) => {
              if (el[0].includes(emojiKeyInput)) {
                return (
                  <span
                    className="emoji-icon"
                    key={idx}
                    id={el[1]}
                    onClick={this.emojiOutput}
                  >
                    {el[1]}
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  componentWillMount() {
    this.sortEmojis();
  }

  render() {
    const { emojiDisplay } = this;
    const { overlayStyle, trigger, placement, overlayClass, autoAdjustOverflow, arrowPointAtCenter} = this.props;
    const defaultStyle = {
      width: "69.45%",
      maxHeight: "400px",
      overflow: "scroll",
      minHeight: "100px",
      overflowX: "hidden"
    };
    return (
      <div className="message-form">
        <Popover
          content={emojiDisplay()}
          overlayStyle={overlayStyle ? overlayStyle : defaultStyle}
          trigger={trigger ? trigger : "click"}
          overlayClassName={overlayClass ? overlayClass : null}
          placement={placement ? placement : "topRight"}
          autoAdjustOverflow={!autoAdjustOverflow ? autoAdjustOverflow : true}
          arrowPointAtCenter={arrowPointAtCenter ? arrowPointAtCenter : false}
        >
          <div className="emoji-container" />
        </Popover>
      </div>
    );
  }
}
