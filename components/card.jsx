import { useEffect, useState } from 'react'
import '../src/theme.css'

function Card() {

  const [lists, setList] = useState([])

  useEffect(() => {

    const peticion = async () => {

      try {
        const repuesta = await fetch('https://rickandmortyapi.com/api/character')
        const data = await repuesta.json()
        setList(data.results)
        console.log(data.results)
      } catch (error) {

        console.log(error)
      }

    }

    peticion();


  }, [])

  return <div className='container'>
    {
      lists.map(item => {

        return (
          <span key={item.id}>


            <div className="card">
              <div className="card__header">
                <img src={item.image} alt="card__image" className="card__image" width="600" />
              </div>
              <div className="card__body">
                <span className="tag">{item.species}</span>
                <h4>{item.name}</h4>
                <p>{item.location.name}</p>
              </div>
              <div className="card__footer">
                <div className="user">
                  <img src={item.image} alt="card__image" className="user__image" width={30} height={30} />

                  <div className="user__info">
                    <h5>{item.status}</h5>
                    <small>{item.origin.name}</small>
                  </div>
                </div>
              </div>


            </div>

          </span>
        )

      })
    }
  </div>
}

export default Card



