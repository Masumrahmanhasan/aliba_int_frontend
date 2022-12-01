import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadCategories } from "../../store/actions/InitAction";
// import _ from "lodash";
import { loadAsset } from "../../utils/Helpers";
import CopyRight from "./includes/CopyRight";
import StickyFooter from "./includes/StickyFooter";
import StickyFooterManage from "./includes/StickyFooterManage";
import { FaFacebook } from "react-icons/fa";
import Facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import likedin from "../../assets/images/likedin.png";
import youtube from "../../assets/images/youtube.png";
import gPlay from "../../assets/images/playstore.png";
import aStore from "../../assets/images/applestore.png";
import fatolg from "../../assets/images/fatolg.png";
import fim1 from "../../assets/images/fim1.png";
import fim2 from "../../assets/images/fim2.png";
import fim3 from "../../assets/images/fim3.png";
import fim4 from "../../assets/images/fim4.png";
import _ from "lodash";
import { getFooterBrand } from "../../utils/Services";

const Footer = (props) => {
  const { general } = props;
  const [loading, setLoading] = useState(true);
  const [footerBrandImage, setFooterBrandImage] = useState({});

  useEffect(() => {
    foterBrand();
  }, []);

  const foterBrand = async () => {
    const response = await getFooterBrand("card_two");
    if (!_.isEmpty(response)) {
      setFooterBrandImage(response);
    }
    setLoading(false);
  };

  return (
    <footer className='footer footer-2' style={{ backgroundColor: "#fff" }}>
      <div className='container'>
        <hr className='mt-0 mb-0' style={{ borderColor: "#f4d682", borderWidth: "3px" }} />
      </div>
      <div className='footer-middle border-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-lg-2-5cols'>
              <div className='widget widget-about mb-4'>
                <Link to='/'>
                  <img
                    src={loadAsset(general.frontend_logo_footer)}
                    className='footer-logo'
                    alt={general.site_name}
                  />
                </Link>
                <div>
                  <br />
                  <br />
                  <ul className='contact-list'>
                    <li>
                      <i className='icon-map-marker' />
                      <span className='bold'>HEAD OFFICE:</span>
                      <br />
                      <span>{general.office_address}</span>
                    </li>
                    <li>
                      <i className='icon-envelope' />
                      <span className='bold'>EMAIL:</span>
                      <br />
                      <a href={`mailto:${general.office_email}`}>{general.office_email}</a>
                    </li>
                    <li>
                      <i className='icon-phone' />
                      <span className='bold'>PHONE:</span>
                      <br />
                      <a href={`tel:${general.office_phone}`}>{general.office_phone}</a>
                    </li>
                  </ul>
                </div>
                {/* End .widget-about-info */}
              </div>
              {/* End .widget about-widget */}
            </div>
            {/* End .col-sm-4 col-lg-3 */}
            <div className='col-6 col-lg-5cols'>
              <div className='widget mb-4'>
                <h4 className='widget-title uppercase'>Customer</h4>
                {/* End .widget-title */}
                <ul className='widget-list'>
                  <li>
                    <Link to='/login'>Sign In</Link>
                  </li>
                  <li>
                    <Link to='/special-offer'>Special Offer</Link>
                  </li>
                  <li>
                    <Link to='/checkout'>View Cart</Link>
                  </li>
                  <li>
                    <Link to='/dashboard/orders'>Track My Order</Link>
                  </li>
                  <li>
                    <Link to='/faq'>Faq</Link>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-64 col-lg-3 */}
            {/* End .col-sm-12 col-lg-3 */}
            <div className='col-6 col-lg-5cols'>
              <div className='widget mb-4'>
                <h4 className='widget-title uppercase'>Information</h4>
                {/* End .widget-title */}
                <ul className='widget-list'>
                  <li>
                    <Link to='/pages/about-us'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact us</Link>
                  </li>
                  <li>
                    <Link to='/pages/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='/pages/terms-and-conditions'>Terms and conditions</Link>
                  </li>
                  <li>
                    <Link to='/pages/return-and-refund-policy'>Return and Refund Policy</Link>
                  </li>
                  <li>
                    <Link to='/pages/secured-payment'>Secured Payment</Link>
                  </li>
                  <li>
                    <Link to='/pages/transparency'>Transparency</Link>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-4 col-lg-3 */}
            <div className='col-6 col-lg-5cols'>
              <div className='widget mb-4'>
                <h4 className='widget-title uppercase'>Mobile Apps</h4>
                <ul className='widget-list'>
                  <li>
                    <a href='#' target='_blank'>
                      <img src={gPlay} alt='Google Play' style={{ width: "126px", marginBottom: "0.5rem" }} />
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank'>
                      <img src={aStore} alt='App Store' style={{ width: "126px", marginBottom: "2rem" }} />
                    </a>
                  </li>
                </ul>
                <h4 className='widget-title uppercase'>Social Links</h4>
                <div className='social-icons'>
                  {general.facebook && (
                    <a
                      href={general.facebook}
                      className='f-social-icon '
                      title='Facebook'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={Facebook} alt='Facebook' />
                    </a>
                  )}

                  {general.instagram && (
                    <a
                      href={general.instagram}
                      className='f-social-icon '
                      title='Instagram'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={instagram} alt='instagram' />
                    </a>
                  )}
                  {general.youtube && (
                    <a
                      href={general.youtube}
                      className='f-social-icon '
                      title='Youtube'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={youtube} alt='youtube' />
                    </a>
                  )}

                  {general.twitter && (
                    <a
                      href={general.twitter}
                      className='f-social-icon '
                      title='Twitter'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={likedin} alt='linkedin' />
                    </a>
                  )}
                </div>
                {/* <ul className='widget-list'></ul> */}
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
          </div>
          {/* End .row */}
          <div className='d-flex justify-content-center'>
            <img src={loadAsset(footerBrandImage.brand_one)} alt='' />
          </div>
          <div className='d-flex justify-content-center'>
            <div className='sisters'>
              <a href='/'>
                <img src={loadAsset(footerBrandImage.brand_two)} alt='' />
              </a>
              <a href='/'>
                <img src={loadAsset(footerBrandImage.brand_three)} alt='' />
              </a>
              <a href='/'>
                <img src={loadAsset(footerBrandImage.brand_four)} alt='' />
              </a>

              <a href='/'>
                <img src={loadAsset(footerBrandImage.brand_five)} alt='' />
              </a>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>

      <StickyFooterManage general={general} />
    </footer>
  );
};

const mapStateToProps = (state) => ({
  general: JSON.parse(state.INIT.general),
});

export default connect(mapStateToProps, { loadCategories })(withRouter(Footer));
