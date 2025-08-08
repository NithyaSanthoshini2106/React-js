import React from 'react'

class Movies extends React.Component{
    movie_Name="War2";
    actors="HR&NTR";
    movie_Image="https://media.gettyimages.com/id/1458877007/photo/wwii-m4-sherman-tank-crew-on-d-day.jpg?s=612x612&w=gi&k=20&c=f70k8RvNm2PImtacFDlg63pnq0sNGVTObrZGqze-6Fc="

    render(){
        return <div>
                    <h2>Movies Component</h2>
                    <h3>Movies Name:{this.movie_Name}</h3>
                    <img src={this.movie_Image} alt = 'War2'/>
                </div>
    }
}
export default Movies