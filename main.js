const bg = [
    'red',  'blue','aqua', 'orange','springgreen', 

    'chartreuse','crimson','deeppink','indigo','magenta',  'teal',
    ]


const btn = document.getElementById('btn')

const bgcolo2 = document.getElementById('bgcolo2')

const color = document.querySelector('.color')

btn.addEventListener('click', function () {

    const  RandomNumber= getRandomNumber();
    console.log(RandomNumber)

    document.body.style.backgroundColor = bg[RandomNumber];
    color.innerHTML.style = bg[RandomNumber]
    document.querySelector('.color').style.color =bg[RandomNumber]

    color.textContent =  bg[RandomNumber]
    


    console.log(color.textContent =  bg[RandomNumber])

        document.getElementById('btn').style.color= bg[RandomNumber]
        document.getElementById('btn').style.backgroundColor= '#333'
        document.getElementById('bgcolo2').style.backgroundColor = bg[RandomNumber]


    console.log(`  number  ${RandomNumber}  is ${bg[RandomNumber]} got picked`)
});
function getRandomNumber() {
    return  Math.floor(Math.random() * bg.length)
}
