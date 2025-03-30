import "./Allfile.css";
export default function About()
{
    return(
     <>
      <section class="about" id="about">
        <div class="row">
            <div class="image">
                <img src="image/img_2.png" alt=""/>
            </div>
            <div class="content">
                <h3>The flavor you need, the consistency you want—ice cream!</h3>
                <p>The flavor you need, the consistency you want" when talking about ice cream means you can choose the exact</p>
                <p>flavor you like, while also getting the desired texture or consistency; whether it be creamy, soft-serve, hard packed, or something else entirely depending on your preference.</p>
                <a href="" class="btn">learn more</a>
            </div>
        </div>
        <div class="box-container">
            <div class="box">
                <img src="image/group.png" alt=""/>
                <h1>Cafe & Shop</h1>
                <p>You can't buy happiness,but you can buy Ice-Cream and that is pretty much the same thing.</p>
                <a href="" class="btn">visit our shop</a>
            </div>
            <div class="box">
                <img src="image/group1.png" alt=""/>
                <h1>Catering</h1>
                <p>You can't buy happiness,but you can buy Ice-Cream and that is pretty much the same thing.</p>
                <a href="" class="btn">order now</a>
            </div>
            <div class="box">
                <img src="image/group2.png" alt=""/>
                <h1>Special Events</h1>
                <p>You can't buy happiness,but you can buy Ice-Cream and that is pretty much the same thing.</p>
                <a href="" class="btn">book now</a>
            </div>
        </div>
    </section>
    <div class="container">
        <img src="image/shap.png" alt=""/>
        <div class="detail">
            <i class='bx bxs-popsicle'></i>
            <h1>The perfect blend <br/> of summer and fun</h1>
            <p>A refreshing coolness, mint chocolate chip is perfect for hot summer days<br/>The combination of minty freshness and rich chocolate.</p>
            <a href="" class="btn">discover more</a>
        </div>
    </div>
     </>
    );
}