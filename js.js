function isArc(){
    return !!getComputedStyle(document.documentElement)
        .getPropertyValue('--arc-palette-background')
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("text").focus()

    let isArcYet=false
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
    let gradd = gradients[Math.floor(Math.random() * gradients.length)];

    setInterval(() => {
        // on each load select a random gradient from an array of gradients and make it the background
        if (window.location.href.includes("?grad")) {
            document.getElementById("the").style.border = "2px solid #ffffff"
             // gradients[Math.floor(Math.random() * gradients.length)];
            if (isArc()){
                isArcYet = true;
                document.body.style.background = "linear-gradient(-45deg, var(--arc-background-gradient-color1), var(--arc-palette-maxContrastColor), var(--arc-palette-foregroundPrimary), var(--arc-background-gradient-color0), var(--arc-background-gradient-overlay-color1), var(--arc-background-gradient-color1))"}
            else {
                if (isArcYet)
                    document.body.style.background = "linear-gradient(-45deg, var(--arc-background-gradient-color1), var(--arc-palette-maxContrastColor), var(--arc-palette-foregroundPrimary), var(--arc-background-gradient-color0), var(--arc-background-gradient-overlay-color1), var(--arc-background-gradient-color1))"
                else
                    document.body.style.background = gradd
            }
            document.body.style.backgroundSize = "400% 400%";
            document.title = "Home (g)"
        } else {
            if (isArc()){
                isArcYet = true;
                document.querySelector("h1").style.backgroundImage = "linear-gradient(-45deg, var(--arc-background-gradient-color1), var(--arc-palette-maxContrastColor), var(--arc-palette-foregroundPrimary), var(--arc-background-gradient-color0), var(--arc-background-gradient-overlay-color1), var(--arc-background-gradient-color1))"}
            else {
                if (isArcYet)
                    document.querySelector("h1").style.backgroundImage = "linear-gradient(-45deg, var(--arc-background-gradient-color1), var(--arc-palette-maxContrastColor), var(--arc-palette-foregroundPrimary), var(--arc-background-gradient-color0), var(--arc-background-gradient-overlay-color1), var(--arc-background-gradient-color1))"
                else
                    document.querySelector("h1").style.backgroundImage = gradd
            }
            document.title = "Home"
        }
    }, 100)

    console.log(
        getComputedStyle(document.documentElement)
        .getPropertyValue('--arc-palette-background') ? 'Is Arc' : 'Is Not Arc'
    )

    // setInterval(() => {
    //         if (isArc() && !window.location.href.includes("?grad")) {
    //             document.getElementById("the-header").style.backgroundImage = "linear-gradient(-45deg, var(--arc-background-gradient-color1), var(--arc-palette-maxContrastColor), var(--arc-palette-foregroundPrimary), var(--arc-background-gradient-color0), var(--arc-background-gradient-overlay-color1), var(--arc-background-gradient-color1))"
    //         }
    //         else if (isArc())
    //         {document.getElementById("the-header").style.backgroundImage = "none";
    //         document.getElementById("the-header").style.color = "black";}
    //     }, 100
    // )
});


function toggleTooltip() {
    var span = document.querySelector("#help")
    span.classList.toggle("cooltipz--visible");
}

document.addEventListener('DOMContentLoaded', function() {
    var isDark = localStorage.getItem('isDark');
    if (isDark === 'true') {
        toggleLDM()
    }
})

function toggleLDM() {
    var root = document.documentElement;

    var mainBackgroundLight = getComputedStyle(root).getPropertyValue('--main-background-light');
    var mainBackgroundDark = getComputedStyle(root).getPropertyValue('--main-background-dark');
    var mainTextLight = getComputedStyle(root).getPropertyValue('--main-text-light');
    var mainTextDark = getComputedStyle(root).getPropertyValue('--main-text-dark');
    var mainBackground2Light = getComputedStyle(root).getPropertyValue('--main-background2-light');
    var mainBackground2Dark = getComputedStyle(root).getPropertyValue('--main-background2-dark');
    var shadowColorLight = getComputedStyle(root).getPropertyValue('--shadow-color-light');
    var shadowColorDark = getComputedStyle(root).getPropertyValue('--shadow-color-dark');

    root.style.setProperty('--main-background-light', mainBackgroundDark);
    root.style.setProperty('--main-background-dark', mainBackgroundLight);
    root.style.setProperty('--main-text-light', mainTextDark);
    root.style.setProperty('--main-text-dark', mainTextLight);
    root.style.setProperty('--main-background2-light', mainBackground2Dark);
    root.style.setProperty('--main-background2-dark', mainBackground2Light);
    root.style.setProperty('--shadow-color-light', shadowColorDark);
    root.style.setProperty('--shadow-color-dark', shadowColorLight);

    if (root.style.getPropertyValue('--is-dark') === 'true') {
        root.style.setProperty('--is-dark', 'false');
    } else {
        root.style.setProperty('--is-dark', 'true');
    }

    var isDark = localStorage.getItem('isDark');
    if (isDark === 'true') {
        localStorage.setItem('isDark', 'false');
    } else {
        localStorage.setItem('isDark', 'true');
    }

    document.getElementById("text").focus()
}