import React from "react"
import typography, { rhythm, scale } from "utils/typography"
import logo from "images/gatsby-monogram.jpg"
import Link from "react-router/lib/Link"
import DocumentIcon from "react-icons/lib/go/file-text"
import CodeIcon from "react-icons/lib/go/code"
import PencilIcon from "react-icons/lib/go/pencil"
import PersonIcon from "react-icons/lib/md/person"
import { presets } from 'glamor'

import "css/prism-coy.css"

// Import Futura PT typeface
import "fonts/Webfonts/futurapt_book_macroman/stylesheet.css"
import "fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css"
import "fonts/Webfonts/futurapt_demi_macroman/stylesheet.css"
import "fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css"

// Other fonts
import "typeface-tex-gyre-schola"
import "typeface-space-mono"

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <div
          css={{
            background: `#f4dfc6`,
          }}
        >
          <div
            css={{
              maxWidth: 700,
              margin: `0 auto`,
              padding: `${rhythm(1 / 3)} ${rhythm(3 / 4)}`,
              fontFamily: typography.options.headerFontFamily.join(`,`),
            }}
          >
            <Link
              to="/"
              css={{
                color: `inherit`,
                display: `inline-block`,
                textDecoration: `none`,
              }}
            >
              <img
                src={logo}
                css={{
                  display: `inline-block`,
                  height: rhythm(1.4),
                  marginBottom: 0,
                  marginRight: rhythm(1 / 4),
                  verticalAlign: `middle`,
                }}
              />
              <h1
                css={{
                  ...scale(3 / 5),
                  display: `inline-block`,
                  lineHeight: rhythm(1.5),
                  verticalAlign: `middle`,
                  margin: 0,
                }}
              >
                Gatsby
              </h1>
            </Link>
            <ul
              css={{
                display: `none`,
                [presets.Tablet]: {
                  display: `inline-block`,
                  lineHeight: rhythm(1.5),
                  margin: 0,
                  padding: 0,
                  listStyle: `none`,
                  marginLeft: rhythm(1),
                  verticalAlign: `bottom`,
                },
              }}
            >
              <li
                css={{
                  display: `inline-block`,
                  margin: 0,
                  marginRight: rhythm(1),
                }}
              >
                <Link
                  to="/docs/"
                  css={{
                    color: `inherit`,
                    textDecoration: `none`,
                  }}
                >
                  Docs
                </Link>
              </li>
              <li
                css={{
                  display: `inline-block`,
                  margin: 0,
                  marginRight: rhythm(1),
                }}
              >
                <Link
                  to="/tutorial/"
                  css={{
                    color: `inherit`,
                    textDecoration: `none`,
                  }}
                >
                  Tutorial
                </Link>
              </li>
              <li
                css={{
                  display: `inline-block`,
                  margin: 0,
                  marginRight: rhythm(1),
                }}
              >
                <Link
                  to="/community/"
                  css={{
                    color: `inherit`,
                    textDecoration: `none`,
                  }}
                >
                  Community
                </Link>
              </li>
              <li
                css={{
                  display: `inline-block`,
                  margin: 0,
                  marginRight: rhythm(1),
                }}
              >
                <Link
                  to="/blog/"
                  css={{
                    color: `inherit`,
                    textDecoration: `none`,
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
            <a
              href="https://github.com/gatsbyjs/gatsby"
              css={{
                color: typography.options.bodyColor,
                display: `inline-block`,
                float: `right`,
                lineHeight: rhythm(1.5),
                marginRight: rhythm(1/2),
                textDecoration: `none`,
                verticalAlign: `bottom`,
              }}
            >
              Github
            </a>
          </div>
        </div>
        <div
          className={`main-body`}
          css={{
            maxWidth: 700,
            margin: `${rhythm(-1/2)} auto ${rhythm(2)} auto`,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            paddingTop: 0, //rhythm(1/2),
            [presets.Tablet]: {
              margin: `0 auto`,
            },
          }}
        >
          {this.props.children}
        </div>
        <div
          css={{
            ...scale(-1/5),
            position: `fixed`,
            display: `flex`,
            justifyContent: `space-around`,
            alignItems: `flex-end`,
            bottom: 0,
            left: 0,
            right: 0,
            height: rhythm(2.5),
            background: `#f4dfc6`,
            fontFamily: typography.options.headerFontFamily.join(`,`),
            [presets.Tablet]: {
              display: `none`,
            },
          }}
        >
          <Link
            to="/docs/"
            css={{
              color: typography.options.bodyColor,
              marginBottom: 2,
              textDecoration: `none`,
              textAlign: `center`,
            }}
          >
            <DocumentIcon
              css={{
                fontSize: rhythm(1),
              }}
            />
            <div>
              Docs
            </div>
          </Link>
          <Link
            to="/tutorial/"
            css={{
              color: typography.options.bodyColor,
              marginBottom: 2,
              textDecoration: `none`,
              textAlign: `center`,
            }}
          >
            <CodeIcon
              css={{
                fontSize: rhythm(1),
              }}
            />
            <div>
              Tutorial
            </div>
          </Link>
          <Link
            to="/community/"
            css={{
              color: typography.options.bodyColor,
              marginBottom: 2,
              textDecoration: `none`,
              textAlign: `center`,
            }}
          >
            <PersonIcon
              css={{
                fontSize: rhythm(5/6),
                position: `relative`,
                right: -4,
              }}
            />
            <PersonIcon
              css={{
                fontSize: rhythm(5/6),
              }}
            />
            <PersonIcon
              css={{
                fontSize: rhythm(5/6),
                position: `relative`,
                left: -4,
              }}
            />
            <div>
              Community
            </div>
          </Link>
          <Link
            to="/blog/"
            css={{
              color: typography.options.bodyColor,
              marginBottom: 2,
              textDecoration: `none`,
              textAlign: `center`,
            }}
          >
            <PencilIcon
              css={{
                fontSize: rhythm(1),
              }}
            />
            <div>
              Blog
            </div>
          </Link>
        </div>
      </div>
    )
  },
})