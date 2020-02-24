import React from "react";
// import styled from "styled-components";

// const Icon = styled.label`
//   padding: 7px;
//   position: relative;
//   z-index: 1;
//   transition: 0.3s ease-out;
//   user-select: none;
//   padding: 0.6em 0.8em;
// `;

// const NavBarMenu = styled.ul`
//   background: #eee;
//   border-right: 1px solid darkgrey;
//   color: lightgray;
//   display: flex;
//   flex-direction: column;
//   font-family: Montserrat;
//   font-size: 2em;
//   height: 100vh;
//   left: 0;
//   list-style-type: none;
//   margin: 0;
//   padding: 3em 0 0 0;
//   position: fixed;
//   text-transform: uppercase;
//   top: 0;
//   transform: translateX(-100%);
//   transition: 0.3s ease-out;
//   width: 12em;
// `;

// const CheckboxMenu = styled.input`
//   display: none;

//   &:checked ~ ${NavBarMenu} {
//     transform: translateX(0);
//   }
// `;

// const NavBarMenuLink = styled.a`
//   color: grey;
//   display: block;
//   letter-spacing: 0.1em;
//   padding: 1em 2em;
//   text-decoration: none;
// `;

// const Header = styled.header`
//   display: flex;
//   border-bottom: 1px solid #ccc;
//   align-items: center;
// `;

// const HeaderStart = styled.div`
//   display: flex;
//   flex-grow: 1;
//   flex-basis: 0;
//   justify-content: flex-start;

//   & :first-child {
//     border-right: 1px solid #ccc;
//   }
// `;

// const HeaderEnd = styled.div`
//   display: flex;
//   flex-grow: 1;
//   flex-basis: 0;
//   justify-content: flex-end;

//   & :last-child {
//     border-left: 1px solid #ccc;
//   }
// `;

// const Link = styled.a`
//   color: black;
//   text-decoration: none;
//   padding: 1.2em 2em;
//   font-size: 0.9em;
//   align-self: center;
//   margin: 1em;
//   font-family: "Montserrat", sans-serif;
// `;

// const HighlitedLink = styled(Link)`
//   background: gold;
//   border-radius: 2.1em;
// `;

// const Logo = styled.h1`
//   font-family: "Merriweather", serif;
//   margin: 0;
// `;

export const NavBar = () => {
  return (
    <nav>
      <div>NavBar</div>
    </nav>
  );
  // return (
  //   <nav>
  //     <CheckboxMenu id="checkbox-menu" type="checkbox" />

  //     <Header>
  //       <HeaderStart>
  //         <Icon className="material-icons md-36" for="checkbox-menu">
  //           menu
  //         </Icon>
  //         <Link href="#">HOMES</Link>
  //         <Link href="#">HOSTS</Link>
  //       </HeaderStart>
  //       <Logo>PLUM GUIDE</Logo>
  //       <HeaderEnd>
  //         <Link href="#">Login</Link>
  //         <HighlitedLink href="#">Need Help</HighlitedLink>
  //         <Icon className="material-icons md-36">search</Icon>
  //       </HeaderEnd>
  //     </Header>

  //     <NavBarMenu>
  //       <li>
  //         <NavBarMenuLink href="#">HOMES</NavBarMenuLink>
  //       </li>
  //       <li>
  //         <NavBarMenuLink href="#">HOSTS</NavBarMenuLink>
  //       </li>
  //       <li>
  //         <NavBarMenuLink href="#">Login</NavBarMenuLink>
  //       </li>
  //       <li>
  //         <NavBarMenuLink href="#">Need Help</NavBarMenuLink>
  //       </li>
  //     </NavBarMenu>
  //   </nav>
  // );
};

export default NavBar;
