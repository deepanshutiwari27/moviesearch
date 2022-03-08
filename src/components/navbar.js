import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  let navigate = useNavigate();
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const searchSubmit = clicked => {
		clicked.preventDefault();
		navigate('/search');
		setSearchText(clicked.target.value);
		
	};
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Search
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explore
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/action">Action</Link></li>
                <li><Link className="dropdown-item" to="/adventure">Adventure</Link></li>
                <li><Link className="dropdown-item" to="/family">Family</Link></li>
                <li><Link className="dropdown-item" to="/drama">Drama</Link></li>
                <li><Link className="dropdown-item" to="/crime">Crime</Link></li>
                <li><Link className="dropdown-item" to="/animation">Animation</Link></li>
                <li><Link className="dropdown-item" to="/documentary">Documentary</Link></li>
                <li><Link className="dropdown-item" to="/comedy">Comedy</Link></li>
                <li><Link className="dropdown-item" to="/history">History</Link></li>
                <li><Link className="dropdown-item" to="/fantasy">Fantasy</Link></li>
                <li><Link className="dropdown-item" to="/horror">Horror</Link></li>
                <li><Link className="dropdown-item" to="/music">Music</Link></li>
                <li><Link className="dropdown-item" to="/mystery">Mystery</Link></li>
                <li><Link className="dropdown-item" to="/romance">Romance</Link></li>
                <li><Link className="dropdown-item" to="/scifi">SciFi</Link></li>
                <li><Link className="dropdown-item" to="/thriller">Thriller</Link></li>
                <li><Link className="dropdown-item" to="/war">War</Link></li>
                <li><Link className="dropdown-item" to="/western">Western</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit" onClick={searchSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
