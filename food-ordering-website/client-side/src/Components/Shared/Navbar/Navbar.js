import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";

// const settings = [
//   { name: "Profile", to: "/profile", current: false },
//   { name: "Account", to: "/account", current: false },
//   { name: "Dashboard", to: "/dashboard", current: false },
// ];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ background: '#000000', }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           {/* Logo for mobile View */}
           <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            FoodieZone
          </Typography>
        
          {/* Navlinks for Mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/"
              >
                <MenuItem key="Home">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Home
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/about"
              >
                <MenuItem key="About">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    About
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/allFood"
              >
                <MenuItem key="AllFood">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Menu
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/pizzaBuilder"
              >
                <MenuItem key="PizzaBuilder">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Pizza Builder
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/gallery"
              >
                <MenuItem key="Gallery">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Gallery
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/blog"
              >
                <MenuItem key="Blog">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Blog
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/reservation"
              >
                <MenuItem key="Reservation">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Reservation
                  </Typography>
                </MenuItem>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/contact"
              >
                <MenuItem key="Contact">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    Contact
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/cart"
              >
                <MenuItem key="Cart">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    <ShoppingCartIcon />
                  </Typography>
                </MenuItem>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/chat"
              >
                <MenuItem key="Chat">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    <ChatIcon />
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/notification"
              >
                <MenuItem key="Notification">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    <NotificationsIcon />
                  </Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>

            {/* Logo for Desktop view */}
            <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mt: 0,
              color: "#C39864",
              fontFamily: "cursive",
              display: { xs: "none", md: "flex", fontWeight: "bold" },
            }}
          >
            FoodieZone
          </Typography>


          {/* Navlinks for Desktop view */}
          <Box
            sx={{ flexGrow: 1, ml: 5, display: { xs: "none", md: "flex" } }}
          >
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              <MenuItem key="Home">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  HOME
                </Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <MenuItem key="About">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  ABOUT US
                </Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/allFood"
            >
              <MenuItem key="AllFood">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  MENU
                </Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/pizzaBuilder"
            >
              <MenuItem key="Pizza">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  SPECIAL PIZZA
                </Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/gallery"
            >
              <MenuItem key="Gallery">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  GALLERY
                </Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/blog"
            >
              <MenuItem key="Blog">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1, fontSize: 16
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  BLOG
                </Typography>
              </MenuItem>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/reservation"
            >
              <MenuItem key="Reservation">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1, fontSize: 16
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  RESERVATION
                </Typography>
              </MenuItem>
            </NavLink>
           
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              <MenuItem key="Contact">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  CONTACT US
                </Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <MenuItem key="Login">
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    mt: 1,
                    fontSize: 16,
                  }}
                  variant="h6"
                  textAlign="center"
                >
                  LOGIN
                </Typography>
              </MenuItem>
            </NavLink>
            <Box
              sx={{
                marginLeft: "auto",
                mr: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/cart"
              >
                <MenuItem key="Cart">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    <ShoppingCartIcon />
                  </Typography>
                </MenuItem>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/chat"
              >
                <MenuItem key="Chat">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    <ChatIcon />
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/notification"
              >
                <MenuItem key="Notification">
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 1,
                    }}
                    variant="h6"
                    textAlign="center"
                  >
                    <NotificationsIcon />
                  </Typography>
                </MenuItem>
              </NavLink>
            </Box>
          </Box>

          {/* Profile,Account,Dashboard
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mt: 0 }}>
                <Avatar sx={{ width: "30px", height: "30px" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "47px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((item) => (
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={item.to}
                >
                  <MenuItem key={item.name}>
                    <Typography
                      onClick={handleCloseNavMenu}
                      sx={{
                        m: 1,
                      }}
                      variant="h6"
                      textAlign="center"
                    >
                      {item.name}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
