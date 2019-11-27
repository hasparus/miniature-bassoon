/** @jsx jsx */

import { render } from "react-dom";
import { jsx } from "theme-ui";

const menuId = `menu`;

const strokeWidth = 1;
const boldStroke = strokeWidth * 1.25;

function HamburgerLinks() {
  return (
    <div
      role="group"
      sx={{
        marginLeft: "auto",
        [`#${menuId}:target ~ &`]: {
          [`> a > svg`]: {
            ".HamburgerLinks__BunTop": {
              d: 'path("M 0 4 A 1 0, 0 0 1, 10 4 Z")',
              transform: "rotate(-45deg) translate(9%, 5%)",
              strokeWidth: boldStroke
            },
            ".HamburgerLinks__Meat": {
              strokeWidth: strokeWidth / 3,
              opacity: 0,
              d: 'path("M 4 6 L 4 6")',
              transformOrigin: "50% 50% 0",
              transform: "rotate(-45deg) translate(0, -20%)"
            },
            ".HamburgerLinks__BunBottom": {
              transform: "rotate(45deg) translate(-2%, -21%)"
            }
          },
          [`:hover > a:first-of-type > svg`]: {
            transform: "none",
            ".HamburgerLinks__BunTop": {
              transform: "rotate(-45deg)"
            },
            ".HamburgerLinks__BunBottom": {
              transform: "rotate(45deg)"
            }
          }
        }
      }}
    >
      <a href={"#" + menuId}>
        <svg
          viewBox="-1 -1 12 12"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          sx={{
            width: 32,
            height: 32,
            transition: "transform 150ms ease-out",
            ":focus, :hover": {
              transform: "scaleY(0.8)"
            },
            "> *": {
              transition:
                "transform 250ms ease-out, " +
                "stroke-width 250ms ease-out, " +
                "opacity 250ms linear, " +
                "d 200ms linear"
            },
            ".HamburgerLinks__BunBottom, .HamburgerLinks__BunTop": {
              transformOrigin: "50% 50% 0"
            }
          }}
        >
          <path
            className="HamburgerLinks__BunTop"
            d="M 0 4 A 1 0.6, 0 0 1, 10 4 Z"
            stroke="sandybrown"
            fill="sandybrown"
          />
          <path
            className="HamburgerLinks__Meat"
            // x1="0"
            // y1="6"
            // x2="10"
            // y2="6"
            d="M 0 6 L 10 6"
            strokeWidth={boldStroke}
            stroke="brown"
          />
          <line
            className="HamburgerLinks__BunBottom"
            x1="0"
            y1="8.25"
            x2="10"
            y2="8.25"
            strokeWidth={boldStroke}
            stroke="sandybrown"
          />
        </svg>
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        href="/#"
        sx={{
          display: "none",
          [`#${menuId}:target ~ div > &`]: {
            position: "absolute",
            top: 0,
            right: 0,
            display: "block",
            width: 32,
            height: "100%"
          }
        }}
      />
    </div>
  );
}

interface NavheaderProps {}
function Navheader(_: NavheaderProps) {
  return (
    <header sx={{ display: "flex", position: "relative" }}>
      <nav
        id={menuId}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translateY(-200px)",
          transition: "transform 0.9s cubic-bezier(.49,.1,.48,1.3)",
          ":target": {
            transform: "translateY(0)"
          }
        }}
      >
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <HamburgerLinks />
    </header>
  );
}

const rootElement = document.getElementById("root");
render(<Navheader />, rootElement);
