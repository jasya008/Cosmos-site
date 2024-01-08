import mercuryTexture from './img/mercury.jpg'
import venusTexture from './img/venus.jpg'
import earthTexture from './img/earth.jpg'
import marsTexture from './img/mars.jpg'
import jupiterTexture from './img/jupiter.jpg'
import saturnTexture from './img/saturn.jpg'
import uranusTexture from './img/uranus.jpg'
import neptuneTexture from './img/neptune.jpg'
import plutoTexture from './img/pluto.jpg'

const random = (a, b) => a + Math.random() * b
const randomInt = (a, b) => Math.floor(random(a, b))
const randomColor = () =>
    `rgb(${randomInt(80, 50)},${randomInt(80, 50)},${randomInt(80, 50)})`;
const shuffle = (a) => {
    const temp = a.slice(0)
    for (let i = temp.lenght - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [temp[i], temp[j]] = [temp[j], temp[i]]
    }

    return temp
}

const texture = shuffle([mercuryTexture, venusTexture, earthTexture, marsTexture, jupiterTexture, saturnTexture, uranusTexture, neptuneTexture, plutoTexture])

const planetData = []
const totalPlanets = 9
for (let index = 0; index < totalPlanets; index++){
    planetData.push({
        id: index,
        color: randomColor(),
        xRadius: (index + 1.5) * 4,
        zRadius: (index + 1.5) * 2,
        size: random(0.5, 1),
        speed: random(0.1, 0.4),
        offset: random(0, Math.PI * 2),
        rotationSpeed: random(0.01, 0.04),
        textureMap: texture[index] 
    })
}

export default planetData