class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        // Add a way to navigate home
        // TODO: Add a way to navigate home
        // TODO: Add shadow DOM layer. a tag styles bleeding
        this.innerHTML = `
            <style>
                nav {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    background-color:  #395B50;
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
                    <ul>
                        <li>
                            <a href="pages/about/about.html">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="pages/this-website/this-website.html">
                                This Website
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </nav>
            </head>
        `;
    }
  }

  customElements.define('header-component', Header);
