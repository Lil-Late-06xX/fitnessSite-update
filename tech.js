"strice mode"

const grab = document.querySelector('.tech-page')
const user = document.querySelector('#name')
const weight = document.querySelector('#weight')

const height = document.querySelector('#height')

const bmi = document.querySelector('.result')
const h4 = document.querySelector('.h4')
const bmiR = document.querySelector('.bmr')
const head = document.querySelector('.headBMI')
const nameB = document.querySelector('.nameBMI')

const btn2 = document.querySelector('#btnBMR')
const btn = document.querySelector('#btncalc')
const btn3 = document.querySelector('#btnconverter')

const age = document.querySelector('.age')
const btndrk = document.querySelector('.dark')
const body = document.querySelector('.body')
const convert = document.querySelector('.convert')

const h3 = document.querySelector('#h3')


const iptshape = document.querySelectorAll('.inputk')
const allbtn = document.querySelectorAll('.btn')



btn.addEventListener('click' , ()=>{

        let nameInput = user.value
        let weightUser = weight.value
        let heightUser = height.value
       
        


        let res = (weightUser/heightUser/heightUser)*10000

        head.innerHTML=`BMI :&nbsp;${Math.round(res)}`      

        if (res < 18.5){
            
            nameB.innerHTML = `Hey&nbsp;${nameInput}  your BMI results: UNDERWEIGHT &nbsp Enter bellow details for your BMR 'Basic Metabolic Rate' <br><br> &#9758; <a href="./" class="ankerBMR" >Click For More About BMR</>`
        
        } else if (res>18.5 && res<24.9 ){

            nameB.innerHTML = `Hey&nbsp;${nameInput} your BMI results: HEALTHY &nbsp Enter bellow details for your BMR 'Basic Metabolic Rate' <br><br> &#9758; <a href="./"class="ankerBMR" >Click For More About BMR</>`

        } else if (29.9>res && res>25){

            nameB.innerHTML = `Hey&nbsp;${nameInput}  your BMI results: OVERWEIGHT&nbsp Enter bellow details for your BMR 'Basic Metabolic Rate' <br><br> &#9758; <a href="./"class="ankerBMR" >Click For More About BMR</>`

        } else {

            nameB.innerHTML = `Hey&nbsp;${nameInput}  your BMI results: OBESE  &nbsp Enter bellow details for your BMR 'Basic Metabolic Rate'  <br><br> &#9758; <a href="./"class="ankerBMR" >Click For More About BMR</>`
        }









        bmiR.style.visibility="visible"
        bmiR.style.height="fit-content"




         
btn2.addEventListener('click', ()=>{
    let age1 = age.value
    

    let bmr = (66.5+13.8*(weightUser)+5*(heightUser))/(6.8*(age1))

    alert(bmr)

    
})






          



          






})

















grab.addEventListener('mousedown' , ()=>{
    document.addEventListener('mousemove' , drag )
   
})


drag = (e)=>{
    let a = window.getComputedStyle(grab)

    let left = parseInt( a.left)
    let top = parseInt( a.top)

    


    let movex = e.movementX
    let movey = e.movementY



    const poo = top + movey
    const koo = left + movex




    grab.style.left = `${koo}px`
    grab.style.top = `${poo}px`


}


grab.addEventListener('mouseup' , ()=>{
    document.removeEventListener('mousemove', drag)
})



/*

btndrk.addEventListener('click',()=>{


    body.classList.toggle('bodydrk')

    btndrk.classList.toggle('darktoggle')

    grab.classList.replace('tech-page','tech-pagedrk')

    bmiR.classList.replace('bmr','bmrdrk')

    convert.classList.replace('convert','convertdrk')



    h3.classList.replace('h3','h3drk')


    for (const x of iptshape){
        x.classList.replace('inputk' , 'inputkdrk')
    }


    for (const y of allbtn){
        y.classList.replace('btn' , 'btnall')
    }


})

*/