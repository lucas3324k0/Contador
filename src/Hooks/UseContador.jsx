import { useState } from "react";

const UseContador = (data) => {

    const [dia, setDia] = useState()
    const [horas, setHoras] = useState()
    const [minutos, setMinutos] = useState()
    const [segundos, setSegundos] = useState()

    const countDown = () => {
        const contDate = new Date(data).getTime()
        const now = new Date().getTime()

        const intervalo = contDate - now

        const segundos = 1000

        const minutos = segundos * 60
        const hora = minutos * 60
        const dia = hora * 24

        const dayNumber = Math.floor(intervalo / dia)
        const hourNumber = Math.floor((intervalo % dia) / hora)
        const minutosNumber = Math.floor((intervalo % hora) / minutos)
        const segundosNumber = Math.floor((intervalo % minutos) / segundos)

        setDia(dayNumber)
        setHoras(hourNumber)
        setMinutos(minutosNumber)
        setSegundos(segundosNumber)
    };

    setInterval(countDown, 1000)

    return [dia, horas, minutos, segundos];
}

export default UseContador
