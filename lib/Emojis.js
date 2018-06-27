"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

require("./css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emojis = function (_Component) {
  _inherits(Emojis, _Component);

  /**
   * @constructor
   * The State Keys provided are keys used to sort the objects in the emoji's JSON file.
   */

  function Emojis() {
    _classCallCheck(this, Emojis);

    var _this = _possibleConstructorReturn(this, (Emojis.__proto__ || Object.getPrototypeOf(Emojis)).call(this));

    _this.state = {
      emojiKeyInput: "",
      smileys_people: {},
      animals_nature: {},
      food_drinks: {},
      activity: {},
      travel_places: {},
      objects: {},
      symbols: {},
      flags: {},
      defaulted: true
    };
    return _this;
  }

  /**
   * @func handleEmojiInput
   * This function sole purpose is to set the state of the value every time the user type in a character.
   * @name emojiKeyInput is the state that is being set/updated.
   */

  _createClass(Emojis, [{
    key: "handleEmojiInput",
    value: function handleEmojiInput(e) {
      this.setState({
        emojiKeyInput: e.target.value
      });
    }
  }, {
    key: "emojiOutput",


    /**
     * @func emojiOutput
     * This function sole purpose is to send the emoji that has been selected by the user.
     */

    value: function emojiOutput(e) {
      var getEmoji = this.props.getEmoji;

      var emoji = e.target.id;

      /**
       * @prop @func getEmoji
       * This @prop is a function the developer must used to retrieve emoji selected by user.
       * The developer must create a function that will set the state every time emoji has been selected.
       */

      getEmoji(emoji);
    }
  }, {
    key: "sortEmojis",


    /**
     * @func sortEmojis
     * This function sole purpose is to sort the entire emoji JSON file to each category.
     */

    value: function sortEmojis() {
      var emojis = require("./emojis.json");
      var smileyData = [],
          flagsData = [],
          travelData = [],
          objectsData = [],
          foodData = [],
          animalsData = [],
          activityData = [],
          symbolsData = [];

      for (var key in emojis) {
        if (key === "smileys_people") {
          var obj = {};
          obj = emojis[key];
          for (var key in obj) {
            smileyData.push([key, obj[key]]);
          }
        } else if (key === "animals_nature") {
          var _obj = {};
          _obj = emojis[key];
          for (var key in _obj) {
            animalsData.push([key, _obj[key]]);
          }
        } else if (key === "food_drinks") {
          var _obj2 = {};
          _obj2 = emojis[key];
          for (var key in _obj2) {
            foodData.push([key, _obj2[key]]);
          }
        } else if (key === "activity") {
          var _obj3 = {};
          _obj3 = emojis[key];
          for (var key in _obj3) {
            activityData.push([key, _obj3[key]]);
          }
        } else if (key === "travel_places") {
          var _obj4 = {};
          _obj4 = emojis[key];
          for (var key in _obj4) {
            travelData.push([key, _obj4[key]]);
          }
        } else if (key === "objects") {
          var _obj5 = {};
          _obj5 = emojis[key];
          for (var key in _obj5) {
            objectsData.push([key, _obj5[key]]);
          }
        } else if (key === "symbols") {
          var _obj6 = {};
          _obj6 = emojis[key];
          for (var key in _obj6) {
            symbolsData.push([key, _obj6[key]]);
          }
        } else if (key === "flags") {
          var _obj7 = {};
          _obj7 = emojis[key];
          for (var key in _obj7) {
            flagsData.push([key, _obj7[key]]);
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
    }
  }, {
    key: "emojiDisplay",
    value: function emojiDisplay() {
      var _this2 = this;

      var _state = this.state,
          smileys_people = _state.smileys_people,
          animals_nature = _state.animals_nature,
          food_drinks = _state.food_drinks,
          activity = _state.activity,
          travel_places = _state.travel_places,
          objects = _state.objects,
          symbols = _state.symbols,
          flags = _state.flags,
          emojiKeyInput = _state.emojiKeyInput;
      var _props = this.props,
          useDefaultStyle = _props.useDefaultStyle,
          eClass = _props.eClass,
          eStyle = _props.eStyle;


      var defaultStyle = {
        position: "fixed",
        width: "70%",
        height: "55px",
        margin: "-1% 0 0 -1.25%",
        paddingTop: "10px",
        paddingLeft: "3.5%"
      };

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          {
            className: eClass ? eClass : "emoji-search",
            style: !useDefaultStyle ? eStyle : defaultStyle
          },
          _react2.default.createElement(_antd.Input, {
            placeholder: "Search Emoji",
            id: "emoji-input",
            style: useDefaultStyle ? {
              width: "800px"
            } : eStyle,
            value: emojiKeyInput,
            onChange: this.handleEmojiInput
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "emoji-content" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Smiley's ",
                "&",
                " People"
              )
            ),
            smileys_people.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Animals ",
                "&",
                " Nature"
              )
            ),
            animals_nature.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Food ",
                "&",
                " Drinks"
              )
            ),
            food_drinks.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Activity"
              )
            ),
            activity.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Travel ",
                "&",
                " Places"
              )
            ),
            travel_places.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Objects"
              )
            ),
            objects.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Symbols"
              )
            ),
            symbols.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement(
                "h3",
                null,
                "Flags"
              )
            ),
            flags.map(function (el, idx) {
              if (el[0].includes(emojiKeyInput)) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "emoji-icon",
                    key: idx,
                    id: el[1],
                    onClick: _this2.emojiOutput
                  },
                  el[1]
                );
              }
            })
          )
        )
      );
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.sortEmojis();
    }
  }, {
    key: "render",
    value: function render() {
      var emojiDisplay = this.emojiDisplay;
      var _props2 = this.props,
          overlayStyle = _props2.overlayStyle,
          trigger = _props2.trigger,
          placement = _props2.placement,
          overlayClass = _props2.overlayClass,
          autoAdjustOverflow = _props2.autoAdjustOverflow,
          arrowPointAtCenter = _props2.arrowPointAtCenter;

      var defaultStyle = {
        width: "69.45%",
        maxHeight: "400px",
        overflow: "scroll",
        minHeight: "100px",
        overflowX: "hidden"
      };
      return _react2.default.createElement(
        "div",
        { className: "message-form" },
        _react2.default.createElement(
          _antd.Popover,
          {
            content: emojiDisplay(),
            overlayStyle: overlayStyle ? overlayStyle : defaultStyle,
            trigger: trigger ? trigger : "click",
            overlayClassName: overlayClass ? overlayClass : null,
            placement: placement ? placement : "topRight",
            autoAdjustOverflow: !autoAdjustOverflow ? autoAdjustOverflow : true,
            arrowPointAtCenter: arrowPointAtCenter ? arrowPointAtCenter : false
          },
          _react2.default.createElement("div", { className: "emoji-container" })
        )
      );
    }
  }]);

  return Emojis;
}(_react.Component);

exports.default = Emojis;
