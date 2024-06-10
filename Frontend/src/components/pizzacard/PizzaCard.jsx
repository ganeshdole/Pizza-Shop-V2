import React from 'react';
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SERVER_URL } from '../../services/utils';

const PizzaCard = ({ pizza }) => {
    const { name, details, image, price, type } = pizza;
    return (
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                    <img src={SERVER_URL + "/" + image} loading="lazy" alt={name} />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="body-xs">Pizza</Typography>
                <Link
                    href="#product-card"
                    fontWeight="md"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    endDecorator={<ArrowOutwardIcon />}
                >
                    {name}
                </Link>
                <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: "xl" }}
                    endDecorator={
                        <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            style={{ backgroundColor: type === 'Veg' ? '#34d399' : '#EF4444' }}
                        >
                            {type}
                        </Chip>

                    }
                >
                    ₹{price}
                </Typography>
                <Typography level="body-sm">{details}</Typography>
            </CardContent >
            <CardOverflow>
                <Button
                    variant="solid"
                    color="danger"
                    size="lg"
                >
                    Add to Cart
                </Button>
            </CardOverflow>
        </Card >
    );
}

export default PizzaCard;
