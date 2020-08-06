const http = require('https')
var myFormRef = null;

const handleSubmit = function(event){
    event.preventDefault();
    var options = {
        "method": "POST",
        "port": null,
        "path": "/.netlify/functions/email",
        "headers": {
            "content-type": "application/json",
            "content-length": "69"
        }
        };

        var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            myFormRef.reset()
        });
        });

        req.write(JSON.stringify(Object.fromEntries(new FormData(event.target))));
        req.end();
}


const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form ref={(el) => myFormRef = el} onSubmit={handleSubmit}>
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
