<template>
  <div class="bg-gray-900 text-white h-screen">
    <div class="wrapper">
      <h1>coming soon<span class="dot">.</span></h1>
      <p>BIGA KITCHEN website.</p>
      <div class="icons mt-5">
        <a href="https://www.instagram.com/pizzeriabiga/"><i class="fa fa-instagram"></i></a>
        <!-- <a href=""><i class="fa fa-youtube-play"></i></a>
        <a href=""><i class="fa fa-paper-plane"></i></a> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name : "wait"
}
</script>
<style lang="css" scoped>
.fa {
  display: inline!important;
}

@keyframes fadeIn {
from {top: 20%; opacity: 0;}
to {top: 100; opacity: 1;}

}

@-webkit-keyframes fadeIn {
from {top: 20%; opacity: 0;}
to {top: 100; opacity: 1;}

}

.wrapper {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
-webkit-transform: translate(-50%, -50%);
animation: fadeIn 1000ms ease;
-webkit-animation: fadeIn 1000ms ease;

}

h1 {
font-size: 50px;
font-family: 'Poppins', sans-serif;
margin-bottom: 0;
line-height: 1;
font-weight: 700;
}

.dot {
color: #4FEBFE;
}

p {
text-align: center;
margin: 18px;
font-family: 'Muli', sans-serif;
font-weight: normal;

}

.icons {
text-align: center;

}

.icons i {
color: #00091B;
background: #fff;
height: 15px;
width: 15px;
padding: 13px;
margin: 10px 10px;
border-radius: 50px;
border: 2px solid #fff;
transition: all 200ms ease;
text-decoration: none;
position: relative;
}

.icons i:hover, .icons i:active {
color: #fff;
background: none;
cursor: pointer !important;
transform: scale(1.2);
-webkit-transform: scale(1.2);
text-decoration: none;

}
</style>