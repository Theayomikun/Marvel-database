const characters=[
    {
        author:"GROOT",
        img:"groot.jpeg",
        superpowers:" Superhuman strength to lift and break; a durability of dense wood; ability to extend body, generate flowers, twigs and leaves; light generation; regenerative healing factor; talented combatant. ",
        description:"This Marvel hero may act like a teen and lack the ability to speak, but that doesn’t make his super powers any less extraordinary",
        year:1960,
        source:"This Marvel hero may act like a teen and lack the ability to speak, but that doesn’t make his super powers any less extraordinary",
        weapons:"His powers"
    },
    {
        author:"CAPTAIN AMERICA",
        img:"cap.jpeg",
        superpowers:"Strength, agility, stamina, healing ability, expert tactician, martial artist, indestructible shield.",
        description:"The First Avenger by age, Captain America actually joined the team in their early years after he broke out of a block of ice from the Arctic.",
        year:1941,
        source:"Injected with Super-Soldier Serum.",
        weapons:"Vibranium shield"  
    },
    {
        author:"IRON MAN",
        img:"iron.jpeg",
        superpowers:"Genius-level intellect, multiple powered armor suits, ability to fly.",
        description:"When he’s not flying alongside them in his custom power armor, Anthony Edward “Tony” Stark is the Avengers’ billionaire backer and one of America’s greatest philanthropists",
        year:1963,
        source:"From his suit",
        weapons:"Repulsor rays, uni-beam projector, lasers"  
    },
    {
        author:"DAREDEVIL",
        img:"dare.jpeg",
        superpowers:"Superhuman, radar senses, skilled martial artist and marksman, stickfighter, detective.",
        description:"The Devil of Hell’s Kitchen. He might beat you and break your bones, but this hellish protector of south-side New York firmly believes in the fairness of the law. When he’s not harassing New York’s underworld, he’s protecting the innocent and the abused in the courthouses as attorney, Matt Murdock",
        year:1964,
        source:" Radioactive isotope",
        weapons:"His manrikigusari"  
    },
    {
        author:"ULTRON",
        img:"ultron.jpeg",
        superpowers:"Strength, speed, stamina, genius-level artificial intelligence, makes calculations with superhuman speed and accuracy, nigh indestructibility via adamantium bodies, flight.",
        description:"Ultron was destined to be evil the moment he was turned on. Arguably the world’s most massive hypocrite since for all his contempt for humanity, he personifies the worst aspects of human nature.",
        year:1968,
        source:"Built by Henry Pym.",
        weapons:"Repulsor, plasma weapons"  
    },
    {
        author:"THE WINTER SOLDIER",
        img:"bucky.jpeg",
        superpowers:"Energy blasts, superhuman strength, martial artist, speed, healing, stamina.",
        description:"World War II veteran and best friend to Steve Rogers, Bucky Barnes was long presumed dead before becoming the Winter Soldier. After falling from a plane and being found by the Soviet Union, and HYDRA, Barnes was experimented on and granted superhuman abilities and a new cybernetic limb.",
        year:1941,
        source:"Injected with the infinity formula",
        weapons:"Snipers, rifles"  
    }
]

const img=document.getElementById("img")
const author=document.getElementById("name")
const superpowers=document.getElementById("superpowers")
const description=document.getElementById("description")
const source=document.getElementById("power-source")
const year=document.getElementById("year")
const weapons=document.getElementById("weapons")

const prevButton=document.getElementById("prev-button")
const nextButton=document.getElementById("next-button")
const randomButton=document.getElementById("rdm-button")


let currentCharacters=0
window.addEventListener("DOMContentLoaded",function(){
    getCharacters()
})
prevButton.addEventListener("click",function(){
    currentCharacters--
    if(currentCharacters<0){
        currentCharacters=characters.length-1
    }
    getCharacters()
})
nextButton.addEventListener("click",function(){
    currentCharacters++
    if(currentCharacters>characters.length-1){
        currentCharacters=0
    }
    getCharacters()
})
randomButton.addEventListener("click",function(){
    currentCharacters=Math.floor(Math.random()*characters.length)
    getCharacters()
})

function getCharacters(){
    const item=characters[currentCharacters]
    img.src=item.img
    author.innerText="NAME: "+item.author
    description.innerText="Description: "+ item.description
    year.innerText="Year: "+item.year
    weapons.textContent="Weapons: "+item.weapons
    source.innerText="Source of power: "+item.source
    superpowers.innerText="Superpowers: "+item.superpowers
}