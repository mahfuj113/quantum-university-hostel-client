import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Input,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <div></div>
        <div>
          <Card style={{ padding: "20px 5px", backgroundColor: "LightGreen" }}>
            <Typography
              style={{
                textAlign: "center",
              }}
              gutterBottom
              variant="h5"
            >
              Contact Us
            </Typography>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    placeholder="Enter First Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    placeholder="Enter Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    label="Your Email"
                    placeholder="Enter Your Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    multiline
                    rows={4}
                    type="text"
                    label="How we help you"
                    placeholder="Enter Your Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
