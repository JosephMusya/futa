import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <nav>
            <div className={styles.logo} >                
                <img src="https://imgs.search.brave.com/-t_3yWQZrNEbpkoUctm9DIiHuCGwwGwJS6Z6sMJiwiQ/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAy/ODQvMTUyOS81NTMz/L3Byb2R1Y3RzL0Zv/b3RiYWxsXzEwMjR4/MTAyNEAyeC5qcGc_/dj0xNTc3OTMzMjE3" alt="Soccer ball" />
                <strong>Futa</strong>
            </div>
            <div className={styles.headings}>
                <Link to='/'>Matches</Link>
                <Link to='/leaques'>Leagues</Link>
                <Link to='/news'>News</Link>
                <Link to='/competitions'>Competition</Link>
                <Link to='/teams'>Teams</Link>
            </div>
        </nav>
    )
}

export default Navbar;
