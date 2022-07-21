import { useEffect, useState } from 'react'

function Card() {

    const [lists, setList] = useState([])

    useEffect(() => {

        const peticion = async () => {

            try {
                const repuesta = await fetch('url-api')
                const data = await repuesta.json()
                setList(data.results)
                console.log(data.results)
            } catch (error) {

                console.log(error)
            }

        }

        peticion();


    }, [])
}