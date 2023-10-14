import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Typography, Button, Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import YourProfileImage from "../assets/av.jpg";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import TableViewIcon from "@mui/icons-material/TableView";
import PortraitIcon from "@mui/icons-material/Portrait";
import { ImageList, ImageListItem } from "@mui/material";
import ProImg1 from "../assets/ExplorePics/explorePic1.avif";
import ProImg2 from "../assets/ExplorePics/explorePic2.avif";
import ProImg4 from "../assets/ExplorePics/explorePic3.avif";

const itemData = [{ image: ProImg1 }, { image: ProImg2 }, { image: ProImg4 }];
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Profile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box style={{ width: "900px", marginLeft: "400px" }}>
            <Box style={{ display: "flex" }}>
                <Box style={{ width: "130px" }}>
                    <Avatar
                        style={{
                            width: "130px",
                            height: "130px",
                            borderRadius: "50%",
                            marginTop: "25px",
                            marginLeft: "50px",
                        }}
                        src={YourProfileImage}
                        alt="MyPhoto.jpg"
                    />
                </Box>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "500px",
                            marginTop: "30px",
                            marginLeft: "110px",
                        }}
                    >
                        <Typography
                            component="div"
                            variant="h5"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "900",
                                fontSize: "20px",
                            }}
                        >
                            taimaabutaleb{" "}
                        </Typography>

                        <Button
                            variant="contained"
                            style={{
                                fontSize: "14px",
                                borderRadius: "10px",
                                backgroundColor: "white",
                                color: "black",
                            }}
                        >
                            Edit Profile
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                fontSize: "14px",
                                borderRadius: "10px",
                                backgroundColor: "white",
                                color: "black",
                            }}
                        >
                            View actions
                        </Button>

                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                    </Box>

                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "470px",
                            marginLeft: "120px",
                        }}
                    >
                        <Typography
                            component="div"
                            variant="button"
                            textTransform="none"
                            fontSize="1.2rem"
                        >
                            {3} posts{" "}
                        </Typography>
                        <Typography
                            component="div"
                            variant="button"
                            textTransform="none"
                            fontSize="1.2rem"
                        >
                            {222} followers
                        </Typography>
                        <Typography
                            component="div"
                            variant="button"
                            textTransform="none"
                            fontSize="1.2rem"
                        >
                            {100} following
                        </Typography>
                    </Box>

                    <Box style={{ marginLeft: "120px" }}>
                        <Typography component="div" variant="button">
                            taima
                        </Typography>
                        <Typography component="div" variant="button">
                            Jenin
                        </Typography>
                        <Typography component="div" variant="button">
                            I am a front-end developer{" "}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box style={{ width: "100%", marginTop: "1rem" , position:"relative" }}>
                <div>
                    <div
                        style={{
                            display: "flex",
                            width: "100px",
                            marginRight: "0px",
                            position: "absolute",
                            left: "260px",
                        }}
                    >
                        <TableViewIcon
                            style={{
                                marginTop: "15px",
                                marginRight: "-10px",
                                fontSize: "15px",
                                color: "#969696",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "100px",
                            marginRight: "-50px",
                            position: "absolute",
                            left: "407px",
                        }}
                    >
                        <BookmarkBorderOutlinedIcon
                            style={{
                                marginTop: "15px",
                                marginRight: "-100px",
                                fontSize: "15px",
                                color: "#969696",
                            }}
                        />{" "}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "100px",
                            marginRight: "0px",
                            position: "absolute",
                            left: "545px",
                        }}
                    >
                        <PortraitIcon
                            style={{
                                marginTop: "15px",
                                marginRight: "-10px",
                                fontSize: "15px",
                                color: "#969696",
                            }}
                        />
                    </div>
                </div>
                <Box
                    sx={{
                        borderTop: 1,
                        borderColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="white"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#ffff",
                                top: "0px",
                            },
                        }}
                    >

                        <Tab
                            label="POSTS"
                            {...a11yProps(0)}
                            style={{ marginRight: "50px" }}
                        />
                        <Tab
                            label="REELS"
                            {...a11yProps(1)}
                            style={{ marginRight: "50px" }}
                        />
                        <Tab label="TAGEG" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <ImageList
                        style={{
                            width: " 800px",
                            height: "550px",
                            marginLeft: "20px",
                            overflow: "hidden",
                        }}
                        cols={3}
                        rowHeight={164}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.image}>
                                <img
                                    src={item.image}
                                    alt={"item.title"}
                                    loading="lazy"
                                    style={{ width: "250px", height: "250px" }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}></CustomTabPanel>

                <CustomTabPanel value={value} index={2}></CustomTabPanel>
            </Box>
        </Box>
    );
}
