import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from "../styles/signup.module.css";
import BrandLogo from "./image/brandlogo.png";
import Box from '@mui/material/Box';
import CoverImage from "./image/coverImage.png";

export default function MediaControlCard() {
    const theme = useTheme();

    return (
        <div className='container'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Card className={style.card} sx={{ display: 'flex', }}>
                    <Typography component="div" variant="h5">
                        Brand Logo*
                    </Typography>

                    <CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 120 }}
                            image={BrandLogo.src}
                            alt="Brand Logo"
                        />
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <p className={style.level}>Recommended image size 150px X 150px and max 150kb</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={style.card} sx={{ display: 'flex', }}>
                    <Typography component="div" variant="h5">
                        Cover Image
                    </Typography>

                    <CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 200 }}
                            image={CoverImage.src}
                            alt="Brand Logo"
                        />
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <p className={style.level}>Recommended image size 500px X 263px and max 300kb</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>

    );
}
