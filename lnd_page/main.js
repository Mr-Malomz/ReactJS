
class Header extends React.Component {
    render() {
        const head ={
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            color: 'white'
        };

        const container = {
            maxWidth: '960px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            margin: 'auto',
            textAlign: 'center'
        }

        const fullscreen ={
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100vh',
            overFlow: 'hidden'
        };

        const vid = {
            background:'no-repeat center',
            backgroundSize: 'cover',
            width: '50%',
            height: '100%',
            minWidth: '100%',
            minHeigt: '100%'
        };

        const header_over = {
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            background: '#225470',
            zIndex: 1,
            opacity: 0.89
        };

        const header_cont = {
            zIndex: 2,
        };

        const header_cont_main = {
            fontSize: '50px',
            marginBottom: 0,
        };

        const header_cont_body = {
            fontSize: '1.5rem',
            display: 'block',
            paddingBottom: '2rem'
        };

        const btn = {
            background: '#34b3a0',
            color: 'white',
            fontSize: '1.2rem',
            padding: '1rem 2rem',
            textDecoration: 'none'
        };

        return (
            <header style={Object.assign(head, container)}>
                <div style={fullscreen}>
                    <img src={this.props.photo} style={vid} alt="Unsplash" />
                </div>
                <div style={header_over}></div>
                <div style={header_cont}>
                    <h1 style={header_cont_main}>{this.props.title}</h1>
                    <p style={header_cont_body}>{this.props.content}</p>
                    <a href="#" 
                    className="btn" 
                    style={btn}
                    onClick={this.props.handleClick} 
                    >
                    {this.props.btn}
                    </a>
                </div>
            </header>
        );
    }
};

class Footer extends React.Component {


    render() {
        

        const sect = {
            textAlign: 'center',
            display : this.props.footer
        };

        const sect_inner = {
            background: 'black',
            color: 'white',
            textAlign: 'center',
            display : this.props.footer
        };

        return (
            <div className="footer">
                <section style={sect}>
                    <h3>{this.props.title[0]}</h3>
                    <p>{this.props.content}</p>
                </section>
                <section style={sect_inner}>
                    <h3>{this.props.title[1]}</h3>
                    <p>{this.props.content}</p>
                </section>
            </div>
        );
    }
};

class Container extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            display: 'none'
        }
        //binding the event to allow the this keyword work
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(display)  {
        this.setState({display: 'block'})
    };

    render() {
        const style_c = {
            margin: 0,
            fontSize: '1rem',
            lineHeight: 1.5,
            overFlowX: 'hidden'
        };

        return (
            <div style={style_c}>
                <Header 
                    photo = 'https://source.unsplash.com/random'
                    title = 'ReactJS Unchained!'
                    content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ut mollitia aperiam, id omnis tempore a ullam rerum inventore asperiores.'
                    btn = 'Read More'
                    handleClick = {this.handleClick}
                />
                <Footer 
                    title = {['Props', 'State']}
                    content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe debitis possimus eaque, sequi exercitationem, enim illum doloremque earum quaerat culpa, facere inventore minima non! Non similique pariatur enim est id quae voluptates rerum, maiores molestias officiis animi. Culpa tempora suscipit, facere nemo accusamus provident vero consequatur at perferendis, placeat veritatis?'
                    footer = {this.state.display}
                />
                
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('container'));

