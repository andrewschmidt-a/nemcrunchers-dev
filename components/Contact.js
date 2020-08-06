const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="/.netlify/functions/email">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="inner">
                        <header className="">
                            <h2>“We have to stop optimizing for programmers and start optimizing for users.”</h2>
                        </header>
                        <p>~ Jeff Atwood</p>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
