import React from "react";
import NavTabs from "./NavTabs";
const Header = ({currentPage, handlePageChange}) => {
    return (
        <header>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header