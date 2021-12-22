import React from 'react'
import '../css/styles.css'
import Layout from '../components/Layout'
//dudu 22

const MyApp = ({ Component, pageProps }) => {
    return (
        <div >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}
export default MyApp