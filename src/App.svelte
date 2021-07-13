<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import AboutWebsite from "./routes/AboutWebsite.svelte";

    export let url = "";
  </script>

<Router url="{url}">
    <nav>
        <div class="logo-wrapper">
            <Link to="/" title="Home page">
                <img src="images/me_logo2.png" alt="A circle with the letters J H on top of it." />
            </Link>
        </div>
        <ul>
            <li>
                <Link class="header-link" to="/" title="Home page">Home</Link>
            </li>
            <li>
                <Link class="header-link" to="about" title="About page">About</Link>
            </li>
            <li>
                <!-- TODO: Update with newest resume -->
                <a class="header-link" href="https://drive.google.com/file/d/1GcPOF6HMZw7Vx1i0eet_ebTCNUVxxGAd/view?usp=sharing" target="resume" title="Resume">
                    Resume
                </a>
            </li>
            <li>
                <Link class="header-link" to="about-website" title="This website">This Website</Link>
            </li>
            <li>
                <a class="header-link" href="https://www.linkedin.com/in/joshuahunt88/" target="linkedIn" title="LinkedIn">
                    LinkedIn
                </a>
            </li>
        </ul>
    </nav>
    <div>
        <Route path="about" component="{About}" />
        <Route path="about-website" component="{AboutWebsite}" />
        <Route path="/" component="{Home}" />
    </div>
</Router>

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

    ul li {
        list-style: none;
        display: inline;
    }

    :global(a) {
        color: #fff;
        margin: 0 10px;
        text-decoration: none;
    }

    :global(a):hover {
        text-decoration: underline;
    }
</style>


