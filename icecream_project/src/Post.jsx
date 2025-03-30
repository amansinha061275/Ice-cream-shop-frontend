import "./Allfile.css";
export default function Post()
{
    return(
    <>
     <section class="post" id="blog">
        <h1 class="heading"> <i class="fas fa-quote-left"></i> our latest post <i class="fas fa-quote-right"></i></h1>
        <div class="box-container">
            <div class="box">
                <img src="image/blog.jpg" alt=""/>
                <div class="content">
                    <span><i class='bx bxs-calendar-alt' ></i>Dec 2, 2024</span>
                    <h3>post title goes here</h3>
                    <p>Every single flavour was good in both taste and the feel. Chocobar was really reserved for a special occasion in those days.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
            <div class="box">
                <img src="image/blog0.jpg" alt=""/>
                <div class="content">
                    <span><i class='bx bxs-calendar-alt' ></i>Dec 2, 2024</span>
                    <h3>post title goes here</h3>
                    <p>Every single flavour was good in both taste and the feel. Chocobar was really reserved for a special occasion in those days.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
            <div class="box">
                <img src="image/blog1.jpg" alt=""/>
                <div class="content">
                    <span><i class='bx bxs-calendar-alt' ></i>Dec 2, 2024</span>
                    <h3>post title goes here</h3>
                    <p>Every single flavour was good in both taste and the feel. Chocobar was really reserved for a special occasion in those days.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}