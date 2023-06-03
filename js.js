function isArc(){
    return !!getComputedStyle(document.documentElement)
        .getPropertyValue('--arc-palette-background')
}
document.addEventListener('DOMContentLoaded', function() {
    // on each load select a random gradient from an array of gradients and make it the background
    if (window.location.href.includes("?grad")) {
        document.getElementById("the").style.border = "2px solid #ffffff"
        // var gradients = [
        //     'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        //     'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        //     'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        //     'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
        //     'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        //     'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
        //     'linear-gradient(135deg, #8BC6EC 0%, #8a8dd6 100%)',
        //     'linear-gradient(79deg, #FFDEE9 0%, #B5FFFC 100%)',
        //     'linear-gradient(79deg, #FFDEE9 0%, #B5FFFC 100%)',
        //     'linear-gradient(79deg, #FFDEE9 0%, #B5FFFC 100%)',
        //     'linear-gradient(79deg, #FFDEE9 0%, #B5FFFC 100%)'
        // ] // gradients till page 2 element 5 of https://cssgradient.io/gradient-backgrounds/ (inclusive)
        // gradients = [
        //     'linear-gradient(43deg, hsl(214, 100%, 25%) 0%, hsl(354, 85%, 55%) 46%, hsl(56, 100%, 80%) 100%)',
        //     'linear-gradient(43deg, hsl(214, 100%, 25%) 0%, hsl(354, 85%, 55%) 46%, hsl(56, 100%, 80%) 100%)',
        //     'linear-gradient(43deg, hsl(214, 100%, 25%) 0%, hsl(354, 85%, 55%) 46%, hsl(56, 100%, 80%) 100%)',
        //     'linear-gradient(90deg, hsl(185, 100%, 30%) 0%, hsl(303, 100%, 50%) 100%)',
        //     'linear-gradient(62deg, hsl(19, 100%, 55%) 0%, hsl(81, 100%, 50%) 100%)',
        //     'linear-gradient(45deg, hsl(175, 100%, 50%) 0%, hsl(30, 100%, 50%) 100%)',
        //     'linear-gradient(135deg, hsl(209, 60%, 45%) 0%, hsl(50, 100%, 50%) 100%)',
        //     'linear-gradient(79deg, hsl(17, 75%, 40%) 0%, hsl(180, 100%, 50%) 100%)',
        //     'linear-gradient(79deg, hsl(17, 70%, 40%) 0%, hsl(180, 100%, 50%) 100%)',
        //     'linear-gradient(79deg, hsl(17, 75%, 40%) 0%, hsl(180, 100%, 50%) 100%)',
        //     'linear-gradient(79deg, hsl(17, 75%, 40%) 0%, hsl(180, 100%, 50%) 100%)',
        //     'linear-gradient(120deg, hsl(227, 100%, 50%) 0%, hsl(314, 100%, 45%) 100%)',
        //     'linear-gradient(155deg, hsl(145, 100%, 60%) 0%, hsl(303, 100%, 65%) 100%)',
        //     'linear-gradient(200deg, hsl(160, 100%, 60%) 0%, hsl(338, 100%, 40%) 100%)',
        //     'linear-gradient(260deg, hsl(195, 100%, 50%) 0%, hsl(30, 100%, 45%) 100%)',
        //     'linear-gradient(310deg, hsl(120, 100%, 45%) 0%, hsl(270, 100%, 50%) 100%)'
        // ]; // too vibrant
        var gradients = [
            'linear-gradient(43deg, hsl(214, 70%, 40%) 0%, hsl(354, 60%, 50%) 46%, hsl(56, 50%, 70%) 100%)',
            'linear-gradient(43deg, hsl(214, 70%, 40%) 0%, hsl(354, 60%, 50%) 46%, hsl(56, 50%, 70%) 100%)',
            'linear-gradient(43deg, hsl(214, 70%, 40%) 0%, hsl(354, 60%, 50%) 46%, hsl(56, 50%, 70%) 100%)',
            'linear-gradient(90deg, hsl(185, 70%, 45%) 0%, hsl(303, 60%, 55%) 100%)',
            'linear-gradient(62deg, hsl(19, 60%, 60%) 0%, hsl(81, 60%, 60%) 100%)',
            'linear-gradient(45deg, hsl(175, 60%, 65%) 0%, hsl(30, 60%, 60%) 100%)',
            'linear-gradient(135deg, hsl(209, 40%, 60%) 0%, hsl(50, 60%, 65%) 100%)',
            'linear-gradient(79deg, hsl(17, 50%, 55%) 0%, hsl(180, 60%, 65%) 100%)',
            'linear-gradient(79deg, hsl(17, 50%, 55%) 0%, hsl(180, 60%, 65%) 100%)',
            'linear-gradient(79deg, hsl(17, 50%, 55%) 0%, hsl(180, 60%, 65%) 100%)',
            'linear-gradient(79deg, hsl(17, 50%, 55%) 0%, hsl(180, 60%, 65%) 100%)',
            'linear-gradient(120deg, hsl(227, 60%, 65%) 0%, hsl(314, 60%, 60%) 100%)',
            'linear-gradient(155deg, hsl(145, 60%, 75%) 0%, hsl(303, 60%, 75%) 100%)',
            'linear-gradient(200deg, hsl(160, 60%, 75%) 0%, hsl(338, 60%, 55%) 100%)',
            'linear-gradient(260deg, hsl(195, 60%, 65%) 0%, hsl(30, 60%, 60%) 100%)',
            'linear-gradient(310deg, hsl(120, 60%, 60%) 0%, hsl(270, 60%, 65%) 100%)'
        ];
        document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)];
        document.body.style.backgroundSize = "400% 400%";
    }

    console.log(
        getComputedStyle(document.documentElement)
        .getPropertyValue('--arc-palette-background') ? 'Is Arc' : 'Is Not Arc'
    )

    setInterval(()=>{
    if (isArc()){
        document.getElementById("the-header").style.backgroundImage = "linear-gradient(-45deg, var(--arc-background-gradient-color1), var(--arc-palette-maxContrastColor), var(--arc-palette-foregroundPrimary), var(--arc-background-gradient-color0), var(--arc-background-gradient-overlay-color1), var(--arc-background-gradient-color1))"
    }}, 100
    )
});