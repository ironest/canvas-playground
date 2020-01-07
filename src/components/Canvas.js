import React, {Component} from "react";
import ColourSelector from "./ColourSelector"

class Canvas extends Component {

    state = { hex: "#ffffff" }

    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.canvasRef);
    }

    onColourSelectorChange = (event) => {
        this.setState({hex: event.target.value});
    }

    render() {

        const {hex} = this.state;

        return(
            <div>
                <div>
                    <ColourSelector
                        onColourSelectorChange={this.onColourSelectorChange}
                        hex={hex}
                    />
                </div>
                <canvas
                    width="400px"
                    height="400px"
                    styles={{ border: "6px solid black" }}
                    ref={this.canvasRef}
                />
            </div>
        )
    }

}

export default Canvas;