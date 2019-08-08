import React from 'react'

export default class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (

      <div className="resultSet">

        {this.props.artists.map((artist, idx) => {

          return (

            <section className="card" key={`${this.props.category}-${idx}`}>

              {this.props.category == "primarySections" ? <img className="card-image" src="https://images.pexels.com/photos/1845085/pexels-photo-1845085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/> : ''}

              {this.props.category == "anySections" ? <img className="card-image" src="https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260"/> : ''}

              {this.props.category == "uniqueWords" ? <img className="card-image" src="https://images.pexels.com/photos/1849200/pexels-photo-1849200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/> : ''}

              <section className="card-content">

                <section className="artist-details">

                  <p className="artist-rank">#{idx+1}</p>

                  <p className="artist-name">{artist[0]}</p>

                  {this.props.category == "primarySections" ? <p className="artist-score">{artist[1]} Primary Lyrical Sections</p> : ''}

                  {this.props.category == "anySections" ? <p className="artist-score">{artist[1]} Actual Lyrical Sections</p> : ''}

                  {this.props.category == "uniqueWords" ? <p className="artist-score">{artist[1]} Unique Words</p> : ''}

                </section>

              </section>

            </section>

          )

        })}

      </div>

    )

  }

}
