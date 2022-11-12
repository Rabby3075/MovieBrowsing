import { useNavigate,Link } from "react-router-dom";
const Navbar = ({searchText,SetSearchText}) => {
  const navigate = useNavigate();

  const updateSearchText = (e) =>{
    if(e.target.value !== ''){
    navigate('/search')
    SetSearchText(e.target.value)
    }
    else{
      navigate('/')
      SetSearchText(e.target.value)
    }
  }

  const search = (e) =>{
    if(document.getElementById('search').value !== ''){
    navigate('/search')
    SetSearchText(document.getElementById('search').value)
    }
    else{
      navigate('/')
      SetSearchText(document.getElementById('search').value)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="d-flex">
              <input
                class="form-control me-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              <button class="btn btn-outline-success" onClick={search}>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
