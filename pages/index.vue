<template>
  <header id="header" class="jquery-ripples">
      <div class="container">
        <div class="row height-90 align-items-center justify-content-center">
          <div class="col">
            <div class="banner text-center">
              <h1 class="display-1 text-capitalize underline w-5000 mx-auto">
                <strong class="title_sevilla">SEVILLA </strong> <small class="primary-color"><br>HAS A SPECIAL COLOR</small>
              </h1>
            </div>
  
          </div>
  
        </div>
      </div>
    <canvas width="700" height="627" style="position: absolute; inset: 0px; z-index: -1;"></canvas></header>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
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

body{
  background: url(https://velvetescape.com/wp-content/uploads/2014/12/IMG_6024-1-1280x920.jpg)center/cover fixed no-repeat;
  font-family: 'Roboto', sans-serif;
  color: var(--mainBlack);
}

html {
  height: 100%;
}

/*TITLE*/

#header {
  min-height: calc(100vh - 94px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://velvetescape.com/wp-content/uploads/2014/12/IMG_6024-1-1280x920.jpg../img/background.jpg)center/cover fixed no-repeat;
  position: relative;
}

.primary-color {
  color: var(--mainGrey);
}


.title_sevilla {
  color: var(--mainOrange);
}

.height-90 {
  min-height: calc(100vh - 94px);
}

.banner h1 {
  border-top: 6px dotted #C9C1AC;
  border-bottom: 6px dotted #C9C1AC;
  animation: fromLeft;
  animation-duration: 3s;
  animation-delay: 1s;
  opacity: 0;
  animation-fill-mode: forwards;

}

@keyframes fromLeft {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.main-btn {
  color: #D3325F;
  font-size: 2rem;
  border: 2px solid #D3325F;
  transition: all 1s ease-in-out;

}

.main-btn:hover {
  color: #242424;
  border: 2px solid #C9C1AC;
  background: #C9C1AC;

}

.sushi-btn {
  animation: fromRight;
  animation-duration: 4s;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;

}


@keyframes fromRight {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}



.header-link {
  display: inline-block;
  position: absolute;
  bottom: 5%;
  left: 50%;
  background: #C9C1AC;
  border: 3px solid #C9C1AC;
  border-radius: 10px;
  transition: all 2s ease;
  animation: fromBottom;
  animation-duration: 4s;
  animation-iteration-count: infinite
}

.header-link:hover {

  color: #242424;
}

@keyframes fromBottom {
  0% {
    transform: translateY(-10px);

  }
  50% {
    transform: translateY(10px)
  }

  100% {
    transform: translateY(-10px);

  }
}
</style>