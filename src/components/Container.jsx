import Nav from './Nav';

const Container = (props) => {
    return (
        <div>
            <Nav/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container;