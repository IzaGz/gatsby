/* @flow weak */
import toml from 'toml'
import fs from 'fs'
import os from 'os'
import _ from 'lodash'

import buildCSS from './build-css'
import buildHTML from './build-html'
import buildProductionBundle from './build-javascript'
import postBuild from './post-build'
import bootstrap from '../bootstrap'
import { pagesDB } from './globals'

function customPost (program, callback) {
  const directory = program.directory
  let customPostBuild
  //try {
    //// $FlowIssue - https://github.com/facebook/flow/issues/1975
    //const gatsbyNodeConfig = require(`${directory}/gatsby-node`)
    //customPostBuild = gatsbyNodeConfig.postBuild
  //} catch (e) {
    //if (e.code !== `MODULE_NOT_FOUND` && !_.includes(e.Error, `gatsby-node`)) {
      //console.log(`Failed to load gatsby-node.js, skipping custom post build script`, e)
    //}
  //}

  if (customPostBuild) {
    console.log(`Performing custom post-build steps`)

    customPostBuild(pagesDB(), (error) => {
      if (error) {
        console.log(`customPostBuild function failed`)
        callback(error)
      }
      return callback()
    })
  }

  return callback()
}

function post (program, callback) {
  console.log(`Copying assets`)

  //postBuild(program, (error) => {
    //if (error) {
      //console.log(`failed to copy assets`)
      //return callback(error)
    //}

  return customPost(program, callback)
  //})
}

function bundle (program, callback) {
  console.log(`Compiling production bundle.js`)

  buildProductionBundle(program, (error, stats) => {
    // Write out stats.json file for easy analysis of module & chunk structure
    // in http://webpack.github.io/analyse/ and
    // https://alexkuz.github.io/stellar-webpack/
    //console.log(`${os.tmpdir()}/gatsby-build-${new Date().toJSON()}---stats.json`)
    //fs.writeFileSync(
      //`${os.tmpdir()}/gatsby-build-${new Date().toJSON()}---stats.json`,
      //JSON.stringify(stats.toJson())
    //)
    if (error) {
      console.log(`failed to compile bundle.js`)
      return callback(error)
    }
    return callback()
  })
}

function html (program, callback) {
  const directory = program.directory

  return bootstrap(program, (err) => {
    console.log(`Generating CSS`)
    buildCSS(program, (cssError) => {
      if (cssError) {
        console.log(`Failed at generating styles.css`)
        return callback(cssError)
      }

      return bundle(program, (javascriptError) => {
        if (javascriptError) {
          console.log(`Failed at building Javascript bundles`)
          return callback(javascriptError)
        }
        console.log(`Generating Static HTML`)
        // Write out pages data to file so it's available to the static-entry.js
        // file.
        fs.writeFileSync(
          `${program.directory}/public/tmp-pages.json`,
          JSON.stringify([...pagesDB().values()])
        )
        return buildHTML(program, (htmlError) => {
          if (htmlError) {
            console.log(`Failed at generating HTML`)
            return callback(htmlError)
          }
          return post(program, callback)
        })
      })
    })
  })
}

module.exports = html