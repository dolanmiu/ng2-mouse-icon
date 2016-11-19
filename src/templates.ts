export const STYLES = `
@mixin animation-name($name) {
    -webkit-animation-name: $name;
    animation-name: $name;
}

@mixin animation-duration($duration) {
    -webkit-animation-duration: $duration;
    animation-duration: $duration;
}

@mixin animation-timing-function($function) {
    -webkit-animation-timing-function: $function;
    animation-timing-function: $function;
}

@mixin animation-delay($delay) {
    -webkit-animation-delay: $delay;
    animation-delay: $delay;
}

@mixin animation-iteration-count($count) {
    -webkit-animation-iteration-count: $count;
    animation-iteration-count: $count;
}

@mixin animation-play-state($state) {
    -webkit-animation-play-state: $state;
    animation-play-state: $state;
}

.mouse-icon {
    position: relative;
    border: 2px solid;
    border-radius: 16px;
    height: 50px;
    width: 30px;
    margin: 0 auto;
    display: block;
    .wheel {
        position: relative;
        border-radius: 10px;
        background: white;
        width: 4px;
        height: 10px;
        top: 4px;
        margin-left: auto;
        margin-right: auto;
        @include animation-name(drop);
        @include animation-duration(1s);
        @include animation-timing-function(linear);
        @include animation-delay(0s);
        @include animation-iteration-count(infinite);
        @include animation-play-state(running);
    }
}

@-webkit-keyframes drop {
    0% {
        top: 5px;
        opacity: 0;
    }
    30% {
        top: 10px;
        opacity: 1;
    }
    100% {
        top: 25px;
        opacity: 0;
    }
}

@keyframes drop {
    0% {
        top: 5px;
        opacity: 0;
    }
    30% {
        top: 10px;
        opacity: 1;
    }
    100% {
        top: 25px;
        opacity: 0;
    }
}
`