import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "rgba(207,211,222,255)",
        p: {
          xs: 4,
          md: 10,
        },
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: {
          xs: "12px",
          md: "14px",
        },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="h5">About Us</FooterTitle>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            blanditiis sunt voluptatibus numquam error ipsa quasi nulla tempora
            earum est asperiores expedita, molestiae reiciendis libero ea alias
            deserunt quis eligendi?
          </Typography>
          <Box
            sx={{
              marginTop: 4,
            }}
          >
            <FacebookIcon
              sx={{
                mr: 1,
              }}
            />
            <TwitterIcon
              sx={{
                mr: 1,
              }}
            />
            <InstagramIcon
              sx={{
                mr: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Orders
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Contact
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                My Account
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Werk</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                News
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Investor Relations
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Affiliate Program
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Partner with Werk
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Developer
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
