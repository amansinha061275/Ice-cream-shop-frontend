import "./Allfile.css";
export default function Contact()
{
    return(
     <>
       <section class="faq" id="faq">
        <h1 class="heading">Frequently Asked Questions</h1>
        <div class="box-container">
            <div class="img-box">
                <div class="overlay"></div>
                <img src="image/1.jpg" alt=""/>
                <div class="detail">
                    <i class='bx bx-headphone' ></i><br/>
                    <span>NEED MORE HELP?</span>
                    <h2>888-9999-123</h2>
                    <a href="" class="btn">call us</a>
                </div>
            </div>
            <div class="accordion">
                <div class="contentBox">
                    <div class="label">What are your most popular flavors?</div>
                    <div class="content">
                        <p>vanilla, chocolate, strawberry, mango, and maybe a unique flavor 
                            that stands out depending on your product category</p>
                    </div>
                </div>
                <div class="contentBox">
                    <div class="label">Can i try a sample?</div>
                    <div class="content">
                        <p>Yes, you can usually try a sample of ice-cream at most ice cream shops.</p>
                    </div>
                </div>
                <div class="contentBox">
                    <div class="label">What modes of payment are acceptable at  ice-cream?</div>
                    <div class="content">
                        <p>We accept payments through Cash/Credit Card/ Debit Card/ Paytm/ PhonePe or via /Airtel Money or
                            any
                            other UPI Payment
                            methods.
                        </p>
                    </div>
                </div>
                <div class="contentBox">
                    <div class="label">what is your flavor of the month?</div>
                    <div class="content">
                        <p>my favorite flavor are Vanilla,Cookie dough,mint chocolate chip,
                            peanut butter cup.
                        </p>
                    </div>
                </div>
                <div class="contentBox">
                    <div class="label">Do you offer delivery?</div>
                    <div class="content">
                        <p>no offer this month</p>
                    </div>
                </div>
                <div class="contentBox">
                    <div class="label">What is ice cream made of?</div>
                    <div class="content">
                        <p>Ice cream is made from (dairy) milk, sugar and cream. These are the primary ingredients, 
                            but many varieties also contain 
                            additions such as cocoa, egg yolk, vanilla and custard powder.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     </>
    );
}