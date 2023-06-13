import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Products</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>Home</span>
            <span>About</span>
            <span>Stores</span>
            <span>Contacts</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quam earum sed laboriosam amet nesciunt placeat deleniti. Ipsa sed
              iusto praesentium totam voluptas rem illum rerum, quasi sequi,
              quidem iste.
            </p>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quam earum sed laboriosam amet nesciunt placeat deleniti. Ipsa sed
              iusto praesentium totam voluptas rem illum rerum, quasi sequi,
              quidem iste.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="">MYSTORE</p>
            <span>Copyright © All Rightes reserved</span>
          </div>
          <div className="right">
            <img src="/image/american-express.png" alt="" />
            <img src="/image/paypal.png" alt="" />
            <img src="/image/logo-mastercard.svg" alt="" />
            <img src="/image/visa.png" alt="" />
            <img src="/image/discover.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
