<script>
    export let weatherName
</script>

<div class="container {weatherName}">
    <slot />
</div>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}

/* Background gradients here: https://codepen.io/akhil_001/pen/XNqQjw */
/* Background gradients here: https://codepen.io/web-dev123/pen/MvaXwq */
.container.sunny {
    color: white;
    background: #ffbd3f;
    background: -webkit-linear-gradient(#ffbd3f, #fff097); 
    background: -o-linear-gradient(#ffbd3f, #fff097); 
    background: -moz-linear-gradient(#ffbd3f, #fff097); 
    background: linear-gradient(#ffbd3f, #fff097);
}

.container.stormy {
    color: white;
    background: #626262;
    background: -webkit-linear-gradient(#626262, #00000059);
    background: -o-linear-gradient(#626262, #00000059);
    background: -moz-linear-gradient(#626262, #00000059);
    background: linear-gradient(#626262, #00000059);
}

.container.breezy {
    color: white;
    background: linear-gradient( to top right,rgba(156,204,101 ,1) 0%, rgba(38,198,218 ,1) 50%)
}

.container.cloudy {
    color: white;
    background: #ffbd3f;
    background: -webkit-linear-gradient(#ffbd3f, #fff097);
    background: -o-linear-gradient(#ffbd3f, #fff097);
    background: -moz-linear-gradient(#ffbd3f, #fff097);
    background: linear-gradient(#3fa6ff, #3fffff59);
}

.container.frost {
    background: #29386f;
    background: -webkit-linear-gradient(#29386f, #b8f5ff); 
    background: -o-linear-gradient(#29386f, #b8f5ff); 
    background: -moz-linear-gradient(#29386f, #b8f5ff); 
    background: linear-gradient(#29386f, #b8f5ff);
}

.container.night {
    color: white;
    background: #0F2129;
    background: -webkit-linear-gradient(#0F2129, #47334A); 
    background: -o-linear-gradient(#0F2129, #47334A); 
    background: -moz-linear-gradient(#0F2129, #47334A); 
    background: linear-gradient(#0F2129, #47334A);
}

.container::after {
    content: '';
    width: 500px;
    height: 400px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: absolute;
    z-index: 2;
    bottom: -137px;
    left: -20px;
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(39deg);
}

.container.night::after {
    background: #2f2b3c;
    background: -webkit-linear-gradient(#2f2b3c, #091b21);
    background: -o-linear-gradient(#2f2b3c, #091b21);
    background: -moz-linear-gradient(#2f2b3c, #091b21);
    background: linear-gradient(#2f2b3c, #091b21);
    opacity: 1;
}

.container.frost::after {
    background: #f3ffff;
    background: -webkit-linear-gradient(#f3ffff, #9af2ff);
    background: -o-linear-gradient(#f3ffff, #9af2ff);
    background: -moz-linear-gradient(#f3ffff, #9af2ff);
    background: linear-gradient(#f3ffff, #9af2ff);
    opacity: 1;
}

.container.sunny::after {
    background: #e0d7a4;
    background: -webkit-linear-gradient(#e0d7a4, #e7c77a);
    background: -o-linear-gradient(#e0d7a4, #e7c77a);
    background: -moz-linear-gradient(#e0d7a4, #e7c77a);
    background: linear-gradient(#e0d7a4, #e7c77a);
    opacity: 1;
}

.container.cloudy::after {
    background: #e0d7a4;
    background: -webkit-linear-gradient(#e0d7a4, #e7c77a);
    background: -o-linear-gradient(#e0d7a4, #e7c77a);
    background: -moz-linear-gradient(#e0d7a4, #e7c77a);
    background: linear-gradient(#e0d7a4, #e7c77a);
    opacity: 1;
}

.container.stormy::after {
    background: #4e4e4e;
    background: -webkit-linear-gradient(#4e4e4e, #7e7c77);
    background: -o-linear-gradient(#4e4e4e, #7e7c77);
    background: -moz-linear-gradient(#4e4e4e, #7e7c77);
    background: linear-gradient(#4e4e4e, #7e7c77);
    opacity: 1;
}

.container::before {
    content: '';
    width: 500px;
    height: 260px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: absolute;
    z-index: 2;
    bottom: 41px;
    right: -215px;
    -ms-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
    transform: rotate(-55deg);
}

.container.night::before {
    background: #2f2b3c;
    background: -webkit-linear-gradient(#2f2b3c, #091b21);
    background: -o-linear-gradient(#2f2b3c, #091b21);
    background: -moz-linear-gradient(#2f2b3c, #091b21);
    background: linear-gradient(#2f2b3c, #091b21);
    opacity: 1;
}

.container.frost::before {
    background: #f3ffff;
    background: -webkit-linear-gradient(#f3ffff, #9af2ff);
    background: -o-linear-gradient(#f3ffff, #9af2ff);
    background: -moz-linear-gradient(#f3ffff, #9af2ff);
    background: linear-gradient(#f3ffff, #9af2ff);
    opacity: 1;
}

.container.sunny::before {
    background: #e0d7a4;
    background: -webkit-linear-gradient(#e0d7a4, #e7c77a);
    background: -o-linear-gradient(#e0d7a4, #e7c77a);
    background: -moz-linear-gradient(#e0d7a4, #e7c77a);
    background: linear-gradient(#e0d7a4, #e7c77a);
    opacity: 1;
}

.container.cloudy::before {
    background: #e0d7a4;
    background: -webkit-linear-gradient(#e0d7a4, #e7c77a);
    background: -o-linear-gradient(#e0d7a4, #e7c77a);
    background: -moz-linear-gradient(#e0d7a4, #e7c77a);
    background: linear-gradient(#e0d7a4, #e7c77a);
    opacity: 1;
}

.container.stormy::before {
    background: #4e4e4e;
    background: -webkit-linear-gradient(#4e4e4e, #7e7c77);
    background: -o-linear-gradient(#4e4e4e, #7e7c77);
    background: -moz-linear-gradient(#4e4e4e, #7e7c77);
    background: linear-gradient(#4e4e4e, #7e7c77);
    opacity: 1;
}

</style>