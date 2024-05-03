import { Carousel, CarouselItem } from "react-bootstrap"

let Caro=()=>
{
    return <div className="" >
       
        <Carousel fade>
            <CarouselItem>
            <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <h1 className="text-s">WE PROVIDE CUSOMIZE DIET PLAN FOR WEIGHT LOSS,MUSCLE GAIN & FOR MAINTAINING HEALTHY LIFE STYLE</h1>
                </div>
                <div className="col-6">
                <img width="500" height="450" src="https://www.asknestle.in/sites/default/files/2022-11/Gym-Diet-Plan-640x380.jpg" />
            </div>
            </div>
        </div>
            </CarouselItem>
            <CarouselItem>
            <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <h1 className="text-s">GET YOUR CUSTOMIZED WORKOUT PLAN AT VERY AFFORDABLE PRICE.
                A PROPER WORKOUT PLAN IS VERY IMPORTANT TO ACHIEVE YOUR FITNESS GOAL</h1>
                </div>
                <div className="col-6">
                <img width="500" height="450" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/02/female-dumbbells-1296x728-header-1296x729.jpg?w=1155&h=2268" />
            </div>
            </div>
        </div>
            </CarouselItem>
            <CarouselItem>
            <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <h1 className="mt-5 text-s">OFFER IS GOING ON.
            GET 30% OFF ON EVERY PRODUCTS</h1>
                </div>
                <div className="col-6">
                <img width="500" height="450" src="https://www.breakthroughmarketingsecrets.com/wp-content/uploads/2016/11/special-offer.jpg" />
            </div>
            </div>
        </div>
            </CarouselItem>
        </Carousel>
 
    </div>
}
export default Caro