
class Button extends React.Component {
    constructor() {
        super()

        this.state = { pressed: false }
    }

    render() {
        console.log('render')

        return <button
            id={this.props.id}
            className={`${this.props.className} ${this.state.pressed ? 'Button--invert' : ''}`}
            onMouseDown={() => {
                console.log('down')
                this.setState({ pressed: true })
            }}
            onMouseUp={() => {
                console.log('up')
                this.setState({ pressed: false })
            }}
        >{this.props.children}</button>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render([<Button id='1' className='Button'>hola button</Button>])