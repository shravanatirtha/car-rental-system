import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { useFavor } from "../../contexts/FavorContext";
import { useQuery } from "react-query";

import { fetchProductList } from "../../api";

function Navbar() {
  const { loggedIn, user, setMySearched, setMyInputBool } = useAuth();
  const { items } = useBasket();
  const { favors, myHearthSvg, myCartSvg, myProfileSvg } = useFavor();

  const { isLoading, error, data } = useQuery("products", fetchProductList);
  if (isLoading) return "Loading...";
  if (error) return "an aerror occured";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const mySearchWord = e.target.value.toLowerCase();
    if (mySearchWord && mySearchWord !== "") {
      setMyInputBool(true);
      const mySearchResults = data.filter((item) =>
        item.title.toLowerCase().includes(mySearchWord)
      );
      setMySearched(mySearchResults);
    } else {
      setMyInputBool(false);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          {/* <img src="https://ik.imagekit.io/tirthashravana/Pathberries/logo192.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653399773059" className={styles.logo}/> */}
          <Link to="/berryride">Berry</Link>
          <Link to="/berryride" className={styles.green}>
            Ride
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/berryride">Store</Link>
          </li>
          <li>
            <Link to="/berryride/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarFormContainer}>
        <form action="">
          <FormControl id="search">
            <InputGroup>
              <Input
                className={styles.searchInput}
                type="search"
                placeholder="Search..."
                onChange={handleSearchSubmit}
              />
              <InputRightElement
                children={
                  <span className={styles.SearchFormSubmit}>&#128269;</span>
                }
              />
            </InputGroup>{" "}
          </FormControl>
        </form>
      </div>
      <div className={styles.right}>
        {!loggedIn && (
          <>
            <Link to="/berryride/signin">
              <Button className={styles.registerBtns}>
                Login
              </Button>
            </Link>
            <Link className="registerLink" to="/berryride/signup">
              <Button className={styles.registerBtns}>
                Register
              </Button>
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            {favors.length > 0 && (
              <Link to="/berryride/favor">
                <Button colorScheme="purple" variant="outline">
                  {myHearthSvg}
                  <sup>{favors.length}</sup>
                </Button>
              </Link>
            )}
            {items.length > 0 && (
              <Link to="/berryride/basket">
                <Button colorScheme="purple" variant="outline">
                  {myCartSvg} <sup>{items.length}</sup>
                </Button>
              </Link>
            )}
            {user?.role === "admin" && (
              <Link to="/berryride/admin">
                <Button colorScheme="purple" variant="outline" fontSize="small">
                  Admin
                </Button>
              </Link>
            )}
            <Link to="/berryride/profile">
              <Button colorScheme="purple">{myProfileSvg}</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
