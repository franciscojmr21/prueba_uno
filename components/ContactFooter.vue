<template>
    <footer class="footer py-5" id="contact_us">
    <div class="footer-icons d-flex justify-content-around">
        <a href="https://twitter.com/sevillaciudad" target="_blank" rel="noopener noreferrer" class="nav-icon">
            <button type="button" class="btn btn-primary position-relative" data-mdb-ripple-unbound="true" style="background-color: #55acee;">
                Twitter
            </button>
        </a>
        <a  target="_blank" rel="noopener noreferrer" class="nav-icon">
            <button type="button" class="btn btn-primary position-relative" data-mdb-ripple-unbound="true" style="background-color: rgb(59, 89, 152);">
                Facebook
            </button>
        </a>
        <a href="https://www.instagram.com/ayto_sevilla/" target="_blank" rel="noopener noreferrer" class="nav-icon">
            <button type="button" class="btn btn-primary position-relative" data-mdb-ripple-unbound="true" style="background-color: rgb(172, 43, 172);">
                Instagram
            </button>
        </a>
        <a href="https://es.linkedin.com/company/ayuntamiento-de-sevilla-" target="_blank" rel="noopener noreferrer" class="footer-icon">
            <button type="button" class="btn btn-primary position-relative" data-mdb-ripple-unbound="true" style="background-color: rgb(0, 130, 202);">
                Linkedin-in
            </button>
        </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContactFooter',
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

:root{
  --mainOrange:rgba(241, 99, 64, 0.7);
  --transparentOrange:rgba(241, 99, 64, 0.7);
  --mainWhite:#FFFFFF;
  --mainGrey:#9c9c9c;
  --mainBlack:#000000;
  --mainGrey:rgb(216, 214, 214);
  --mainYellow:#e3b505;
}

/* footer icons */
.footer{
  background: var(--mainBlack);
  }
  .footer-icon{
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--mainYellow);
    transition: all 1s ease-in-out;
  }
  .footer-icon:hover{
    color: var(--mainBlue);
  }

</style>
