import Navigation from './Navigation'

function Header({currentPage, handlePageChange}) {
    return (<header>
        <h1>Lara Grocke</h1>

        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    
    </header>)
}

export default Header;