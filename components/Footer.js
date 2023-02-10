const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="copyright">
            <li><a href='https://ko-fi.com/N4N5784YU' style={{"text-decoration": "none"}} target='_blank'><img height='36' style={{border:'0px',height:'36px'}} src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' border='0'  alt='Buy Me a Coffee at ko-fi.com' /></a></li>
            </ul>
            <ul className="icons">
                <li><a href="mailto:andrew@nemcrunchers.dev" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="https://github.com/andrewschmidt-a" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/andrew-b-schmidt/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                
            </ul>
            <ul className="copyright">
                <li>&copy; nemcrunchers.dev</li><li>Made with <a src="https://nextjs.org/">Next.js</a></li>
            </ul>
        </div>
        <script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Buy me a coffee', '#29abe0', 'N4N5784YU');kofiwidget2.draw();</script> 
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0264661648520729"
        crossOrigin="anonymous"
      ></script>
      <script src="/static/js/woopra.js"></script>
    </footer>
)

export default Footer
