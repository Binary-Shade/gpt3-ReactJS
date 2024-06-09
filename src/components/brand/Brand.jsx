import React from 'react'
import './brand.css'
import './brandImport'
import { atlassian, dropbox, google, shopify, slack } from './brandImport'

const Brand = () => {
  return (
    <div className="gpt3__brand section__margin">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  )
}

export default Brand