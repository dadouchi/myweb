import React from 'react'
import Proptypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from "gatsby"
import './index.css'

import Header from '../components/header'
import SchoolCard from '../components/SchoolCard'
import WorkCard from '../components/WorkCard'
import SoftwareCard from '../components/SoftwareCard'
import AbilityCard from '../components/AbilityCard'

const Layout =({ children,data})=>(
    <div>
        <Helmet
        title={data.site.siteMetadata.title}
        meta={[
            {name:'description',content:'Sample'},
            {name:'keywords',content:'sample,something'}
        ]}
        />
       <Header />
       <Title />
       <SchoolCard />
       <WorkCard />
       <SoftwareCard/>
       <AbilityCard/>
        {children()}
    </div>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
query SiteTitleQuery2 {
    site{
        siteMetadata{
            title
        }
    }
}
`