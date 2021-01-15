import React from "react";
import "../components/Info.css";
import "../components/Media.css";
import APP from "../images/APP.PNG";
import GOO from "../images/GOO.PNG";
import insta from "../images/instagram.png";
import Vector7 from "../images/Vector (7).png";
import Vector8 from "../images/Vector (8).png";
import Vector9 from "../images/Vector (9).png";
import Vector12 from "../images/Vector (12).png";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// CARD
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const eventsData = [
    {
      id: 0,
      avatar: "R",
      paragraph: "SOME TEXT",
      image:
        "https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg",
      title: "Design & React Meetup",
      location: "Aug 16, 6:30PM @ Seattle, WA",
      description:
        "Designers react to JavaScript. Join us in this meetup where designers gather to share newbie React knowledge."
    },
    {
      id: 1,
      avatar: "V",
      paragraph: "SOME TEXT1",
      image: "https://farm8.staticflickr.com/7007/6392178127_177ea51b56_b.jpg",
      title: "Design & React Meetup",
      location: "Aug 19, 7:00PM @ Tallin, Estonia",
      description: "The meetup goes to Estonia."
    },
    {
      id: 2,
      avatar: "S",
      paragraph: "SOME TEXT2",
      image:
        "http://rubbishisgold.com/wp-content/uploads/2018/06/landscape-companies-vancouver-wa-luxury-tourism-vancouver-official-source-of-tourist-information-things-of-landscape-companies-vancouver-wa.jpg",
      title: "Design & React Meetup",
      location: "Aug 22, 6:00PM @ Vancouver, BC",
      description: "Join us to learn and share newbie React knowledge."
    },
    {
      id: 3,
      avatar: "O",
      paragraph: "SOME TEXT3",
      image: null,
      title: "A card with no image",
      location: null,
      description:
        "Quick example of this component with no image and no location label."
    },
    {
      id: 4,
      avatar: "R",
      paragraph: "SOME TEXT4",
      image: "https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg",
      title: "Design & React Meetup",
      location: "Aug 24, 6:00PM @ Osaka, JP",
      description:
        "A meetup to learn and share newbie React knowledge, focused on UI and motion."
    },
    {
      id: 5,
      avatar: "M",
      paragraph: "SOME TEXT5",
      image: null,
      title: "Another card with no image",
      location: null,
      description:
        "Quick example of this component with no image and no location label."
    }
];

export default function Info({ id, image, title, location, description, avatar, paragraph }) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const eventsList = eventsData.map(({ id, image, title, location, description, avatar, paragraph }, index) => (
        <Card
          key={index}
          id={id}
          avatar={avatar}
          paragraph={paragraph}
          image={image}  
          title={title} 
          location={location}
          description={description}
          className={classes.root}
          >
            <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {avatar}
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        {/* <MoreVertIcon /> */}
                                    </IconButton>
                                    }
                                    title={title}
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={image}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        {/* <FavoriteIcon /> */}
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        {/* <ShareIcon /> */}
                                    </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        >
                                        {/* <ExpandMoreIcon /> */}
                                    </IconButton>
                                 </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            {paragraph}
                                        </Typography>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                        </Typography>
                                        <Typography paragraph>
                                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                            minutes more. (Discard any mussels that don’t open.)
                                        </Typography>
                                        <Typography>
                                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                                        </Typography>
                                        </CardContent>
                                    </Collapse>             
          </Card>
      ));

    return(
        <div className="Info">
          <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {eventsList}
                    </div>
                    <div className="col-md-4">
                        {eventsList}
                    </div>
                    <div className="col-md-4">
                        {eventsList}
                    </div>
                </div>
                <div className="button_block mt-4">
                    <button className="button_more_card">Show more cards</button>
                </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                    <h4>О компании</h4>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <h4 className="foot_text">О компании</h4>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                </div>
                <div className="col-md-3">
                    <h4>О компании</h4>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <h4 className="foot_text">О компании</h4>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                </div>
                <div className="col-md-3">
                    <h4>О компании</h4>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <h4 className="foot_text">Приложение</h4>
                    <p>
                    <img
                        className="APP"
                        src={APP}
                        alt=""
                    />
                    </p>
                    <img
                        className="GOO"
                        src={GOO}
                        alt=""
                    />
                </div>
                <div class="col-md-3">
                    <h4>Мы в соц. сетях</h4>
                    <div className="block_fotos">
                        <img className="Vector_7" src={Vector7} alt="" />
                        <img className="img_f" src={Vector8} alt="" />
                        <img className="img_f" src={Vector9} alt="" />
                        <img className="img_f" src={insta} alt="" />
                    </div>
                    <h4 className="subscribe">Подписка на новости</h4>
                    <p className="text_take">
                        Получайте все самые последние новости о мероприятиях в Экспофоруме.
                    </p>
                    <div className="input-group input-group-sm but_inp" >
                        <input
                            type="text"
                            className="form-control fix-rounded-right"
                            placeholder="Введите ваш e-mail"
                            required
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <img src={Vector12} alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
}