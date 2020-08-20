import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/comm-styles.png  ')`}}>
                        <header className="major">
                            <h3>Communication Styles Inventory</h3>
                            <p>An assessment to determine your communication style preferences. Modelled after survey designed by Duane Elmer.</p>
                        </header>
                        <Link href="http://communication-styles-inventory.nemcrunchers.dev"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/serenity.png')`}}>
                        <header className="major">
                            <h3>3M IoT Platform</h3>
                            <p>Ingestion platform for commercialization of products. Open-sourced and widely available.</p>
                        </header>
                        <Link href="https://github.com/3mcloud/azure-iot-platform-dotnet"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic01.png  ')`}}>
                        <header className="major">
                            <h3>Moran - Data Layer</h3>
                            <p>Moran is a simple JavaScript Datalayer to pull in data from various sources at run-time or compilation.</p>
                        </header>
                        <Link href="https://www.npmjs.com/package/moran"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.png')`}}>
                        <header className="major">
                            <h3>Event Planning app</h3>
                            <p>Event Planning app for Global Friends, International student outreach</p>
                        </header>
                        <Link href="https://github.com/andrewschmidt-a/global-friends-app"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.png')`}}>
                        <header className="major">
                            <h3>Azure Pipelines Generator</h3>
                            <p>A utility designed to provide YAML abstraction layer to Azure Pipelines</p>
                        </header>
                        <Link href="https://github.com/andrewschmidt-a/azure-pipeline-generator"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.png')`}}>
                        <header className="major">
                            <h3>3M Themed CMS system</h3>
                            <p>Used JAMStack and Netlify CMS to create a 3M styled CMS for their Oral Care division.</p>
                        </header>
                        <Link href="https://github.com/andrewschmidt-a/3m-cms"><a className="link primary"></a></Link>
                    </article>
                </section>
            </div>

        </div>
    </Layout>
)
