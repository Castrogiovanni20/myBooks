import React from 'react';
import './PanelAdd.css'

class PanelAdd extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            raiting: ''
        }
    }

    onChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }
    
    onChangeImage = (e) => {
        this.setState({image: e.target.value})
    } 

    onChangeRaiting = (e) => {
        const raiting = parseInt(e.target.value)
        this.setState({raiting: raiting})
    } 

    onSubmit = (e) => {
        e.preventDefault()
        const title = this.state.title
        const image = this.state.image
        const raiting = this.state.raiting

        this.props.onAdd({
            title: title,
            image: image,
            raiting: raiting
        })
        this.props.onCancel()
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Titulo del libro</label><br/>
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>

                        <p>
                            <label>Nombre de imagen</label><br/>
                            <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                        </p>

                        <p>
                            <label>Clasificacion</label><br/>
                            <select onChange={this.onChangeRaiting}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>                     
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd