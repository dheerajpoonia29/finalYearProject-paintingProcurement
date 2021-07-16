import "../css/helio.css";
import "../css/footer.css";

function Footer() {
    return(
        <div>
            <div className="spacer"></div>
            <footer id="footer">
                <div class="container">
                    <ul class="icons">
                        <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
                    </ul>
                </div>
                <div class="copyright">
                    Made by DynamicCrew
                </div>
            </footer>
        </div>
    )
}

export default Footer;