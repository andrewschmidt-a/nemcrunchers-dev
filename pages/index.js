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
                            <p>A quiz to determine your communication style preferences. Modelled after survey designed by Duane Elmer.</p>
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
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Azure Pipelines Generator</h3>
                            <p>A utility designed to provide YAML abstraction layer to Azure Pipelines</p>
                        </header>
                        <Link href="/"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>3M Themed CMS system</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/"><a className="link primary"></a></Link>
                    </article>
                </section>
            </div>

        </div>
    </Layout>
)
