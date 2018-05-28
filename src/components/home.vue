<template>
  <div class="home">
    <div id="particles-js"></div>
    <div class="logo">
      <img src="../../static/image/home-logo.png" alt="" class="logo-image">
    </div>
    <ul class="nav">
      <li class="nav-item">
        <a href="#/introduce">项目介绍</a>
      </li>
      <li class="nav-item">
        <a href="#/upload">数字存证</a>
      </li>
      <li class="nav-item">
        <a href="#/">区块链浏览器</a>
      </li>
      <li class="nav-item">
        <a href="#/user/index">个人中心</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable */
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 100,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "Window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    })
  }
}
</script>

<style scoped>
#particles-js {
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 1200px;
  height: 100%;
  background: url("https://s10.mogucdn.com/mlcdn/c45406/180510_68b4e1l7cjad79642bab999f6dgih_2638x1753.jpg") no-repeat;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 400px;
  height: 165px;
  z-index: 20;
  position: relative;
  margin: 200px auto 0;
}

.logo-image {
  display: block;
  width: 100%;
}

.nav {
  position: relative;
  z-index: 20;
  width: 400px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  height: 50px;
  color: #ef3892;
  font-size: 16px;
}

.nav-item {
  line-height: 50px;
}

.nav-item a {
  color: #ef3892;
  font-size: 16px;
  display: block;
}

.nav-item a:hover {
  border-top: 2px solid #fff;
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>

