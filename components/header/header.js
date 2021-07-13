const template = document.createElement('template');
template.innerHTML = `
<style>
    nav {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color:  #395B50;
    }

    .logo-wrapper {
        flex: 1;
    }

    .logo {
        margin: 1rem;
    }

    .logo:hover {
        cursor: pointer;
    }

    ul li {
        list-style: none;
        display: inline;
    }

    a {
        color: #fff;
        margin: 0 10px;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
<head>
    <nav>
        <div class="logo-wrapper">
            <a href="../home/index.html">
                <img class="logo" src="../../assets/me_logo2.png" />
            </a>
        </div>
        <ul>
            <li>
                <a href="../home/index.html">
                    Home
                </a>
            </li>
            <li>
                <a href="../about/about.html">
                    About
                </a>
            </li>
            <li>
                <a href="#">
                    Resume
                </a>
            </li>
            <li>
                <a href="../this-website/this-website.html">
                    This Website
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/joshuahunt88/" target="linkedIn">
                    LinkedIn
                </a>
            </li>
        </ul>
    </nav>
</head>
`
class Header extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

customElements.define('header-component', Header);
